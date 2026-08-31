import { ArrowRight, Check, ImageIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { products } from '@/lib/products-data'

export const metadata: Metadata = {
  title: 'Software — Scale99',
  description: 'Production-proven platforms from Scale99 across hospitality, construction, healthcare, marketing, and medtech—each built for a real client operation.',
}

export default function SoftwarePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-24 text-center text-foreground lg:pt-28">
        <section className="relative overflow-hidden px-6 pb-20 pt-4 lg:px-10 lg:pb-28">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center opacity-50"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/UI_elements_floating_in_dark_202608231051.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="relative mx-auto max-w-5xl">
            <p className="eyebrow">Software</p>
            <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Built for real businesses. Proven in production.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
              Every product here started as a client engagement—designed around one specific operation, deployed, and stress-tested in the field before it became something we offer anyone else.
            </p>
            <Link href="/#contact" className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
              Book a demo <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2">
              {products.map(product => (
                <Link
                  key={product.slug}
                  href={`/software/${product.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-surface text-left shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
                >
                  {/* Browser-chrome frame around the screenshot */}
                  <div className="relative overflow-hidden border-b border-white/10 bg-background">
                    <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    </div>
                    <div className="relative aspect-video overflow-hidden">
                      {product.heroImage
                        ? (
                            <Image
                              src={product.heroImage}
                              alt={`${product.title} product screenshot`}
                              fill
                              sizes="(min-width: 768px) 50vw, 100vw"
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

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center justify-between gap-3">
                      <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{product.category}</span>
                      <span className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted-foreground/50">Case study</span>
                    </div>
                    <h2 className="mt-4 line-clamp-2 min-h-[4.5rem] font-heading text-3xl font-semibold leading-tight transition-colors group-hover:text-accent">{product.title}</h2>
                    <p className="mt-3 line-clamp-2 min-h-[3rem] text-sm leading-6 text-muted-foreground">{product.shortExplanation}</p>

                    <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                      {product.highlights.map(highlight => (
                        <li key={highlight} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <Check className="mt-0.5 shrink-0 text-accent" size={14} />
                          <span className="truncate text-foreground/90">{highlight.split(':')[0]}</span>
                        </li>
                      ))}
                    </ul>

                    <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-accent">
                      Read case study <ArrowRight className="transition-transform group-hover:translate-x-2" size={16} />
                    </span>
                  </div>
                </Link>
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
