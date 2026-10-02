'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Entrance direction — Mobile Pet Shine style soft rise/slide */
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

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal reveal-${from}${visible ? ' is-inview' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delayMs}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
