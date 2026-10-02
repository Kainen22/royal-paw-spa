import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/CtaBand'
import { PageShell } from '@/components/PageShell'
import { formatBlogDate, getBlogPostBySlug, getBlogPosts } from '@/lib/blog'
import { getPageContent } from '@/lib/notion'
import { routes } from '@/lib/routes'

export const revalidate = 300

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const posts = await getBlogPosts()
  const post = getBlogPostBySlug(posts, slug)
  if (!post) return { title: 'Update' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const [{ site }, posts] = await Promise.all([getPageContent(), getBlogPosts()])
  const post = getBlogPostBySlug(posts, slug)
  if (!post) notFound()

  const paragraphs = post.body
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean)

  return (
    <PageShell>
      <article className="container page page-narrow blog-post">
        <Link className="text-link blog-back" href={routes.blog}>
          ← All updates
        </Link>
        <header className="blog-post-header">
          <p className="eyebrow">Update</p>
          <h1>{post.title}</h1>
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
        </header>
        <div className="blog-post-body">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </article>
      <CtaBand phone={site.contactPhone} />
    </PageShell>
  )
}
