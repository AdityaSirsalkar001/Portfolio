import { NextRequest, NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { name, category, description, level } = body

    const client = await pool.connect()
    try {
      const result = await client.query(
        'UPDATE tech_stack SET name=$1, category=$2, description=$3, level=$4 WHERE id=$5 RETURNING *',
        [name, category, description || null, level || 'beginner', params.id]
      )
      if (result.rows.length === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 })
      return NextResponse.json(result.rows[0])
    } finally {
      client.release()
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update item' }, { status: 500 })
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const client = await pool.connect()
    try {
      const result = await client.query('DELETE FROM tech_stack WHERE id=$1 RETURNING id', [params.id])
      if (result.rows.length === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 })
      return NextResponse.json({ success: true })
    } finally {
      client.release()
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 })
  }
}
