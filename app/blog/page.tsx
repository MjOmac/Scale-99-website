import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Blog — Scale99',
  description: 'Perspectives, field notes, and briefings from the Scale99 team.',
}

const posts = [
  { type: 'Perspective', title: 'The operating model is the product.', date: '06.12.26' },
  { type: 'Field notes', title: 'What scale actually feels like.', date: '05.28.26' },
  { type: 'Briefing', title: 'The new rules of useful AI.', date: '05.14.26' },
  { type: 'Case study', title: 'Where automation actually pays off.', date: '04.30.26' },
  { type: 'Perspective', title: 'Why generic CRMs eventually break.', date: '04.16.26' },
  { type: 'Field notes', title: 'What a six-week build really looks like.', date: '04.02.26' },
]

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-16 text-center text-foreground lg:pt-20">
        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow">From the field</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Useful thinking.
          </h1>
        </section>

        <section className="border-t border-white/10 px-6 pb-28 lg:px-10 lg:pb-40">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-5 md:grid-cols-3">
              {posts.map(post => (
                <article key={post.title} className="group rounded-md border border-white/10 bg-surface p-7 transition-colors hover:border-accent/40">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{post.type}</p>
                  <h3 className="mt-5 font-heading text-2xl font-semibold leading-tight transition-colors group-hover:text-accent">{post.title}</h3>
                  <div className="mt-12 flex items-center justify-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <ArrowRight size={16} className="text-accent transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
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
