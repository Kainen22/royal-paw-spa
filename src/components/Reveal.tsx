'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

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

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncReduced = () => setReduceMotion(prefersReduced.matches)
    syncReduced()
    prefersReduced.addEventListener('change', syncReduced)

    const node = ref.current
    if (!node || prefersReduced.matches) {
      setVisible(true)
      return () => prefersReduced.removeEventListener('change', syncReduced)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Re-trigger every pass: in when entering, out when leaving
        setVisible(entry.isIntersecting)
      },
      {
        threshold: [0, 0.12, 0.28],
        rootMargin: '-8% 0px -12% 0px',
      },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      prefersReduced.removeEventListener('change', syncReduced)
    }
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal reveal-${from}${visible || reduceMotion ? ' is-inview' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delayMs}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
