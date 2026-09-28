import { Icon } from '@/components/Icon'
import { googleReviewsUrl, moegoReviewsUrl } from '@/lib/reviews'
import type { Testimonial } from '@/lib/types'

const sourceLabel = {
  google: 'Google',
  moego: 'Moego',
} as const

const sourceHref = {
  google: googleReviewsUrl,
  moego: moegoReviewsUrl,
} as const

export function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <figure className="card review">
      <div className="review-top">
        <div className="stars" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }, (_, i) => (
            <Icon key={i} name="star" size={16} filled />
          ))}
        </div>
        <a
          className="review-source"
          href={sourceHref[review.source]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {sourceLabel[review.source]}
        </a>
      </div>
      <blockquote>{review.quote}</blockquote>
      {review.photos && review.photos.length > 0 ? (
        <div className="review-photos">
          {review.photos.map((photo) => (
            <img key={photo} src={photo} alt={`Photo from ${review.author}'s review`} />
          ))}
        </div>
      ) : null}
      <figcaption>{review.author}</figcaption>
    </figure>
  )
}
