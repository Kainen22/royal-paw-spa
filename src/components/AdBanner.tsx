'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { siteAds, type AdItem } from '@/lib/ads'

function AdTrack({ ads, ariaHidden }: { ads: AdItem[]; ariaHidden?: boolean }) {
  return (
    <ul className="ad-banner-track" aria-hidden={ariaHidden || undefined}>
      {ads.map((ad) => (
        <li key={`${ariaHidden ? 'dup' : 'main'}-${ad.id}`} className="ad-banner-item">
          {ad.href ? (
            <Link href={ad.href}>{ad.label}</Link>
          ) : (
            <span>{ad.label}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

export function AdBanner() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return (
    <div className={`ad-banner${reduceMotion ? ' is-static' : ''}`} role="region" aria-label="Promotions">
      <div className="ad-banner-viewport">
        <AdTrack ads={siteAds} />
        {/* Duplicate track for a seamless loop; hidden from AT */}
        {!reduceMotion ? <AdTrack ads={siteAds} ariaHidden /> : null}
      </div>
    </div>
  )
}
