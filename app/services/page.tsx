import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { JsonLd } from '@/components/json-ld'
import { ServicesAccordion } from '@/components/services-accordion'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { services } from '@/lib/services-data'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'
import { SITE_NAME } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Services — Scale99',
  description: 'Six services, one team, start to finish: automation, CRM, database management, custom software, UI/UX design, and websites & SEO.',
  path: '/services',
})

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((service, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.text,
      provider: { '@type': 'Organization', name: SITE_NAME },
    },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])} />
      <JsonLd data={servicesJsonLd} />
      <main className="min-h-screen bg-background pt-16 text-center text-foreground lg:pt-20">
        <section className="mx-auto max-w-5xl px-6 pb-28 lg:px-10 lg:pb-40">
          <ServicesAccordion />
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
