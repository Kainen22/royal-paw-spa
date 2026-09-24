import Link from 'next/link'
import { Icon } from '@/components/Icon'
import { routes } from '@/lib/routes'
import { toTelHref } from '@/lib/site'
import type { SiteContent } from '@/lib/types'

type HeroProps = {
  content: SiteContent
  photo: string
}

const highlights = [
  { icon: 'truck', label: 'Fully equipped van' },
  { icon: 'heart', label: 'One-on-one care' },
  { icon: 'home', label: 'No car rides or cages' },
] as const

export function Hero({ content, photo }: HeroProps) {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">{content.heroKicker}</p>
        <h1>{content.heroTitle}</h1>
        <p className="lead">{content.heroSubtitle}</p>
        <div className="btn-row">
          <Link className="btn btn-primary" href={routes.book}>
            <Icon name="calendar" size={18} />
            Book online
          </Link>
          <a className="btn btn-outline" href={toTelHref(content.contactPhone)}>
            <Icon name="phone" size={18} />
            Call {content.contactPhone}
          </a>
        </div>
        <ul className="chip-list">
          {highlights.map((item) => (
            <li key={item.label} className="chip">
              <Icon name={item.icon} size={16} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="hero-media">
        <img
          src={photo}
          alt="Royal Paw Spa owner in the mobile grooming van"
          width={1200}
          height={900}
        />
        <div className="hero-badge">
          <Icon name="pin" size={18} />
          <div>
            <strong>We come to you</strong>
            <span>{content.serviceArea}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
