import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-screen flex-col bg-background text-center text-foreground">
        <section className="relative flex flex-1 items-center overflow-hidden px-6 py-28 lg:px-10">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow">404</p>
            <h1 className="mx-auto mt-5 max-w-xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              This page didn&apos;t make the cut.
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg leading-7 text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist or has moved.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/" className="flex items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
                Back to home <ArrowRight size={16} />
              </Link>
              <Link href="/software" className="flex items-center gap-3 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:border-foreground">
                Explore our software
              </Link>
            </div>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  )
}
