'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getListing } from '@/lib/listings'
import { creditProfiles, denverAreas, incomeTypes } from '@/lib/site'

type Status = 'idle' | 'submitting' | 'error'

type IntakeFormProps = {
  preferredListingId?: string
  preferredArea?: string
}

export function IntakeForm({ preferredListingId, preferredArea }: IntakeFormProps) {
  const router = useRouter()
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const preferredListing = preferredListingId ? getListing(preferredListingId) : undefined
  const defaultArea =
    preferredArea && denverAreas.includes(preferredArea as (typeof denverAreas)[number])
      ? preferredArea
      : preferredListing?.area || ''

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setError('')

    const form = event.currentTarget
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          source: 'renter-intake',
          preferredListingId: preferredListing?.id || '',
          preferredListingName: preferredListing?.name || '',
        }),
      })

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(body?.error || 'Something went wrong. Please try again.')
      }

      router.push('/thanks')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <form className="form-shell" onSubmit={onSubmit}>
      {preferredListing ? (
        <div className="alert alert-ok">
          Preferencing <strong>{preferredListing.name}</strong> ({preferredListing.area}). We’ll
          include that when we intro you — and can still suggest similar communities.
        </div>
      ) : null}
      {status === 'error' ? <div className="alert alert-error">{error}</div> : null}

      <div className="form-grid two">
        <label>
          First name
          <input name="firstName" required autoComplete="given-name" />
        </label>
        <label>
          Last name
          <input name="lastName" required autoComplete="family-name" />
        </label>
      </div>

      <div className="form-grid two" style={{ marginTop: '1rem' }}>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" required autoComplete="tel" />
        </label>
      </div>

      <div className="form-grid two" style={{ marginTop: '1rem' }}>
        <label>
          Preferred area
          <select name="area" required defaultValue={defaultArea}>
            <option value="" disabled>
              Select area
            </option>
            {denverAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </label>
        <label>
          Move-in timing
          <select name="moveTiming" required defaultValue="">
            <option value="" disabled>
              Select timing
            </option>
            <option value="asap">ASAP</option>
            <option value="30-days">Within 30 days</option>
            <option value="60-days">30–60 days</option>
            <option value="exploring">Just exploring</option>
          </select>
        </label>
      </div>

      <div className="form-grid two" style={{ marginTop: '1rem' }}>
        <label>
          Monthly rent budget (max)
          <input
            name="budget"
            type="number"
            min={500}
            max={5000}
            step={50}
            required
            placeholder="e.g. 1600"
            defaultValue={preferredListing ? String(preferredListing.rentMax) : undefined}
          />
        </label>
        <label>
          Gross monthly income (approx)
          <input
            name="income"
            type="number"
            min={0}
            max={50000}
            step={100}
            required
            placeholder="e.g. 4200"
          />
        </label>
      </div>

      <div className="form-grid" style={{ marginTop: '1rem' }}>
        <label>
          Credit / qualification profile
          <select name="creditProfile" required defaultValue="">
            <option value="" disabled>
              What best describes your situation?
            </option>
            {creditProfiles.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Income documentation
          <select name="incomeType" required defaultValue="">
            <option value="" disabled>
              Select income type
            </option>
            {incomeTypes.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Beds needed
          <select
            name="beds"
            required
            defaultValue={preferredListing?.beds[0] || ''}
          >
            <option value="" disabled>
              Select beds
            </option>
            <option value="studio">Studio</option>
            <option value="1">1 bed</option>
            <option value="2">2 beds</option>
            <option value="3plus">3+ beds</option>
          </select>
        </label>
        <label>
          Anything else we should know?
          <textarea
            name="notes"
            rows={4}
            placeholder="Pets, cosigner available, prior eviction, preferred neighborhoods…"
            defaultValue={
              preferredListing ? `Interested in ${preferredListing.name}.` : undefined
            }
          />
        </label>
      </div>

      <div style={{ marginTop: '1.1rem' }}>
        <label className="checkbox">
          <input name="consent" type="checkbox" value="yes" required />
          <span>
            I consent to RenterMatch sharing my intake details with apartment communities that may
            consider my situation. I understand this is not a rental application and does not
            guarantee approval.
          </span>
        </label>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Find apartments that fit'}
        </button>
        <p className="form-note">Free for renters. No credit pull on this form.</p>
      </div>
    </form>
  )
}
