import Link from 'next/link'
import { conceptKit as k } from '@/concepts/shared'
import './concept.css'

const areas = k.serviceArea.split(/\s*,\s*|\s*&\s*/).map((s) => s.trim()).filter(Boolean)

export function LuxurySpaConcept() {
  return (
    <div className="c-luxury-spa">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <img src="/logo.png" alt="" width={38} height={38} />
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
          <p className="ls-kicker">— {k.heroKicker} —</p>
          <h1>Luxury mobile grooming. We come to you.</h1>
          <p className="ls-lede">{k.heroSubtitle}</p>
          <Link className="ls-btn ls-btn-lg" href={k.bookHref}>
            Book your pet&apos;s spa day →
          </Link>
        </div>
        <div className="ls-hero-media">
          <div className="ls-hero-collage">
            <img src={k.photos.gallery[4]} alt="Dog enjoying a spa wash" />
            <img src={k.photos.gallery[5]} alt="Royal Paw Spa mobile van" />
          </div>
          <aside className="ls-area">
            <strong>Service area</strong>
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
          {k.proofs.slice(0, 5).map((proof) => (
            <article key={proof}>
              <span className="ls-icon" aria-hidden>
                ✦
              </span>
              <p>{proof}</p>
            </article>
          ))}
        </div>
        <p className="ls-aside">
          More than a groom.
          <br />
          It&apos;s self care.
        </p>
      </section>

      <section className="ls-services" id="services">
        <div className="ls-section-head">
          <p className="ls-kicker">Packages</p>
          <h2>Spa packages</h2>
          <p>Thoughtful care, one pet at a time — right in your driveway.</p>
        </div>
        <div className="ls-grid">
          {k.packages.map((pkg) => (
            <article key={pkg.id}>
              <h3>{pkg.name}</h3>
              <p>{pkg.description}</p>
              <div className="ls-pkg-meta">
                <strong>{pkg.price}</strong>
                {pkg.duration ? <span>{pkg.duration}</span> : null}
              </div>
              <Link href={k.bookHref}>Book this package →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="ls-stats">
        {k.stats.map((stat) => (
          <article key={stat.label}>
            <strong>
              {stat.value}
              {stat.suffix ?? ''}
            </strong>
            <span>{stat.label}</span>
            <p>{stat.note}</p>
          </article>
        ))}
      </section>

      <section className="ls-reviews" id="reviews">
        <div className="ls-section-head">
          <p className="ls-kicker">Loved locally</p>
          <h2>
            {k.rating.score} ★ from {k.rating.count} Google reviews
          </h2>
        </div>
        <div className="ls-review-grid">
          {k.reviews.map((review) => (
            <blockquote key={review.id}>
              <p>&ldquo;{review.quote}&rdquo;</p>
              <footer>— {review.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="ls-about">
        <img src={k.photos.about} alt="" />
        <div>
          <p className="ls-kicker">About</p>
          <h2>{k.aboutTitle}</h2>
          <p>{k.aboutBody.split('\n\n')[0]}</p>
          <p>{k.aboutBody.split('\n\n')[1]}</p>
        </div>
      </section>

      <section className="ls-cta">
        <div>
          <h2>Ready for the royal treatment?</h2>
          <p>
            {k.hours} · <a href={k.phoneHref}>{k.phone}</a>
          </p>
        </div>
        <Link className="ls-btn ls-btn-lg ls-btn-light" href={k.bookHref}>
          Book online
        </Link>
      </section>

      <footer className="ls-foot">
        <div className="ls-brand">
          <img src="/logo.png" alt="" width={28} height={28} />
          <span>{k.brand}</span>
        </div>
        <a href={k.phoneHref}>{k.phone}</a>
        <span>{k.hours}</span>
        <span>{k.serviceArea}</span>
      </footer>
    </div>
  )
}
