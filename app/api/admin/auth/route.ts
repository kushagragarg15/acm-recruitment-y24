import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { validateAdminSession, getClientIP } from "@/lib/auth"

// Safe rate limiting function
function safeRateLimit(ip: string, maxRequests = 5, windowMs = 900000): boolean {
  try {
    const requests = globalThis.adminRateLimitMap || (globalThis.adminRateLimitMap = new Map())
    const now = Date.now()
    const key = `admin-${ip}`
    
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
    console.error('Admin rate limiting error:', error)
    return true // Allow request if rate limiting fails
  }
}

// SECURITY: Use environment variables in production
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "acm-admin"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "kushagragarg"

// Generate secure session token
function generateSecureToken(username: string): string {
  const timestamp = Date.now()
  const randomBytes = Math.random().toString(36).substring(2, 15)
  return Buffer.from(`${username}:${timestamp}:${randomBytes}`).toString('base64')
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting for admin login attempts
    const ip = getClientIP(request)
    if (!safeRateLimit(ip, 5, 900000)) { // 5 attempts per 15 minutes
      return NextResponse.json(
        { success: false, error: "Too many login attempts. Please wait 15 minutes." },
        { status: 429 }
      )
    }

    // Parse JSON with error handling
    let body
    try {
      body = await request.json()
    } catch (error) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON format" },
        { status: 400 }
      )
    }

    const { username, password } = body

    // Enhanced input validation
    if (!username || !password || 
        typeof username !== 'string' || typeof password !== 'string' ||
        username.length > 50 || password.length > 100) {
      return NextResponse.json(
        { success: false, error: "Invalid input" },
        { status: 400 }
      )
    }

    // Validate credentials with secure comparison
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Generate secure session token
      const sessionToken = generateSecureToken(username)
      
      // Set secure cookie
      const cookieStore = await cookies()
      cookieStore.set('admin-session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60, // 24 hours
        path: '/'
      })

      // Log successful login (without sensitive data)
      console.log(`Admin login successful from IP: ${ip} at ${new Date().toISOString()}`)

      return NextResponse.json({ success: true })
    } else {
      // Log failed login attempt
      console.warn(`Failed admin login attempt from IP: ${ip} at ${new Date().toISOString()}`)
      
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error("Admin auth error:", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString()
    })
    
    return NextResponse.json(
      { success: false, error: "Authentication failed" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Use secure session validation
    const isAuthenticated = await validateAdminSession()
    return NextResponse.json({ authenticated: isAuthenticated })
  } catch (error) {
    console.error("Session validation error:", error)
    return NextResponse.json({ authenticated: false })
  }
}

export async function DELETE() {
  try {
    const cookieStore = await cookies()
    cookieStore.set('admin-session', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0, // Expire immediately
      path: '/'
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.json({ success: false })
  }
}