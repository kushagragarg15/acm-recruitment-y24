import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

// In production, this should be in environment variables and properly hashed
const ADMIN_USERNAME = "acm-admin"
const ADMIN_PASSWORD_HASH = "kushagragarg" // In production, use bcrypt hash

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Validate credentials (in production, compare with hashed password)
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD_HASH) {
      // Create a simple session token (in production, use JWT or proper session management)
      const sessionToken = Buffer.from(`${username}:${Date.now()}`).toString('base64')
      
      // Set secure cookie
      const cookieStore = cookies()
      cookieStore.set('admin-session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 // 24 hours
      })

      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Authentication failed" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const cookieStore = cookies()
    const session = cookieStore.get('admin-session')
    
    if (session) {
      // In production, validate the session token properly
      return NextResponse.json({ authenticated: true })
    } else {
      return NextResponse.json({ authenticated: false })
    }
  } catch (error) {
    return NextResponse.json({ authenticated: false })
  }
}

export async function DELETE() {
  try {
    const cookieStore = cookies()
    cookieStore.delete('admin-session')
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false })
  }
}