import type { Metadata } from 'next'
import { JsonLd } from '@/components/json-ld'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'
import { SITE_EMAIL, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy — Scale99',
  description: 'How Scale99 collects, uses, and protects information submitted through this site.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }])} />
      <main className="min-h-screen bg-background pt-16 text-foreground lg:pt-20">
        <section className="mx-auto max-w-3xl px-6 pb-28 pt-4 lg:px-10">
          <p className="eyebrow text-center">Legal</p>
          <h1 className="mx-auto mt-5 max-w-2xl text-center font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-center text-sm text-muted-foreground">Last updated: September 3, 2026</p>

          <div className="mt-16 space-y-10 text-left leading-7 text-muted-foreground">
            <p>
              This policy explains what information {SITE_NAME} collects when you use this website, how it&apos;s used, and
              the choices you have. It applies to scale-99.com and its subpages.
            </p>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Information we collect</h2>
              <p className="mt-3">
                <strong className="font-semibold text-foreground">Information you provide.</strong> When you submit the
                contact form, we collect your name, email address, company name (if given), and the message you send.
                We use this solely to respond to your inquiry.
              </p>
              <p className="mt-3">
                <strong className="font-semibold text-foreground">Automatically collected information.</strong> We use
                Vercel Web Analytics to understand aggregate traffic patterns—pages visited, referring sources, and
                general device/browser category. This is cookieless and does not use persistent identifiers to track
                individual visitors across sites.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">How we use information</h2>
              <p className="mt-3">
                We use contact form submissions to respond to inquiries and, where relevant, follow up about our
                services. We use aggregate analytics to understand how the site is used and to improve it. We do not
                use your information for advertising, and we do not sell or rent it to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Sharing</h2>
              <p className="mt-3">
                We share information only with service providers that help us operate this site—our email delivery
                provider (to route contact form submissions) and our hosting provider (Vercel). We don&apos;t share
                information with anyone else except where required by law.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Data retention</h2>
              <p className="mt-3">
                We keep contact form submissions only as long as needed to respond to your inquiry and maintain a
                reasonable record of business correspondence, after which we delete it on request.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Your rights</h2>
              <p className="mt-3">
                You can ask us to access, correct, or delete any personal information we hold about you by emailing{' '}
                <a href={`mailto:${SITE_EMAIL}`} className="text-accent transition-colors hover:text-foreground">{SITE_EMAIL}</a>.
                We&apos;ll respond within a reasonable timeframe.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Security</h2>
              <p className="mt-3">
                We take reasonable technical measures to protect information submitted through this site, including
                transport encryption (HTTPS) for all traffic. No method of transmission or storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Children&apos;s privacy</h2>
              <p className="mt-3">
                This site is not directed at children, and we do not knowingly collect information from anyone under 16.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Changes to this policy</h2>
              <p className="mt-3">
                We may update this policy from time to time. Material changes will be reflected by updating the date
                at the top of this page.
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
