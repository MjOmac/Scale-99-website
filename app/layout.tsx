import type { Metadata, Viewport } from 'next'
import { JsonLd } from '@/components/json-ld'
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo'
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s',
  },
  description: SITE_DESCRIPTION,
  generator: 'Scale-99',
  applicationName: 'Scale99',
  authors: [{ name: 'Scale-99', url: SITE_URL }],
  creator: 'Scale-99',
  publisher: 'Scale-99',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        sizes: '256x256',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        sizes: '256x256',
      },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0A',
}

// Scale-99 — https://scale-99.com
// Designed and developed in-house by Scale-99.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <JsonLd data={organizationJsonLd({ logoUrl: `${SITE_URL}/scale99-logo.png` })} />
        <JsonLd data={websiteJsonLd()} />
        {children}
      </body>
    </html>
  )
}
