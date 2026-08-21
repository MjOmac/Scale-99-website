import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Case Studies — Scale99',
  description: 'How Scale99 has helped clients replace fragmented workflows, consolidate systems, and cut operational overhead.',
}

const caseStudies = [
  {
    client: 'Meridian',
    title: 'A new operating system for growth.',
    text: 'For a global financial services leader, we replaced fragmented workflows with one intelligent platform—giving every team the clarity to move faster.',
    stat: '+42%',
    statLabel: 'Operational lift',
  },
  {
    client: 'Northstar Financial',
    title: 'Consolidating four CRMs into one.',
    text: 'Sales, service, and account management were split across four disconnected tools. We rebuilt it as a single CRM shaped around their actual sales cycle.',
    stat: '1',
    statLabel: 'System of record',
  },
  {
    client: 'Atlas Group',
    title: 'Cutting overhead through automation.',
    text: 'Approvals and handoffs that used to take days now run on their own—freeing the team to spend time on decisions that actually need a person.',
    stat: '-33%',
    statLabel: 'Operational overhead',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-36 text-center text-foreground lg:pt-44">
        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow">Case Studies</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Where the systems actually paid off.
          </h1>
        </section>

        <section className="border-t border-white/10 px-6 pb-28 lg:px-10 lg:pb-40">
          <div className="mx-auto flex max-w-5xl flex-col gap-5">
            {caseStudies.map(study => (
              <div key={study.client} className="flex flex-col items-center gap-8 rounded-md border border-white/10 bg-surface p-8 lg:p-10">
                <div className="w-48 rounded border border-white/15 bg-background/80 p-6">
                  <p className="font-heading text-4xl font-semibold text-accent">{study.stat}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{study.statLabel}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{study.client}</p>
                  <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight">{study.title}</h2>
                  <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">{study.text}</p>
                  <Link href="/#contact" className="mx-auto mt-6 flex w-fit items-center gap-3 text-sm font-semibold text-accent">
                    Talk to us about a similar project <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
