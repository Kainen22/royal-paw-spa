'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { concepts } from '@/concepts/catalog'
import './concept-chrome.css'

export function ConceptChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const activeSlug = pathname.split('/').filter(Boolean).pop() ?? concepts[0].slug

  return (
    <div className="concept-chrome">
      <header className="concept-chrome-bar">
        <div className="concept-chrome-traffic" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <nav className="concept-chrome-tabs" aria-label="Concept websites">
          {concepts.map((concept) => {
            const href = `/concepts/${concept.slug}`
            const active = activeSlug === concept.slug
            return (
              <Link
                key={concept.slug}
                href={href}
                className={`concept-chrome-tab${active ? ' is-active' : ''}`}
                title={concept.vibe}
              >
                <span className="concept-chrome-favicon" aria-hidden />
                <span className="concept-chrome-tab-label">{concept.shortTitle}</span>
              </Link>
            )
          })}
        </nav>
        <div className="concept-chrome-meta">
          <span>Sandbox · Preview only</span>
          <Link href="/" className="concept-chrome-exit">
            Exit
          </Link>
        </div>
      </header>
      <div className="concept-chrome-stage">{children}</div>
    </div>
  )
}
