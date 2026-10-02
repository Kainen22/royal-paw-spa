import Link from 'next/link'
import { BlogSection } from '@/components/BlogSection'
import { CtaBand } from '@/components/CtaBand'
import { Gallery } from '@/components/Gallery'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { PageShell } from '@/components/PageShell'
import { Reveal } from '@/components/Reveal'
import { ServiceAreaMap } from '@/components/ServiceAreaMap'
import { ServiceCard } from '@/components/ServiceCard'
import { StatsBand } from '@/components/StatsBand'
import { Testimonials } from '@/components/Testimonials'
import { getRecentBlogPosts } from '@/lib/blog'
import { googleReviews } from '@/lib/reviews'
import { getPageContent } from '@/lib/notion'
import { findPhoto, listGalleryItems } from '@/lib/photos'
import { routes } from '@/lib/routes'

const fallbackHeroPhoto =
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80'

export const revalidate = 300

export default async function HomePage() {
  const { site, services, posts } = await getPageContent()
  const packages = services.filter((service) => service.category === 'package')
  const highlighted = packages.filter((service) => service.featured)
  const shown = (highlighted.length > 0 ? highlighted : packages).slice(0, 3)
  const recentPosts = getRecentBlogPosts(posts, 3)

  return (
    <PageShell>
      <Hero content={site} photo={findPhoto('hero') ?? fallbackHeroPhoto} />
      <StatsBand />
      <Reveal from="up">
        <HowItWorks />
      </Reveal>

      <Reveal as="section" className="section container" from="left" delayMs={40}>
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
          {shown.map((service, index) => (
            <Reveal
              key={service.id}
              from={index % 2 === 0 ? 'left' : 'right'}
              delayMs={60 + index * 70}
            >
              <ServiceCard service={service} compact />
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal from="right" delayMs={40}>
        <ServiceAreaMap />
      </Reveal>

      <Reveal from="up" delayMs={40}>
        <Gallery items={listGalleryItems()} />
      </Reveal>
      <Reveal from="left" delayMs={40}>
        <BlogSection posts={recentPosts} />
      </Reveal>
      <Reveal from="left" delayMs={40}>
        <Testimonials testimonials={googleReviews} />
      </Reveal>
      <Reveal from="zoom" delayMs={40}>
        <CtaBand phone={site.contactPhone} />
      </Reveal>
    </PageShell>
  )
}
