/**
 * PremiumBackground (light "milk" theme)
 *
 * A static, lightweight milk-white backdrop with soft warm color
 * washes baked directly into CSS radial-gradients.
 *
 * Performance note:
 * - NO `will-change: transform` or 3D translations, preventing continuous
 *   GPU layer compositing / discrete GPU wake-up on hybrid laptops.
 * - Sits at `-z-10` with `pointer-events-none` so it never participates in
 *   pointer hits or layout invalidations.
 */
export default function PremiumBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
      style={{
        background: [
          'radial-gradient(1100px circle at 12% -8%, rgba(255, 204, 71, 0.16), transparent 46%)',
          'radial-gradient(1000px circle at 100% 8%, rgba(255, 126, 95, 0.12), transparent 44%)',
          'radial-gradient(1000px circle at -5% 100%, rgba(199, 121, 208, 0.12), transparent 46%)',
          'radial-gradient(900px circle at 95% 100%, rgba(255, 204, 71, 0.10), transparent 48%)',
          '#FBF9F4',
        ].join(', '),
      }}
    />
  )
}
