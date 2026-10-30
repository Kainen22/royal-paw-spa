'use client'

import { useEffect, useId, useRef } from 'react'
import type { Map as LeafletMap, Marker } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {
  bedLabel,
  denverMapCenter,
  flexibilityLabels,
  formatRent,
  type Listing,
} from '@/lib/listings'

type ListingsMapProps = {
  listings: Listing[]
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function popupHtml(listing: Listing): string {
  const tags = listing.flexibility
    .slice(0, 3)
    .map((tag) => `<span class="map-popup-tag">${escapeHtml(flexibilityLabels[tag])}</span>`)
    .join('')

  return `
    <div class="map-popup">
      <img class="map-popup-image" src="${escapeHtml(listing.image)}" alt="" width="280" height="140" />
      <p class="map-popup-meta">${escapeHtml(listing.area)} · ${escapeHtml(listing.neighborhood)}</p>
      <strong class="map-popup-title">${escapeHtml(listing.name)}</strong>
      <p class="map-popup-rent">${escapeHtml(formatRent(listing))}<span>/mo</span></p>
      <p class="map-popup-beds">${escapeHtml(bedLabel(listing.beds))}</p>
      <p class="map-popup-summary">${escapeHtml(listing.summary)}</p>
      <div class="map-popup-tags">${tags}</div>
      <div class="map-popup-actions">
        <a class="map-popup-link" href="/listings/${escapeHtml(listing.id)}">View details</a>
        <a class="map-popup-link map-popup-link-primary" href="/apply?listing=${escapeHtml(listing.id)}&amp;area=${encodeURIComponent(listing.area)}">Request intro</a>
      </div>
    </div>
  `
}

export function ListingsMap({ listings }: ListingsMapProps) {
  const mapId = useId().replace(/:/g, '')
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const markersRef = useRef<Marker[]>([])

  useEffect(() => {
    let cancelled = false

    async function setup() {
      const L = (await import('leaflet')).default

      if (cancelled || !containerRef.current) return

      if (!mapRef.current) {
        mapRef.current = L.map(containerRef.current, {
          scrollWheelZoom: false,
          zoomControl: true,
        }).setView([denverMapCenter.lat, denverMapCenter.lng], 11)

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        }).addTo(mapRef.current)

        // Enable wheel zoom after intentional focus / click so page scroll stays usable.
        mapRef.current.on('focus click', () => {
          mapRef.current?.scrollWheelZoom.enable()
        })
        mapRef.current.on('blur', () => {
          mapRef.current?.scrollWheelZoom.disable()
        })
      }

      const map = mapRef.current
      markersRef.current.forEach((marker) => marker.remove())
      markersRef.current = []

      const icon = L.divIcon({
        className: 'listing-map-marker',
        html: '<span class="listing-map-marker-dot"></span>',
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -12],
      })

      const bounds: [number, number][] = []

      listings.forEach((listing) => {
        const marker = L.marker([listing.lat, listing.lng], { icon })
          .addTo(map)
          .bindPopup(popupHtml(listing), {
            maxWidth: 300,
            minWidth: 260,
            className: 'listing-map-popup',
            autoPan: true,
            closeButton: true,
          })

        markersRef.current.push(marker)
        bounds.push([listing.lat, listing.lng])
      })

      if (bounds.length === 1) {
        map.setView(bounds[0], 13)
      } else if (bounds.length > 1) {
        map.fitBounds(bounds, { padding: [48, 48], maxZoom: 12 })
      } else {
        map.setView([denverMapCenter.lat, denverMapCenter.lng], 11)
      }

      // Leaflet needs a resize after layout settles in flex/grid parents.
      requestAnimationFrame(() => map.invalidateSize())
    }

    void setup()

    return () => {
      cancelled = true
    }
  }, [listings])

  useEffect(() => {
    return () => {
      markersRef.current.forEach((marker) => marker.remove())
      markersRef.current = []
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <div className="listings-map-shell">
      <div
        id={`listings-map-${mapId}`}
        ref={containerRef}
        className="listings-map"
        role="region"
        aria-label="Denver metro map of flexible-screening apartment listings"
      />
      {listings.length === 0 ? (
        <p className="listings-map-empty">No map pins for the current filters.</p>
      ) : (
        <p className="form-note listings-map-hint">
          Click a pin for rent, screening fit, and a quick intro link. Pins are approximate for this
          MVP seed set.
        </p>
      )}
    </div>
  )
}
