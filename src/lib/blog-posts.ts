import type { BlogPost } from './types'

/**
 * Default blog posts shown when Notion isn’t connected.
 * To publish without Notion: add a post here, commit, and redeploy.
 * Prefer Notion (NOTION_BLOG_DATABASE_ID) so the owner can post without code.
 */
export const defaultBlogPosts: BlogPost[] = [
  {
    id: 'spring-van-days',
    slug: 'spring-van-days-are-open',
    title: 'Spring van days are open',
    excerpt:
      'Warm weather means fuller coats and more doodle bookings — grab your preferred weekday before the calendar fills.',
    body: `Warm weather is here, and the purple van is booking up fast.

If your pup needs a full groom, bath & brush, or a puppy intro, now is a great time to lock in a weekday slot. Same-week openings go quickly once school schedules settle.

Book online anytime, or text us if you need help picking a service.`,
    date: '2026-03-18',
    published: true,
  },
  {
    id: 'creative-color',
    slug: 'creative-color-grooms',
    title: 'Creative color grooms are back',
    excerpt:
      'Safe pet-friendly color for birthdays, holidays, and pups who love a little sparkle — ask when you book.',
    body: `Life is better with a little color — and so are a lot of our regulars.

We offer pet-safe creative color as an add-on when your dog’s coat and temperament are a good fit. Think ear tips, a soft streak, or a festive touch for birthdays and holidays.

Mention it when you book online so we can plan time and shade with you.`,
    date: '2026-02-09',
    published: true,
  },
  {
    id: 'new-service-area',
    slug: 'more-denver-metro-coverage',
    title: 'More Denver metro coverage',
    excerpt:
      'We’re continuing to serve Denver, Boulder, Aurora, Parker, and nearby neighborhoods — check the map when you book.',
    body: `Thank you for growing with Royal Paw Spa.

We’re still rolling through Denver metro, Boulder, Longmont, Brighton, Aurora, Parker, Castle Rock, Golden, and Littleton. If you’re near the edge of the map, call or text — we can often make it work.

Parking tip: we need about 30 feet and a place to sit with our self-contained van. No water or power hookup needed from you.`,
    date: '2026-01-14',
    published: true,
  },
]
