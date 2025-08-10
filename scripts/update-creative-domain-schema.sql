-- Update schema to support creative domain customizations
-- This script ensures the database can handle optional fields properly

-- Make project_title nullable for competitive programming submissions
ALTER TABLE submissions ALTER COLUMN project_title DROP NOT NULL;

-- Add comments to clarify field usage
COMMENT ON COLUMN submissions.project_title IS 'Required for all domains except competitive programming';
COMMENT ON COLUMN submissions.github_link IS 'Optional for creative domain, recommended for technical domains';
COMMENT ON COLUMN submissions.project_link IS 'For creative domain: design files/portfolio link; For others: demo/live project link';

-- Create index for better performance on domain-based queries
CREATE INDEX IF NOT EXISTS idx_submissions_domain ON submissions(domain);

-- Update any existing competitive programming submissions that might have empty project_title
UPDATE submissions 
SET project_title = 'Competitive Programming Profile' 
WHERE domain = 'competitive-programming' AND (project_title IS NULL OR project_title = '');