import Link from 'next/link'
import { conceptKit as k } from '@/concepts/shared'
import './concept.css'

const proofs = [
  { label: k.proofs[0], icon: 'van' },
  { label: k.proofs[1], icon: 'heart' },
  { label: k.proofs[2], icon: 'shield' },
  { label: k.proofs[3], icon: 'pin' },
] as const

const services = [
  { name: 'Bath & Brush', icon: 'bath' },
  { name: 'Haircuts', icon: 'scissors' },
  { name: 'Nail Trims', icon: 'nail' },
  { name: 'Ear Cleaning', icon: 'ear' },
  { name: 'Skin & Coat Care', icon: 'coat' },
] as const

function ProofIcon({ type }: { type: (typeof proofs)[number]['icon'] }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (type) {
    case 'van':
      return (
        <svg {...common}>
          <path d="M3 14h13v-5H9l-2-3H3v8z" />
          <path d="M16 14h3l2 3v2h-5v-5z" />
          <circle cx="7" cy="17" r="1.5" />
          <circle cx="17.5" cy="17" r="1.5" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 4.6-7 9-7 9z" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      )
  }
}

function ServiceIcon({ type }: { type: (typeof services)[number]['icon'] }) {
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
          <circle cx="16" cy="8" r="1" />
          <circle cx="18.5" cy="10" r="0.8" />
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
          <path d="M11 12c1 .5 2 .5 3 0" />
        </svg>
      )
    case 'coat':
      return (
        <svg {...common}>
          <path d="M12 3c-2 3-5 5-5 10a5 5 0 0 0 10 0c0-5-3-7-5-10z" />
          <path d="M9 14h6M10 17h4" />
        </svg>
      )
  }
}

export function CleanProfessionalConcept() {
  return (
    <div className="c-clean-professional">
      <header className="cp-nav">
        <div className="cp-brand">
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
        <Link className="cp-btn" href={k.bookHref}>
          Book Now
        </Link>
      </header>

      <section className="cp-hero">
        <div className="cp-hero-copy">
          <h1>
            Healthy Pets.
            <br />
            Happy Humans.
          </h1>
          <p>
            Professional grooming, gentle care, and a stress-free experience for your furry
            family.
          </p>
          <Link className="cp-btn cp-btn-lg" href={k.bookHref}>
            Book Your Pet&apos;s Spa Day →
          </Link>
        </div>
        <div className="cp-hero-media">
          <img src={k.photos.hero} alt="Freshly groomed dog ready for the day" />
          <p className="cp-note">Same love. New location. ♥</p>
        </div>
      </section>

      <section className="cp-proofs" aria-label="Why pet parents trust us">
        {proofs.map((proof) => (
          <article key={proof.label}>
            <span className="cp-proof-icon">
              <ProofIcon type={proof.icon} />
            </span>
            <p>{proof.label}</p>
          </article>
        ))}
      </section>

      <section className="cp-services">
        <div className="cp-section-head">
          <h2>Our Grooming Services</h2>
          <p>From a quick bath to a full spa treatment, we do it all.</p>
        </div>
        <div className="cp-service-grid">
          {services.map((service) => (
            <article key={service.name}>
              <span className="cp-service-icon">
                <ServiceIcon type={service.icon} />
              </span>
              <h3>{service.name}</h3>
            </article>
          ))}
        </div>
        <div className="cp-service-cta">
          <Link href={k.nav[0].href}>See full service menu →</Link>
        </div>
      </section>

      <section className="cp-reviews">
        <div className="cp-section-head">
          <h2>Loved by local pet parents</h2>
          <p>
            {k.rating.score}★ average from {k.rating.count} Google reviews
          </p>
        </div>
        <div className="cp-review-grid">
          {k.reviews.map((review) => (
            <blockquote key={review.id}>
              <p>“{review.quote}”</p>
              <footer>— {review.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="cp-about">
        <div className="cp-about-media">
          <img src={k.photos.about} alt="Royal Paw Spa groomer with a happy client" />
        </div>
        <div className="cp-about-copy">
          <h2>{k.aboutTitle}</h2>
          <p>{k.aboutBody.split('\n\n')[0]}</p>
          <p>{k.aboutBody.split('\n\n')[1]}</p>
          <Link className="cp-text-link" href={k.nav[4].href}>
            More about our story →
          </Link>
        </div>
      </section>

      <section className="cp-area">
        <div>
          <h2>We come to you</h2>
          <p>{k.serviceArea}</p>
        </div>
        <div className="cp-area-meta">
          <span>{k.hours}</span>
          <a href={k.phoneHref}>{k.phone}</a>
        </div>
      </section>

      <section className="cp-cta">
        <div>
          <h2>Ready for a calmer groom?</h2>
          <p>Book online in minutes — we bring the spa to your driveway.</p>
        </div>
        <Link className="cp-btn cp-btn-lg" href={k.bookHref}>
          Book Now →
        </Link>
      </section>

      <footer className="cp-foot">
        <div className="cp-brand">
          <img src="/logo.png" alt="" width={28} height={28} />
          <span>{k.brand}</span>
        </div>
        <a href={k.phoneHref}>{k.phone}</a>
        <span>{k.hours}</span>
      </footer>
    </div>
  )
}
