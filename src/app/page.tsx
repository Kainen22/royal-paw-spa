import Link from 'next/link'
import { CtaBand } from '@/components/CtaBand'
import { Gallery } from '@/components/Gallery'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Icon } from '@/components/Icon'
import { PageShell } from '@/components/PageShell'
import { ServiceCard } from '@/components/ServiceCard'
import { Testimonials } from '@/components/Testimonials'
import { defaultTestimonials } from '@/lib/content'
import { getPageContent } from '@/lib/notion'
import { findPhoto, listGalleryPhotos } from '@/lib/photos'
import { routes } from '@/lib/routes'

const fallbackHeroPhoto =
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80'

export const revalidate = 300

export default async function HomePage() {
  const { site, services } = await getPageContent()
  const packages = services.filter((service) => service.category === 'package')
  const highlighted = packages.filter((service) => service.featured)
  const shown = (highlighted.length > 0 ? highlighted : packages).slice(0, 3)

  return (
    <PageShell>
      <Hero content={site} photo={findPhoto('hero') ?? fallbackHeroPhoto} />
      <HowItWorks />

      <section className="section container">
        <div className="section-head section-head-row">
          <div>
            <p className="eyebrow">Services</p>
            <h2>Popular packages</h2>
          </div>
          <Link className="text-link" href={routes.services}>
            See all services & add-ons →
          </Link>
        </div>
        <div className="grid-3">
          {shown.map((service) => (
            <ServiceCard key={service.id} service={service} compact />
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="card area-card">
          <span className="area-icon">
            <Icon name="pin" size={24} />
          </span>
          <div>
            <p className="eyebrow">Service area</p>
            <h2>Grooming just around the corner</h2>
            <p>{site.serviceArea}</p>
          </div>
          <Link className="btn btn-soft" href={routes.contact}>
            Check your area
          </Link>
        </div>
      </section>

      <Gallery photos={listGalleryPhotos()} />
      <Testimonials testimonials={defaultTestimonials} />
      <CtaBand phone={site.contactPhone} />
    </PageShell>
  )
}
