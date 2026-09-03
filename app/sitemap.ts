import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/products-data'
import { SITE_URL } from '@/lib/site'

const staticRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/software', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/websites', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/case-studies', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/industries', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/blog', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/partners', priority: 0.5, changeFrequency: 'monthly' as const },
  { path: '/testimonials', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries = staticRoutes.map(route => ({
    url: route.path === '/' ? SITE_URL : `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const productEntries = getAllSlugs().map(slug => ({
    url: `${SITE_URL}/software/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticEntries, ...productEntries]
}
