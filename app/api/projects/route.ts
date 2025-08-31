import { NextRequest, NextResponse } from 'next/server'
import { pool, Project } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured')
    
    const client = await pool.connect()
    try {
      let query = 'SELECT * FROM projects ORDER BY created_at DESC'
      let queryParams: any[] = []
      
      if (featured === 'true') {
        query = 'SELECT * FROM projects WHERE featured = true ORDER BY created_at DESC'
      }
      
      const result = await client.query(query, queryParams)
      
      return NextResponse.json(result.rows)
    } finally {
      client.release()
    }
  } catch (error) {
    console.error('Get projects error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      title, 
      description, 
      technologies, 
      github_url, 
      live_url, 
      image_url, 
      featured 
    }: Project = body

    // Validate required fields
    if (!title || !description || !technologies) {
      return NextResponse.json(
        { error: 'Title, description, and technologies are required' },
        { status: 400 }
      )
    }

    const client = await pool.connect()
    try {
      const result = await client.query(
        `INSERT INTO projects 
         (title, description, technologies, github_url, live_url, image_url, featured, updated_at) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP) 
         RETURNING *`,
        [title, description, technologies, github_url, live_url, image_url, featured || false]
      )

      return NextResponse.json(result.rows[0], { status: 201 })
    } finally {
      client.release()
    }
  } catch (error) {
    console.error('Create project error:', error)
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    )
  }
}
