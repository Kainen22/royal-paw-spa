import Link from 'next/link'
import { SocialLinks } from '@/components/SocialLinks'
import { navLinks } from '@/lib/routes'
import { getSiteName, toTelHref } from '@/lib/site'
import type { SiteContent } from '@/lib/types'

type FooterProps = {
  site: SiteContent
  notionConnected: boolean
}

export function Footer({ site, notionConnected }: FooterProps) {
  const siteName = getSiteName()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>{siteName}</strong>
          <p>Mobile dog grooming · {site.serviceArea}</p>
          <SocialLinks />
        </div>
        <nav className="footer-links" aria-label="Footer">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="footer-contact">
          <a href={toTelHref(site.contactPhone)}>{site.contactPhone}</a>
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          <span>{site.hours}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          &copy; {new Date().getFullYear()} {siteName}
        </span>
        {notionConnected && <span className="muted-badge">Content from Notion</span>}
      </div>
    </footer>
  )
}
