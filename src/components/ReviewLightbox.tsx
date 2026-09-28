'use client'

import { useCallback, useEffect, type PointerEvent } from 'react'
import { Icon } from '@/components/Icon'

type ReviewLightboxProps = {
  photos: string[]
  captions?: string[]
  author: string
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}

export function ReviewLightbox({
  photos,
  captions,
  author,
  index,
  onClose,
  onIndexChange,
}: ReviewLightboxProps) {
  const safeIndex = ((index % photos.length) + photos.length) % photos.length

  const prev = useCallback(() => {
    onIndexChange((safeIndex - 1 + photos.length) % photos.length)
  }, [onIndexChange, photos.length, safeIndex])

  const next = useCallback(() => {
    onIndexChange((safeIndex + 1) % photos.length)
  }, [onIndexChange, photos.length, safeIndex])

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    const start = Number(event.currentTarget.dataset.startX || 0)
    const delta = event.clientX - start
    if (delta > 50) prev()
    if (delta < -50) next()
  }

  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') prev()
      if (event.key === 'ArrowRight') next()
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = original
      window.removeEventListener('keydown', onKey)
    }
  }, [next, onClose, prev])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${author}'s review photos`}>
      <button type="button" className="lightbox-scrim" aria-label="Close photos" onClick={onClose} />
      <button type="button" className="lightbox-close" aria-label="Close" onClick={onClose}>
        <Icon name="close" size={22} />
      </button>
      {photos.length > 1 ? (
        <button type="button" className="lightbox-nav is-prev" aria-label="Previous photo" onClick={prev}>
          <Icon name="chevronLeft" size={28} />
        </button>
      ) : null}
      <div
        className="lightbox-frame"
        onPointerDown={(event) => {
          event.currentTarget.dataset.startX = String(event.clientX)
        }}
        onPointerUp={onPointerUp}
      >
        <img src={photos[safeIndex]} alt={`Photo ${safeIndex + 1} from ${author}'s review`} />
      </div>
      {photos.length > 1 ? (
        <button type="button" className="lightbox-nav is-next" aria-label="Next photo" onClick={next}>
          <Icon name="chevronRight" size={28} />
        </button>
      ) : null}
      <p className="lightbox-meta">
        {captions?.[safeIndex] || author} · {safeIndex + 1} / {photos.length}
      </p>
    </div>
  )
}
