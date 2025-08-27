import { NextResponse } from "next/server"
import { getAllSubmissions } from "@/lib/database"
import { validateAdminSession } from "@/lib/auth"

export async function GET() {
  try {
    // CRITICAL: Validate admin authentication
    const isAuthenticated = await validateAdminSession()
    if (!isAuthenticated) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized access",
        },
        { status: 401 },
      )
    }

    const submissions = await getAllSubmissions()

    return NextResponse.json({
      success: true,
      data: submissions,
    })
  } catch (error) {
    console.error("Admin API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch submissions",
      },
      { status: 500 },
    )
  }
}
