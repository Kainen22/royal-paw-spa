import type { MetadataRoute } from 'next'
import { routes } from '@/lib/routes'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://royal-paw-spa.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(routes).map((path) => ({
    url: path === '/' ? siteUrl : `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
