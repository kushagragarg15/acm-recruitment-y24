import { neon } from "@neondatabase/serverless"

// Validate database URL format for security
const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl || !databaseUrl.startsWith('postgresql://')) {
  throw new Error('Invalid or missing DATABASE_URL')
}

const sql = neon(databaseUrl)

export interface Submission {
  id?: number
  name: string
  roll_number: string
  email: string
  phone: string
  domain: string
  task_option?: string
  project_title?: string // Optional for competitive programming, required for others
  project_description?: string
  project_link?: string
  github_link?: string // Optional for creative domain
  additional_links?: string
  technologies_used?: string
  challenges_faced?: string
  learning_outcomes?: string
  additional_comments?: string
  submission_status?: string
  created_at?: string
  updated_at?: string
  // Competitive Programming specific fields
  codeforces_profile?: string
  codeforces_rating?: string
  leetcode_profile?: string
  leetcode_rating?: string
}

export async function createSubmission(submission: Submission) {
  try {
    // Additional security: Validate all required fields exist
    if (!submission.name || !submission.roll_number || !submission.email || !submission.domain) {
      return { success: false, error: "Missing required submission data" }
    }

    // Security: Limit submission rate per roll number (prevent spam)
    const recentSubmissions = await sql`
      SELECT COUNT(*) as count FROM submissions 
      WHERE roll_number = ${submission.roll_number} 
      AND created_at > NOW() - INTERVAL '1 hour'
    `
    
    if (recentSubmissions[0]?.count >= 10) {
      return { success: false, error: "Too many submissions in the last hour. Please wait." }
    }

    // Check if this roll number + domain combination already exists
    const existing = await sql`
      SELECT id FROM submissions 
      WHERE roll_number = ${submission.roll_number} AND domain = ${submission.domain}
    `
    
    if (existing.length > 0) {
      return { 
        success: false, 
        error: `You have already submitted for ${submission.domain} domain. Each domain can only be submitted once.` 
      }
    }

    const result = await sql`
      INSERT INTO submissions (
        name, roll_number, email, phone, domain, task_option,
        project_title, project_description, project_link, github_link,
        additional_links, technologies_used, challenges_faced,
        learning_outcomes, additional_comments, codeforces_profile,
        codeforces_rating, leetcode_profile, leetcode_rating
      ) VALUES (
        ${submission.name}, ${submission.roll_number}, ${submission.email},
        ${submission.phone}, ${submission.domain}, ${submission.task_option},
        ${submission.project_title}, ${submission.project_description},
        ${submission.project_link}, ${submission.github_link},
        ${submission.additional_links}, ${submission.technologies_used},
        ${submission.challenges_faced}, ${submission.learning_outcomes},
        ${submission.additional_comments}, ${submission.codeforces_profile},
        ${submission.codeforces_rating}, ${submission.leetcode_profile},
        ${submission.leetcode_rating}
      )
      RETURNING *
    `
    return { success: true, data: result[0] }
  } catch (error: any) {
    console.error("Database error:", error)
    return { success: false, error: "Failed to submit. Please try again." }
  }
}

export async function getSubmissionByRollNumber(rollNumber: string) {
  try {
    // Additional validation at database level
    if (!rollNumber || typeof rollNumber !== 'string' || rollNumber.length > 20) {
      console.warn("Invalid roll number provided to database function")
      return null
    }
    
    const sanitizedRollNumber = rollNumber.trim().toLowerCase()
    
    const result = await sql`
      SELECT * FROM submissions WHERE roll_number = ${sanitizedRollNumber}
    `
    return result[0] || null
  } catch (error) {
    console.error("Database error:", error)
    return null
  }
}

export async function getSubmissionsByRollNumber(rollNumber: string) {
  try {
    // Additional validation at database level
    if (!rollNumber || typeof rollNumber !== 'string' || rollNumber.length > 20) {
      console.warn("Invalid roll number provided to database function")
      return []
    }
    
    const sanitizedRollNumber = rollNumber.trim().toLowerCase()
    
    const result = await sql`
      SELECT * FROM submissions WHERE roll_number = ${sanitizedRollNumber} ORDER BY created_at DESC
    `
    return result
  } catch (error) {
    console.error("Database error:", error)
    return []
  }
}

export async function getAllSubmissions() {
  try {
    // Security: Limit the number of records returned to prevent memory issues
    const result = await sql`
      SELECT * FROM submissions ORDER BY created_at DESC LIMIT 10000
    `
    return result
  } catch (error) {
    console.error("Database error:", error)
    return []
  }
}

export async function getSubmissionsByDomain(domain: string) {
  try {
    const result = await sql`
      SELECT * FROM submissions WHERE domain = ${domain} ORDER BY created_at DESC
    `
    return result
  } catch (error) {
    console.error("Database error:", error)
    return []
  }
}
