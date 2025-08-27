import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Security headers for all requests
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  // Stricter CSP policy
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
  )

  // Admin route protection
  if (request.nextUrl.pathname.startsWith('/admin') && 
      !request.nextUrl.pathname.startsWith('/admin/login')) {
    
    const session = request.cookies.get('admin-session')
    
    if (!session?.value) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // Basic session validation (full validation happens in API)
    try {
      const decoded = Buffer.from(session.value, 'base64').toString('utf-8')
      const parts = decoded.split(':')
      
      const expectedUsername = process.env.ADMIN_USERNAME || 'acm-admin'
      if (parts.length < 2 || parts[0] !== expectedUsername) {
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }
      
      // Check if session is expired (24 hours)
      const timestamp = parseInt(parts[1])
      const now = Date.now()
      const maxAge = 24 * 60 * 60 * 1000
      
      if (now - timestamp > maxAge) {
        const redirectResponse = NextResponse.redirect(new URL('/admin/login', request.url))
        redirectResponse.cookies.delete('admin-session')
        return redirectResponse
      }
    } catch {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}