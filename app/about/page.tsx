import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'About — Scale99',
  description: 'Scale99 is a software solutions company delivering customized software for mid-sized and well-established enterprises.',
}

const reasons = [
  { title: 'One team, start to finish', text: 'Strategy, design, and development sit under one roof, so a service like automation or CRM doesn\'t stall waiting on a handoff to a different vendor.' },
  { title: 'Built around your process', text: 'Not a generic template. Every engagement starts with how your business actually works.' },
  { title: 'Sector experience that matters', text: 'Regulated and relationship-intensive sectors—medical & pharmaceutical, construction & furnishing, education, event & venue management, and marketing agencies.' },
  { title: 'Built to grow with you', text: 'Systems built to grow with your business, not be replaced in two years.' },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-24 text-center text-foreground lg:pt-28">
        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow">About Scale99</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            One team. Every system your business needs to grow.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
            Scale99 is a software solutions company delivering customized software for mid-sized and well-established enterprises. We work across automation, CRM, database infrastructure, custom software, design, and web—for clients in medical &amp; pharmaceutical, construction &amp; furnishing, education, event &amp; venue management, and marketing.
          </p>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
            Rather than offering a single product, we bring together everything a growing business needs to run on better systems: the strategy and process work, the design, and the engineering—under one roof.
          </p>
        </section>

        <section className="border-y border-white/10 bg-surface px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Why Scale99</p>
            <h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">A different way to build.</h2>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {reasons.map(reason => (
                <div key={reason.title} className="rounded-md border border-white/10 bg-background p-7">
                  <h3 className="font-heading text-xl font-semibold">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
