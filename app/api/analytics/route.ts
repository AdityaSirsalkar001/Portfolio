import { NextRequest, NextResponse } from 'next/server'
import { pool, AnalyticsEntry } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { page_path, referrer }: { page_path: string; referrer?: string } = body

    // Get client IP and user agent
    const ip_address = request.ip || 
      request.headers.get('x-forwarded-for') || 
      request.headers.get('x-real-ip') || 
      'unknown'
    
    const user_agent = request.headers.get('user-agent') || 'unknown'

    const client = await pool.connect()
    try {
      const result = await client.query(
        'INSERT INTO analytics (page_path, user_agent, ip_address, referrer) VALUES ($1, $2, $3, $4) RETURNING id',
        [page_path, user_agent, ip_address, referrer]
      )

      return NextResponse.json(
        { success: true, id: result.rows[0].id },
        { status: 201 }
      )
    } finally {
      client.release()
    }
  } catch (error) {
    console.error('Analytics error:', error)
    return NextResponse.json(
      { error: 'Failed to track visit' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page_path = searchParams.get('page_path')
    const days = parseInt(searchParams.get('days') || '30')
    
    const client = await pool.connect()
    try {
      let query = `
        SELECT 
          page_path,
          COUNT(*) as visits,
          DATE(created_at) as date
        FROM analytics 
        WHERE created_at >= NOW() - INTERVAL '${days} days'
      `
      let queryParams: any[] = []
      
      if (page_path) {
        query += ' AND page_path = $1'
        queryParams.push(page_path)
      }
      
      query += ' GROUP BY page_path, DATE(created_at) ORDER BY date DESC'
      
      const result = await client.query(query, queryParams)
      
      // Also get total stats
      const statsQuery = `
        SELECT 
          COUNT(*) as total_visits,
          COUNT(DISTINCT ip_address) as unique_visitors,
          COUNT(DISTINCT page_path) as pages_visited
        FROM analytics 
        WHERE created_at >= NOW() - INTERVAL '${days} days'
      `
      
      const statsResult = await client.query(statsQuery)
      
      return NextResponse.json({
        analytics: result.rows,
        stats: statsResult.rows[0]
      })
    } finally {
      client.release()
    }
  } catch (error) {
    console.error('Get analytics error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}
