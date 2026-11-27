export const routes = {
  home: '/',
  services: '/services',
  book: '/book',
  payment: '/payment',
  faq: '/faq',
  reviews: '/reviews',
  about: '/about',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
} as const

export type SiteRoute = (typeof routes)[keyof typeof routes]

export const navLinks: Array<{ href: SiteRoute; label: string }> = [
  { href: routes.services, label: 'Services' },
  { href: routes.reviews, label: 'Reviews' },
  { href: routes.about, label: 'About' },
  { href: routes.contact, label: 'Contact' },
]

export const footerLinks: Array<{ href: SiteRoute; label: string }> = [
  { href: routes.payment, label: 'Payment' },
  { href: routes.faq, label: 'FAQ' },
  { href: routes.privacy, label: 'Privacy' },
  { href: routes.terms, label: 'Terms' },
]
