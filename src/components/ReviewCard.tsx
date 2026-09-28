'use client'

import { useState } from 'react'
import { Icon } from '@/components/Icon'
import { ReviewLightbox } from '@/components/ReviewLightbox'
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

export function ReviewCard({
  review,
  onPhotoClick,
}: {
  review: Testimonial
  onPhotoClick?: (photo: string) => void
}) {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null)
  const photos = review.photos ?? []

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
      {photos.length > 0 ? (
        <div className="review-photos">
          {photos.map((photo, index) => (
            <button
              key={photo}
              type="button"
              className="review-photo-btn"
              onClick={() => (onPhotoClick ? onPhotoClick(photo) : setPhotoIndex(index))}
            >
              <img src={photo} alt={`Photo from ${review.author}'s review`} />
            </button>
          ))}
        </div>
      ) : null}
      <figcaption>{review.author}</figcaption>
      {photoIndex !== null ? (
        <ReviewLightbox
          photos={photos}
          author={review.author}
          index={photoIndex}
          onIndexChange={setPhotoIndex}
          onClose={() => setPhotoIndex(null)}
        />
      ) : null}
    </figure>
  )
}
