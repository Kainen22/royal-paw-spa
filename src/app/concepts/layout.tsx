import type { Metadata } from 'next'
import { ConceptChrome } from '@/concepts/chrome/ConceptChrome'

export const metadata: Metadata = {
  title: 'Concept sandbox',
  description: 'Seven Royal Paw Spa homepage concepts for preview only.',
  robots: { index: false, follow: false },
}

export default function ConceptsLayout({ children }: { children: React.ReactNode }) {
  return <ConceptChrome>{children}</ConceptChrome>
}
