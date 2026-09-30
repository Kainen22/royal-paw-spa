import Link from 'next/link'
import { conceptKit as k } from '@/concepts/shared'
import './concept.css'

const proofs = [
  {
    label: 'Fully Equipped Mobile Spa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 13c2.4 0 4.2-1.9 4.2-4.2S14.4 4.6 12 4.6 7.8 6.5 7.8 8.8 9.6 13 12 13Z" />
        <path d="M5.5 19.2c.7-2.6 3.2-4.2 6.5-4.2s5.8 1.6 6.5 4.2" />
      </svg>
    ),
  },
  {
    label: 'One-on-One Care',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z" />
      </svg>
    ),
  },
  {
    label: 'No Cages or Kennels',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 3 4 7v6c0 5 3.5 8.2 8 9 4.5-.8 8-4 8-9V7l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'We Come to You',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.4" />
      </svg>
    ),
  },
]

const serviceCards = [
  {
    name: 'Bath & Brush',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M4 12h16v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-4Z" />
        <path d="M7 12V8a5 5 0 0 1 10 0" />
      </svg>
    ),
  },
  {
    name: 'Haircuts',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="6" cy="7" r="2.5" />
        <circle cx="6" cy="17" r="2.5" />
        <path d="M8 8.5 20 18M8 15.5 20 6" />
      </svg>
    ),
  },
  {
    name: 'Nail Trims',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M8 4h5l5 8-4 8H9L4 12l4-8Z" />
      </svg>
    ),
  },
  {
    name: 'Ear Cleaning',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M8 12c0-4 2.5-7 6-7s5 2 5 5-1.5 4-3.5 4c-1 0-1.5-.7-1.5-1.6V10" />
        <circle cx="14" cy="14.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Skin & Coat Care',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 13c2.4 0 4.2-1.9 4.2-4.2S14.4 4.6 12 4.6 7.8 6.5 7.8 8.8 9.6 13 12 13Z" />
        <path d="M5.5 19.2c.7-2.6 3.2-4.2 6.5-4.2s5.8 1.6 6.5 4.2" />
      </svg>
    ),
  },
]

export function CleanProfessionalConcept() {
  return (
    <div className="c-clean-professional">
      <header className="cp-nav">
        <div className="cp-brand">
          <img src="/logo.png" alt="" width={34} height={34} />
          <span>{k.brand}</span>
        </div>
        <div className="cp-nav-right">
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
        </div>
      </header>

      <section className="cp-hero">
        <div className="cp-copy">
          <p className="cp-kicker">Premium Pet Grooming</p>
          <h1>Healthy Pets. Happy Humans.</h1>
          <p className="cp-lede">
            Professional grooming, gentle care, and a stress-free experience for your furry family.
          </p>
          <Link className="cp-btn cp-btn-lg" href={k.bookHref}>
            Book Your Pet&apos;s Spa Day →
          </Link>
          <div className="cp-proofs">
            {proofs.map((item) => (
              <article key={item.label}>
                <span>{item.icon}</span>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="cp-media">
          <img src={k.photos.gallery[7]} alt="Happy freshly groomed dog" />
          <p className="cp-note">
            Same love, New location <span aria-hidden>♡</span>
          </p>
        </div>
      </section>

      <section className="cp-services">
        <h2>Our Grooming Services</h2>
        <p className="cp-sub">From a quick bath to a full spa treatment, we do it all.</p>
        <div className="cp-cards">
          {serviceCards.map((card) => (
            <article key={card.name}>
              <span>{card.icon}</span>
              <h3>{card.name}</h3>
            </article>
          ))}
        </div>
        <div className="cp-packages">
          {k.packages.map((pkg) => (
            <article key={pkg.id}>
              <h3>{pkg.name}</h3>
              <p>{pkg.description}</p>
              <strong>{pkg.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="cp-review">
        <p className="cp-stars">{'★'.repeat(5)}</p>
        <blockquote>“{k.reviews[0]?.quote}”</blockquote>
        <cite>
          — {k.reviews[0]?.author} · {k.rating.score} from {k.rating.count} Google reviews
        </cite>
      </section>

      <footer className="cp-foot">
        <span>{k.brand}</span>
        <a href={k.phoneHref}>{k.phone}</a>
        <span>{k.serviceArea}</span>
      </footer>
    </div>
  )
}
