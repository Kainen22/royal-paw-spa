import type { Metadata } from 'next'
import { CtaBand } from '@/components/CtaBand'
import { HowItWorks } from '@/components/HowItWorks'
import { PageHeader } from '@/components/PageHeader'
import { PageShell } from '@/components/PageShell'
import { getPageContent } from '@/lib/notion'
import { findPhoto } from '@/lib/photos'

const fallbackAboutPhoto =
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Tanae, the owner and solo groomer behind Royal Paw Spa.',
}

export default async function AboutPage() {
  const { site } = await getPageContent()

  return (
    <PageShell>
      <div className="container page">
        <div className="about-grid">
          <div>
            <PageHeader title={site.aboutTitle} />
            <div className="about-copy">
              {site.aboutBody.split(/\n\s*\n/).map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <img
            className="about-image"
            src={findPhoto('about') ?? fallbackAboutPhoto}
            alt="Our mobile grooming team with a happy dog"
            width={1000}
            height={667}
          />
        </div>
      </div>
      <HowItWorks />
      <CtaBand phone={site.contactPhone} />
    </PageShell>
  )
}
