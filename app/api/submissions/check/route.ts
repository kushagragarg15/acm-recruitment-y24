import { type NextRequest, NextResponse } from "next/server"
import { getSubmissionsByRollNumber } from "@/lib/database"
import { getClientIP } from "@/lib/auth"

// Rate limiting for submission checks with memory management
function checkRateLimit(ip: string): boolean {
  try {
    // Initialize check rate limit map with cleanup
    if (!globalThis.checkRateLimitMap) {
      globalThis.checkRateLimitMap = new Map()
      // Clean up old entries every 5 minutes
      setInterval(() => {
        const now = Date.now()
        for (const [key, record] of globalThis.checkRateLimitMap.entries()) {
          if (now > record.resetTime) {
            globalThis.checkRateLimitMap.delete(key)
          }
        }
      }, 300000)
    }
    
    const requests = globalThis.checkRateLimitMap
    const now = Date.now()
    const key = `check-${ip.substring(0, 45)}` // Limit key length
    
    const record = requests.get(key)
    
    if (!record || now > record.resetTime) {
      requests.set(key, { count: 1, resetTime: now + 60000 }) // 1 minute window
      return true
    }
    
    if (record.count >= 10) { // 10 checks per minute
      return false
    }
    
    record.count++
    return true
  } catch (error) {
    console.error('Check rate limiting error:', error)
    return true
  }
}

export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    const ip = getClientIP(request)
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a minute." },
        { status: 429 }
      )
    }

    const { searchParams } = new URL(request.url)
    const rollNumber = searchParams.get("roll_number")

    // Enhanced validation
    if (!rollNumber || typeof rollNumber !== 'string') {
      return NextResponse.json(
        { success: false, error: "Roll number is required" },
        { status: 400 }
      )
    }

    // Validate roll number format
    const sanitizedRollNumber = rollNumber.trim().toLowerCase()
    const rollNumberRegex = /^[0-9]{2}[a-zA-Z]{3}[0-9]{3}$/
    
    if (!rollNumberRegex.test(sanitizedRollNumber) || sanitizedRollNumber.length !== 8) {
      return NextResponse.json(
        { success: false, error: "Invalid roll number format" },
        { status: 400 }
      )
    }

    const submissions = await getSubmissionsByRollNumber(sanitizedRollNumber)
    const domains = submissions.map((sub: any) => sub.domain)

    return NextResponse.json({
      success: true,
      domains: domains,
      count: domains.length
    })
  } catch (error) {
    console.error("Check submissions API error:", error)
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    )
  }
}