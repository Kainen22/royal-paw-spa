'use client'

import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { getMoegoBookingUrl } from '@/lib/moego'

export function MoegoBooking() {
  const searchParams = useSearchParams()

  const bookingUrl = useMemo(() => {
    const params: Record<string, string> = {}
    searchParams.forEach((value, key) => {
      params[key] = value
    })
    return getMoegoBookingUrl(params)
  }, [searchParams])

  return (
    <div className="card booking-card">
      <iframe
        id="moego-iframe"
        className="booking-frame"
        src={bookingUrl}
        title="Book a mobile grooming appointment"
        loading="lazy"
        allow="payment"
      />
      <p className="booking-fallback">
        Booking not loading?{' '}
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
          Open the booking page in a new tab
        </a>
        .
      </p>
    </div>
  )
}
