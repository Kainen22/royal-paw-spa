export const routes = {
  home: '/',
  services: '/services',
  book: '/book',
  payment: '/payment',
  faq: '/faq',
  reviews: '/reviews',
  about: '/about',
  contact: '/contact',
  blog: '/blog',
} as const

export type SiteRoute = (typeof routes)[keyof typeof routes]

export function blogPostPath(slug: string) {
  return `${routes.blog}/${slug}`
}

export const navLinks: Array<{ href: SiteRoute; label: string }> = [
  { href: routes.services, label: 'Services' },
  { href: routes.reviews, label: 'Reviews' },
  { href: routes.blog, label: 'Blog' },
  { href: routes.faq, label: 'FAQ' },
  { href: routes.about, label: 'About' },
]
