import Link from 'next/link'
import { routes } from '@/lib/routes'
import { toTelHref } from '@/lib/site'

type CtaBandProps = {
  phone: string
  title?: string
  body?: string
}

export function CtaBand({
  phone,
  title = 'Ready for a fresh, happy pup?',
  body = 'Book online in about two minutes, or give us a call and we’ll find a time that works.',
}: CtaBandProps) {
  return (
    <section className="section container">
      <div className="cta-band">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="btn-row">
          <Link className="btn btn-white" href={routes.book}>
            Book online
          </Link>
          <a className="btn btn-ghost-white" href={toTelHref(phone)}>
            Call {phone}
          </a>
        </div>
      </div>
    </section>
  )
}
