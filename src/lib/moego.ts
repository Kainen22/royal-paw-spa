const MOEGO_BOOKING_URL =
  process.env.NEXT_PUBLIC_MOEGO_BOOKING_URL ??
  'https://booking.moego.pet/ol/book?name=Royalpawspa'

const TRACKING_PARAMS = [
  'gclid',
  'wbraid',
  'gbraid',
  'fbclid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
]

export function getMoegoBookingUrl(searchParams?: Record<string, string | string[] | undefined>) {
  if (!searchParams) {
    return MOEGO_BOOKING_URL
  }

  const params = new URLSearchParams()

  for (const key of TRACKING_PARAMS) {
    const value = searchParams[key]
    if (typeof value === 'string' && value.length > 0) {
      params.set(key, value)
    }
  }

  const query = params.toString()
  if (!query) {
    return MOEGO_BOOKING_URL
  }

  const separator = MOEGO_BOOKING_URL.includes('?') ? '&' : '?'
  return `${MOEGO_BOOKING_URL}${separator}${query}`
}
