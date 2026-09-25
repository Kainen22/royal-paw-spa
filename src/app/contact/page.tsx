import type { Metadata } from 'next'
import { Icon, type IconName } from '@/components/Icon'
import { PageHeader } from '@/components/PageHeader'
import { PageShell } from '@/components/PageShell'
import { SocialLinks } from '@/components/SocialLinks'
import { getPageContent } from '@/lib/notion'
import { toTelHref } from '@/lib/site'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Call, email, or check our mobile grooming service area and hours.',
}

export default async function ContactPage() {
  const { site } = await getPageContent()

  const items: Array<{ icon: IconName; label: string; value: string; href?: string }> = [
    { icon: 'phone', label: 'Call or text', value: site.contactPhone, href: toTelHref(site.contactPhone) },
    { icon: 'mail', label: 'Email', value: site.contactEmail, href: `mailto:${site.contactEmail}` },
    { icon: 'pin', label: 'Service area', value: site.serviceArea },
    { icon: 'clock', label: 'Hours', value: site.hours },
  ]

  return (
    <PageShell>
      <div className="container page">
        <PageHeader
          title="Call or book"
          description="Questions about coat, color, or whether I cover your street? Text, call, or start a booking."
        />
        <div className="grid-2">
          {items.map((item) => {
            const body = (
              <>
                <span className="info-icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <span className="contact-label">{item.label}</span>
                  <strong className="contact-value">{item.value}</strong>
                </div>
              </>
            )

            return item.href ? (
              <a key={item.label} href={item.href} className="card contact-card is-link">
                {body}
              </a>
            ) : (
              <div key={item.label} className="card contact-card">
                {body}
              </div>
            )
          })}
        </div>
        <div className="card contact-card social-card">
          <div>
            <span className="contact-label">Follow along</span>
            <strong className="contact-value">Instagram, Facebook, and Google</strong>
          </div>
          <SocialLinks labeled />
        </div>
      </div>
    </PageShell>
  )
}
