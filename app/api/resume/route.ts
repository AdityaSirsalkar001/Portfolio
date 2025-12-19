import { NextResponse } from 'next/server'

const RESUME_URL = 'https://drive.google.com/uc?export=download&id=1eyqYlHZHhJFSS-NL1N233KJK6mDTn_Dt'

export async function GET() {
  try {
    const res = await fetch(RESUME_URL, { cache: 'no-store' })
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch resume' }, { status: 502 })
    }
    const buffer = await res.arrayBuffer()
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Aditya_Sirsalkar_Resume.pdf"',
        'Cache-Control': 'no-store'
      }
    })
  } catch {
    return NextResponse.json({ error: 'Resume unavailable' }, { status: 500 })
  }
}
