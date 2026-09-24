export function getSiteName() {
  return process.env.NEXT_PUBLIC_SITE_NAME || 'Royal Paw Spa'
}

export function toTelHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}
