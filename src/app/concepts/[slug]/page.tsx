import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { concepts, getConcept } from '@/concepts/catalog'
import { conceptComponents } from '@/concepts/registry'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return concepts.map((concept) => ({ slug: concept.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const concept = getConcept(slug)
  if (!concept) return {}
  return {
    title: `${concept.title} concept`,
    description: concept.vibe,
  }
}

export default async function ConceptPage({ params }: PageProps) {
  const { slug } = await params
  const concept = getConcept(slug)
  const Component = conceptComponents[slug]
  if (!concept || !Component) notFound()
  return <Component />
}
