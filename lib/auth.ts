import { cookies } from "next/headers"
import { NextRequest } from "next/server"

// Secure session validation
export async function validateAdminSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin-session')
    
    if (!session?.value) {
      return false
    }

    // Decode and validate session token
    try {
      const decoded = Buffer.from(session.value, 'base64').toString('utf-8')
      const [username, timestamp] = decoded.split(':')
      
      // Check if session is expired (24 hours)
      const sessionTime = parseInt(timestamp)
      const now = Date.now()
      const maxAge = 24 * 60 * 60 * 1000 // 24 hours
      
      if (now - sessionTime > maxAge) {
        return false
      }
      
      // Validate username
      if (username !== 'acm-admin') {
        return false
      }
      
      return true
    } catch {
      return false
    }
  } catch {
    return false
  }
}

// Extract IP safely
export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  return forwarded ? forwarded.split(',')[0].trim() : 
         request.headers.get('x-real-ip') || 'unknown'
}