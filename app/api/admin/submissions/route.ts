import { NextResponse } from "next/server"
import { getAllSubmissions } from "@/lib/database"

export async function GET() {
  try {
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
