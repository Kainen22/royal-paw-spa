'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BrandMark } from '@/components/BrandMark'
import { Icon } from '@/components/Icon'
import { SocialLinks } from '@/components/SocialLinks'
import { navLinks, routes } from '@/lib/routes'
import { getSiteName, toTelHref } from '@/lib/site'

type HeaderProps = {
  phone: string
}

export function Header({ phone }: HeaderProps) {
  const pathname = usePathname()
  const [sheetOpen, setSheetOpen] = useState(false)
  const siteName = getSiteName()
  const telHref = toTelHref(phone)

  useEffect(() => {
    setSheetOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = sheetOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [sheetOpen])

  function isActive(href: string) {
    return href === routes.home ? pathname === href : pathname.startsWith(href)
  }

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href={routes.home}>
            <BrandMark size={34} />
            <span className="brand-name">{siteName}</span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${isActive(link.href) ? ' is-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <SocialLinks className="header-socials" />
            <a className="header-phone" href={telHref}>
              <Icon name="phone" size={16} />
              <span>{phone}</span>
            </a>
            <Link className="btn btn-primary btn-sm" href={routes.book}>
              Book now
            </Link>
          </div>
        </div>
      </header>

      <nav className="tab-bar" aria-label="Mobile navigation">
        <Link href={routes.home} className={`tab${isActive(routes.home) ? ' is-active' : ''}`}>
          <Icon name="home" size={22} />
          <span>Home</span>
        </Link>
        <Link href={routes.services} className={`tab${isActive(routes.services) ? ' is-active' : ''}`}>
          <Icon name="scissors" size={22} />
          <span>Services</span>
        </Link>
        <Link href={routes.book} className={`tab tab-book${isActive(routes.book) ? ' is-active' : ''}`}>
          <span className="tab-book-icon">
            <Icon name="calendar" size={22} />
          </span>
          <span>Book</span>
        </Link>
        <a href={telHref} className="tab">
          <Icon name="phone" size={22} />
          <span>Call</span>
        </a>
        <button
          type="button"
          className={`tab${sheetOpen ? ' is-active' : ''}`}
          aria-expanded={sheetOpen}
          aria-controls="moreSheet"
          onClick={() => setSheetOpen((open) => !open)}
        >
          <Icon name="menu" size={22} />
          <span>More</span>
        </button>
      </nav>

      <div
        className={`sheet-backdrop${sheetOpen ? ' is-open' : ''}`}
        onClick={() => setSheetOpen(false)}
        aria-hidden="true"
      />
      <div
        id="moreSheet"
        className={`sheet${sheetOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="All pages"
      >
        <div className="sheet-handle" />
        <div className="sheet-header">
          <strong>Menu</strong>
          <button type="button" className="icon-btn" aria-label="Close menu" onClick={() => setSheetOpen(false)}>
            <Icon name="close" size={20} />
          </button>
        </div>
        <div className="sheet-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`sheet-link${isActive(link.href) ? ' is-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <SocialLinks className="sheet-socials" labeled />
        </div>
      </div>
    </>
  )
}
