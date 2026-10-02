import { cache } from 'react'
import { getPageContent } from './notion'
import type { BlogPost } from './types'

export function formatBlogDate(date: string) {
  const parsed = new Date(`${date}T12:00:00`)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function sortBlogPosts(posts: BlogPost[]) {
  return [...posts]
    .filter((post) => post.published && post.title && post.slug)
    .sort((a, b) => b.date.localeCompare(a.date))
}

/** Recent posts for the homepage teaser. */
export function getRecentBlogPosts(posts: BlogPost[], limit = 3) {
  return sortBlogPosts(posts).slice(0, limit)
}

export function getBlogPostBySlug(posts: BlogPost[], slug: string) {
  return sortBlogPosts(posts).find((post) => post.slug === slug) ?? null
}

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const { posts } = await getPageContent()
  return sortBlogPosts(posts)
})
