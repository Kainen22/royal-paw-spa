import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ListingCard } from '@/components/ListingCard'
import { listings } from '@/lib/listings'
import { site } from '@/lib/site'

const heroImage =
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2000&q=80'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="container hero-content">
            <p className="brand-mark">{site.name}</p>
            <h1>{site.tagline}</h1>
            <p className="lede">
              Free matching for {site.market} renters with thin credit, no credit, or other
              barriers — sent only to communities open to your situation.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/apply">
                Start free intake
              </Link>
              <Link className="btn btn-secondary" href="/listings">
                Browse listings
              </Link>
            </div>
          </div>
        </section>

        <section className="section" id="how">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">How it works</p>
              <h2>Stop paying application fees to get rejected.</h2>
              <p>
                Traditional search shows units. We match you to properties whose published
                screening approach may accommodate your circumstances.
              </p>
            </div>
            <div className="steps">
              <article className="step">
                <h3>Tell us your situation</h3>
                <p>
                  Budget, area, income type, and a self-reported credit profile. No hard pull. No
                  fee.
                </p>
              </article>
              <article className="step">
                <h3>Browse or get matched</h3>
                <p>
                  See partner listings with screening-fit tags, or let us intro you — with consent —
                  to communities that work with applicants like you.
                </p>
              </article>
              <article className="step">
                <h3>Tour places that fit</h3>
                <p>
                  Leasing teams reach out about real options — not another stack of blind
                  applications.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }} id="listings">
          <div className="container">
            <div className="section-head section-head-row">
              <div>
                <p className="eyebrow">Open communities</p>
                <h2>Listings from properties that work with this population.</h2>
                <p>
                  Browse {site.market} communities with flexible, thin-file, or second-chance
                  screening notes — then request an intro instead of spraying applications.
                </p>
              </div>
              <Link className="text-link" href="/listings">
                See all {listings.length} listings →
              </Link>
            </div>
            <div className="listings-grid">
              {listings.slice(0, 3).map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container split">
            <div>
              <div className="section-head" style={{ marginBottom: '1.25rem' }}>
                <p className="eyebrow">Who it’s for</p>
                <h2>Built for renters traditional screening leaves behind.</h2>
                <p>
                  Thin or no credit is our starting niche. Longer term, we help with any barrier
                  that keeps a qualified person from getting housed.
                </p>
              </div>
              <ul className="audience">
                <li>No credit history</li>
                <li>Thin / limited credit file</li>
                <li>Low credit scores</li>
                <li>Recent collections, bankruptcy, or eviction</li>
                <li>Little traditional rental history</li>
                <li>Nontraditional income documentation</li>
              </ul>
            </div>
            <aside className="panel">
              <p className="eyebrow">First market</p>
              <h3 style={{ fontSize: '1.7rem' }}>{site.marketFull}</h3>
              <p>
                We’re proving demand and apartment willingness to pay in one metro before expanding.
                Direct relationships with leasing managers — not a national directory dump.
              </p>
              <Link className="btn btn-dark" href="/apply">
                Get matched in Denver
              </Link>
            </aside>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="partner-band">
              <div>
                <h2>Apartment communities: get relevant demand.</h2>
                <p>
                  Receive consented, pre-qualified prospects instead of spending marketing dollars
                  on applicants who will never clear your screen.
                </p>
              </div>
              <Link className="btn btn-primary" href="/partners">
                Partner with us
              </Link>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <p className="disclaimer">
              <strong>Important:</strong> {site.name} does not promise approval, pull credit
              reports, or make tenant-screening decisions. Housing providers set and apply their
              own criteria. Equal housing opportunity. Licensing and privacy rules vary by state —
              we operate as a referral channel, not a landlord.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
