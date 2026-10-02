import type { Metadata } from 'next'
import { BlogCard } from '@/components/BlogCard'
import { CtaBand } from '@/components/CtaBand'
import { PageHeader } from '@/components/PageHeader'
import { PageShell } from '@/components/PageShell'
import { getBlogPosts } from '@/lib/blog'
import { getPageContent } from '@/lib/notion'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Updates from Royal Paw Spa — booking notes, service news, and mobile grooming tips.',
}

export default async function BlogPage() {
  const [{ site }, posts] = await Promise.all([getPageContent(), getBlogPosts()])

  return (
    <PageShell>
      <div className="container page">
        <PageHeader
          kicker="Blog"
          title="Updates from the spa van"
          description="Booking notes, service news, and what we’re seeing on the road."
        />
        {posts.length > 0 ? (
          <div className="grid-3 blog-grid">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="blog-empty">No updates yet — check back soon.</p>
        )}
      </div>
      <CtaBand phone={site.contactPhone} />
    </PageShell>
  )
}
