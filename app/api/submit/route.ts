import { type NextRequest, NextResponse } from "next/server"
import { createSubmission, type Submission } from "@/lib/database"
import { logSecurityEvent } from "@/lib/error-monitor"

// Safe rate limiting function with memory management
function safeRateLimit(ip: string, maxRequests = 5, windowMs = 300000): boolean {
  try {
    // Initialize rate limit map with cleanup
    if (!globalThis.rateLimitMap) {
      globalThis.rateLimitMap = new Map()
      // Clean up old entries every 5 minutes
      setInterval(() => {
        const now = Date.now()
        for (const [key, record] of globalThis.rateLimitMap.entries()) {
          if (now > record.resetTime) {
            globalThis.rateLimitMap.delete(key)
          }
        }
      }, 300000)
    }
    
    const requests = globalThis.rateLimitMap
    const now = Date.now()
    const key = ip.substring(0, 45) // Limit key length
    
    const record = requests.get(key)
    
    if (!record || now > record.resetTime) {
      requests.set(key, { count: 1, resetTime: now + windowMs })
      return true
    }
    
    if (record.count >= maxRequests) {
      return false
    }
    
    record.count++
    return true
  } catch (error) {
    console.error('Rate limiting error:', error)
    return true // Allow request if rate limiting fails
  }
}

