// seo.ts
// Shared helpers so every page gets the same canonical URL / Open Graph /
// Twitter card wiring from just a title, description, and path.

import type { Metadata } from 'next'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from './site'

interface PageMetadataInput {
  title: string
  description: string
  /** Site-relative path, e.g. '/services' or '/software/cafe-crm'. */
  path: string
  /** Site-relative image path or absolute URL. Defaults to the shared OG image. */
  image?: string
}

export function pageMetadata({ title, description, path, image }: PageMetadataInput): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`
  const ogImage = image ?? DEFAULT_OG_IMAGE

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

interface OrganizationJsonLdInput {
  logoUrl: string
}

export function organizationJsonLd({ logoUrl }: OrganizationJsonLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: logoUrl,
    description: 'Scale99 engineers the systems, experiences, and momentum that move ambitious businesses forward.',
    email: 'hello@scale-99.com',
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  }
}

export interface BreadcrumbItem {
  name: string
  path: string
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.path === '/' ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  }
}

export function faqJsonLd(faqs: { q: string, a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

interface ProductJsonLdInput {
  name: string
  description: string
  category: string
  path: string
  image?: string
}

export function productJsonLd({ name, description, category, path, image }: ProductJsonLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory: category,
    url: `${SITE_URL}${path}`,
    image: image ? `${SITE_URL}${image}` : undefined,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}${path}`,
    },
  }
}
