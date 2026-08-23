import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Who We Are — Scale99',
  description: 'Scale 99 started with a simple frustration: too many businesses were bending themselves around software that was never built for them. So we started building it the other way.',
}

const stats = [
  { value: '25+', label: 'Clients served' },
  { value: '9', label: 'Products shipped' },
  { value: '8', label: 'Industries served' },
  { value: '2', label: 'Founders, one obsession' },
]

const founders = [
  {
    name: 'Mohamed Selim',
    title: 'Co-Founder & CEO',
    bio: 'Mohamed has spent his career at the intersection of business operations and software—the kind of person who gets pulled into a client meeting to talk strategy and ends up sketching the database schema on a whiteboard by the end of it. That dual instinct, part operator and part builder, shapes how Scale 99 approaches every new product: start with the workflow, not the wireframe.',
  },
  {
    name: 'Mohamed Elgamal',
    title: 'Co-Founder & CEO',
    bio: 'Mohamed built his reputation solving the unglamorous problems other teams avoided—the messy handoffs, the manual spreadsheets, the workflows held together by habit. He co-founded Scale 99 to turn that pattern-spotting into products, and he\'s still the first person in the room asking "but how does this actually get used on a Tuesday morning?"',
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-24 text-center text-foreground lg:pt-28">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow">Who We Are</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            We build software that fits the industry—not the other way around.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
            Scale 99 started with a simple frustration: too many businesses were bending themselves around software that was never built for them. So we started building it the other way.
          </p>
        </section>

        {/* ── Why we started ───────────────────────────────────── */}
        <section className="border-y border-white/10 bg-surface px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-3xl">
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
        <section className="px-6 py-20 lg:px-10 lg:py-28">
          <blockquote className="mx-auto max-w-2xl">
            <p className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              &quot;Software should fit the industry, <span className="text-accent">not the other way around.</span>&quot;
            </p>
          </blockquote>
        </section>

        {/* ── By the numbers ───────────────────────────────────── */}
        <section className="border-y border-white/10 bg-surface px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {stats.map(stat => (
              <div key={stat.label}>
                <p className="font-heading text-4xl font-semibold text-accent">{stat.value}</p>
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
              <div key={founder.name} className="rounded-md border border-white/10 bg-surface p-7 text-left">
                <h3 className="font-heading text-xl font-semibold">{founder.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{founder.title}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{founder.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Closing CTA ──────────────────────────────────────── */}
        <section className="border-t border-white/10 px-6 py-28 lg:px-10 lg:py-36">
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <h2 className="font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Nine products. One belief.
            </h2>
            <p className="mt-6 leading-7 text-muted-foreground">
              Every industry has its own rhythm—its own bottlenecks, blind spots, and busywork. We build software that respects that, instead of asking you to adapt to it.
            </p>
            <Link href="/products" className="mt-10 flex items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
              See what we&apos;ve built <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
