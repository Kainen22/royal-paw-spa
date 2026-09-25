import Link from 'next/link'
import { routes } from '@/lib/routes'
import type { Service } from '@/lib/types'

type ServiceCardProps = {
  service: Service
  compact?: boolean
}

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  return (
    <article className="service-row">
      <div>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        {!compact && service.includes.length > 0 && (
          <p className="service-includes">{service.includes.join(' · ')}</p>
        )}
      </div>
      <div className="service-row-meta">
        <span className="price">{service.price}</span>
        {service.duration ? <span className="muted">{service.duration}</span> : null}
        <Link className="text-link" href={routes.book}>
          Book
        </Link>
      </div>
    </article>
  )
}
