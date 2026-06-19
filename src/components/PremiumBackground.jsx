/**
 * PremiumBackground (light "milk" theme)
 *
 * A static, GPU-cheap milk-white backdrop with very soft warm color
 * washes baked directly into a multi-stop CSS radial-gradient.
 *
 * Performance note: the previous version stacked three 600–820px <div>s
 * each with `filter: blur(120–160px)` plus an SVG grain layer and a
 * vignette. Large blur filters force the browser to allocate big
 * offscreen layers and re-composite them on every scroll/paint — a real
 * jank source on phones. Here there is no `filter`, no animation and no
 * extra layers: just one painted gradient that the GPU handles trivially.
 */
export default function PremiumBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
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
