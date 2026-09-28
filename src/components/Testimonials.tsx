import { Icon } from '@/components/Icon'
import { ReviewCarousel } from '@/components/ReviewCarousel'
import { googleRating } from '@/lib/reviews'
import { routes } from '@/lib/routes'
import type { Testimonial } from '@/lib/types'
import Link from 'next/link'

type TestimonialsProps = {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="section container">
      <div className="section-head section-head-row">
        <div>
          <p className="eyebrow">Reviews</p>
          <h2>What pet parents say</h2>
          <p className="review-score">
            <span className="stars" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <Icon key={i} name="star" size={16} filled />
              ))}
            </span>
            <strong>{googleRating.score}</strong> from {googleRating.count} Google reviews
          </p>
        </div>
        <Link className="text-link" href={routes.reviews}>
          See all reviews →
        </Link>
      </div>
      <ReviewCarousel reviews={testimonials} />
    </section>
  )
}
