export const site = {
  name: 'RenterMatch',
  tagline: 'Apartments that will actually consider your application.',
  market: 'Denver metro',
  marketFull: 'Denver–Aurora–Lakewood',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  email: process.env.LEAD_NOTIFY_EMAIL || 'hello@rentermatch.example',
} as const

export const creditProfiles = [
  { value: 'no-credit', label: 'No credit history' },
  { value: 'thin-file', label: 'Thin / limited credit file' },
  { value: 'low-score', label: 'Low credit score' },
  { value: 'recent-issues', label: 'Recent credit issues (collections, bankruptcy, eviction)' },
  { value: 'rebuilding', label: 'Rebuilding — improving but not there yet' },
  { value: 'other-barrier', label: 'Other barrier (income docs, rental history, cosigner)' },
] as const

export const incomeTypes = [
  { value: 'w2', label: 'Traditional W-2 employment' },
  { value: 'self-employed', label: 'Self-employed / 1099' },
  { value: 'gig', label: 'Gig / tips / cash-heavy' },
  { value: 'benefits', label: 'Benefits / disability / fixed income' },
  { value: 'mixed', label: 'Mixed or nontraditional documentation' },
] as const

export const denverAreas = [
  'Denver (city)',
  'Aurora',
  'Lakewood',
  'Arvada',
  'Westminster',
  'Thornton',
  'Centennial',
  'Englewood',
  'Littleton',
  'Commerce City',
  'Other Denver metro',
] as const
