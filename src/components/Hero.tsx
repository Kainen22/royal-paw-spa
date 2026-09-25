import Link from 'next/link'
import { routes } from '@/lib/routes'
import { toTelHref } from '@/lib/site'
import type { SiteContent } from '@/lib/types'

type HeroProps = {
  content: SiteContent
  photo: string
}

export function Hero({ content, photo }: HeroProps) {
  return (
    <section className="hero-bleed">
      <img src={photo} alt="Tanae in the Royal Paw Spa van doorway" />
      <div className="hero-bleed-shade" />
      <div className="hero-bleed-copy">
        <p className="gold-line">{content.heroKicker}</p>
        <h1>{content.heroTitle}</h1>
        <p className="lead lead-on-dark">{content.heroSubtitle}</p>
        <div className="btn-row">
          <Link className="btn btn-gold" href={routes.book}>
            Book with Tanae
          </Link>
          <a className="btn btn-ghost-cream" href={toTelHref(content.contactPhone)}>
            {content.contactPhone}
          </a>
        </div>
      </div>
    </section>
  )
}
