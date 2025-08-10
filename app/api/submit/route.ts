import { type NextRequest, NextResponse } from "next/server"
import { createSubmission, type Submission } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["name", "roll_number", "email", "phone", "domain", "project_title"]
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

    // Create submission object
    const submission: Submission = {
      name: body.name.trim(),
      roll_number: body.roll_number.trim().toLowerCase(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      domain: body.domain,
      task_option: body.task_option || null,
      project_title: body.project_title.trim(),
      project_description: body.project_description?.trim() || null,
      project_link: body.project_link?.trim() || null,
      github_link: body.github_link?.trim() || null,
      additional_links: body.additional_links?.trim() || null,
      technologies_used: body.technologies_used?.trim() || null,
      challenges_faced: body.challenges_faced?.trim() || null,
      learning_outcomes: body.learning_outcomes?.trim() || null,
      additional_comments: body.additional_comments?.trim() || null,
    }

    // Save to database
    const result = await createSubmission(submission)

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Submission received successfully!",
        data: result.data,
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          error: result.error,
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
