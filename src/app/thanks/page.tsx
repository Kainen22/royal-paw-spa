import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Intake received',
}

export default function ThanksPage() {
  return (
    <>
      <Header tone="dark" />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">You’re in</p>
            <h1>We have your intake.</h1>
          </div>
        </section>
        <div className="container">
          <div className="success-panel">
            <p>
              Next, we’ll review your profile and introduce you — with your consent already on
              file — to {site.market} communities that may fit.
            </p>
            <p>
              Expect a follow-up by email or phone. This is not an approval and not a rental
              application.
            </p>
            <div className="cta-row" style={{ marginTop: '1.25rem' }}>
              <Link className="btn btn-primary" href="/">
                Back to home
              </Link>
              <Link className="btn btn-dark" href="/partners">
                Know a leasing manager?
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
