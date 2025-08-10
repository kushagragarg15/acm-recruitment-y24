-- Create submissions table for ACM recruitment
CREATE TABLE IF NOT EXISTS submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    roll_number VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    domain VARCHAR(100) NOT NULL,
    task_option VARCHAR(255),
    project_title VARCHAR(255) NOT NULL,
    project_description TEXT,
    project_link VARCHAR(500),
    github_link VARCHAR(500),
    additional_links TEXT,
    technologies_used TEXT,
    challenges_faced TEXT,
    learning_outcomes TEXT,
    additional_comments TEXT,
    submission_status VARCHAR(50) DEFAULT 'submitted',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_submissions_roll_number ON submissions(roll_number);
CREATE INDEX IF NOT EXISTS idx_submissions_domain ON submissions(domain);
CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions(submission_status);
CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON submissions(created_at);
