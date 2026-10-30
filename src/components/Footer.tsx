import Link from 'next/link'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div>
          <Link className="logo" href="/">
            {site.name}
            <span>.</span>
          </Link>
          <p style={{ margin: '0.55rem 0 0', maxWidth: '36ch' }}>
            Matching {site.market} renters with communities open to nontraditional applications.
          </p>
        </div>
        <nav aria-label="Footer">
          <Link href="/apply">Renter intake</Link>
          <Link href="/partners">Apartment partners</Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </nav>
      </div>
      <div className="container" style={{ marginTop: '1.5rem', display: 'block' }}>
        <p className="form-note" style={{ maxWidth: '70ch' }}>
          {site.name} is a referral marketplace. We do not pull credit, approve applications, or
          make housing decisions. Apartment communities set their own screening criteria. Equal
          housing opportunity.
        </p>
      </div>
    </footer>
  )
}
