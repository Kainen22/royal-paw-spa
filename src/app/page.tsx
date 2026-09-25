import Link from 'next/link'
import { CtaBand } from '@/components/CtaBand'
import { Gallery } from '@/components/Gallery'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { PageShell } from '@/components/PageShell'
import { Testimonials } from '@/components/Testimonials'
import { defaultTestimonials } from '@/lib/content'
import { getPageContent } from '@/lib/notion'
import { findPhoto, listGalleryPhotos } from '@/lib/photos'
import { routes } from '@/lib/routes'

const fallbackHeroPhoto = '/photos/hero.jpg'

export const revalidate = 300

export default async function HomePage() {
  const { site, services } = await getPageContent()
  const featured = services.filter((service) => service.featured)

  return (
    <PageShell>
      <Hero content={site} photo={findPhoto('hero') ?? fallbackHeroPhoto} />

      <section className="signature">
        <div className="container signature-grid">
          <article>
            <h2>Creative color</h2>
            <p>
              Rainbow ears, dipped tails, a little sparkle if you want it. Pet-safe color is part of
              the job here, not a rare add-on I squeeze in.
            </p>
          </article>
          <article>
            <h2>Double coats &amp; doodles</h2>
            <p>
              Fleece, curls, and undercoat that blows twice a year. I take the time those coats
              actually need — the reviews from double-coat households are why I keep saying yes to them.
            </p>
          </article>
          <article>
            <h2>Cats, too</h2>
            <p>
              Waterless or a real bath, nails, ears, and a cut if they’ll allow the dryer. No salon
              chorus of barking dogs in the next kennel.
            </p>
          </article>
        </div>
      </section>

      <HowItWorks />

      <section className="section">
        <div className="container split-head">
          <h2>The menu, starting prices</h2>
          <Link className="text-link" href={routes.services}>
            Full list and add-ons
          </Link>
        </div>
        <div className="container service-list">
          {featured.map((service) => (
            <article key={service.id} className="service-row">
              <div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-row-meta">
                <span className="price">{service.price}</span>
                <Link className="text-link" href={routes.book}>
                  Book
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="area-bleed">
        <img src="/photos/gallery/10-van-wrap.jpg" alt="Royal Paw Spa van wrap" />
        <div className="area-bleed-copy">
          <h2>I come to you in Colorado Springs</h2>
          <p>{site.serviceArea}</p>
          <p>{site.hours}</p>
          <Link className="btn btn-gold" href={routes.book}>
            Check your address when you book
          </Link>
        </div>
      </section>

      <Gallery photos={listGalleryPhotos()} />
      <Testimonials testimonials={defaultTestimonials} />
      <CtaBand phone={site.contactPhone} />
    </PageShell>
  )
}
