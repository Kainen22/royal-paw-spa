import { Icon } from '@/components/Icon'
import { googleRating, googleReviewsUrl, moegoReviewsUrl } from '@/lib/reviews'
import type { Testimonial } from '@/lib/types'

type TestimonialsProps = {
  testimonials: Testimonial[]
}

const sourceLabel = {
  google: 'Google',
  moego: 'Moego',
} as const

const sourceHref = {
  google: googleReviewsUrl,
  moego: moegoReviewsUrl,
} as const

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
        <div className="review-links">
          <a className="text-link" href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
            Read Google reviews →
          </a>
          <a className="text-link" href={moegoReviewsUrl} target="_blank" rel="noopener noreferrer">
            See Moego reviews →
          </a>
        </div>
      </div>
      <div className="grid-3">
        {testimonials.map((item) => (
          <figure key={item.id} className="card review">
            <div className="review-top">
              <div className="stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="star" size={16} filled />
                ))}
              </div>
              <a
                className="review-source"
                href={sourceHref[item.source]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sourceLabel[item.source]}
              </a>
            </div>
            <blockquote>{item.quote}</blockquote>
            <figcaption>{item.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
