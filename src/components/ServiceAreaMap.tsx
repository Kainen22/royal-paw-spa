'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import 'leaflet/dist/leaflet.css'
import { Icon } from '@/components/Icon'
import { routes } from '@/lib/routes'
import {
  serviceAreaCenter,
  serviceAreaLabel,
  serviceAreaPolygon,
} from '@/lib/service-area'

type ServiceAreaMapProps = {
  bookHref?: string
}

export function ServiceAreaMap({ bookHref = routes.book }: ServiceAreaMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    let map: import('leaflet').Map | undefined

    async function mount() {
      const L = (await import('leaflet')).default
      if (cancelled || !mapRef.current) return

      map = L.map(mapRef.current, {
        scrollWheelZoom: false,
        attributionControl: true,
      }).setView(serviceAreaCenter, 9)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map)

      // One closed loop from Moego’s real zone union
      const polygon = L.polygon(serviceAreaPolygon, {
        color: '#6b3fa0',
        weight: 3,
        opacity: 1,
        fillColor: '#6b3fa0',
        fillOpacity: 0.3,
        className: 'service-area-shape',
      }).addTo(map)

      map.fitBounds(polygon.getBounds(), { padding: [28, 28] })
    }

    void mount()

    return () => {
      cancelled = true
      map?.remove()
    }
  }, [])

  return (
    <section className="section container">
      <div className="service-area">
        <div className="service-area-copy">
          <span className="area-icon">
            <Icon name="pin" size={24} />
          </span>
          <div>
            <p className="eyebrow">Service area</p>
            <h2>Grooming across the Denver metro</h2>
            <p>{serviceAreaLabel}</p>
          </div>
          <Link className="btn btn-soft" href={bookHref}>
            Check your area
          </Link>
        </div>
        <div className="service-area-map" ref={mapRef} role="img" aria-label="Service area map" />
      </div>
    </section>
  )
}
