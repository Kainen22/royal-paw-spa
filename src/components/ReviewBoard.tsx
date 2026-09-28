'use client'

import { useMemo, useState } from 'react'
import { ReviewCard } from '@/components/ReviewCard'
import type { ReviewSource, Testimonial } from '@/lib/types'

type Filter = 'all' | ReviewSource

const filters: Array<{ id: Filter; label: string }> = [
  { id: 'all', label: 'All reviews' },
  { id: 'google', label: 'Google' },
  { id: 'moego', label: 'Moego' },
]

export function ReviewBoard({
  reviews,
  defaultFilter = 'all',
}: {
  reviews: Testimonial[]
  defaultFilter?: Filter
}) {
  const [filter, setFilter] = useState<Filter>(defaultFilter)

  const shown = useMemo(
    () => (filter === 'all' ? reviews : reviews.filter((review) => review.source === filter)),
    [filter, reviews],
  )

  const googleCount = reviews.filter((review) => review.source === 'google').length
  const moegoCount = reviews.filter((review) => review.source === 'moego').length

  return (
    <div>
      <div className="review-filters" role="tablist" aria-label="Filter reviews by source">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={filter === item.id}
            className={`review-filter${filter === item.id ? ' is-active' : ''}`}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
            <span className="review-filter-count">
              {item.id === 'all' ? reviews.length : item.id === 'google' ? googleCount : moegoCount}
            </span>
          </button>
        ))}
      </div>
      <div className="grid-3">
        {shown.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}
