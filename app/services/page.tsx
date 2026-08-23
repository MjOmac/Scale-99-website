import type { Metadata } from 'next'
import { ServicesAccordion } from '@/components/services-accordion'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Services — Scale99',
  description: 'Six services, one team, start to finish: automation, CRM, database management, custom software, UI/UX design, and websites & SEO.',
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-24 text-center text-foreground lg:pt-28">
        <section className="mx-auto max-w-5xl px-6 pb-28 lg:px-10 lg:pb-40">
          <ServicesAccordion />
        </section>
        <SiteFooter />
      </main>
    </>
  )
}