// Enhanced input sanitization function
function sanitizeInput(input: any): string {
  if (typeof input !== 'string') return ''
  return input
    .trim()
    .replace(/[<>'"&]/g, '') // Remove potential XSS characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .substring(0, 1000) // Limit length
}

// Validate and sanitize roll number
function validateRollNumber(rollNumber: any): boolean {
  if (typeof rollNumber !== 'string') return false
  const sanitized = rollNumber.trim().toLowerCase()
  const rollNumberRegex = /^[0-9]{2}[a-zA-Z]{3}[0-9]{3}$/
  return rollNumberRegex.test(sanitized) && sanitized.length === 8
}

// Validate email
function validateEmail(email: any): boolean {
  if (typeof email !== 'string') return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 100 && email.length >= 5
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting - get IP from headers
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
    if (!safeRateLimit(ip, 3, 300000)) { // 3 requests per 5 minutes
      logSecurityEvent({
        type: 'RATE_LIMIT_EXCEEDED',
        message: 'Submission rate limit exceeded',
        ip,
        timestamp: new Date().toISOString(),
        endpoint: '/api/submit'
      })
      
      return NextResponse.json(
        {
          success: false,
          error: "Too many submission attempts. Please wait 5 minutes before trying again.",
        },
        { status: 429 },
      )
    }

    // Parse JSON with enhanced error handling and size limits
    let body
    try {
      // Check content length before parsing
      const contentLength = request.headers.get('content-length')
      if (contentLength && parseInt(contentLength) > 100000) { // 100KB limit
        return NextResponse.json(
          {
            success: false,
            error: "Request too large",
          },
          { status: 413 },
        )
      }

      body = await request.json()
      
      // Validate JSON depth to prevent deeply nested attacks
      const jsonString = JSON.stringify(body)
      const depth = (jsonString.match(/\{/g) || []).length
      if (depth > 10) {
        return NextResponse.json(
          {
            success: false,
            error: "Request structure too complex",
          },
          { status: 400 },
        )
      }
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid JSON format",
        },
        { status: 400 },
      )
    }

    // Validate body is an object
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request format",
        },
        { status: 400 },
      )
    }

    // Validate request size
    const bodyString = JSON.stringify(body)
    if (bodyString.length > 50000) { // 50KB limit
      return NextResponse.json(
        {
          success: false,
          error: "Request too large. Please reduce the amount of text in your submission.",
        },
        { status: 413 },
      )
    }

    // Validate required fields based on domains
    let requiredFields = ["name", "roll_number", "email", "phone", "domains"]
    
    // Validate domains array with strict validation
    if (!Array.isArray(body.domains) || body.domains.length === 0 || body.domains.length > 5) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid domain selection. Please select 1-5 valid domains.",
        },
        { status: 400 },
      )
    }

    // Validate each domain value
    const validDomains = ["web-development", "ai-ml", "generative-ai", "creative-domain", "competitive-programming"]
    const invalidDomains = body.domains.filter((domain: any) => 
      typeof domain !== 'string' || !validDomains.includes(domain)
    )
    
    if (invalidDomains.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid domain values detected.",
        },
        { status: 400 },
      )
    }

    // Check competitive programming requirements
    if (body.domains.includes("competitive-programming")) {
      if (!body.codeforces_profile?.trim() && !body.leetcode_profile?.trim()) {
        return NextResponse.json(
          {
            success: false,
            error: "At least one coding profile (Codeforces or LeetCode) is required for Competitive Programming domain",
          },
          { status: 400 },
        )
      }
    }

    // Check if non-competitive domains have project title
    const nonCPDomains = body.domains.filter((d: string) => d !== "competitive-programming")
    if (nonCPDomains.length > 0 && !body.project_title?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Project title is required for non-competitive programming domains",
        },
        { status: 400 },
      )
    }

    // Enhanced field validation with length limits
    const stringFields = ["name", "roll_number", "email", "phone"]
    const missingFields = stringFields.filter((field) => {
      const value = body[field]
      return !value || typeof value !== 'string' || !value.trim() || value.length > 200
    })

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 },
      )
    }

    // Enhanced validation with sanitization
    if (!validateEmail(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address",
        },
        { status: 400 },
      )
    }

    if (!validateRollNumber(body.roll_number)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid roll number (format: 23ucs123)",
        },
        { status: 400 },
      )
    }

    // Sanitize all string inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      roll_number: body.roll_number.trim().toLowerCase(),
      email: body.email.trim().toLowerCase(),
      phone: sanitizeInput(body.phone),
      project_title: body.project_title ? sanitizeInput(body.project_title) : '',
      project_description: body.project_description ? sanitizeInput(body.project_description) : null,
      project_link: body.project_link ? sanitizeInput(body.project_link) : null,
      github_link: body.github_link ? sanitizeInput(body.github_link) : null,
      additional_links: body.additional_links ? sanitizeInput(body.additional_links) : null,
      technologies_used: body.technologies_used ? sanitizeInput(body.technologies_used) : null,
      challenges_faced: body.challenges_faced ? sanitizeInput(body.challenges_faced) : null,
      learning_outcomes: body.learning_outcomes ? sanitizeInput(body.learning_outcomes) : null,
      additional_comments: body.additional_comments ? sanitizeInput(body.additional_comments) : null,
      codeforces_profile: body.codeforces_profile ? sanitizeInput(body.codeforces_profile) : null,
      codeforces_rating: body.codeforces_rating ? sanitizeInput(body.codeforces_rating) : null,
      leetcode_profile: body.leetcode_profile ? sanitizeInput(body.leetcode_profile) : null,
      leetcode_rating: body.leetcode_rating ? sanitizeInput(body.leetcode_rating) : null,
    }

    // Create submissions for each domain
    const results = []
    const errors = []

    for (const domain of body.domains) {
      // Additional domain validation
      if (typeof domain !== 'string' || domain.length > 50) {
        errors.push(`${domain}: Invalid domain format`)
        continue
      }

      // Validate task option if provided
      const taskOption = body.task_options?.[domain]
      if (taskOption && (typeof taskOption !== 'string' || taskOption.length > 200)) {
        errors.push(`${domain}: Invalid task option`)
        continue
      }

      const submission: Submission = {
        name: sanitizedData.name,
        roll_number: sanitizedData.roll_number,
        email: sanitizedData.email,
        phone: sanitizedData.phone,
        domain: domain,
        task_option: taskOption || null,
        project_title: domain === "competitive-programming" 
          ? "Competitive Programming Profile" 
          : sanitizedData.project_title,
        project_description: sanitizedData.project_description,
        project_link: sanitizedData.project_link,
        github_link: sanitizedData.github_link,
        additional_links: sanitizedData.additional_links,
        technologies_used: sanitizedData.technologies_used,
        challenges_faced: sanitizedData.challenges_faced,
        learning_outcomes: sanitizedData.learning_outcomes,
        additional_comments: sanitizedData.additional_comments,
        codeforces_profile: sanitizedData.codeforces_profile,
        codeforces_rating: sanitizedData.codeforces_rating,
        leetcode_profile: sanitizedData.leetcode_profile,
        leetcode_rating: sanitizedData.leetcode_rating,
      }

      // Save to database with timeout protection
      try {
        const result = await Promise.race([
          createSubmission(submission),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Database timeout')), 30000)
          )
        ]) as any
        
        if (result.success) {
          results.push(result.data)
        } else {
          errors.push(`${domain}: ${result.error}`)
        }
      } catch (error) {
        errors.push(`${domain}: Database error`)
        console.error(`Database error for domain ${domain}:`, error)
      }
    }

    if (results.length > 0) {
      const message = errors.length > 0 
        ? `Partial success: ${results.length} domain(s) submitted successfully. Errors: ${errors.join(', ')}`
        : `All ${results.length} domain(s) submitted successfully!`
      
      return NextResponse.json({
        success: true,
        message: message,
        data: results,
        errors: errors.length > 0 ? errors : undefined,
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          error: errors.length > 0 ? errors.join(', ') : "Failed to submit any domains",
        },
        { status: 400 },
      )
    }
  } catch (error) {
    // Enhanced error logging
    console.error("Submission API error:", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
      ip: (() => {
        try {
          const forwarded = request.headers.get('x-forwarded-for')
          return forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
        } catch {
          return 'unknown'
        }
      })()
    })
    
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again.",
      },
      { status: 500 },
    )
  }
}
