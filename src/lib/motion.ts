/** Shared scroll-motion helpers — tuned separately for phone vs desktop. */

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function isCompactViewport() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(max-width: 900px)').matches
}

/** IntersectionObserver options that avoid flicker on short phone viewports. */
export function revealObserverOptions(): IntersectionObserverInit {
  if (isCompactViewport()) {
    return {
      threshold: [0, 0.06, 0.18],
      // Gentler inset so sections don't ping-pong in/out behind the tab bar
      rootMargin: '0px 0px -4% 0px',
    }
  }

  return {
    threshold: [0, 0.12, 0.28],
    rootMargin: '-8% 0px -12% 0px',
  }
}

/** Cap stagger delays on mobile so stacked sections don't feel laggy. */
export function mobileRevealDelay(delayMs: number) {
  if (!isCompactViewport()) return delayMs
  return Math.min(delayMs, 80)
}
