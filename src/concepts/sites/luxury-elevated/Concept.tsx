import Link from 'next/link'
import { conceptKit } from '@/concepts/shared'
import './concept.css'

const features = [
  {
    title: 'Premium Products & Tools',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M8 3h8l1 4H7L8 3Z" />
        <path d="M9 7v11a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7" />
        <path d="M10 11h4M10 15h4" />
      </svg>
    ),
  },
  {
    title: 'Experienced Groomers',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 13c2.5 0 4.5-2 4.5-4.5S14.5 4 12 4 7.5 6 7.5 8.5 9.5 13 12 13Z" />
        <path d="M7 13.5c-1.2.7-2 1.9-2 3.3V19h14v-2.2c0-1.4-.8-2.6-2-3.3" />
        <circle cx="12" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Mobile & Fully Equipped',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 14V9a2 2 0 0 1 2-2h9l4 4v3" />
        <path d="M3 14h15a2 2 0 0 1 2 2v1H3v-3Z" />
        <circle cx="7" cy="18" r="1.5" />
        <circle cx="17" cy="18" r="1.5" />
      </svg>
    ),
  },
  {
    title: 'One-on-One Attention',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
      </svg>
    ),
  },
]

export function LuxuryElevatedConcept() {
  const review = conceptKit.reviews[0]
  const starCount = Math.round(Number.parseFloat(conceptKit.rating.score)) || 5

  return (
    <div className="c-luxury-elevated">
      <header className="le-nav">
        <div className="le-brand">
          <img src="/logo.png" alt="" width={34} height={34} />
          <span>{conceptKit.brand}</span>
        </div>
        <nav>
          {conceptKit.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="le-btn le-btn-accent" href={conceptKit.bookHref}>
          Book Now →
        </Link>
      </header>

      <section className="le-hero">
        <div className="le-hero-copy">
          <h1>The Royal Treatment — At Your Door.</h1>
          <p>
            Premium grooming services for pets who deserve the very best. Convenience, comfort and
            care — all in one.
          </p>
          <Link className="le-btn le-btn-white le-btn-lg" href={conceptKit.bookHref}>
            Book Your Pet&apos;s Spa Day →
          </Link>
        </div>
        <div className="le-hero-media">
          <div className="le-crown" aria-hidden>
            <svg viewBox="0 0 64 36" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 28 14 8l10 12L32 4l8 16 10-12 8 20H6Z" />
              <path d="M6 28h52v4H6z" />
              <circle cx="14" cy="8" r="2.2" fill="currentColor" stroke="none" />
              <circle cx="32" cy="4" r="2.2" fill="currentColor" stroke="none" />
              <circle cx="50" cy="8" r="2.2" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <img src={conceptKit.photos.gallery[0]} alt="Freshly groomed pup ready for the spa" />
        </div>
      </section>

      <section className="le-features" aria-label="Why Royal Paw Spa">
        {features.map((feature) => (
          <article key={feature.title}>
            <span className="le-icon">{feature.icon}</span>
            <p>{feature.title}</p>
          </article>
        ))}
      </section>

      <section className="le-packages">
        <div className="le-section-head">
          <p className="le-kicker">Spa packages</p>
          <h2>Curated care, delivered.</h2>
        </div>
        <div className="le-grid">
          {conceptKit.packages.map((pkg) => (
            <article key={pkg.id}>
              <h3>{pkg.name}</h3>
              <p>{pkg.description}</p>
              <strong>{pkg.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="le-about">
        <div className="le-about-media">
          <img src={conceptKit.photos.gallery[4]} alt="Grooming in the mobile spa" />
        </div>
        <div className="le-about-copy">
          <p className="le-kicker">{conceptKit.heroKicker}</p>
          <h2>{conceptKit.aboutTitle}</h2>
          <p>{conceptKit.aboutBody}</p>
          <ul>
            {conceptKit.proofs.slice(0, 4).map((proof) => (
              <li key={proof}>{proof}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="le-review">
        <blockquote>
          <p>&ldquo;{review.quote}&rdquo;</p>
          <footer>
            <span className="le-stars" aria-label={`${conceptKit.rating.score} stars`}>
              {Array.from({ length: starCount }, (_, i) => (
                <span key={i}>★</span>
              ))}
            </span>
            <cite>{review.author}</cite>
            <span className="le-rating-meta">
              {conceptKit.rating.score} · {conceptKit.rating.count} Google reviews
            </span>
          </footer>
        </blockquote>
      </section>

      <section className="le-cta">
        <div>
          <h2>Ready for the royal treatment?</h2>
          <p>
            Serving {conceptKit.serviceArea} · {conceptKit.phone}
          </p>
        </div>
        <Link className="le-btn le-btn-white le-btn-lg" href={conceptKit.bookHref}>
          Book online →
        </Link>
      </section>

      <footer className="le-foot">
        <div className="le-foot-bar">LUXURY / CARE / CONVENIENCE</div>
        <div className="le-foot-meta">
          <span>{conceptKit.brand}</span>
          <a href={conceptKit.phoneHref}>{conceptKit.phone}</a>
          <span>{conceptKit.hours}</span>
        </div>
      </footer>
    </div>
  )
}
