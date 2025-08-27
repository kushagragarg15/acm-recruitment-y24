// Error monitoring and alerting system
interface ErrorEvent {
  type: string
  message: string
  ip: string
  timestamp: string
  userAgent?: string
  endpoint: string
}

// In-memory error tracking (in production, use external service)
const errorLog: ErrorEvent[] = []
const MAX_ERROR_LOG_SIZE = 1000

export function logSecurityEvent(event: ErrorEvent) {
  try {
    // Add to error log
    errorLog.push(event)
    
    // Keep log size manageable
    if (errorLog.length > MAX_ERROR_LOG_SIZE) {
      errorLog.splice(0, errorLog.length - MAX_ERROR_LOG_SIZE)
    }
    
    // Log to console for monitoring
    console.warn('Security Event:', event)
    
    // Check for attack patterns
    checkForAttackPatterns(event)
  } catch (error) {
    console.error('Error logging security event:', error)
  }
}

function checkForAttackPatterns(event: ErrorEvent) {
  const recentEvents = errorLog.filter(e => 
    e.ip === event.ip && 
    Date.now() - new Date(e.timestamp).getTime() < 300000 // Last 5 minutes
  )
  
  // Alert if too many errors from same IP
  if (recentEvents.length > 10) {
    console.error(`SECURITY ALERT: High error rate from IP ${event.ip}`)
  }
  
  // Alert on specific attack patterns
  if (event.message.includes('SQL') || 
      event.message.includes('script') || 
      event.message.includes('injection')) {
    console.error(`SECURITY ALERT: Potential attack detected from IP ${event.ip}`)
  }
}

export function getErrorStats() {
  const now = Date.now()
  const last24Hours = errorLog.filter(e => 
    now - new Date(e.timestamp).getTime() < 86400000
  )
  
  return {
    total24h: last24Hours.length,
    byType: last24Hours.reduce((acc, event) => {
      acc[event.type] = (acc[event.type] || 0) + 1
      return acc
    }, {} as Record<string, number>),
    topIPs: Object.entries(
      last24Hours.reduce((acc, event) => {
        acc[event.ip] = (acc[event.ip] || 0) + 1
        return acc
      }, {} as Record<string, number>)
    ).sort(([,a], [,b]) => b - a).slice(0, 10)
  }
}