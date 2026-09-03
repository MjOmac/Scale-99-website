import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Partners — Scale99',
  description: 'The technology and platform partners Scale99 works alongside to deliver systems that scale.',
  path: '/partners',
})

const partners = [
  { name: 'Brightline Cloud', category: 'Infrastructure & hosting' },
  { name: 'Ledgerway', category: 'Payments & billing' },
  { name: 'Fieldstone Data', category: 'Data & analytics' },
  { name: 'Corsair CRM', category: 'CRM platform' },
]

export default function PartnersPage() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Partners', path: '/partners' }])} />
      <main className="min-h-screen bg-background pt-16 text-center text-foreground lg:pt-20">
        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow">Partners</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Built with a network we trust.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
            The platforms and infrastructure partners we integrate with when a project calls for it.
          </p>
        </section>

        <section className="border-t border-white/10 px-6 pb-28 lg:px-10 lg:pb-40">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map(partner => (
                <div key={partner.name} className="flex min-h-40 flex-col items-center justify-center gap-3 rounded-md border border-white/10 bg-surface p-7">
                  <p className="font-heading text-xl font-semibold">{partner.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{partner.category}</p>
                </div>
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
            <Link href="/#contact" className="flex mx-auto w-fit items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
              Request Demo <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
