import { AlertTriangle, ArrowLeft, ArrowRight, ChevronDown, Lightbulb, TrendingUp, Users } from 'lucide-react'
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
    { heading: 'Client Profile', body: caseStudy.clientProfile, icon: Users },
    { heading: 'The Challenge', body: caseStudy.challenge, icon: AlertTriangle },
    { heading: 'The Solution', body: caseStudy.solution, icon: Lightbulb },
    { heading: 'The Results', body: caseStudy.results, icon: TrendingUp },
  ]

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-16 text-center text-foreground lg:pt-20">
        <section className="relative overflow-hidden px-6 pb-20 pt-4 lg:px-10 lg:pb-28">
          {product.heroVideo
            ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-50"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                >
                  <source src={product.heroVideo} type="video/mp4" />
                </video>
              )
            : (
                <div className="absolute inset-0 bg-grid opacity-15" />
              )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />

          <div className="relative mx-auto max-w-5xl">
            <Link href="/software" className="group flex mx-auto w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft size={16} className="text-accent transition-transform group-hover:-translate-x-1" />
              Back to Software
            </Link>

            <p className="mt-10 mx-auto w-fit rounded-full border border-white/15 px-3 py-1 text-xs text-muted-foreground">{product.category}</p>
            <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">{product.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">{product.shortExplanation}</p>
            <Link href="/#contact" className="mt-10 flex mx-auto w-fit items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
              Book a demo <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Highlights</p>
            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">What makes it work.</h2>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {product.highlights.map((highlight, i) => {
                const { label, detail } = splitHighlight(highlight)
                return (
                  <div
                    key={highlight}
                    className="group relative origin-center rounded-md border border-white/10 bg-surface p-7 transition-all duration-300 [transition-timing-function:cubic-bezier(.34,1.56,.64,1)] hover:z-10 hover:scale-[1.15] hover:border-accent/50 hover:bg-background hover:shadow-2xl hover:shadow-accent/20"
                  >
                    <span className="inline-block font-mono text-xs text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-125">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {label && <h3 className="mt-4 font-heading text-xl font-semibold leading-tight transition-colors group-hover:text-accent">{label}</h3>}
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

            <div className="mt-14 space-y-8 text-left">
              {caseStudySections.map((section, i) => (
                <div key={section.heading} className="relative flex items-start gap-5 sm:gap-6">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background text-accent shadow-lg shadow-accent/20">
                    <section.icon size={22} />
                  </div>
                  {i < caseStudySections.length - 1 && (
                    <>
                      <span className="absolute left-7 top-14 h-8 w-px -translate-x-1/2 bg-gradient-to-b from-accent/60 to-accent/10" />
                      <ChevronDown className="absolute left-7 top-[3.75rem] -translate-x-1/2 text-accent/50" size={14} />
                    </>
                  )}
                  <div className="flex-1 rounded-md border border-white/10 bg-background p-6 transition-colors hover:border-accent/30 sm:p-7">
                    <p className="font-mono text-xs text-accent">STEP {String(i + 1).padStart(2, '0')}</p>
                    <h3 className="mt-1 font-heading text-xl font-semibold">{section.heading}</h3>
                    <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{section.body}</p>
                  </div>
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
