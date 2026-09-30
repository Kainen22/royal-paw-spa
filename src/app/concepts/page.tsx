import { redirect } from 'next/navigation'
import { defaultConceptSlug } from '@/concepts/catalog'

export default function ConceptsIndexPage() {
  redirect(`/concepts/${defaultConceptSlug}`)
}
