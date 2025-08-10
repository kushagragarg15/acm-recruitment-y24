-- Add competitive programming fields to submissions table
ALTER TABLE submissions 
ADD COLUMN IF NOT EXISTS codeforces_profile VARCHAR(500),
ADD COLUMN IF NOT EXISTS codeforces_rating VARCHAR(10),
ADD COLUMN IF NOT EXISTS leetcode_profile VARCHAR(500),
ADD COLUMN IF NOT EXISTS leetcode_rating VARCHAR(10);

-- Create indexes for the new fields
CREATE INDEX IF NOT EXISTS idx_submissions_codeforces_profile ON submissions(codeforces_profile);
CREATE INDEX IF NOT EXISTS idx_submissions_leetcode_profile ON submissions(leetcode_profile);