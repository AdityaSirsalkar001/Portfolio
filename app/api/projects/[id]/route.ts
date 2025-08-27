import { NextRequest, NextResponse } from 'next/server'
import { pool, Project } from '@/lib/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await pool.connect()
    try {
      const result = await client.query(
        'SELECT * FROM projects WHERE id = $1',
        [params.id]
      )
      
      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Project not found' },
          { status: 404 }
        )
      }
      
      return NextResponse.json(result.rows[0])
    } finally {
      client.release()
    }
  } catch (error) {
    console.error('Get project error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const client = await pool.connect()
    try {
      const result = await client.query(
        `UPDATE projects 
         SET title = $1, description = $2, technologies = $3, 
             github_url = $4, live_url = $5, image_url = $6, 
             featured = $7, updated_at = CURRENT_TIMESTAMP
         WHERE id = $8 
         RETURNING *`,
        [title, description, technologies, github_url, live_url, image_url, featured, params.id]
      )

      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Project not found' },
          { status: 404 }
        )
      }

      return NextResponse.json(result.rows[0])
    } finally {
      client.release()
    }
  } catch (error) {
    console.error('Update project error:', error)
    return NextResponse.json(
      { error: 'Failed to update project' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await pool.connect()
    try {
      const result = await client.query(
        'DELETE FROM projects WHERE id = $1 RETURNING id',
        [params.id]
      )

      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Project not found' },
          { status: 404 }
        )
      }

      return NextResponse.json(
        { message: 'Project deleted successfully' },
        { status: 200 }
      )
    } finally {
      client.release()
    }
  } catch (error) {
    console.error('Delete project error:', error)
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    )
  }
}
