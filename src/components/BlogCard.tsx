import Link from 'next/link'
import { formatBlogDate } from '@/lib/blog'
import { blogPostPath } from '@/lib/routes'
import type { BlogPost } from '@/lib/types'

type BlogCardProps = {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const href = blogPostPath(post.slug)

  return (
    <article className="card blog-card">
      <time className="blog-card-date" dateTime={post.date}>
        {formatBlogDate(post.date)}
      </time>
      <h3 className="blog-card-title">
        <Link href={href}>{post.title}</Link>
      </h3>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      <Link className="text-link" href={href}>
        Read update →
      </Link>
    </article>
  )
}
