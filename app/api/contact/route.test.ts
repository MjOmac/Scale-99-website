import { afterEach, describe, expect, it, vi } from 'vitest'
import { POST } from './route'

function makeRequest(body: unknown) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
  })
}

describe('POST /api/contact', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
  })

  it('rejects a missing message', async () => {
    const res = await POST(makeRequest({ name: 'A', email: 'a@example.com', message: '' }))
    expect(res.status).toBe(400)
  })

  it('rejects an invalid email address', async () => {
    const res = await POST(makeRequest({ name: 'A', email: 'not-an-email', message: 'hi' }))
    expect(res.status).toBe(400)
  })

  it('rejects an over-long message', async () => {
    const res = await POST(makeRequest({ name: 'A', email: 'a@example.com', message: 'x'.repeat(5001) }))
    expect(res.status).toBe(400)
  })

  it('silently accepts a honeypot-filled submission without sending anything', async () => {
    vi.stubEnv('RESEND_API_KEY', 're_test')
    const fetchSpy = vi.fn()
    vi.stubGlobal('fetch', fetchSpy)

    const res = await POST(makeRequest({ name: 'Bot', email: 'bot@example.com', message: 'spam', website: 'https://spam.example' }))

    expect(res.status).toBe(200)
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('returns 503 when the email provider is not configured', async () => {
    vi.stubEnv('RESEND_API_KEY', '')
    const res = await POST(makeRequest({ name: 'A', email: 'a@example.com', message: 'hi' }))
    expect(res.status).toBe(503)
  })

  it('sends via Resend and returns ok for a valid submission', async () => {
    vi.stubEnv('RESEND_API_KEY', 're_test')
    const fetchSpy = vi.fn().mockResolvedValue(new Response(null, { status: 200 }))
    vi.stubGlobal('fetch', fetchSpy)

    const res = await POST(makeRequest({ name: 'A', email: 'a@example.com', message: 'hi' }))

    expect(res.status).toBe(200)
    expect(fetchSpy).toHaveBeenCalledOnce()
    expect(fetchSpy.mock.calls[0][0]).toBe('https://api.resend.com/emails')
  })
})
