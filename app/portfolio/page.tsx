import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Portfolio — Scale99',
  description: 'A look at the systems Scale99 has built for clients across financial services, healthcare, operations, and growth.',
}

const projects = [
  { client: 'Northstar Financial', title: 'Operating model redesign', text: 'Replaced fragmented workflows with one intelligent platform.', tone: 'from-orange-500/40 via-zinc-900 to-zinc-950' },
  { client: 'Vertex Health', title: 'Patient intake automation', text: 'Cut manual intake steps from a dozen to three.', tone: 'from-slate-500/40 via-zinc-900 to-zinc-950' },
  { client: 'Atlas Group', title: 'Unified CRM rollout', text: 'One pipeline view across every regional sales team.', tone: 'from-orange-950 via-zinc-900 to-zinc-950' },
  { client: 'Meridian', title: 'Growth platform rebuild', text: 'A new operating system for a global financial services leader.', tone: 'from-slate-500/40 via-zinc-900 to-zinc-950' },
]

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-36 text-center text-foreground lg:pt-44">
        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Built for the real world.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
            A selection of the systems we&apos;ve shipped—from operating-model redesigns to the automation running quietly underneath.
          </p>
        </section>

        <section className="border-t border-white/10 px-6 pb-28 lg:px-10 lg:pb-40">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map(project => (
                <article key={project.client} className={`group relative flex min-h-80 flex-col justify-end overflow-hidden rounded-md bg-gradient-to-br ${project.tone} p-7`}>
                  <div className="absolute inset-0 bg-grid opacity-20 transition-opacity group-hover:opacity-40" />
                  <div className="relative">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{project.client}</p>
                    <h3 className="font-heading text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{project.text}</p>
                    <ArrowRight className="mt-7 text-accent transition-transform group-hover:translate-x-2" size={20} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
