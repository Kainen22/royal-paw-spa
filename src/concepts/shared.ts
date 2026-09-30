import { defaultServices, defaultSiteContent } from '@/lib/content'
import { businessStats } from '@/lib/stats'
import { googleRating, googleReviews } from '@/lib/reviews'
import { routes } from '@/lib/routes'

/** Shared production ingredients for every concept site. */
export const conceptKit = {
  brand: 'Royal Paw Spa',
  phone: defaultSiteContent.contactPhone,
  phoneHref: `tel:${defaultSiteContent.contactPhone.replace(/[^\d+]/g, '')}`,
  bookHref: routes.book,
  serviceArea: defaultSiteContent.serviceArea,
  heroKicker: defaultSiteContent.heroKicker,
  heroTitle: defaultSiteContent.heroTitle,
  heroSubtitle: defaultSiteContent.heroSubtitle,
  aboutTitle: defaultSiteContent.aboutTitle,
  aboutBody: defaultSiteContent.aboutBody,
  hours: defaultSiteContent.hours,
  stats: businessStats,
  rating: googleRating,
  reviews: googleReviews.slice(0, 3),
  packages: defaultServices.filter((service) => service.category === 'package').slice(0, 4),
  nav: [
    { href: routes.services, label: 'Services' },
    { href: routes.reviews, label: 'Reviews' },
    { href: routes.payment, label: 'Pricing' },
    { href: routes.faq, label: 'FAQ' },
    { href: routes.about, label: 'About' },
  ],
  photos: {
    hero: '/photos/hero.jpg',
    about: '/photos/about.jpg',
    gallery: [
      '/photos/gallery/01-bowtie-groom.jpg',
      '/photos/gallery/02-rainbow-poodle.jpg',
      '/photos/gallery/05-grooming.jpg',
      '/photos/gallery/06-van-door.jpg',
      '/photos/gallery/07-stylist.jpg',
      '/photos/gallery/10-van-wrap.jpg',
      '/photos/gallery/11-van-husky.jpg',
      '/photos/gallery/04-drying.jpg',
    ],
  },
  proofs: [
    'Fully equipped mobile spa',
    'One-on-one care',
    'No cages or kennels',
    'We come to you',
    'A calmer, happier pet',
  ],
  /** Boy Alone lavender — use across concepts instead of old royal purple. */
  accent: '#bd95e3',
  accentStrong: '#8f63c4',
  accentInk: '#2a1838',
  accentSoft: '#f3eafb',
}
