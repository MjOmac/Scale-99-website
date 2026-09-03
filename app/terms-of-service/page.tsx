import type { Metadata } from 'next'
import { JsonLd } from '@/components/json-ld'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'
import { SITE_EMAIL, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service — Scale99',
  description: 'The terms that govern use of the Scale99 website.',
  path: '/terms-of-service',
})

export default function TermsOfServicePage() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Terms of Service', path: '/terms-of-service' }])} />
      <main className="min-h-screen bg-background pt-16 text-foreground lg:pt-20">
        <section className="mx-auto max-w-3xl px-6 pb-28 pt-4 lg:px-10">
          <p className="eyebrow text-center">Legal</p>
          <h1 className="mx-auto mt-5 max-w-2xl text-center font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-center text-sm text-muted-foreground">Last updated: September 3, 2026</p>

          <div className="mt-16 space-y-10 text-left leading-7 text-muted-foreground">
            <p>
              These terms govern your use of scale-99.com (the &quot;Site&quot;), operated by {SITE_NAME}. By using the
              Site, you agree to these terms.
            </p>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Use of the site</h2>
              <p className="mt-3">
                The Site is provided for informational purposes—to describe {SITE_NAME}&apos;s services and software,
                and to let visitors get in touch. You agree not to misuse the Site, including attempting to disrupt
                it, scrape it at scale, or use the contact form to send unsolicited commercial messages.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Intellectual property</h2>
              <p className="mt-3">
                All content on this Site—including text, graphics, logos, product names, and case study
                descriptions—is the property of {SITE_NAME} or its clients and licensors, and is protected by
                applicable intellectual property laws. You may not reproduce, distribute, or create derivative works
                from this content without our written permission.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Third-party links</h2>
              <p className="mt-3">
                Some pages link to websites we&apos;ve built for clients or to other third-party sites. We don&apos;t
                control those sites and aren&apos;t responsible for their content or practices.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">No warranty</h2>
              <p className="mt-3">
                The Site and its content are provided &quot;as is&quot; without warranties of any kind, express or
                implied. We don&apos;t guarantee the Site will be uninterrupted, error-free, or available at all times.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Limitation of liability</h2>
              <p className="mt-3">
                To the fullest extent permitted by law, {SITE_NAME} is not liable for any indirect, incidental, or
                consequential damages arising from your use of the Site.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Changes to these terms</h2>
              <p className="mt-3">
                We may update these terms from time to time. Continued use of the Site after changes take effect
                means you accept the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Contact</h2>
              <p className="mt-3">
                Questions about these terms? Email{' '}
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
