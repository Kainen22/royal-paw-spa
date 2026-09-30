import Link from 'next/link'
import { conceptKit as k } from '@/concepts/shared'
import './concept.css'

const areas = k.serviceArea
  .split(/\s*,\s*|\s*&\s*/)
  .map((s) => s.trim())
  .filter(Boolean)

export function ModernAtelierConcept() {
  return (
    <div className="c-modern-atelier">
      <header className="ma-nav">
        <div className="ma-brand">
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
        <Link className="ma-btn" href={k.bookHref}>
          Book Now →
        </Link>
      </header>

      <section className="ma-hero">
        <div className="ma-copy">
          <h1>
            Luxury mobile grooming.
            <em>We come to you.</em>
          </h1>
          <p>{k.heroSubtitle}</p>
          <Link className="ma-btn ma-btn-lg" href={k.bookHref}>
            Book your pet&apos;s spa day →
          </Link>
          <div className="ma-area">
            <strong>📍 Service Area</strong>
            <ul>
              {areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ma-collage">
          <p className="ma-note">
            Same love. New location. <span aria-hidden>🐾</span>
          </p>
          <img className="ma-back" src={k.photos.gallery[5]} alt="Royal Paw Spa van" />
          <img className="ma-front" src={k.photos.gallery[4]} alt="Editorial groom detail" />
          <p className="ma-tag">Premium care for every paw</p>
        </div>
      </section>

      <section className="ma-packages">
        <div className="ma-section-head">
          <p>Atelier packages</p>
          <h2>Refined care, driveway-side</h2>
        </div>
        <div className="ma-grid">
          {k.packages.map((pkg) => (
            <article key={pkg.id}>
              <h3>{pkg.name}</h3>
              <p>{pkg.description}</p>
              <strong>{pkg.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="ma-review">
        <blockquote>“{k.reviews[0]?.quote}”</blockquote>
        <cite>— {k.reviews[0]?.author}</cite>
      </section>

      <footer className="ma-foot">
        <span>{k.brand}</span>
        <a href={k.phoneHref}>{k.phone}</a>
        <Link href={k.bookHref}>Book Now</Link>
      </footer>
    </div>
  )
}
