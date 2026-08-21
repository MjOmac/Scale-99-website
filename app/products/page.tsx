import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { products } from '@/lib/products-data'

export const metadata: Metadata = {
  title: 'Products — Scale99',
  description: 'Production-proven platforms from Scale99 across hospitality, construction, healthcare, marketing, and medtech—each built for a real client operation.',
}

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-32 text-center text-foreground lg:pt-40">
        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow">Products</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Built for real businesses. Proven in production.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
            Every product here started as a client engagement—designed around one specific operation, deployed, and stress-tested in the field before it became something we offer anyone else.
          </p>
        </section>

        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {products.map(product => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group flex flex-col rounded-md border border-white/10 bg-surface p-7 transition-colors hover:border-accent/40"
                >
                  <span className="mx-auto w-fit rounded-full border border-white/15 px-3 py-1 text-xs text-muted-foreground">{product.category}</span>
                  <h2 className="mt-5 font-heading text-2xl font-semibold leading-tight transition-colors group-hover:text-accent">{product.title}</h2>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{product.shortExplanation}</p>
                  <span className="mt-auto flex items-center justify-center gap-2 pt-7 text-sm font-semibold text-accent">
                    Read case study <ArrowRight className="transition-transform group-hover:translate-x-2" size={16} />
                  </span>
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
