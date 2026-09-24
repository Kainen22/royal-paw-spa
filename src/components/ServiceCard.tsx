import Link from 'next/link'
import { Icon } from '@/components/Icon'
import { routes } from '@/lib/routes'
import type { Service } from '@/lib/types'

type ServiceCardProps = {
  service: Service
  compact?: boolean
}

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  return (
    <article className={`card service-card${service.featured ? ' is-featured' : ''}`}>
      {service.featured && <span className="badge">Most popular</span>}
      <div className="service-top">
        <h3>{service.name}</h3>
        <span className="price">{service.price}</span>
      </div>
      {service.duration && (
        <p className="service-duration">
          <Icon name="clock" size={14} />
          {service.duration}
        </p>
      )}
      <p className="service-description">{service.description}</p>

      {!compact && service.includes.length > 0 && (
        <ul className="check-list">
          {service.includes.map((item) => (
            <li key={item}>
              <Icon name="check" size={16} />
              {item}
            </li>
          ))}
        </ul>
      )}

      {!compact && service.perfectFor.length > 0 && (
        <div className="tag-row">
          <span className="tag-label">Perfect for</span>
          {service.perfectFor.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      )}

      <Link className={`btn ${service.featured ? 'btn-primary' : 'btn-soft'} btn-block`} href={routes.book}>
        Book {service.name}
      </Link>
    </article>
  )
}
