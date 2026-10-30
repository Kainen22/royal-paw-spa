import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { IntakeForm } from '@/components/IntakeForm'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Renter intake',
  description: `Free ${site.market} intake for renters with credit or qualification barriers.`,
}

export default function ApplyPage() {
  return (
    <>
      <Header tone="dark" />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Free for renters</p>
            <h1>Tell us where you need to land.</h1>
            <p style={{ maxWidth: '42ch', color: 'var(--ink-soft)' }}>
              We’ll match you with {site.market} communities that may consider your credit,
              income, or rental history profile. No hard credit pull on this form.
            </p>
          </div>
        </section>
        <div className="container">
          <IntakeForm />
          <p className="disclaimer" style={{ marginBottom: '3rem' }}>
            Submitting this form is not a rental application and does not guarantee housing.
            You consent to share your details with interested apartment partners only.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
