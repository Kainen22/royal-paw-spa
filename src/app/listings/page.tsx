import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ListingsFilters } from '@/components/ListingsFilters'
import { ListingsGrid } from '@/components/ListingsGrid'
import { ListingsMap } from '@/components/ListingsMap'
import {
  filterListings,
  listings,
  type FlexibilityTag,
  type ListingFilters,
} from '@/lib/listings'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Listings',
  description: `Browse ${site.market} apartment communities open to thin credit, no credit, and other qualification barriers.`,
}

type SearchParams = Promise<Record<string, string | string[] | undefined>>

function first(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0]
  return value
}

export default async function ListingsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams
  const filters: ListingFilters = {
    area: first(params.area) || undefined,
    tag: (first(params.tag) as FlexibilityTag | undefined) || undefined,
    maxRent: first(params.maxRent) ? Number(first(params.maxRent)) : undefined,
    beds: first(params.beds) || undefined,
  }

  const results = filterListings(filters)

  return (
    <>
      <Header tone="dark" />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Browse communities</p>
            <h1>Properties that may consider your situation.</h1>
            <p style={{ maxWidth: '48ch', color: 'var(--ink-soft)' }}>
              Explore the {site.market} map, click a pin for screening fit, then request an intro —
              or browse the list below. Listing here is not an approval.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <ListingsFilters filters={filters} />
            <p className="form-note" style={{ margin: '1rem 0 1.25rem' }}>
              Showing {results.length} of {listings.length} communities on the map.{' '}
              <Link href="/apply">Get matched</Link> if you want us to intro you directly.
            </p>
            <ListingsMap listings={results} />
            <div className="section-head" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              <p className="eyebrow">List view</p>
              <h2 style={{ fontSize: '1.55rem' }}>Same communities, as cards</h2>
            </div>
            <ListingsGrid listings={results} />
            <p className="disclaimer" style={{ marginTop: '2.5rem' }}>
              Screening notes are based on partner conversations and published policies for this MVP
              seed set. Map pins are approximate. Criteria change. {site.name} does not pull credit
              or approve applications. Equal housing opportunity.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
