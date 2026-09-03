import type { Metadata } from 'next'
import { JsonLd } from '@/components/json-ld'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'
import { SITE_EMAIL, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Policy — Scale99',
  description: 'What cookies and tracking technologies Scale99 uses on this site.',
  path: '/cookie-policy',
})

export default function CookiePolicyPage() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Cookie Policy', path: '/cookie-policy' }])} />
      <main className="min-h-screen bg-background pt-16 text-foreground lg:pt-20">
        <section className="mx-auto max-w-3xl px-6 pb-28 pt-4 lg:px-10">
          <p className="eyebrow text-center">Legal</p>
          <h1 className="mx-auto mt-5 max-w-2xl text-center font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Cookie Policy
          </h1>
          <p className="mt-4 text-center text-sm text-muted-foreground">Last updated: September 3, 2026</p>

          <div className="mt-16 space-y-10 text-left leading-7 text-muted-foreground">
            <p>
              This page explains how {SITE_NAME} uses cookies and similar technologies on scale-99.com.
            </p>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Our short answer</h2>
              <p className="mt-3">
                This site does not use tracking or advertising cookies. We use Vercel Web Analytics, which is
                cookieless by design—it doesn&apos;t set any cookie or persistent identifier in your browser, and it
                doesn&apos;t track you across other sites.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">What are cookies</h2>
              <p className="mt-3">
                Cookies are small text files a website can store in your browser to remember information between
                visits, commonly used for logins, preferences, or tracking. This site doesn&apos;t rely on cookies for
                any of its core functionality.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Third-party cookies</h2>
              <p className="mt-3">
                We don&apos;t embed third-party advertising, social media widgets, or embedded video players that would
                set their own cookies. If that changes, we&apos;ll update this page.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Managing cookies</h2>
              <p className="mt-3">
                Since this site doesn&apos;t set cookies, there&apos;s nothing to opt out of here. If you&apos;re
                cookie-cautious in general, every modern browser lets you view, block, or delete cookies from its
                privacy or security settings.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Changes to this policy</h2>
              <p className="mt-3">
                If we ever introduce cookies (for example, if we add a feature that requires them), we&apos;ll update
                this page to describe what&apos;s set and why.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Contact</h2>
              <p className="mt-3">
                Questions about this policy? Email{' '}
                <a href={`mailto:${SITE_EMAIL}`} className="text-accent transition-colors hover:text-foreground">{SITE_EMAIL}</a>.
              </p>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
