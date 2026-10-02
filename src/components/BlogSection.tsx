import Link from 'next/link'
import { BlogCard } from '@/components/BlogCard'
import { routes } from '@/lib/routes'
import type { BlogPost } from '@/lib/types'

type BlogSectionProps = {
  posts: BlogPost[]
}

export function BlogSection({ posts }: BlogSectionProps) {
  if (posts.length === 0) return null

  return (
    <section className="section container" aria-labelledby="blog-heading">
      <div className="section-head section-head-row">
        <div>
          <p className="eyebrow">From the van</p>
          <h2 id="blog-heading">Business updates</h2>
          <p className="section-lead">Schedule notes, service news, and little wins from Royal Paw Spa.</p>
        </div>
        <Link className="text-link" href={routes.blog}>
          See all posts →
        </Link>
      </div>
      <div className="grid-3 blog-grid">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
