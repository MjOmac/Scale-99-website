import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { IndustriesMap } from '@/components/industries-map'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Industries — Scale99',
  description: 'Scale99 works across medical & pharmaceutical, construction & furnishing, education, event & venue management, and marketing agencies.',
}

export default function IndustriesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-24 text-center text-foreground lg:pt-28">
        <section className="relative overflow-hidden px-6 pb-20 pt-4 lg:px-10 lg:pb-28">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center opacity-50"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/industries-hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="relative mx-auto max-w-5xl">
            <p className="eyebrow">Industries</p>
            <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Sector experience where regulation and relationships matter most.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
              Every sector needs different guardrails. Pick one to see the real systems we&apos;ve built inside it.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-28 lg:px-10 lg:pb-40">
          <IndustriesMap />
        </section>

        <section className="border-t border-white/10 px-6 py-28 lg:px-10 lg:py-36">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
            <div>
              <p className="eyebrow">Start a conversation</p>
              <h2 className="mx-auto mt-5 max-w-2xl font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
                Ready to build<br />what&apos;s next<span className="text-accent">?</span>
              </h2>
            </div>
            <a href="mailto:hello@scale99.com" className="flex mx-auto w-fit items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
              Request Demo <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
