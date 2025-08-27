// CSRF Protection utilities
import { NextRequest } from "next/server"

// Generate CSRF token
export function generateCSRFToken(): string {
  const timestamp = Date.now().toString()
  const randomBytes = Math.random().toString(36).substring(2, 15)
  return Buffer.from(`${timestamp}:${randomBytes}`).toString('base64')
}

// Validate CSRF token
export function validateCSRFToken(token: string, maxAge = 3600000): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8')
    const [timestamp] = decoded.split(':')
    
    const tokenTime = parseInt(timestamp)
    const now = Date.now()
    
    // Check if token is expired (1 hour default)
    return (now - tokenTime) <= maxAge
  } catch {
    return false
  }
}

// Extract CSRF token from request
export function getCSRFToken(request: NextRequest): string | null {
  // Check header first
  const headerToken = request.headers.get('x-csrf-token')
  if (headerToken) return headerToken
  
  // Check form data (for form submissions)
  return null
}

// Validate CSRF for request
export async function validateCSRFForRequest(request: NextRequest): Promise<boolean> {
  // Skip CSRF for GET requests
  if (request.method === 'GET') return true
  
  const token = getCSRFToken(request)
  if (!token) return false
  
  return validateCSRFToken(token)
}