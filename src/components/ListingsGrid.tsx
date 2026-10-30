import { ListingCard } from '@/components/ListingCard'
import type { Listing } from '@/lib/listings'

export function ListingsGrid({ listings }: { listings: Listing[] }) {
  if (listings.length === 0) {
    return (
      <p className="panel" style={{ marginTop: '1rem' }}>
        No communities match those filters yet. Widen your budget or area, or{' '}
        <a href="/apply">submit an intake</a> and we’ll match offline with partners.
      </p>
    )
  }

  return (
    <div className="listings-grid">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  )
}
