import { NextResponse } from 'next/server'

const RESUME_URL = 'https://cdn.builder.io/o/assets%2Ffbed7fa7b77344d986d0d6126e7ece42%2Fa25d572a67144d628e73fae4c40675e5?alt=media&token=c02d5ada-5df2-44ed-bed1-e80f8561a52e&apiKey=fbed7fa7b77344d986d0d6126e7ece42'

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
