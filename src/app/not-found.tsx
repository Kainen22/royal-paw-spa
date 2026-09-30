import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { routes } from '@/lib/routes'
import { getSiteName } from '@/lib/site'

export default function NotFound() {
  const siteName = getSiteName()

  return (
    <PageShell>
      <div className="container page page-narrow">
        <header className="page-header">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p className="lead">
            That link doesn’t lead anywhere on {siteName}. Head home or book a groom instead.
          </p>
        </header>
        <div className="btn-row">
          <Link className="btn btn-primary" href={routes.home}>
            Back home
          </Link>
          <Link className="btn btn-outline" href={routes.book}>
            Book now
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
