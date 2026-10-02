/** Shared scroll-motion helpers — tuned for iPhone Safari + desktop. */

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function isCompactViewport() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(max-width: 900px)').matches
}

/**
 * IntersectionObserver options.
 * Use pixel rootMargin (not %) — percentage margins are flaky on iOS Safari.
 */
export function revealObserverOptions(): IntersectionObserverInit {
  if (isCompactViewport()) {
    return {
      threshold: [0, 0.05, 0.15],
      // Leave room for the sticky tab bar without percentage quirks
      rootMargin: '0px 0px -48px 0px',
    }
  }

  return {
    threshold: [0, 0.12, 0.28],
    rootMargin: '-64px 0px -96px 0px',
  }
}

/** Cap stagger delays on mobile so stacked sections don't feel laggy. */
export function mobileRevealDelay(delayMs: number) {
  if (!isCompactViewport()) return delayMs
  return Math.min(delayMs, 80)
}

/**
 * Ensure the browser paints the "hidden" styles before flipping to inview,
 * otherwise iOS Safari often skips the CSS transition entirely.
 */
export function afterPaint(callback: () => void) {
  requestAnimationFrame(() => {
    requestAnimationFrame(callback)
  })
}

/** True when any part of the element is in the viewport (IO fallback). */
export function isElementInViewport(node: Element) {
  const rect = node.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  const vw = window.innerWidth || document.documentElement.clientWidth
  return rect.bottom > 0 && rect.right > 0 && rect.top < vh && rect.left < vw
}
