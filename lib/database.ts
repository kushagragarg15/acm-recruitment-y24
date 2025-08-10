import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export interface Submission {
  id?: number
  name: string
  roll_number: string
  email: string
  phone: string
  domain: string
  task_option?: string
  project_title: string
  project_description?: string
  project_link?: string
  github_link?: string
  additional_links?: string
  technologies_used?: string
  challenges_faced?: string
  learning_outcomes?: string
  additional_comments?: string
  submission_status?: string
  created_at?: string
  updated_at?: string
}

export async function createSubmission(submission: Submission) {
  try {
    const result = await sql`
      INSERT INTO submissions (
        name, roll_number, email, phone, domain, task_option,
        project_title, project_description, project_link, github_link,
        additional_links, technologies_used, challenges_faced,
        learning_outcomes, additional_comments
      ) VALUES (
        ${submission.name}, ${submission.roll_number}, ${submission.email},
        ${submission.phone}, ${submission.domain}, ${submission.task_option},
        ${submission.project_title}, ${submission.project_description},
        ${submission.project_link}, ${submission.github_link},
        ${submission.additional_links}, ${submission.technologies_used},
        ${submission.challenges_faced}, ${submission.learning_outcomes},
        ${submission.additional_comments}
      )
      RETURNING *
    `
    return { success: true, data: result[0] }
  } catch (error: any) {
    console.error("Database error:", error)
    if (error.message.includes("duplicate key")) {
      return { success: false, error: "Roll number already exists. Each student can only submit once." }
    }
    return { success: false, error: "Failed to submit. Please try again." }
  }
}

export async function getSubmissionByRollNumber(rollNumber: string) {
  try {
    const result = await sql`
      SELECT * FROM submissions WHERE roll_number = ${rollNumber}
    `
    return result[0] || null
  } catch (error) {
    console.error("Database error:", error)
    return null
  }
}

export async function getAllSubmissions() {
  try {
    const result = await sql`
      SELECT * FROM submissions ORDER BY created_at DESC
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
