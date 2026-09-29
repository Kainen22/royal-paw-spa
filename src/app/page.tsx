import Link from 'next/link'
import { CtaBand } from '@/components/CtaBand'
import { Gallery } from '@/components/Gallery'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { PageShell } from '@/components/PageShell'
import { ServiceAreaMap } from '@/components/ServiceAreaMap'
import { ServiceCard } from '@/components/ServiceCard'
import { StatsBand } from '@/components/StatsBand'
import { Testimonials } from '@/components/Testimonials'
import { googleReviews } from '@/lib/reviews'
import { getPageContent } from '@/lib/notion'
import { findPhoto, listGalleryItems } from '@/lib/photos'
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
      <StatsBand />
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

      <ServiceAreaMap />

      <Gallery items={listGalleryItems()} />
      <Testimonials testimonials={googleReviews} />
      <CtaBand phone={site.contactPhone} />
    </PageShell>
  )
}
