import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getProductBySlug, products } from '@/lib/products-data'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return products.map(product => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) return {}

  return {
    title: product.metaTitle,
    description: product.metaDescription,
  }
}

// Highlights arrive as "Label: supporting detail" — split on the first colon so the
// label can carry the visual weight, and fall back to plain text if there isn't one.
function splitHighlight(highlight: string) {
  const separator = highlight.indexOf(': ')
  if (separator === -1) return { label: null, detail: highlight }
  return { label: highlight.slice(0, separator), detail: highlight.slice(separator + 2) }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const { caseStudy } = product
  const caseStudySections = [
    { heading: 'Client Profile', body: caseStudy.clientProfile },
    { heading: 'The Challenge', body: caseStudy.challenge },
    { heading: 'The Solution', body: caseStudy.solution },
    { heading: 'The Results', body: caseStudy.results },
  ]

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-24 text-center text-foreground lg:pt-28">
        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-10 lg:pb-28">
          <Link href="/products" className="group flex mx-auto w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft size={16} className="text-accent transition-transform group-hover:-translate-x-1" />
            Back to Products
          </Link>

          <p className="mt-10 mx-auto w-fit rounded-full border border-white/15 px-3 py-1 text-xs text-muted-foreground">{product.category}</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">{product.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">{product.shortExplanation}</p>
          <Link href="/#contact" className="mt-10 flex mx-auto w-fit items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
            Book a demo <ArrowRight size={16} />
          </Link>
        </section>

        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Highlights</p>
            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">What makes it work.</h2>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {product.highlights.map((highlight, i) => {
                const { label, detail } = splitHighlight(highlight)
                return (
                  <div key={highlight} className="rounded-md border border-white/10 bg-surface p-7 transition-colors hover:border-accent/40">
                    <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                    {label && <h3 className="mt-4 font-heading text-xl font-semibold leading-tight">{label}</h3>}
                    <p className={`text-sm leading-6 text-muted-foreground ${label ? 'mt-3' : 'mt-4'}`}>{detail}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-surface px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Case study</p>
            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">How it played out.</h2>

            <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
              {caseStudySections.map(section => (
                <div key={section.heading} className="py-8">
                  <h3 className="font-heading text-xl font-semibold">{section.heading}</h3>
                  <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">{section.body}</p>
                </div>
              ))}
            </div>

            {caseStudy.quote && (
              <blockquote className="mt-10 rounded-md border border-white/10 bg-background p-8">
                <p className="font-heading text-2xl font-semibold leading-tight tracking-tight">&quot;{caseStudy.quote.text}&quot;</p>
                <footer className="mt-6 text-sm font-semibold text-accent">
                  — <span className="font-normal text-muted-foreground">{caseStudy.quote.attribution}</span>
                </footer>
              </blockquote>
            )}
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
            <a href="mailto:hello@scale99.com" className="flex mx-auto w-fit items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
              Request Demo <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
