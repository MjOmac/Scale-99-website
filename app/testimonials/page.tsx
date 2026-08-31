import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Customer Testimonials — Scale99',
  description: 'What Scale99 clients say about working with the team.',
}

const testimonials = [
  { quote: 'Scale99 gave us the confidence to make the decisions we had been putting off.', name: 'Maya Chen', role: 'Chief Operating Officer, Meridian' },
  { quote: 'The automation work paid for itself in the first quarter. Our team stopped doing the parts of the job nobody wanted to do.', name: 'Daniel Osei', role: 'VP Operations, Northstar' },
  { quote: 'They designed and built our CRM in the same breath. No handoffs, no gaps between what was designed and what shipped.', name: 'Priya Raman', role: 'Head of Product, Vertex' },
  { quote: 'Fastest turnaround of any team we\'ve worked with, and nothing felt rushed.', name: 'James Whitfield', role: 'Director, Atlas Group' },
]

export default function TestimonialsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-16 text-center text-foreground lg:pt-20">
        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow">Customer Testimonials</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            A better way forward.
          </h1>
        </section>

        <section className="border-t border-white/10 px-6 pb-28 lg:px-10 lg:pb-40">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-5 md:grid-cols-2">
              {testimonials.map(t => (
                <blockquote key={t.name} className="rounded-md border border-white/10 bg-surface p-8">
                  <p className="font-heading text-2xl font-semibold leading-tight tracking-tight">&quot;{t.quote}&quot;</p>
                  <footer className="mt-6 text-sm font-semibold text-accent">
                    — {t.name}, <span className="font-normal text-muted-foreground">{t.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-28 lg:px-10 lg:py-36">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
            <div>
              <p className="eyebrow">Start a conversation</p>
              <h2 className="mx-auto mt-5 max-w-2xl font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
                Ready to build<br />what&apos;s next<span className="text-accent">?</span>
              </h2>
            </div>
            <a href="mailto:hello@scale-99.com" className="flex mx-auto w-fit items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
              Request Demo <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
