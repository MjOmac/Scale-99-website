import { ArrowRight, Boxes, Database, LayoutTemplate, Palette, Workflow, Zap } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Products & Solutions — Scale99',
  description: 'Packaged solutions from Scale99: automation, CRM, data infrastructure, custom builds, design systems, and web & SEO.',
}

const products = [
  { icon: Zap, title: 'Automation Suite', text: 'Turn manual, repetitive work—data entry, approvals, notifications, handoffs—into a reliable, self-running process.' },
  { icon: Workflow, title: 'CRM Platform', text: 'A CRM shaped around how you actually sell, service, and retain clients, with sector-specific configurations built in.' },
  { icon: Database, title: 'Data Infrastructure', text: 'The database architecture, migration, and monitoring that everything else—CRM, reporting, automation—depends on.' },
  { icon: Boxes, title: 'Custom Builds', text: 'Bespoke applications for the use case off-the-shelf software can\'t serve, from internal tools to full platforms.' },
  { icon: Palette, title: 'Design System', text: 'Interfaces designed in-house for every product we build, so it\'s consistent, on-brand, and genuinely usable.' },
  { icon: LayoutTemplate, title: 'Web & SEO', text: 'A fast-turnaround marketing site with real SEO foundations, built to run alongside your larger platform work.' },
]

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-32 text-foreground lg:pt-40">
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow">Products &amp; Solutions</p>
          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Packaged solutions, built the same way as everything else we ship.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
            Six solution areas, one delivery team—so a solution here isn&apos;t a bolt-on, it&apos;s built and supported the same way as a fully custom engagement.
          </p>
        </section>

        <section className="border-t border-white/10 px-6 pb-28 lg:px-10 lg:pb-40">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {products.map(product => (
                <div key={product.title} className="rounded-md border border-white/10 bg-surface p-7 transition-colors hover:border-accent/40">
                  <product.icon className="text-accent" size={22} />
                  <h3 className="mt-5 font-heading text-xl font-semibold">{product.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.text}</p>
                </div>
              ))}
            </div>
            <Link href="/#contact" className="mt-14 flex w-fit items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
              Talk to us about a solution <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
