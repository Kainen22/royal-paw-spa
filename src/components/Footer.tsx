import Link from 'next/link'
import { SocialLinks } from '@/components/SocialLinks'
import { footerLinks } from '@/lib/routes'
import { getSiteName, toTelHref } from '@/lib/site'
import type { SiteContent } from '@/lib/types'

type FooterProps = {
  site: SiteContent
}

export function Footer({ site }: FooterProps) {
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
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="footer-contact">
          <a href={toTelHref(site.contactPhone)}>{site.contactPhone}</a>
          <span>{site.hours}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          &copy; {new Date().getFullYear()} {siteName}
        </span>
      </div>
    </footer>
  )
}
