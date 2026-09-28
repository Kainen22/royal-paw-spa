'use client'

import { useCallback, useEffect, useState, type PointerEvent } from 'react'
import { Icon } from '@/components/Icon'
import type { GalleryItem } from '@/lib/photos'

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null)

  if (items.length === 0) return null

  return (
    <section className="section container">
      <div className="section-head">
        <p className="eyebrow">Fresh from the van</p>
        <h2>Recent grooms</h2>
      </div>
      <div className="gallery-grid">
        {items.map((item, itemIndex) => (
          <button
            key={item.src}
            type="button"
            className="gallery-tile"
            onClick={() => setIndex(itemIndex)}
            aria-label={item.kind === 'video' ? 'Play recent groom video' : 'View recent groom photo'}
          >
            <img
              src={item.kind === 'video' ? item.poster || item.src : item.src}
              alt="A freshly groomed dog"
              loading="lazy"
              className="gallery-photo"
            />
            {item.kind === 'video' ? (
              <span className="gallery-play" aria-hidden>
                <Icon name="play" size={22} filled />
              </span>
            ) : null}
          </button>
        ))}
      </div>
      {index !== null ? (
        <GalleryLightbox items={items} index={index} onIndexChange={setIndex} onClose={() => setIndex(null)} />
      ) : null}
    </section>
  )
}

function GalleryLightbox({
  items,
  index,
  onIndexChange,
  onClose,
}: {
  items: GalleryItem[]
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
}) {
  const safeIndex = ((index % items.length) + items.length) % items.length
  const current = items[safeIndex]

  const prev = useCallback(() => {
    onIndexChange((safeIndex - 1 + items.length) % items.length)
  }, [items.length, onIndexChange, safeIndex])

  const next = useCallback(() => {
    onIndexChange((safeIndex + 1) % items.length)
  }, [items.length, onIndexChange, safeIndex])

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (current.kind === 'video') return
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
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Recent grooms">
      <button type="button" className="lightbox-scrim" aria-label="Close gallery" onClick={onClose} />
      <button type="button" className="lightbox-close" aria-label="Close" onClick={onClose}>
        <Icon name="close" size={22} />
      </button>
      {items.length > 1 ? (
        <button type="button" className="lightbox-nav is-prev" aria-label="Previous" onClick={prev}>
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
        {current.kind === 'video' ? (
          <video
            key={current.src}
            className="lightbox-video"
            src={current.src}
            poster={current.poster}
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
            onLoadedMetadata={(event) => {
              event.currentTarget.muted = true
              event.currentTarget.volume = 0
            }}
            onVolumeChange={(event) => {
              const video = event.currentTarget
              if (!video.muted) video.muted = true
              if (video.volume !== 0) video.volume = 0
            }}
          />
        ) : (
          <img src={current.src} alt={`Groom photo ${safeIndex + 1}`} />
        )}
      </div>
      {items.length > 1 ? (
        <button type="button" className="lightbox-nav is-next" aria-label="Next" onClick={next}>
          <Icon name="chevronRight" size={28} />
        </button>
      ) : null}
      <p className="lightbox-meta">
        {current.kind === 'video' ? 'Video' : 'Photo'} · {safeIndex + 1} / {items.length}
      </p>
    </div>
  )
}
