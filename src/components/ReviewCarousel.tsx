'use client'

import { useRef, useState } from 'react'
import { Icon } from '@/components/Icon'
import { ReviewCard } from '@/components/ReviewCard'
import { ReviewLightbox } from '@/components/ReviewLightbox'
import type { Testimonial } from '@/lib/types'

export function ReviewCarousel({ reviews }: { reviews: Testimonial[] }) {
  const scroller = useRef<HTMLDivElement>(null)
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null)
  const photoReviews = reviews.filter((review) => (review.photos?.length ?? 0) > 0)
  const gallery = photoReviews.flatMap((review) =>
    (review.photos ?? []).map((src) => ({ src, author: review.author })),
  )

  function scrollByCard(direction: -1 | 1) {
    const node = scroller.current
    if (!node) return
    const card = node.querySelector<HTMLElement>('.review-slide')
    const amount = card ? card.offsetWidth + 16 : node.clientWidth * 0.85
    node.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }

  if (photoReviews.length === 0) return null

  return (
    <div className="review-carousel">
      <button
        type="button"
        className="review-carousel-nav is-prev"
        aria-label="Previous reviews"
        onClick={() => scrollByCard(-1)}
      >
        <Icon name="chevronLeft" size={22} />
      </button>
      <div className="review-carousel-track" ref={scroller}>
        {photoReviews.map((review) => (
          <div className="review-slide" key={review.id}>
            <ReviewCard
              review={review}
              onPhotoClick={(photo) => {
                const index = gallery.findIndex((item) => item.src === photo)
                setGalleryIndex(index >= 0 ? index : 0)
              }}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="review-carousel-nav is-next"
        aria-label="Next reviews"
        onClick={() => scrollByCard(1)}
      >
        <Icon name="chevronRight" size={22} />
      </button>
      {galleryIndex !== null ? (
        <ReviewLightbox
          photos={gallery.map((item) => item.src)}
          captions={gallery.map((item) => item.author)}
          author={gallery[galleryIndex]?.author ?? ''}
          index={galleryIndex}
          onIndexChange={setGalleryIndex}
          onClose={() => setGalleryIndex(null)}
        />
      ) : null}
    </div>
  )
}
