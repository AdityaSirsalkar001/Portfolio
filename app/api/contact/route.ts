import { NextRequest, NextResponse } from 'next/server'
import { pool, ContactMessage } from '@/lib/db'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message }: ContactMessage = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Store in database
    const client = await pool.connect()
    try {
      const result = await client.query(
        'INSERT INTO contact_messages (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING id',
        [name, email, subject, message]
      )

      const messageId = result.rows[0].id

      // Send notification email (optional - requires email configuration)
      // You can set up SMTP credentials later
      /*
      const transporter = nodemailer.createTransporter({
        // Configure your email service here
      })
      
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h3>New contact form submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      })
      */

      return NextResponse.json(
        { 
          success: true, 
          messageId,
          message: 'Thank you for your message! I\'ll get back to you soon.' 
        },
        { status: 201 }
      )
    } finally {
      client.release()
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get all contact messages (for admin use)
    const client = await pool.connect()
    try {
      const result = await client.query(
        'SELECT * FROM contact_messages ORDER BY created_at DESC'
      )
      
      return NextResponse.json(result.rows)
    } finally {
      client.release()
    }
  } catch (error) {
    console.error('Get contacts error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
}
