import Image from 'next/image'
import Link from 'next/link'
import {
  bedLabel,
  flexibilityLabels,
  formatRent,
  type Listing,
} from '@/lib/listings'

export function ListingCard({ listing }: { listing: Listing }) {
  const tags = listing.flexibility.slice(0, 3)

  return (
    <article className="listing-card">
      <Link href={`/listings/${listing.id}`} className="listing-card-media">
        <Image
          src={listing.image}
          alt=""
          fill
          sizes="(max-width: 700px) 100vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </Link>
      <div className="listing-card-body">
        <p className="listing-meta">
          {listing.area} · {listing.neighborhood}
        </p>
        <h3>
          <Link href={`/listings/${listing.id}`}>{listing.name}</Link>
        </h3>
        <p className="listing-rent">
          {formatRent(listing)}
          <span>/mo</span>
        </p>
        <p className="listing-beds">{bedLabel(listing.beds)}</p>
        <ul className="tag-row">
          {tags.map((tag) => (
            <li key={tag}>{flexibilityLabels[tag]}</li>
          ))}
        </ul>
        <Link className="text-link" href={`/listings/${listing.id}`}>
          View screening fit →
        </Link>
      </div>
    </article>
  )
}
