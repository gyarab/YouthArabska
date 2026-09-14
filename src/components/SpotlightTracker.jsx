import { useEffect } from 'react'

/**
 * SpotlightTracker
 *
 * Ultra-lightweight cursor-tracking spotlight for `.glass-card` elements.
 *
 * Performance characteristics:
 * 1. Only enabled on devices with fine pointer (mouse / trackpad) and hover capability.
 * 2. Caches card bounding rectangle on `pointerenter` / target switch, eliminating
 *    synchronous `getBoundingClientRect()` layout reflows during rapid pointer moves.
 * 3. Batches CSS variable updates (`--spot-x`, `--spot-y`) via `requestAnimationFrame`.
 * 4. Zero DOM mutations, zero React state re-renders.
 */
export default function SpotlightTracker() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const supportsHover = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches
    if (!supportsHover) return

    let currentCard = null
    let cardRect = null
    let rafId = 0
    let pendingX = 0
    let pendingY = 0

    const updateSpotlight = () => {
      rafId = 0
      if (currentCard) {
        currentCard.style.setProperty('--spot-x', `${pendingX}px`)
        currentCard.style.setProperty('--spot-y', `${pendingY}px`)
      }
    }

    const handlePointerMove = (event) => {
      // Find the card under the cursor
      const card = event.target.closest?.('.glass-card')
      if (!card) {
        currentCard = null
        cardRect = null
        return
      }

      // If moved to a different card or rect not yet cached, measure once
      if (card !== currentCard || !cardRect) {
        currentCard = card
        cardRect = card.getBoundingClientRect()
      }

      pendingX = event.clientX - cardRect.left
      pendingY = event.clientY - cardRect.top

      if (!rafId) {
        rafId = requestAnimationFrame(updateSpotlight)
      }
    }

    const handleScrollOrLeave = () => {
      // Invalidate cached rect on scroll so coordinates remain accurate
      cardRect = null
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('scroll', handleScrollOrLeave, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', handleScrollOrLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return null
}
