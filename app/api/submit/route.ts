import { type NextRequest, NextResponse } from "next/server"
import { createSubmission, type Submission } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields based on domains
    let requiredFields = ["name", "roll_number", "email", "phone", "domains"]
    
    // Validate domains array
    if (!Array.isArray(body.domains) || body.domains.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "At least one domain must be selected",
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

    const missingFields = requiredFields.filter((field) => !body[field]?.trim())

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address",
        },
        { status: 400 },
      )
    }

    // Validate roll number format (basic validation)
    const rollNumberRegex = /^[0-9]{2}[a-zA-Z]{3}[0-9]{3}$/
    if (!rollNumberRegex.test(body.roll_number)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid roll number (format: 23ucs123)",
        },
        { status: 400 },
      )
    }

    // Create submissions for each domain
    const results = []
    const errors = []

    for (const domain of body.domains) {
      const submission: Submission = {
        name: body.name.trim(),
        roll_number: body.roll_number.trim().toLowerCase(),
        email: body.email.trim().toLowerCase(),
        phone: body.phone.trim(),
        domain: domain,
        task_option: body.task_options?.[domain] || null,
        project_title: domain === "competitive-programming" 
          ? "Competitive Programming Profile" 
          : (body.project_title?.trim() || ""),
        project_description: body.project_description?.trim() || null,
        project_link: body.project_link?.trim() || null,
        github_link: body.github_link?.trim() || null,
        additional_links: body.additional_links?.trim() || null,
        technologies_used: body.technologies_used?.trim() || null,
        challenges_faced: body.challenges_faced?.trim() || null,
        learning_outcomes: body.learning_outcomes?.trim() || null,
        additional_comments: body.additional_comments?.trim() || null,
        // Add competitive programming specific fields
        codeforces_profile: body.codeforces_profile?.trim() || null,
        codeforces_rating: body.codeforces_rating?.trim() || null,
        leetcode_profile: body.leetcode_profile?.trim() || null,
        leetcode_rating: body.leetcode_rating?.trim() || null,
      }

      // Save to database
      const result = await createSubmission(submission)
      
      if (result.success) {
        results.push(result.data)
      } else {
        errors.push(`${domain}: ${result.error}`)
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
    console.error("Submission API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again.",
      },
      { status: 500 },
    )
  }
}
