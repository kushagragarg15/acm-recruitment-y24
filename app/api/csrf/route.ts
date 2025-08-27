import { NextResponse } from "next/server"
import { generateCSRFToken } from "@/lib/csrf"

export async function GET() {
  try {
    const token = generateCSRFToken()
    
    return NextResponse.json({
      success: true,
      token: token
    })
  } catch (error) {
    console.error("CSRF token generation error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to generate CSRF token" },
      { status: 500 }
    )
  }
}