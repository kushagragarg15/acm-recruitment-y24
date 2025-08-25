import { type NextRequest, NextResponse } from "next/server"
import { getSubmissionsByRollNumber } from "@/lib/database"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const rollNumber = searchParams.get("roll_number")

    if (!rollNumber) {
      return NextResponse.json(
        { success: false, error: "Roll number is required" },
        { status: 400 }
      )
    }

    const submissions = await getSubmissionsByRollNumber(rollNumber.toLowerCase())
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