'use client'

import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { SITE_EMAIL } from '@/lib/site'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClasses = 'w-full rounded-md border border-white/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()

      if (!res.ok) {
        setErrorMessage(result.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
      form.reset()
    }
    catch {
      setErrorMessage('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex w-full max-w-lg flex-col items-center gap-3 rounded-md border border-accent/30 bg-surface p-8 text-center">
        <Check className="text-accent" size={28} />
        <p className="font-heading text-xl font-semibold">Message sent.</p>
        <p className="text-sm leading-6 text-muted-foreground">We&apos;ll get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg flex-col gap-4 text-left">
      {/* Honeypot — hidden from real users, bots tend to fill every field. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" type="text" placeholder="Name" className={inputClasses} />
        <input required name="email" type="email" placeholder="Email" className={inputClasses} />
      </div>
      <input name="company" type="text" placeholder="Company (optional)" className={inputClasses} />
      <textarea required name="message" rows={5} placeholder="Tell us what your business is trying to do." className={`${inputClasses} resize-none`} />

      {status === 'error' && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="flex w-fit items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
      >
        {status === 'submitting'
          ? (
              <>
                Sending <Loader2 className="animate-spin" size={16} />
              </>
            )
          : (
              <>
                Send message <ArrowRight size={16} />
              </>
            )}
      </button>

      <p className="text-xs text-muted-foreground">
        Or email us directly at{' '}
        <a href={`mailto:${SITE_EMAIL}`} className="text-accent transition-colors hover:text-foreground">{SITE_EMAIL}</a>.
      </p>
    </form>
  )
}
