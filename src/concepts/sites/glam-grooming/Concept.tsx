import Link from 'next/link'
import { conceptKit as k } from '@/concepts/shared'
import './concept.css'

const areas = k.serviceArea.split(/\s*,\s*|\s*&\s*/).map((s) => s.trim()).filter(Boolean)

export function GlamGroomingConcept() {
  return (
    <div className="c-glam-grooming">
      <header className="gg-nav">
        <Link href="/" className="gg-brand">
          <img src="/logo.png" alt="" width={34} height={34} />
          <span>{k.brand}</span>
        </Link>
        <nav aria-label="Primary">
          {k.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="gg-btn gg-btn-hot" href={k.bookHref}>
          Book Now
        </Link>
      </header>

      <section className="gg-hero">
        <div className="gg-paws" aria-hidden>
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="gg-hero-copy">
          <p className="gg-kicker">{k.heroKicker}</p>
          <h1>Luxury mobile grooming. We come to you.</h1>
          <p className="gg-lede">{k.heroSubtitle}</p>
          <Link className="gg-btn gg-btn-hot gg-btn-lg" href={k.bookHref}>
            Book your pet&apos;s spa day →
          </Link>
          <p className="gg-rating">
            ★ {k.rating.score} · {k.rating.count} Google reviews
          </p>
        </div>
        <div className="gg-hero-visual">
          <img className="gg-main" src={k.photos.gallery[0]} alt="Fresh glam groom with bow" />
          <div className="gg-ba">
            <figure>
              <img src={k.photos.gallery[2]} alt="Before groom" />
              <figcaption>Before</figcaption>
            </figure>
            <figure>
              <img src={k.photos.gallery[1]} alt="After groom" />
              <figcaption>After</figcaption>
            </figure>
          </div>
          <aside className="gg-area-card">
            <strong>Service area</strong>
            <ul>
              {areas.slice(0, 5).map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="gg-strip">
        {k.proofs.map((proof) => (
          <div key={proof}>
            <span aria-hidden>♡</span>
            {proof}
          </div>
        ))}
      </section>

      <section className="gg-services">
        <div className="gg-section-head">
          <p className="gg-eyebrow">Packages</p>
          <h2>Pick a glow-up</h2>
          <p>High-shine baths, breed cuts, and puppy firsts — booked in minutes.</p>
        </div>
        <div className="gg-cards">
          {k.packages.map((pkg) => (
            <article key={pkg.id}>
              <h3>{pkg.name}</h3>
              <p>{pkg.description}</p>
              <div className="gg-pkg-meta">
                <span className="gg-price">{pkg.price}</span>
                {pkg.duration ? <span>{pkg.duration}</span> : null}
              </div>
              <Link className="gg-btn gg-btn-hot gg-btn-sm" href={k.bookHref}>
                Book
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="gg-stats">
        {k.stats.map((stat) => (
          <article key={stat.label}>
            <strong>
              {stat.value}
              {stat.suffix ?? ''}
            </strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className="gg-reviews">
        <div className="gg-section-head">
          <p className="gg-eyebrow">Social proof</p>
          <h2>Pets (and parents) rave</h2>
        </div>
        <div className="gg-review-grid">
          {k.reviews.map((review) => (
            <blockquote key={review.id}>
              <p>&ldquo;{review.quote}&rdquo;</p>
              <footer>{review.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="gg-gallery">
        {k.photos.gallery.slice(0, 4).map((src, i) => (
          <img key={src} src={src} alt={`Grooming moment ${i + 1}`} />
        ))}
      </section>

      <section className="gg-cta">
        <div>
          <h2>Your driveway is the new spa lobby</h2>
          <p>
            {k.hours} · <a href={k.phoneHref}>{k.phone}</a>
          </p>
        </div>
        <Link className="gg-btn gg-btn-hot gg-btn-lg" href={k.bookHref}>
          Book online now →
        </Link>
      </section>

      <footer className="gg-foot">
        <div className="gg-brand">
          <img src="/logo.png" alt="" width={28} height={28} />
          <span>{k.brand}</span>
        </div>
        <span>
          ★ {k.rating.score} · {k.rating.count} Google reviews
        </span>
        <a href={k.phoneHref}>{k.phone}</a>
        <span>{k.serviceArea}</span>
      </footer>
    </div>
  )
}
