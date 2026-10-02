'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import {
  afterPaint,
  isElementInViewport,
  mobileRevealDelay,
  revealObserverOptions,
} from '@/lib/motion'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Entrance / exit direction */
  from?: 'up' | 'left' | 'right' | 'zoom'
  delayMs?: number
  as?: 'div' | 'section' | 'article'
}

export function Reveal({
  children,
  className = '',
  from = 'up',
  delayMs = 0,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [delay, setDelay] = useState(delayMs)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncReduced = () => setReduceMotion(prefersReduced.matches)
    syncReduced()
    prefersReduced.addEventListener('change', syncReduced)
    setDelay(mobileRevealDelay(delayMs))

    const node = ref.current
    if (!node) {
      return () => prefersReduced.removeEventListener('change', syncReduced)
    }

    if (prefersReduced.matches) {
      setVisible(true)
      return () => prefersReduced.removeEventListener('change', syncReduced)
    }

    let cancelled = false

    const show = () => {
      if (cancelled) return
      // Paint opacity:0 first, then flip — required for iOS Safari transitions
      afterPaint(() => {
        if (!cancelled) setVisible(true)
      })
    }

    const hide = () => {
      if (!cancelled) setVisible(false)
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) show()
      else hide()
    }, revealObserverOptions())
    observer.observe(node)

    // iOS Safari sometimes skips the first IO callback until a scroll.
    // Seed from geometry after paint so above-the-fold sections still animate in.
    afterPaint(() => {
      if (!cancelled && isElementInViewport(node)) show()
    })

    return () => {
      cancelled = true
      observer.disconnect()
      prefersReduced.removeEventListener('change', syncReduced)
    }
  }, [delayMs])

  return (
    <Tag
      ref={ref as never}
      className={`reveal reveal-${from}${visible || reduceMotion ? ' is-inview' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
