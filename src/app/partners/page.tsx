'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { site } from '@/lib/site'

type Status = 'idle' | 'submitting' | 'done' | 'error'

export default function PartnersPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setError('')

    const data = new FormData(event.currentTarget)
    const payload = Object.fromEntries(data.entries())

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, source: 'partner-interest' }),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(body?.error || 'Could not send. Try again.')
      }
      setStatus('done')
      event.currentTarget.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Could not send.')
    }
  }

  return (
    <>
      <Header tone="dark" />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">For apartment communities</p>
            <h1>Relevant renter demand, not wasted traffic.</h1>
            <p style={{ maxWidth: '46ch', color: 'var(--ink-soft)' }}>
              {site.name} sends consented leads from renters with thin credit, no credit, or other
              qualification barriers — people actively looking in {site.market}.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container split">
            <div>
              <h2 style={{ fontSize: '1.8rem' }}>How partners make money with us</h2>
              <p>
                We’re testing pricing with operators who already work flexible screening or
                second-chance policies:
              </p>
              <ul className="audience">
                <li>Qualified renter lead — $15–$40</li>
                <li>Scheduled property tour — $30–$75</li>
                <li>Successful lease placement — $150–$400+</li>
              </ul>
              <p>
                Lease placement aligns incentives best: we only win when you house someone. Exact
                pricing is experimental for the MVP.
              </p>
              <p className="disclaimer">
                We do not screen tenants for you or promise that any lead will be approved. You
                keep full control of criteria and decisions.
              </p>
            </div>

            <form className="form-shell" style={{ margin: 0 }} onSubmit={onSubmit}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>Request partner info</h3>
              {status === 'error' ? <div className="alert alert-error">{error}</div> : null}
              {status === 'done' ? (
                <div className="alert alert-ok">
                  Thanks — we’ll reach out about sending relevant {site.market} leads.
                </div>
              ) : null}
              <div className="form-grid">
                <label>
                  Your name
                  <input name="contactName" required />
                </label>
                <label>
                  Community / company
                  <input name="community" required />
                </label>
                <label>
                  Work email
                  <input name="email" type="email" required />
                </label>
                <label>
                  Phone
                  <input name="phone" type="tel" required />
                </label>
                <label>
                  Do you currently accept flexible / second-chance applicants?
                  <select name="flexibleScreening" required defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="yes">Yes</option>
                    <option value="case-by-case">Case by case</option>
                    <option value="exploring">Exploring it</option>
                    <option value="no">Not today</option>
                  </select>
                </label>
                <label>
                  Notes
                  <textarea name="notes" rows={3} placeholder="Markets, unit mix, preferred lead type…" />
                </label>
              </div>
              <div className="form-actions">
                <button className="btn btn-primary" type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Talk to us'}
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <Link className="btn btn-dark" href="/apply">
              See the renter intake →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
