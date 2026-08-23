import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { TechCursor } from '@/components/tech-cursor'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scale99 — Built to scale.',
  description: 'Scale99 engineers the systems, experiences, and momentum that move ambitious businesses forward.',
  generator: 'Scale99',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TechCursor />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
