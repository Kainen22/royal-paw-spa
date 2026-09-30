import Link from 'next/link'
import { conceptKit as k } from '@/concepts/shared'
import './concept.css'

const areas = k.serviceArea.split(/\s*,\s*|\s*&\s*/).map((s) => s.trim()).filter(Boolean)

export function ModernAtelierConcept() {
  return (
    <div className="c-modern-atelier">
      <header className="ma-nav">
        <Link href="/" className="ma-brand">
          <img src="/logo.png" alt="" width={32} height={32} />
          <span>{k.brand}</span>
        </Link>
        <nav aria-label="Primary">
          {k.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="ma-btn" href={k.bookHref}>
          Book Now
        </Link>
      </header>

      <section className="ma-hero">
        <div className="ma-hero-copy">
          <h1>
            Luxury mobile
            <br />
            grooming.
            <br />
            We come to you.
          </h1>
          <p className="ma-lede">{k.heroSubtitle}</p>
          <Link className="ma-btn ma-btn-soft" href={k.bookHref}>
            Book your pet&apos;s spa day →
          </Link>
          <p className="ma-note">
            <span className="ma-paw" aria-hidden>
              ✦
            </span>
            Same love. New location.
          </p>
          <aside className="ma-area">
            <strong>Service area</strong>
            <ul>
              {areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="ma-hero-art">
          <img className="ma-portrait" src={k.photos.gallery[2]} alt="Editorial grooming portrait" />
          <img className="ma-van" src={k.photos.gallery[5]} alt="Mobile spa van" />
        </div>
      </section>

      <p className="ma-banner">Premium care for every paw</p>

      <section className="ma-services">
        <div className="ma-section-head">
          <span>01</span>
          <h2>The atelier menu</h2>
          <p>Four considered packages. One dedicated groomer. Zero kennels.</p>
        </div>
        <div className="ma-menu">
          {k.packages.map((pkg, index) => (
            <article key={pkg.id}>
              <em>0{index + 1}</em>
              <div>
                <h3>{pkg.name}</h3>
                <p>{pkg.description}</p>
              </div>
              <strong>{pkg.price}</strong>
              <Link href={k.bookHref}>Reserve</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="ma-proofs">
        <div className="ma-section-head">
          <span>02</span>
          <h2>Why mobile feels better</h2>
        </div>
        <div className="ma-proof-grid">
          {k.proofs.map((proof) => (
            <article key={proof}>
              <span aria-hidden>—</span>
              <p>{proof}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ma-stats">
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

      <section className="ma-reviews">
        <div className="ma-section-head">
          <span>03</span>
          <h2>
            {k.rating.score} from {k.rating.count} reviews
          </h2>
        </div>
        <div className="ma-review-grid">
          {k.reviews.map((review) => (
            <blockquote key={review.id}>
              <p>{review.quote}</p>
              <footer>{review.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="ma-about">
        <img src={k.photos.about} alt="" />
        <div>
          <div className="ma-section-head">
            <span>04</span>
            <h2>{k.aboutTitle}</h2>
          </div>
          <p>{k.aboutBody.split('\n\n')[0]}</p>
          <p>{k.aboutBody.split('\n\n')[1]}</p>
        </div>
      </section>

      <section className="ma-cta">
        <h2>Book the atelier on wheels</h2>
        <p>
          {k.hours} · <a href={k.phoneHref}>{k.phone}</a>
        </p>
        <Link className="ma-btn ma-btn-soft" href={k.bookHref}>
          Book your pet&apos;s spa day →
        </Link>
      </section>

      <footer className="ma-foot">
        <span>{k.brand}</span>
        <span className="ma-foot-line">Premium care for every paw</span>
        <a href={k.phoneHref}>{k.phone}</a>
      </footer>
    </div>
  )
}
