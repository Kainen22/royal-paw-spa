'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Icon } from '@/components/Icon'
import { revealObserverOptions } from '@/lib/motion'
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
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(true)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      revealObserverOptions(),
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`hero container${inView ? ' is-inview' : ''}`} ref={ref}>
      <span className="hero-watermark" aria-hidden>
        Spa
      </span>
      <div className="hero-copy">
        <p className="eyebrow hero-enter" style={{ '--hero-i': 0 } as CSSProperties}>
          {content.heroKicker}
        </p>
        <h1 className="hero-enter" style={{ '--hero-i': 1 } as CSSProperties}>
          {content.heroTitle}
        </h1>
        <p className="lead hero-enter" style={{ '--hero-i': 2 } as CSSProperties}>
          {content.heroSubtitle}
        </p>
        <div className="btn-row hero-enter" style={{ '--hero-i': 3 } as CSSProperties}>
          <Link className="btn btn-primary" href={routes.book}>
            <Icon name="calendar" size={18} />
            Book online
          </Link>
          <a className="btn btn-outline" href={toTelHref(content.contactPhone)}>
            <Icon name="phone" size={18} />
            Call {content.contactPhone}
          </a>
        </div>
        <ul className="chip-list hero-enter" style={{ '--hero-i': 4 } as CSSProperties}>
          {highlights.map((item) => (
            <li key={item.label} className="chip">
              <Icon name={item.icon} size={16} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="hero-media hero-enter" style={{ '--hero-i': 2 } as CSSProperties}>
        <div className="hero-media-frame">
          <img
            src={photo}
            alt="Royal Paw Spa owner in the mobile grooming van"
            width={1200}
            height={900}
          />
        </div>
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
