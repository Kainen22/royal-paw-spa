export type ConceptMeta = {
  slug: string
  number: number
  title: string
  shortTitle: string
  vibe: string
}

/** Seven mockup concepts for the sandbox explorer. */
export const concepts: ConceptMeta[] = [
  {
    slug: 'luxury-spa',
    number: 1,
    title: 'Luxury Spa',
    shortTitle: '1 · Luxury Spa',
    vibe: 'Sophisticated. Premium. Wellness-focused.',
  },
  {
    slug: 'glam-grooming',
    number: 2,
    title: 'Glam Grooming',
    shortTitle: '2 · Glam',
    vibe: 'Playful. Polished. Conversion-focused.',
  },
  {
    slug: 'modern-atelier',
    number: 3,
    title: 'Modern Pet Atelier',
    shortTitle: '3 · Atelier',
    vibe: 'Editorial. Boutique. Refined luxury.',
  },
  {
    slug: 'clean-professional',
    number: 4,
    title: 'Clean & Professional',
    shortTitle: '4 · Clean',
    vibe: 'Trust-focused. Bright. Simple.',
  },
  {
    slug: 'grooming-centered',
    number: 5,
    title: 'Grooming Centered',
    shortTitle: '5 · Grooming',
    vibe: 'Real photos. Detail. Process.',
  },
  {
    slug: 'luxury-elevated',
    number: 6,
    title: 'Luxury Elevated',
    shortTitle: '6 · Elevated',
    vibe: 'Moody. Dark. Crown treatment.',
  },
  {
    slug: 'soft-pastels',
    number: 7,
    title: 'Soft Pastels',
    shortTitle: '7 · Pastels',
    vibe: 'Clean modern. Soft shapes. Friendly.',
  },
]

export function getConcept(slug: string) {
  return concepts.find((concept) => concept.slug === slug)
}

export const defaultConceptSlug = concepts[0].slug
