import Link from 'next/link'
import { conceptKit as k } from '@/concepts/shared'
import './concept.css'

const serviceRow = [
  { name: 'Bath & Brush', icon: 'bath' },
  { name: 'Haircuts', icon: 'scissors' },
  { name: 'Nail Trims', icon: 'nail' },
  { name: 'Ear Cleaning', icon: 'ear' },
  { name: 'Add-Ons', icon: 'plus' },
] as const

function RowIcon({ type }: { type: (typeof serviceRow)[number]['icon'] }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (type) {
    case 'bath':
      return (
        <svg {...common}>
          <path d="M4 14h16v2a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-2z" />
          <path d="M7 14V9a2 2 0 0 1 2-2h1" />
          <path d="M12 4v3M10 5.5h4" />
        </svg>
      )
    case 'scissors':
      return (
        <svg {...common}>
          <circle cx="6" cy="7" r="2.5" />
          <circle cx="6" cy="17" r="2.5" />
          <path d="M8.2 8.8L20 18M8.2 15.2L20 6" />
        </svg>
      )
    case 'nail':
      return (
        <svg {...common}>
          <path d="M8 4c0 0-2 4-2 8a6 6 0 0 0 12 0c0-4-2-8-2-8" />
          <path d="M10 18.5l-1.5 2M14 18.5l1.5 2" />
        </svg>
      )
    case 'ear':
      return (
        <svg {...common}>
          <path d="M8 6c0-2 2-4 5-4s5 2.5 5 5c0 4-3 5-3 8v3" />
          <path d="M10 20h4" />
        </svg>
      )
    case 'plus':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
  }
}

export function GroomingCenteredConcept() {
  const highlightStats = [
    {
      value: `${k.rating.score}★`,
      label: 'Average Rating',
      note: `${k.rating.count} Google reviews`,
    },
    {
      value: `${k.stats[1].value}${k.stats[1].suffix ?? ''}`,
      label: k.stats[1].label,
      note: k.stats[1].note,
    },
    {
      value: `${k.stats[0].value}${k.stats[0].suffix ?? ''}`,
      label: k.stats[0].label,
      note: k.proofs[0],
    },
  ]

  return (
    <div className="c-grooming-centered">
      <section className="gc-hero">
        <img className="gc-hero-bg" src={k.photos.gallery[2]} alt="" />
        <div className="gc-hero-shade" aria-hidden />

        <header className="gc-nav">
          <div className="gc-brand">
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
          <Link className="gc-btn gc-btn-soft" href={k.bookHref}>
            Book Now
          </Link>
        </header>

        <div className="gc-hero-content">
          <div className="gc-hero-copy">
            <p className="gc-kicker">Mobile Pet Grooming</p>
            <h1>
              More than a bath.
              <br />
              It&apos;s self care.
            </h1>
            <p>
              Luxury grooming services delivered to your home, so your pet can relax, feel
              amazing, and look their best.
            </p>
            <Link className="gc-btn gc-btn-soft gc-btn-lg" href={k.bookHref}>
              Book Now →
            </Link>
          </div>
          <p className="gc-note">Clean ears. Fresh coat. Happy pup. ♥</p>
        </div>
      </section>

      <section className="gc-services-row" aria-label="Grooming services">
        {serviceRow.map((service) => (
          <article key={service.name}>
            <span className="gc-row-icon">
              <RowIcon type={service.icon} />
            </span>
            <p>{service.name}</p>
          </article>
        ))}
      </section>

      <section className="gc-split">
        <div className="gc-split-media">
          <img src={k.photos.gallery[7]} alt="Dog getting a gentle blow dry after the bath" />
        </div>
        <div className="gc-split-copy">
          <h2>Professional. Gentle. Experienced.</h2>
          <p>
            Every appointment happens one-on-one in our fully equipped mobile spa — no cages,
            no kennels, and no rushed salon floor. We keep pets safe, comfortable, and calm
            from start to finish.
          </p>
          <div className="gc-stats">
            {highlightStats.map((stat) => (
              <article key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <small>{stat.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gc-proofs">
        <div className="gc-section-head">
          <h2>Built around your pet&apos;s comfort</h2>
          <p>{k.heroSubtitle}</p>
        </div>
        <div className="gc-proof-grid">
          {k.proofs.slice(0, 4).map((proof) => (
            <article key={proof}>
              <span aria-hidden>●</span>
              <p>{proof}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gc-packages">
        <div className="gc-section-head">
          <h2>Popular packages</h2>
          <p>Transparent pricing for the groom your pet actually needs.</p>
        </div>
        <div className="gc-package-grid">
          {k.packages.map((pkg) => (
            <article key={pkg.id}>
              <h3>{pkg.name}</h3>
              <p>{pkg.description}</p>
              <strong>{pkg.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="gc-reviews">
        <div className="gc-section-head">
          <h2>What pet parents say</h2>
          <p>
            {k.rating.score}★ · {k.rating.count} Google reviews
          </p>
        </div>
        <div className="gc-review-grid">
          {k.reviews.map((review) => (
            <blockquote key={review.id}>
              <p>“{review.quote}”</p>
              <footer>— {review.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="gc-area">
        <div>
          <h2>Service area</h2>
          <p>{k.serviceArea}</p>
        </div>
        <div className="gc-area-meta">
          <span>{k.hours}</span>
          <a href={k.phoneHref}>{k.phone}</a>
        </div>
      </section>

      <section className="gc-cta">
        <div>
          <h2>Book the spa that comes to you</h2>
          <p>
            {k.stats[2].value} clients · {k.stats[3].value}
            {k.stats[3].suffix} average client stay
          </p>
        </div>
        <Link className="gc-btn gc-btn-strong gc-btn-lg" href={k.bookHref}>
          Book online →
        </Link>
      </section>

      <footer className="gc-foot">
        <div className="gc-brand">
          <img src="/logo.png" alt="" width={28} height={28} />
          <span>{k.brand}</span>
        </div>
        <a href={k.phoneHref}>{k.phone}</a>
        <span>{k.hours}</span>
      </footer>
    </div>
  )
}
