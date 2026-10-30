import Link from 'next/link'
import { site } from '@/lib/site'

type HeaderProps = {
  tone?: 'light' | 'dark'
}

export function Header({ tone = 'light' }: HeaderProps) {
  const logoColor = tone === 'dark' ? { color: 'var(--ink)' } : undefined
  const linkColor = tone === 'dark' ? { color: 'var(--ink-soft)' } : undefined

  return (
    <header className="site-header" style={tone === 'dark' ? { position: 'relative' } : undefined}>
      <div className="container">
        <Link className="logo" href="/" style={logoColor}>
          {site.name}
          <span style={tone === 'dark' ? { color: 'var(--sage)' } : undefined}>.</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link href="/#how" style={linkColor}>
            How it works
          </Link>
          <Link href="/partners" style={linkColor}>
            For apartments
          </Link>
          <Link className="btn btn-primary" href="/apply" style={{ padding: '0.65rem 1.1rem' }}>
            Get matched
          </Link>
        </nav>
      </div>
    </header>
  )
}
