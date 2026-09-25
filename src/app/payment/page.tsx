import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon, type IconName } from '@/components/Icon'
import { PageHeader } from '@/components/PageHeader'
import { PageShell } from '@/components/PageShell'
import { getPageContent } from '@/lib/notion'
import { routes } from '@/lib/routes'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Payment & Policies',
  description: 'Accepted payment methods, cancellation policy, and vaccination requirements.',
}

export default async function PaymentPage() {
  const { site } = await getPageContent()

  const items: Array<{ icon: IconName; title: string; body: string }> = [
    { icon: 'card', title: 'Accepted payment', body: site.paymentMethods },
    { icon: 'calendar', title: 'Cancellations', body: site.cancellationPolicy },
    { icon: 'shield', title: 'Vaccinations', body: site.vaccinationPolicy },
  ]

  return (
    <PageShell>
      <div className="container page">
        <PageHeader kicker="Payment" title="Payment & policies" description={site.paymentIntro} />
        <div className="grid-3">
          {items.map((item) => (
            <article key={item.title} className="card info-card">
              <span className="info-icon">
                <Icon name={item.icon} size={22} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="card note-card">
          <p>
            Card payments are processed securely through Moego, our booking and payment system.
          </p>
          <Link className="btn btn-primary" href={routes.book}>
            Book & pay online
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
