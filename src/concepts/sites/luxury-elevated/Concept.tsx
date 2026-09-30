import Link from 'next/link'
import { conceptKit as k } from '@/concepts/shared'
import './concept.css'

const features = [
  {
    label: 'Premium Products & Tools',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M12 3 4 7v6c0 5 3.5 8.2 8 9 4.5-.8 8-4 8-9V7l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Experienced Groomers',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M12 13c2.4 0 4.2-1.9 4.2-4.2S14.4 4.6 12 4.6 7.8 6.5 7.8 8.8 9.6 13 12 13Z" />
        <path d="M5.5 19.2c.7-2.6 3.2-4.2 6.5-4.2s5.8 1.6 6.5 4.2" />
      </svg>
    ),
  },
  {
    label: 'Mobile & Fully Equipped',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M3 14V9a2 2 0 0 1 2-2h9l4 4v3" />
        <path d="M3 14h15a2 2 0 0 1 2 2v1H3v-3Z" />
        <circle cx="7" cy="18" r="1.5" />
        <circle cx="17" cy="18" r="1.5" />
      </svg>
    ),
  },
  {
    label: 'One-on-One Attention',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z" />
      </svg>
    ),
  },
]

export function LuxuryElevatedConcept() {
  return (
    <div className="c-luxury-elevated">
      <header className="le-nav">
        <div className="le-brand">
          <img src="/logo.png" alt="" width={34} height={34} />
          <span>{k.brand}</span>
        </div>
        <nav>
          {k.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="le-btn le-btn-grad" href={k.bookHref}>
          Book Now
        </Link>
      </header>

      <section className="le-hero">
        <div className="le-copy">
          <p className="le-kicker">Luxury Mobile Pet Grooming</p>
          <h1>The Royal Treatment — At Your Door.</h1>
          <p>
            Premium grooming services for pets who deserve the very best. Convenience, comfort and
            care — all in one.
          </p>
          <Link className="le-btn le-btn-grad le-btn-lg" href={k.bookHref}>
            Book Your Pet&apos;s Spa Day →
          </Link>
        </div>
        <div className="le-portrait">
          <img src={k.photos.gallery[4]} alt="Royal towel portrait" />
          <span className="le-crown" aria-hidden>
            ♛
          </span>
        </div>
      </section>

      <section className="le-features">
        {features.map((item) => (
          <article key={item.label}>
            <span>{item.icon}</span>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <p className="le-strip">Luxury / Care / Convenience</p>

      <section className="le-packages">
        <h2>Signature packages</h2>
        <div className="le-grid">
          {k.packages.map((pkg) => (
            <article key={pkg.id}>
              <h3>{pkg.name}</h3>
              <p>{pkg.description}</p>
              <strong>{pkg.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="le-review">
        <p className="le-stars">{'★'.repeat(5)}</p>
        <blockquote>“{k.reviews[0]?.quote}”</blockquote>
        <cite>— {k.reviews[0]?.author}</cite>
      </section>

      <footer className="le-foot">
        <span>{k.brand}</span>
        <a href={k.phoneHref}>{k.phone}</a>
        <span>{k.serviceArea}</span>
      </footer>
    </div>
  )
}
