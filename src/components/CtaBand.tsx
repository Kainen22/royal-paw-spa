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
  title = 'Want Tanae on your calendar?',
  body = 'Book the van online, or call if you’d rather talk through coat, color, or a nervous pet first.',
}: CtaBandProps) {
  return (
    <section className="cta-plain">
      <div className="container cta-plain-inner">
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="btn-row">
          <Link className="btn btn-gold" href={routes.book}>
            Start booking
          </Link>
          <a className="btn btn-outline" href={toTelHref(phone)}>
            Call {phone}
          </a>
        </div>
      </div>
    </section>
  )
}
