import Link from 'next/link'
import { conceptKit as k } from '@/concepts/shared'
import './concept.css'

const benefits = [
  { label: 'Professional Groomers', path: 'M12 13c2.4 0 4.2-1.9 4.2-4.2S14.4 4.6 12 4.6 7.8 6.5 7.8 8.8 9.6 13 12 13Zm-6.5 6.2c.7-2.6 3.2-4.2 6.5-4.2s5.8 1.6 6.5 4.2' },
  { label: 'We Come to You', path: 'M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z' },
  { label: 'One-on-One Care', path: 'M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z' },
  { label: 'No Car Rides or Cages', path: 'M5 7h14v11H5V7Zm3 0V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7M4 20 20 4' },
  { label: 'A Calmer, Happier Pet', path: 'M12 20c4-3.2 6.5-6.2 6.5-9.2A3.5 3.5 0 0 0 12 8a3.5 3.5 0 0 0-6.5 2.8c0 3 2.5 6 6.5 9.2Z' },
]

export function GlamGroomingConcept() {
  return (
    <div className="c-glam-grooming">
      <div className="gg-hero-shell">
        <header className="gg-nav">
          <div className="gg-brand">
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
          <Link className="gg-btn gg-btn-pink" href={k.bookHref}>
            Book Now →
          </Link>
        </header>

        <section className="gg-hero">
          <div className="gg-copy">
            <p className="gg-badge">Luxury Mobile Grooming</p>
            <h1>Luxury mobile grooming.</h1>
            <p className="gg-script">We come to you.</p>
            <p className="gg-lede">{k.heroSubtitle}</p>
            <Link className="gg-btn gg-btn-pink gg-btn-lg" href={k.bookHref}>
              Book your pet&apos;s spa day →
            </Link>
          </div>

          <div className="gg-visual">
            <img className="gg-main-dog" src={k.photos.gallery[0]} alt="Glam groom portrait" />
            <aside className="gg-ba">
              <span className="gg-ba-paw" aria-hidden>
                ♛
              </span>
              <div className="gg-ba-pair">
                <figure>
                  <img src={k.photos.gallery[3]} alt="" />
                  <figcaption>Before</figcaption>
                </figure>
                <figure>
                  <img src={k.photos.gallery[1]} alt="" />
                  <figcaption>After</figcaption>
                </figure>
              </div>
            </aside>
          </div>
        </section>

        <section className="gg-bar">
          <div className="gg-benefits">
            {benefits.map((item) => (
              <article key={item.label}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
                  <path d={item.path} />
                </svg>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
          <aside className="gg-area">
            <strong>📍 Service Area</strong>
            <p>{k.serviceArea}</p>
          </aside>
        </section>
      </div>

      <section className="gg-packages">
        <h2>Spa packages</h2>
        <div className="gg-grid">
          {k.packages.map((pkg) => (
            <article key={pkg.id}>
              <h3>{pkg.name}</h3>
              <p>{pkg.description}</p>
              <strong>{pkg.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="gg-review">
        <p className="gg-stars">{'★'.repeat(5)}</p>
        <blockquote>“{k.reviews[0]?.quote}”</blockquote>
        <cite>— {k.reviews[0]?.author}</cite>
      </section>

      <footer className="gg-foot">
        <span>{k.brand}</span>
        <a href={k.phoneHref}>{k.phone}</a>
        <Link href={k.bookHref}>Book Now</Link>
      </footer>
    </div>
  )
}
