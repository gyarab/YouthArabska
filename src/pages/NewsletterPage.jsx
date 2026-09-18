import SEO from '../components/SEO'
import useReveal from '../hooks/useReveal'

const newsletters = [
  {
    id: 'i',
    file: 'news_I.html',
    issue: 'I',
    period: 'Leden – Únor 2026',
    monthRange: '01–02 / 2026',
    description: 'První vydání newsletteru Youth Arabské. Ohlédnutí za akcemi, novinky z komunity a plány na nový rok.',
  },
  {
    id: 'ii',
    file: 'news_II.html',
    issue: 'II',
    period: 'Březen – Duben 2026',
    monthRange: '03–04 / 2026',
    description: 'Druhé vydání. Přípravy na jarní projekty, zprávy z komunity a novinky ze spolupráce s partnery.',
  },
  {
    id: 'iii',
    file: 'news_III.html',
    issue: 'III',
    period: 'Květen – Červen 2026',
    monthRange: '05–06 / 2026',
    description: 'Třetí vydání. Shrnutí celé sezóny a výhled na to, co chystáme na další školní rok.',
  },
]

function NewsletterCard({ nl }) {
  return (
    <a
      href={`${import.meta.env.BASE_URL}${nl.file}`}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card group relative flex flex-col justify-between p-6 sm:p-8"
      style={{ minHeight: 'clamp(250px, 40vw, 300px)' }}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-6">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-accent/15 border border-accent/30 font-serif font-bold text-accent text-sm">
            {nl.issue}
          </span>
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            {nl.monthRange}
          </span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
          {nl.period}
        </h3>
        <p className="text-ink/70 text-sm leading-relaxed">
          {nl.description}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-8 text-accent font-semibold text-xs tracking-wider uppercase group-hover:translate-x-1 transition-transform">
        <span>Přečíst newsletter</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
        </svg>
      </div>
    </a>
  )
}

export default function NewsletterPage() {
  const heroRef = useReveal()
  const gridRef = useReveal()

  return (
    <>
      <SEO
        title="Newsletter – Youth Arabská"
        description="Archiv e-mailových newsletterů Youth Arabské. Novinky, akce a zprávy z komunity."
        canonical="/newsletter"
      />

      <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
        {/* Hero */}
        <section ref={heroRef} className="max-w-3xl reveal-enter">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-accent/60" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              Archiv vydání
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-ink mb-6">
            Newsletter <br />
            <span className="text-gradient">Youth Arabské</span>
          </h1>
          <p className="text-ink/75 text-base sm:text-lg leading-relaxed">
            Každé dva měsíce posíláme e-mailový newsletter s novinkami z komunity, připravovanými akcemi a zajímavými tipy. Tady najdeš všechna dosavadní vydání.
          </p>
        </section>

        {/* Cards Grid */}
        <section ref={gridRef} className="reveal-enter">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsletters.map((nl) => (
              <NewsletterCard key={nl.id} nl={nl} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
