import Link from 'next/link'
import { conceptKit as k } from '@/concepts/shared'
import './concept.css'

const serviceIcons = [
  <svg key="bath" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M4 12h16v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-4Z" />
    <path d="M7 12V8a5 5 0 0 1 10 0" />
  </svg>,
  <svg key="cut" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <circle cx="6" cy="7" r="2.5" />
    <circle cx="6" cy="17" r="2.5" />
    <path d="M8 8.5 20 18M8 15.5 20 6" />
  </svg>,
  <svg key="heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
  </svg>,
  <svg key="van" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M3 14V9a2 2 0 0 1 2-2h9l4 4v3" />
    <path d="M3 14h15a2 2 0 0 1 2 2v1H3v-3Z" />
    <circle cx="7" cy="18" r="1.5" />
    <circle cx="17" cy="18" r="1.5" />
  </svg>,
]

export function SoftPastelsConcept() {
  const review = k.reviews[0]
  const starCount = Math.round(Number.parseFloat(k.rating.score)) || 5

  return (
    <div className="c-soft-pastels">
      <header className="sp-nav">
        <div className="sp-brand">
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
        <Link className="sp-btn" href={k.bookHref}>
          Book Now
        </Link>
      </header>

      <section className="sp-hero">
        <div className="sp-hero-copy">
          <p className="sp-kicker">{k.heroKicker}</p>
          <h1>Convenience meets care.</h1>
          <p>{k.heroSubtitle}</p>
          <Link className="sp-btn sp-btn-lg" href={k.bookHref}>
            Book Your Pet&apos;s Spa Day →
          </Link>
        </div>
        <div className="sp-hero-media">
          <div className="sp-blob">
            <img src={k.photos.gallery[1]} alt="Happy pastel groom" />
          </div>
          <p className="sp-note">
            Soft care
            <span>♡</span>
          </p>
        </div>
      </section>

      <section className="sp-services">
        {k.proofs.slice(0, 4).map((proof, index) => (
          <article key={proof}>
            <span className="sp-icon">{serviceIcons[index]}</span>
            <h3>{proof}</h3>
            <p>Thoughtful mobile grooming with lavender-soft attention.</p>
          </article>
        ))}
      </section>

      <section className="sp-packages">
        <div className="sp-section-head">
          <p className="sp-kicker">Packages</p>
          <h2>Soft, simple spa days</h2>
        </div>
        <div className="sp-grid">
          {k.packages.map((pkg) => (
            <article key={pkg.id}>
              <h3>{pkg.name}</h3>
              <p>{pkg.description}</p>
              <strong>{pkg.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="sp-testimonial">
        <blockquote>
          <p>“{review?.quote}”</p>
          <footer>
            <cite>— {review?.author}</cite>
            <span className="sp-stars">{'★'.repeat(starCount)}</span>
          </footer>
        </blockquote>
        <div className="sp-happy">
          <div className="sp-happy-media">
            <img src={k.photos.gallery[3]} alt="Happy client moment" />
            <span className="sp-play" aria-hidden>
              ▶
            </span>
          </div>
          <p>
            {k.rating.score} Google love
            <span> ★</span>
          </p>
        </div>
      </section>

      <section className="sp-about">
        <div className="sp-about-copy">
          <p className="sp-kicker">About</p>
          <h2>{k.aboutTitle}</h2>
          <p>{k.aboutBody}</p>
          <ul>
            {k.proofs.slice(0, 4).map((proof) => (
              <li key={proof}>{proof}</li>
            ))}
          </ul>
        </div>
        <div className="sp-about-media">
          <img src={k.photos.about} alt="Royal Paw Spa groomer with a client" />
        </div>
      </section>

      <section className="sp-cta">
        <div>
          <h2>Ready for a calmer groom?</h2>
          <p>
            {k.serviceArea} · {k.hours}
          </p>
        </div>
        <Link className="sp-btn" href={k.bookHref}>
          Book online
        </Link>
      </section>

      <footer className="sp-foot">
        <span>{k.brand}</span>
        <a href={k.phoneHref}>{k.phone}</a>
        <Link href={k.bookHref}>Book Now</Link>
      </footer>
    </div>
  )
}
