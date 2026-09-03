import { describe, expect, it } from 'vitest'
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, productJsonLd } from './seo'
import { DEFAULT_OG_IMAGE, SITE_URL } from './site'

describe('pageMetadata', () => {
  it('uses the bare site URL as canonical for the homepage', () => {
    const meta = pageMetadata({ title: 'Home', description: 'd', path: '/' })
    expect(meta.alternates?.canonical).toBe(SITE_URL)
  })

  it('builds a full canonical URL for a nested path', () => {
    const meta = pageMetadata({ title: 'Services', description: 'd', path: '/services' })
    expect(meta.alternates?.canonical).toBe(`${SITE_URL}/services`)
  })

  it('falls back to the default OG image when none is given', () => {
    const meta = pageMetadata({ title: 'T', description: 'd', path: '/about' })
    expect(meta.openGraph?.images).toEqual([{ url: DEFAULT_OG_IMAGE }])
    expect(meta.twitter?.images).toEqual([DEFAULT_OG_IMAGE])
  })

  it('uses a provided image over the default', () => {
    const meta = pageMetadata({ title: 'T', description: 'd', path: '/x', image: '/custom.png' })
    expect(meta.openGraph?.images).toEqual([{ url: '/custom.png' }])
  })
})

describe('breadcrumbJsonLd', () => {
  it('numbers items starting at 1 and resolves full URLs', () => {
    const result = breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Software', path: '/software' },
    ])
    expect(result.itemListElement[0]).toMatchObject({ position: 1, name: 'Home', item: SITE_URL })
    expect(result.itemListElement[1]).toMatchObject({ position: 2, name: 'Software', item: `${SITE_URL}/software` })
  })
})

describe('faqJsonLd', () => {
  it('maps question/answer pairs into schema.org Question entities', () => {
    const result = faqJsonLd([{ q: 'What?', a: 'This.' }])
    expect(result.mainEntity).toEqual([
      { '@type': 'Question', name: 'What?', acceptedAnswer: { '@type': 'Answer', text: 'This.' } },
    ])
  })
})

describe('productJsonLd', () => {
  it('omits the image field when none is given', () => {
    const result = productJsonLd({ name: 'X', description: 'd', category: 'c', path: '/software/x' })
    expect(result.image).toBeUndefined()
  })

  it('resolves a relative image path against the site URL', () => {
    const result = productJsonLd({ name: 'X', description: 'd', category: 'c', path: '/software/x', image: '/product-media/x.jpeg' })
    expect(result.image).toBe(`${SITE_URL}/product-media/x.jpeg`)
  })
})
