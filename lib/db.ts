import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

export { pool }

export interface ContactMessage {
  id?: number
  name: string
  email: string
  subject: string
  message: string
  created_at?: Date
  read?: boolean
}

export interface Project {
  id?: number
  title: string
  description: string
  technologies: string[]
  github_url?: string
  live_url?: string
  image_url?: string
  featured?: boolean
  created_at?: Date
  updated_at?: Date
}

export interface AnalyticsEntry {
  id?: number
  page_path: string
  user_agent?: string
  ip_address?: string
  referrer?: string
  created_at?: Date
}
