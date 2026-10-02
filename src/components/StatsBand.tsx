'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { afterPaint, isElementInViewport, revealObserverOptions } from '@/lib/motion'
import { businessStats } from '@/lib/stats'
import { googleRating } from '@/lib/reviews'

function parseStatValue(raw: string) {
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { target: 0, prefix: '', trailing: raw, decimals: 0 }
  const num = match[1]
  return {
    target: Number(num),
    prefix: '',
    trailing: match[2] ?? '',
    decimals: num.includes('.') ? num.split('.')[1].length : 0,
  }
}

function useInViewToggle() {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }

    let cancelled = false
    const show = () => {
      if (cancelled) return
      afterPaint(() => {
        if (!cancelled) setInView(true)
      })
    }
    const hide = () => {
      if (!cancelled) setInView(false)
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) show()
      else hide()
    }, revealObserverOptions())
    observer.observe(node)

    afterPaint(() => {
      if (!cancelled && isElementInViewport(node)) show()
    })

    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [])

  return { ref, inView }
}

function AnimatedStatValue({
  value,
  suffix,
  active,
}: {
  value: string
  suffix?: string
  active: boolean
}) {
  const parsed = parseStatValue(value)
  const zero = parsed.decimals ? (0).toFixed(parsed.decimals) : '0'
  const [display, setDisplay] = useState(zero)

  useEffect(() => {
    if (!active) {
      setDisplay(zero)
      return
    }
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setDisplay(parsed.decimals ? parsed.target.toFixed(parsed.decimals) : String(parsed.target))
      return
    }

    const duration = 1000
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = parsed.target * eased
      setDisplay(
        parsed.decimals > 0 ? current.toFixed(parsed.decimals) : String(Math.round(current)),
      )
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, parsed.decimals, parsed.target, zero])

  return (
    <p className="stat-value">
      {display}
      {parsed.trailing}
      {suffix ? <span className="stat-suffix">{suffix}</span> : null}
    </p>
  )
}

export function StatsBand() {
  const { ref, inView } = useInViewToggle()

  return (
    <section className="stats-shell" ref={ref} aria-label="Business stats">
      <div className="section container">
        <div className={`stats-band${inView ? ' is-visible' : ''}`}>
          <div className={`stats-intro reveal reveal-left${inView ? ' is-inview' : ''}`}>
            <p className="eyebrow">The numbers</p>
            <h2>A spa people stay with</h2>
            <p className="stats-copy">
              Four years of one-on-one mobile grooming, 297 clients, and 429 pets through the purple
              van. More than half come back — the average family has been with us 2.4 years.
            </p>
            <div className="stats-rating">
              <span className="stats-stars" aria-hidden>
                {'★'.repeat(5)}
              </span>
              <p>
                <strong>{googleRating.score}</strong> from {googleRating.count} Google reviews
              </p>
            </div>
          </div>
          <div className="stats-grid">
            {businessStats.map((stat, index) => (
              <article
                key={stat.label}
                className="card stat-card"
                style={{ '--stat-i': index } as CSSProperties}
              >
                <AnimatedStatValue value={stat.value} suffix={stat.suffix} active={inView} />
                <p className="stat-label">{stat.label}</p>
                <p className="stat-note">{stat.note}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
