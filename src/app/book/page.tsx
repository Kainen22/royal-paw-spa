import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Icon } from '@/components/Icon'
import { MoegoBooking } from '@/components/MoegoBooking'
import { PageHeader } from '@/components/PageHeader'
import { PageShell } from '@/components/PageShell'
import { getPageContent } from '@/lib/notion'
import { toTelHref } from '@/lib/site'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Book Online',
  description: 'Book a mobile dog grooming appointment at your home.',
}

export default async function BookPage() {
  const { site } = await getPageContent()

  return (
    <PageShell>
      <div className="container page">
        <PageHeader
          kicker="Book online"
          title="Schedule your pup’s groom"
          description="Choose a service and time. We’ll confirm your appointment and send a reminder before we arrive."
        />
        <div className="info-strip">
          <span>
            <Icon name="truck" size={16} /> We come to your home
          </span>
          <span>
            <Icon name="shield" size={16} /> Vaccination records required
          </span>
          <a href={toTelHref(site.contactPhone)}>
            <Icon name="phone" size={16} /> Prefer to call? {site.contactPhone}
          </a>
        </div>
        <Suspense fallback={<div className="card booking-card booking-loading">Loading booking…</div>}>
          <MoegoBooking />
        </Suspense>
      </div>
    </PageShell>
  )
}
