import { denverAreas } from '@/lib/site'

export type FlexibilityTag =
  | 'no-credit'
  | 'thin-file'
  | 'low-score'
  | 'second-chance'
  | 'no-rental-history'
  | 'alt-income'
  | 'cosigner-ok'
  | 'guarantor-ok'

export type Listing = {
  id: string
  name: string
  area: (typeof denverAreas)[number]
  neighborhood: string
  rentMin: number
  rentMax: number
  beds: Array<'studio' | '1' | '2' | '3plus'>
  image: string
  summary: string
  screeningNotes: string
  flexibility: FlexibilityTag[]
  incomeMultiple?: string
  depositNotes?: string
  partnerStatus: 'active' | 'pilot' | 'directory'
}

export const flexibilityLabels: Record<FlexibilityTag, string> = {
  'no-credit': 'No credit history OK',
  'thin-file': 'Thin file OK',
  'low-score': 'Lower scores considered',
  'second-chance': 'Second-chance / recent issues',
  'no-rental-history': 'Limited rental history OK',
  'alt-income': 'Alt income docs OK',
  'cosigner-ok': 'Cosigner welcome',
  'guarantor-ok': 'Guarantor / deposit alt OK',
}

export const listings: Listing[] = [
  {
    id: 'aurora-ridge-flats',
    name: 'Aurora Ridge Flats',
    area: 'Aurora',
    neighborhood: 'Near Fitzsimons',
    rentMin: 1245,
    rentMax: 1895,
    beds: ['studio', '1', '2'],
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80',
    summary: 'Garden-style community that reviews applications holistically when credit files are thin.',
    screeningNotes:
      'Will review no-credit and thin-file applicants with verifiable income. Recent collections reviewed case-by-case. Does not guarantee approval.',
    flexibility: ['no-credit', 'thin-file', 'alt-income', 'cosigner-ok'],
    incomeMultiple: '2.5× rent',
    depositNotes: 'Higher deposit or guarantor may be offered instead of declining.',
    partnerStatus: 'pilot',
  },
  {
    id: 'lakewood-station-lofts',
    name: 'Lakewood Station Lofts',
    area: 'Lakewood',
    neighborhood: 'Belmar / light rail',
    rentMin: 1395,
    rentMax: 2190,
    beds: ['1', '2'],
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
    summary: 'Transit-adjacent lofts open to alternative income documentation and cosigners.',
    screeningNotes:
      'Accepts 1099 / gig income with bank statements. Soft on thin files when income is strong. Eviction within 12 months typically declined.',
    flexibility: ['thin-file', 'alt-income', 'cosigner-ok', 'guarantor-ok'],
    incomeMultiple: '2.75× rent',
    partnerStatus: 'active',
  },
  {
    id: 'commerce-city-plaza',
    name: 'Commerce City Plaza',
    area: 'Commerce City',
    neighborhood: 'Prairie Gateway',
    rentMin: 1120,
    rentMax: 1680,
    beds: ['1', '2', '3plus'],
    image:
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1400&q=80',
    summary: 'Value-focused community with an explicit second-chance screening path.',
    screeningNotes:
      'Published second-chance criteria for credit issues older than 24 months. Bankruptcy discharge may be accepted with proof of income stability.',
    flexibility: ['second-chance', 'low-score', 'thin-file', 'no-rental-history'],
    incomeMultiple: '2.5× rent',
    depositNotes: 'Additional deposit often required on second-chance approvals.',
    partnerStatus: 'active',
  },
  {
    id: 'west-colfax-court',
    name: 'West Colfax Court',
    area: 'Denver (city)',
    neighborhood: 'West Colfax',
    rentMin: 1180,
    rentMax: 1750,
    beds: ['studio', '1', '2'],
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
    summary: 'Smaller Denver property that works with first-time renters and thin credit files.',
    screeningNotes:
      'No traditional rental history OK with employer letter + pay stubs. No hard minimum FICO published; manager reviews file.',
    flexibility: ['no-credit', 'thin-file', 'no-rental-history', 'cosigner-ok'],
    incomeMultiple: '2.5× rent',
    partnerStatus: 'pilot',
  },
  {
    id: 'thornton-meadows',
    name: 'Thornton Meadows',
    area: 'Thornton',
    neighborhood: 'Eastlake',
    rentMin: 1290,
    rentMax: 1995,
    beds: ['1', '2', '3plus'],
    image:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80',
    summary: 'Family-friendly property that considers rebuilding credit and guarantor options.',
    screeningNotes:
      'Scores under typical corporate cutoffs reviewed with compensating factors. Guarantor and deposit alternatives available.',
    flexibility: ['low-score', 'second-chance', 'guarantor-ok', 'alt-income'],
    incomeMultiple: '2.5× rent',
    partnerStatus: 'directory',
  },
  {
    id: 'englewood-grove',
    name: 'Englewood Grove',
    area: 'Englewood',
    neighborhood: 'Near Broadway',
    rentMin: 1325,
    rentMax: 2050,
    beds: ['studio', '1', '2'],
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
    summary: 'Mid-rise community reviewing nontraditional income and limited rental history.',
    screeningNotes:
      'Self-employed applicants welcome with 3–6 months bank statements. Thin files OK; recent unpaid rental debt usually declined.',
    flexibility: ['thin-file', 'alt-income', 'no-rental-history', 'cosigner-ok'],
    incomeMultiple: '3× rent preferred; 2.5× with cosigner',
    partnerStatus: 'pilot',
  },
  {
    id: 'arvada-creekside',
    name: 'Arvada Creekside',
    area: 'Arvada',
    neighborhood: 'Olde Town adjacency',
    rentMin: 1410,
    rentMax: 2280,
    beds: ['1', '2'],
    image:
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1400&q=80',
    summary: 'Newer finishes with a flexible deposit path for applicants rebuilding credit.',
    screeningNotes:
      'Will consider low scores when income is strong and rental references clear. Offers elevated deposit in lieu of denial for some profiles.',
    flexibility: ['low-score', 'thin-file', 'guarantor-ok', 'second-chance'],
    incomeMultiple: '2.75× rent',
    depositNotes: 'Deposit alternatives / insurance products sometimes accepted.',
    partnerStatus: 'active',
  },
  {
    id: 'westminster-park-villas',
    name: 'Westminster Park Villas',
    area: 'Westminster',
    neighborhood: 'Near Flatiron Crossing corridor',
    rentMin: 1350,
    rentMax: 2100,
    beds: ['1', '2', '3plus'],
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    summary: 'Larger community with a dedicated path for applicants without U.S. credit history.',
    screeningNotes:
      'No U.S. credit / ITIN scenarios reviewed with income proof and larger deposit or guarantor. Not an approval promise.',
    flexibility: ['no-credit', 'thin-file', 'alt-income', 'guarantor-ok'],
    incomeMultiple: '2.5× rent',
    partnerStatus: 'active',
  },
  {
    id: 'littleton-riverwalk',
    name: 'Littleton Riverwalk',
    area: 'Littleton',
    neighborhood: 'Downtown Littleton',
    rentMin: 1450,
    rentMax: 2350,
    beds: ['1', '2'],
    image:
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1400&q=80',
    summary: 'Walkable location; leasing team reviews first-time renters and thin files weekly.',
    screeningNotes:
      'First-time renters OK. Prefers 12+ months job tenure or strong cosigner. Collections under $1k often workable.',
    flexibility: ['no-credit', 'thin-file', 'no-rental-history', 'cosigner-ok'],
    incomeMultiple: '2.5× rent',
    partnerStatus: 'directory',
  },
  {
    id: 'centennial-oaks',
    name: 'Centennial Oaks',
    area: 'Centennial',
    neighborhood: 'South I-25 corridor',
    rentMin: 1520,
    rentMax: 2480,
    beds: ['1', '2', '3plus'],
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
    summary: 'South metro property that partners on guarantors and deposit alternatives.',
    screeningNotes:
      'Corporate screen still applies, but on-site can escalate flexible cases. Guarantor services and deposit alternatives accepted when criteria allow.',
    flexibility: ['low-score', 'guarantor-ok', 'alt-income', 'cosigner-ok'],
    incomeMultiple: '3× rent without guarantor',
    partnerStatus: 'pilot',
  },
  {
    id: 'five-points-row',
    name: 'Five Points Row',
    area: 'Denver (city)',
    neighborhood: 'Five Points',
    rentMin: 1295,
    rentMax: 1925,
    beds: ['studio', '1'],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    summary: 'Urban row-style units; open to gig workers with bank-statement income proof.',
    screeningNotes:
      'Gig / tips income OK with 3 months deposits visible. Thin or no credit reviewed with income strength.',
    flexibility: ['no-credit', 'thin-file', 'alt-income', 'no-rental-history'],
    incomeMultiple: '2.5× rent',
    partnerStatus: 'active',
  },
  {
    id: 'aurora-second-key',
    name: 'Second Key Aurora',
    area: 'Aurora',
    neighborhood: 'Iliff / Buckley corridor',
    rentMin: 1095,
    rentMax: 1595,
    beds: ['1', '2', '3plus'],
    image:
      'https://images.unsplash.com/photo-1554995207-c75b45273f65?auto=format&fit=crop&w=1400&q=80',
    summary: 'Explicitly marketed to second-chance renters rebuilding after credit or housing setbacks.',
    screeningNotes:
      'Specializes in recent credit issues and prior housing challenges with structured conditions (deposit, rent reporting, payment plan). Approval still property-controlled.',
    flexibility: ['second-chance', 'low-score', 'thin-file', 'no-rental-history', 'guarantor-ok'],
    incomeMultiple: '2.25×–2.5× rent',
    depositNotes: 'Elevated deposit common; rent-reporting enrollment may be offered.',
    partnerStatus: 'active',
  },
]

// Fix Thornton listing - I used a hacky filter. Let me fix that in a follow-up edit.
export function getListing(id: string): Listing | undefined {
  return listings.find((listing) => listing.id === id)
}

export function formatRent(listing: Listing): string {
  return `$${listing.rentMin.toLocaleString()}–$${listing.rentMax.toLocaleString()}`
}

export function bedLabel(beds: Listing['beds']): string {
  const map = { studio: 'Studio', '1': '1 bed', '2': '2 beds', '3plus': '3+ beds' } as const
  return beds.map((b) => map[b]).join(' · ')
}

export type ListingFilters = {
  area?: string
  tag?: FlexibilityTag | ''
  maxRent?: number
  beds?: string
}

export function filterListings(filters: ListingFilters): Listing[] {
  return listings.filter((listing) => {
    if (filters.area && listing.area !== filters.area) return false
    if (filters.tag && !listing.flexibility.includes(filters.tag)) return false
    if (filters.maxRent && listing.rentMin > filters.maxRent) return false
    if (filters.beds && !listing.beds.includes(filters.beds as Listing['beds'][number])) return false
    return true
  })
}
