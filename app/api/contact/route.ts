import { NextResponse } from 'next/server'
import { SITE_EMAIL } from '@/lib/site'

export const runtime = 'nodejs'

interface ContactPayload {
  name: string
  email: string
  company?: string
  message: string
  /** Honeypot field — real visitors never fill this in. */
  website?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: ContactPayload
  try {
    body = await request.json()
  }
  catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, company, message, website } = body

  // Honeypot: bots fill every field, real users never see this one.
  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || SITE_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Scale99 Website <onboarding@resend.dev>'

  if (!apiKey) {
    console.error('Contact form submission received but RESEND_API_KEY is not configured.')
    return NextResponse.json(
      { error: `The contact form is not fully set up yet. Please email ${SITE_EMAIL} directly.` },
      { status: 503 },
    )
  }

  const escapeHtml = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;' }[c] as string))

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New contact form submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    }),
  })

  if (!res.ok) {
    const detail = await res.text()
    console.error('Resend API error:', res.status, detail)
    return NextResponse.json({ error: `Something went wrong sending your message. Please try emailing ${SITE_EMAIL} directly.` }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
