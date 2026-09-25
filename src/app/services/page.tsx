import type { Metadata } from 'next'
import { CtaBand } from '@/components/CtaBand'
import { PageHeader } from '@/components/PageHeader'
import { PageShell } from '@/components/PageShell'
import { ServiceCard } from '@/components/ServiceCard'
import { getPageContent } from '@/lib/notion'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description: 'Mobile dog grooming packages and add-ons: bath & brush, full groom, puppy intro, and more.',
}

export default async function ServicesPage() {
  const { site, services } = await getPageContent()
  const packages = services.filter((service) => service.category === 'package')
  const addons = services.filter((service) => service.category === 'addon')

  return (
    <PageShell>
      <div className="container page">
        <PageHeader
          kicker="Services & pricing"
          title="Grooming packages"
          description="Final pricing depends on your dog’s size, coat type, and condition. We confirm your price before we start, so there are no surprises."
        />
        <div className="grid-2">
          {packages.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {addons.length > 0 && (
          <section className="section-tight">
            <div className="section-head">
              <h2>Add-ons</h2>
              <p className="muted">Add any of these to a Bath & Brush or Full Groom.</p>
            </div>
            <ul className="card addon-list">
              {addons.map((addon) => (
                <li key={addon.id} className="addon-row">
                  <div>
                    <strong>{addon.name}</strong>
                    <p>{addon.description}</p>
                  </div>
                  <span className="price">{addon.price}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
      <CtaBand phone={site.contactPhone} />
    </PageShell>
  )
}
