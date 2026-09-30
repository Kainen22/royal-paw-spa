import Link from 'next/link'
import { conceptKit as k } from '@/concepts/shared'
import './concept.css'

const areas = k.serviceArea
  .split(/\s*,\s*|\s*&\s*/)
  .map((s) => s.trim())
  .filter(Boolean)

const benefits = [
  {
    label: 'Professional Groomers',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M12 13c2.4 0 4.2-1.9 4.2-4.2S14.4 4.6 12 4.6 7.8 6.5 7.8 8.8 9.6 13 12 13Z" />
        <path d="M5.5 19.2c.7-2.6 3.2-4.2 6.5-4.2s5.8 1.6 6.5 4.2" />
        <circle cx="6.2" cy="7.2" r="1.1" />
        <circle cx="17.8" cy="7.2" r="1.1" />
        <circle cx="4.8" cy="11.2" r="1.1" />
        <circle cx="19.2" cy="11.2" r="1.1" />
      </svg>
    ),
  },
  {
    label: 'We Come to You',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
      </svg>
    ),
  },
  {
    label: 'One-on-One Care',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z" />
      </svg>
    ),
  },
  {
    label: 'No Car Rides or Cages',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <rect x="5" y="7" width="14" height="11" rx="1.5" />
        <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
        <path d="M4 20 20 4" />
      </svg>
    ),
  },
  {
    label: 'A Calmer, Happier Pet',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M12 20c4-3.2 6.5-6.2 6.5-9.2A3.5 3.5 0 0 0 12 8a3.5 3.5 0 0 0-6.5 2.8c0 3 2.5 6 6.5 9.2Z" />
        <path d="M12 8V4" />
        <path d="M9.5 5.5c.8-.8 1.7-1.3 2.5-1.3s1.7.5 2.5 1.3" />
      </svg>
    ),
  },
]

export function LuxurySpaConcept() {
  return (
    <div className="c-luxury-spa">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <img src="/logo.png" alt="" width={36} height={36} />
          <span>{k.brand}</span>
        </Link>
        <nav aria-label="Primary">
          {k.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="ls-btn" href={k.bookHref}>
          Book Now
        </Link>
      </header>

      <section className="ls-hero">
        <div className="ls-hero-copy">
          <p className="ls-kicker">— Luxury Mobile Grooming —</p>
          <h1>Luxury mobile grooming. We come to you.</h1>
          <p className="ls-lede">{k.heroSubtitle}</p>
          <Link className="ls-btn ls-btn-lg" href={k.bookHref}>
            Book your pet&apos;s spa day →
          </Link>
        </div>

        <div className="ls-hero-media">
          <img
            className="ls-hero-photo"
            src={k.photos.gallery[2]}
            alt="Dog enjoying a spa wash in the mobile van"
          />
          <img className="ls-hero-van" src={k.photos.gallery[5]} alt="Royal Paw Spa van" />
          <aside className="ls-area">
            <strong>
              <span aria-hidden>📍</span> Service Area
            </strong>
            <ul>
              {areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="ls-proofs">
        <div className="ls-proofs-row">
          {benefits.map((item) => (
            <article key={item.label}>
              <span className="ls-icon">{item.icon}</span>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
        <div className="ls-aside">
          <svg className="ls-botanical" viewBox="0 0 120 80" aria-hidden>
            <path
              d="M20 60c18-8 28-28 22-48M40 62c14-10 20-26 14-44M60 64c12-12 16-28 10-46"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <ellipse cx="42" cy="18" rx="8" ry="14" transform="rotate(-28 42 18)" fill="currentColor" opacity=".25" />
            <ellipse cx="58" cy="22" rx="7" ry="12" transform="rotate(18 58 22)" fill="currentColor" opacity=".2" />
            <ellipse cx="74" cy="26" rx="6" ry="11" transform="rotate(-12 74 26)" fill="currentColor" opacity=".18" />
          </svg>
          <p>
            More than a groom.
            <br />
            It&apos;s self care.
          </p>
        </div>
      </section>

      <section className="ls-services">
        <div className="ls-section-head">
          <p className="ls-kicker">Packages</p>
          <h2>Spa packages</h2>
        </div>
        <div className="ls-grid">
          {k.packages.map((pkg) => (
            <article key={pkg.id}>
              <h3>{pkg.name}</h3>
              <p>{pkg.description}</p>
              <strong>{pkg.price}</strong>
              <Link href={k.bookHref}>Book →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="ls-review">
        <p className="ls-stars">{'★'.repeat(5)}</p>
        <blockquote>“{k.reviews[0]?.quote}”</blockquote>
        <cite>— {k.reviews[0]?.author}</cite>
      </section>

      <footer className="ls-foot">
        <span>{k.brand}</span>
        <a href={k.phoneHref}>{k.phone}</a>
        <Link href={k.bookHref}>Book Now</Link>
      </footer>
    </div>
  )
}
