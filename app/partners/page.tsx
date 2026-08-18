import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Partners — Scale99',
  description: 'The technology and platform partners Scale99 works alongside to deliver systems that scale.',
}

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
      <main className="min-h-screen bg-background pt-32 text-foreground lg:pt-40">
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow">Partners</p>
          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Built with a network we trust.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
            The platforms and infrastructure partners we integrate with when a project calls for it.
          </p>
        </section>

        <section className="border-t border-white/10 px-6 pb-28 lg:px-10 lg:pb-40">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map(partner => (
                <div key={partner.name} className="flex min-h-40 flex-col justify-between rounded-md border border-white/10 bg-surface p-7">
                  <p className="font-heading text-xl font-semibold">{partner.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{partner.category}</p>
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
