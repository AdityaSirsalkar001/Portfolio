import { NextRequest, NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function GET() {
  try {
    const client = await pool.connect()
    try {
      const result = await client.query('SELECT * FROM tech_stack ORDER BY created_at DESC')
      return NextResponse.json(result.rows)
    } finally {
      client.release()
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tech stack' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, category, description, level } = body
    if (!name || !category) {
      return NextResponse.json({ error: 'Name and category are required' }, { status: 400 })
    }

    const client = await pool.connect()
    try {
      const result = await client.query(
        'INSERT INTO tech_stack (name, category, description, level) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, category, description || null, level || 'beginner']
      )
      return NextResponse.json(result.rows[0], { status: 201 })
    } finally {
      client.release()
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create item' }, { status: 500 })
  }
}
