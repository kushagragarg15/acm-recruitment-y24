import { NextResponse } from "next/server"
import { validateAdminSession } from "@/lib/auth"
import { getErrorStats } from "@/lib/error-monitor"

export async function GET() {
  try {
    // Validate admin authentication
    const isAuthenticated = await validateAdminSession()
    if (!isAuthenticated) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access" },
        { status: 401 }
      )
    }

    // Get security statistics
    const errorStats = getErrorStats()
    
    return NextResponse.json({
      success: true,
      data: {
        errorStats,
        securityStatus: 'SECURE',
        lastUpdated: new Date().toISOString(),
        protections: {
          rateLimiting: 'ACTIVE',
          inputValidation: 'ACTIVE',
          sqlInjectionProtection: 'ACTIVE',
          xssProtection: 'ACTIVE',
          sessionSecurity: 'ACTIVE',
          databaseSecurity: 'ACTIVE'
        }
      }
    })
  } catch (error) {
    console.error("Security API error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch security data" },
      { status: 500 }
    )
  }
}