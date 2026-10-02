import { routes } from '@/lib/routes'

export type AdItem = {
  id: string
  label: string
  href?: string
}

/** Promo spots that scroll across the top ad banner. */
export const siteAds: AdItem[] = [
  { id: 'book', label: 'Book mobile grooming online — same-week openings', href: routes.book },
  { id: 'new', label: 'New clients: mention Royal Paw for a welcome treat', href: routes.book },
  { id: 'van', label: 'Fully equipped spa van · we come to your door', href: routes.services },
  { id: 'puppy', label: 'Puppy Intro grooms from $55', href: routes.services },
  { id: 'reviews', label: '5.0★ on Google — see recent grooms', href: routes.reviews },
  { id: 'area', label: 'Serving Denver metro, Boulder, Aurora & more', href: routes.contact },
]
