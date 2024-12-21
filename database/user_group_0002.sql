-- Bootleg way of keeping track of migrations 0002

-- Create Group Socials table
CREATE TABLE IF NOT EXISTS group_socials (
    id SERIAL PRIMARY KEY,
    group_id INTEGER REFERENCES groups(id) ON DELETE CASCADE NOT NULL,
    youtube_url TEXT,
    instagram_url TEXT,
    spotify_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Add social_id column to groups table to reference group_socials table
ALTER TABLE groups ADD COLUMN social_id INTEGER REFERENCES group_socials(id) ON DELETE SET NULL;

-- Add logo_url column to user_group_rankings table
ALTER TABLE user_group_rankings ADD COLUMN logo_url TEXT;

-- Drop logo_url column from groups table
ALTER TABLE groups DROP COLUMN logo_url;
