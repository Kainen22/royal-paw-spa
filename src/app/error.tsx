'use client'

import Link from 'next/link'
import { routes } from '@/lib/routes'
import { getSiteName, toTelHref } from '@/lib/site'

const fallbackPhone = '(719) 291-4841'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ reset }: ErrorProps) {
  const siteName = getSiteName()
  const telHref = toTelHref(fallbackPhone)

  return (
    <div className="container page page-narrow">
      <header className="page-header">
        <p className="eyebrow">Something went wrong</p>
        <h1>We hit a snag</h1>
        <p className="lead">
          {siteName} couldn’t load this page. You can try again, go home, book online, or give us a
          call.
        </p>
      </header>
      <div className="btn-row">
        <button type="button" className="btn btn-primary" onClick={reset}>
          Try again
        </button>
        <Link className="btn btn-outline" href={routes.home}>
          Home
        </Link>
        <Link className="btn btn-outline" href={routes.book}>
          Book
        </Link>
        <a className="btn btn-outline" href={telHref}>
          Call {fallbackPhone}
        </a>
      </div>
    </div>
  )
}
