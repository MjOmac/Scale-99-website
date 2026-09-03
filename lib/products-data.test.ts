import { describe, expect, it } from 'vitest'
import { getAllSlugs, getProductBySlug, products } from './products-data'

describe('products-data', () => {
  it('every product has a unique slug', () => {
    const slugs = products.map(p => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('every product has the fields required for SEO/schema', () => {
    for (const product of products) {
      expect(product.title, `${product.slug}: title`).toBeTruthy()
      expect(product.category, `${product.slug}: category`).toBeTruthy()
      expect(product.shortExplanation, `${product.slug}: shortExplanation`).toBeTruthy()
      expect(product.metaTitle, `${product.slug}: metaTitle`).toBeTruthy()
      expect(product.metaDescription, `${product.slug}: metaDescription`).toBeTruthy()
      expect(product.highlights, `${product.slug}: highlights`).toHaveLength(3)
    }
  })

  it('getProductBySlug finds an existing product', () => {
    const first = products[0]
    expect(getProductBySlug(first.slug)).toBe(first)
  })

  it('getProductBySlug returns undefined for an unknown slug', () => {
    expect(getProductBySlug('does-not-exist')).toBeUndefined()
  })

  it('getAllSlugs returns every product slug', () => {
    expect(getAllSlugs()).toEqual(products.map(p => p.slug))
  })
})
