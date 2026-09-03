import { ArrowRight, ImageIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { products } from '@/lib/products-data'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Case Studies — Scale99',
  description: 'How Scale99 has helped real clients across hospitality, construction, healthcare, marketing, and medtech—straight from the engagements behind each product.',
  path: '/case-studies',
})

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Case Studies', path: '/case-studies' }])} />
      <main className="min-h-screen bg-background pt-16 text-center text-foreground lg:pt-20">
        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow">Case Studies</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Where the systems actually paid off.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
            Every product we build starts as a real client engagement. Here&apos;s what happened once each one was in production.
          </p>
        </section>

        <section className="border-t border-white/10 px-6 pb-28 lg:px-10 lg:pb-40">
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
            {products.map(product => (
              <Link
                key={product.slug}
                href={`/software/${product.slug}`}
                className="group grid gap-0 overflow-hidden rounded-xl border border-white/10 bg-surface text-left shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 md:grid-cols-[300px_1fr]"
              >
                {/* Browser-chrome thumbnail */}
                <div className="relative overflow-hidden border-b border-white/10 bg-background md:border-b-0 md:border-r">
                  <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  </div>
                  <div className="relative aspect-video overflow-hidden md:aspect-auto md:h-[calc(100%-37px)]">
                    {product.heroImage
                      ? (
                          <Image
                            src={product.heroImage}
                            alt={`${product.title} product screenshot`}
                            fill
                            sizes="(min-width: 768px) 300px, 100vw"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                          />
                        )
                      : (
                          <div className="flex h-full w-full items-center justify-center">
                            <div className="absolute inset-0 bg-grid opacity-20" />
                            <ImageIcon className="relative text-muted-foreground/40" size={28} />
                          </div>
                        )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Case study content */}
                <div className="flex flex-col p-7 lg:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{product.category}</span>
                    <span className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted-foreground/50">Case study</span>
                  </div>
                  <h2 className="mt-4 font-heading text-2xl font-semibold leading-tight transition-colors group-hover:text-accent">{product.title}</h2>
                  <p className="mt-2 text-sm italic leading-6 text-muted-foreground">{product.caseStudy.clientProfile}</p>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-foreground/90">{product.caseStudy.results}</p>

                  {product.caseStudy.quote && (
                    <blockquote className="mt-5 border-l-2 border-accent/40 pl-4">
                      <p className="text-sm italic leading-6 text-muted-foreground">&quot;{product.caseStudy.quote.text}&quot;</p>
                      <footer className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent">{product.caseStudy.quote.attribution}</footer>
                    </blockquote>
                  )}

                  <span className="mt-6 flex items-center gap-2 pt-1 text-sm font-semibold text-accent">
                    Read the full case study <ArrowRight className="transition-transform group-hover:translate-x-2" size={16} />
                  </span>
                </div>
              </Link>
            ))}
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
