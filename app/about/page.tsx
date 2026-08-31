import { ArrowRight, Boxes, Globe, Handshake, Users } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Who We Are — Scale99',
  description: 'Scale 99 started with a simple frustration: too many businesses were bending themselves around software that was never built for them. So we started building it the other way.',
}

const stats = [
  { icon: Users, value: '25+', label: 'Clients served' },
  { icon: Boxes, value: '9', label: 'Products shipped' },
  { icon: Globe, value: '8', label: 'Industries served' },
  { icon: Handshake, value: '2', label: 'Founders, one obsession' },
]

const founders = [
  {
    name: 'Mohamed Selim',
    initials: 'MS',
    title: 'Co-Founder & CEO',
    tone: 'from-orange-500/40 via-zinc-900 to-zinc-950',
    bio: 'Mohamed has spent his career at the intersection of business operations and software—the kind of person who gets pulled into a client meeting to talk strategy and ends up sketching the database schema on a whiteboard by the end of it. That dual instinct, part operator and part builder, shapes how Scale 99 approaches every new product: start with the workflow, not the wireframe.',
  },
  {
    name: 'Mohamed Elgamal',
    initials: 'ME',
    title: 'Co-Founder & CEO',
    tone: 'from-slate-500/40 via-zinc-900 to-zinc-950',
    bio: 'Mohamed built his reputation solving the unglamorous problems other teams avoided—the messy handoffs, the manual spreadsheets, the workflows held together by habit. He co-founded Scale 99 to turn that pattern-spotting into products, and he\'s still the first person in the room asking "but how does this actually get used on a Tuesday morning?"',
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-24 text-center text-foreground lg:pt-28">
        {/* ── Hero: blueprint grid ─────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-white/10 px-6 pb-20 pt-4 lg:px-10 lg:pb-28">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center opacity-50"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/about-hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          {/* Corner tick marks — the same crosshair language as the hero stat cards elsewhere on the site */}
          <span className="pointer-events-none absolute left-6 top-6 h-3 w-3 border-l border-t border-accent/40 lg:left-10 lg:top-10" />
          <span className="pointer-events-none absolute right-6 top-6 h-3 w-3 border-r border-t border-accent/40 lg:right-10 lg:top-10" />
          <span className="pointer-events-none absolute bottom-6 left-6 h-3 w-3 border-b border-l border-accent/40 lg:bottom-10 lg:left-10" />
          <span className="pointer-events-none absolute bottom-6 right-6 h-3 w-3 border-b border-r border-accent/40 lg:bottom-10 lg:right-10" />

          <div className="relative mx-auto max-w-5xl">
            <p className="eyebrow">Who We Are</p>
            <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              We build software that <span className="text-accent">fits the industry, not the other way around.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
              Scale 99 started with a simple frustration: too many businesses were bending themselves around software that was never built for them. So we started building it the other way.
            </p>
          </div>
        </section>

        {/* ── Why we started ───────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-white/10 bg-surface px-6 py-20 lg:px-10 lg:py-28">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="relative mx-auto max-w-3xl">
            <p className="eyebrow">Why We Started</p>
            <p className="mx-auto mt-6 leading-7 text-muted-foreground">
              Scale 99 didn&apos;t begin with a product idea—it began with a pattern. Across clinics, contractors, sales teams, and procurement floors, we kept seeing the same thing: smart people stuck working around software that didn&apos;t understand their workflow.
            </p>
            <p className="mx-auto mt-4 leading-7 text-muted-foreground">
              So we started fixing it, one company at a time. Custom solutions, built around how teams actually work—not how a generic platform assumed they should. That habit of solving real problems for real businesses is what grew into nine products across nine very different industries, from clinic management to surgical planning software.
            </p>
            <p className="mx-auto mt-4 leading-7 text-muted-foreground">
              The tools changed. The principle never did: <strong className="font-semibold text-foreground">build the software to fit the work, not the work to fit the software.</strong>
            </p>
          </div>
        </section>

        {/* ── Philosophy pull-quote ────────────────────────────── */}
        <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
          <p aria-hidden="true" className="pointer-events-none select-none font-heading text-[9rem] font-bold leading-none text-accent/10 sm:text-[12rem]">
            &quot;
          </p>
          <blockquote className="relative mx-auto -mt-16 max-w-2xl sm:-mt-20">
            <p className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              &quot;Software should fit the industry, <span className="text-accent">not the other way around.</span>&quot;
            </p>
            <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-accent">— Scale 99.</footer>
          </blockquote>
        </section>

        {/* ── By the numbers ───────────────────────────────────── */}
        <section className="border-y border-white/10 bg-surface px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map(stat => (
              <div key={stat.label} className="group rounded-md border border-white/10 bg-background p-6 transition-colors hover:border-accent/40">
                <stat.icon className="mx-auto text-accent transition-transform group-hover:-translate-y-0.5" size={20} />
                <p className="mt-4 font-heading text-4xl font-semibold text-accent">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Leadership ───────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="eyebrow">Led By</p>
          <h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Two founders, one obsession.</h2>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {founders.map(founder => (
              <div key={founder.name} className="group rounded-md border border-white/10 bg-surface p-7 text-left transition-colors hover:border-accent/40">
                <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br font-heading text-lg font-semibold text-white ${founder.tone}`}>
                  {founder.initials}
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold">{founder.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{founder.title}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{founder.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Closing CTA ──────────────────────────────────────── */}
        <section className="relative overflow-hidden border-t border-white/10 px-6 py-28 lg:px-10 lg:py-36">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <h2 className="font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Nine products. One belief.
            </h2>
            <p className="mt-6 leading-7 text-muted-foreground">
              Every industry has its own rhythm—its own bottlenecks, blind spots, and busywork. We build software that respects that, instead of asking you to adapt to it.
            </p>
            <Link href="/software" className="mt-10 flex items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
              See what we&apos;ve built <ArrowRight size={16} />
            </Link>
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
