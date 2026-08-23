import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Industries — Scale99',
  description: 'Scale99 works across medical & pharmaceutical, construction & furnishing, education, event & venue management, and marketing agencies.',
}

const industries = [
  { title: 'Medical & Pharmaceutical', text: 'Patient and practice systems built for accuracy and compliance.', tone: 'from-orange-500/40 via-zinc-900 to-zinc-950' },
  { title: 'Construction & Furnishing', text: 'Project and tender tracking that keeps every job on schedule.', tone: 'from-slate-500/40 via-zinc-900 to-zinc-950' },
  { title: 'Education', text: 'Systems that keep administration out of the way of teaching.', tone: 'from-orange-950 via-zinc-900 to-zinc-950' },
  { title: 'Event & Venue Management', text: 'Bookings, logistics, and client management in one place.', tone: 'from-slate-500/40 via-zinc-900 to-zinc-950' },
  { title: 'Marketing Agencies', text: 'Client and campaign systems built for agency speed.', tone: 'from-orange-500/40 via-zinc-900 to-zinc-950' },
]

export default function IndustriesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-24 text-center text-foreground lg:pt-28">
        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow">Industries</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Sector experience where regulation and relationships matter most.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
            Every sector needs different guardrails. We build systems shaped around the ones your business actually operates under.
          </p>
        </section>

        <section className="border-t border-white/10 px-6 pb-28 lg:px-10 lg:pb-40">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-5 md:grid-cols-3">
              {industries.map(item => (
                <article key={item.title} className={`group relative flex min-h-80 flex-col justify-end overflow-hidden rounded-md bg-gradient-to-br ${item.tone} p-7`}>
                  <div className="absolute inset-0 bg-grid opacity-20 transition-opacity group-hover:opacity-40" />
                  <div className="relative">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Scale99 / 2026</p>
                    <h3 className="font-heading text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                    <ArrowRight className="mt-7 text-accent transition-transform group-hover:translate-x-2" size={20} />
                  </div>
                </article>
              ))}
              <Link href="/#contact" className="group flex min-h-80 flex-col items-center justify-center gap-6 rounded-md border border-white/15 p-7 transition-colors hover:border-accent/40">
                <p className="text-sm leading-6 text-muted-foreground">Don&apos;t see your sector? We still might be a fit.</p>
                <span className="flex items-center gap-2 text-sm font-semibold text-accent">Talk to us <ArrowRight className="transition-transform group-hover:translate-x-2" size={16} /></span>
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
