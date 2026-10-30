import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ListingCard } from '@/components/ListingCard'
import {
  bedLabel,
  flexibilityLabels,
  formatRent,
  getListing,
  listings,
} from '@/lib/listings'
import { site } from '@/lib/site'

type Params = Promise<{ id: string }>

export function generateStaticParams() {
  return listings.map((listing) => ({ id: listing.id }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params
  const listing = getListing(id)
  if (!listing) return { title: 'Listing' }
  return {
    title: listing.name,
    description: `${listing.name} in ${listing.area} — ${listing.summary}`,
  }
}

export default async function ListingDetailPage({ params }: { params: Params }) {
  const { id } = await params
  const listing = getListing(id)
  if (!listing) notFound()

  const related = listings
    .filter(
      (item) =>
        item.id !== listing.id &&
        (item.area === listing.area ||
          item.flexibility.some((tag) => listing.flexibility.includes(tag))),
    )
    .slice(0, 3)

  return (
    <>
      <Header tone="dark" />
      <main>
        <section className="listing-hero">
          <div className="container listing-hero-grid">
            <div className="listing-hero-media">
              <Image
                src={listing.image}
                alt=""
                fill
                priority
                sizes="(max-width: 860px) 100vw, 55vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <p className="eyebrow">
                {listing.area} · {listing.neighborhood}
              </p>
              <h1>{listing.name}</h1>
              <p className="listing-rent" style={{ fontSize: '1.35rem' }}>
                {formatRent(listing)}
                <span>/mo</span>
              </p>
              <p>{bedLabel(listing.beds)}</p>
              <p style={{ color: 'var(--ink-soft)' }}>{listing.summary}</p>
              <div className="cta-row" style={{ marginTop: '1.25rem' }}>
                <Link
                  className="btn btn-primary"
                  href={`/apply?listing=${listing.id}&area=${encodeURIComponent(listing.area)}`}
                >
                  Request an intro
                </Link>
                <Link className="btn btn-dark" href="/listings">
                  All listings
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div>
              <h2 style={{ fontSize: '1.7rem' }}>Who this community may work for</h2>
              <ul className="tag-row detail-tags">
                {listing.flexibility.map((tag) => (
                  <li key={tag}>{flexibilityLabels[tag]}</li>
                ))}
              </ul>
              <h3 style={{ marginTop: '1.75rem', fontSize: '1.25rem' }}>Screening notes</h3>
              <p style={{ color: 'var(--ink-soft)' }}>{listing.screeningNotes}</p>
              {listing.incomeMultiple ? (
                <p>
                  <strong>Income guideline:</strong> {listing.incomeMultiple}
                </p>
              ) : null}
              {listing.depositNotes ? (
                <p>
                  <strong>Deposit / alternatives:</strong> {listing.depositNotes}
                </p>
              ) : null}
              <p className="disclaimer" style={{ marginTop: '1.5rem' }}>
                These notes help you avoid wasted application fees. They are not a promise of
                approval. {site.name} does not make housing decisions.
              </p>
            </div>
            <aside className="panel">
              <p className="eyebrow">Next step</p>
              <h3 style={{ fontSize: '1.45rem' }}>Get introduced with context</h3>
              <p>
                Complete a free intake so leasing can see your budget, area, and self-reported
                profile before you pay an application fee.
              </p>
              <Link
                className="btn btn-primary"
                href={`/apply?listing=${listing.id}&area=${encodeURIComponent(listing.area)}`}
              >
                Start intake for {listing.name}
              </Link>
            </aside>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="section" style={{ paddingTop: 0 }}>
            <div className="container">
              <div className="section-head">
                <p className="eyebrow">More options</p>
                <h2>Other communities with similar flexibility</h2>
              </div>
              <div className="listings-grid">
                {related.map((item) => (
                  <ListingCard key={item.id} listing={item} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  )
}
