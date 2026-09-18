import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(() => (typeof window !== 'undefined' ? window.scrollY > 50 : false))
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let lastScrolled = window.scrollY > 50

    const handleScroll = () => {
      const nextScrolled = window.scrollY > 50
      if (nextScrolled !== lastScrolled) {
        lastScrolled = nextScrolled
        setScrolled(nextScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [navOpen])

  const navLinks = [
    { to: '/akce', label: t('common.nav.akce', 'Naše Akce'), scrollId: 'akce' },
    { to: '/vize', label: t('common.nav.vize', 'O nás'), scrollId: 'vize' },
    { to: '/newsletter', label: t('common.nav.newsletter', 'Newsletter'), scrollId: 'newsletter' },
  ]

  const handleNavLinkClick = (e, to) => {
    setNavOpen(false)
    if (location.pathname === to || (location.pathname === '/' && to === '/')) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-200 ${
          scrolled
            ? 'bg-milk border-b border-ink/10 shadow-[0_10px_30px_-15px_rgba(38,34,52,0.12)]'
            : 'bg-milk/90 border-b border-ink/[0.06]'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3.5 lg:py-4">
          {location.pathname === '/' ? (
            <span className="flex items-center">
              <span className="text-ink font-serif font-bold text-2xl lg:text-3xl tracking-wide">
                {t('common.brand_youth')}
              </span>
              <span className="text-gradient font-serif font-bold text-2xl lg:text-3xl tracking-wide ml-1.5">
                {t('common.brand_arabska')}
              </span>
            </span>
          ) : (
            <Link 
              to="/" 
              className="flex items-center group" 
              aria-label={t('common.nav.home')}
            >
              <span className="text-ink font-serif font-bold text-2xl lg:text-3xl tracking-wide transition-transform group-hover:scale-105">
                {t('common.brand_youth')}
              </span>
              <span className="text-gradient font-serif font-bold text-2xl lg:text-3xl tracking-wide ml-1.5 transition-transform group-hover:scale-105">
                {t('common.brand_arabska')}
              </span>
            </Link>
          )}

          <button
            className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-ink/[0.04] hover:bg-ink/[0.08] active:bg-ink/[0.12] border border-ink/10 hover:border-ink/20 transition-colors duration-200 z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            onClick={() => setNavOpen((v) => !v)}
            aria-expanded={navOpen}
            aria-controls="main-navigation"
            aria-label={t('common.nav.menu')}
          >
            {/* Container for the three lines — fixed-size so each line
                is positioned absolutely and morphs around a true center.
                Result: a perfectly balanced X cross with rounded ends. */}
            <span className="relative block w-[18px] h-[14px]" aria-hidden="true">
              {/* Top bar */}
              <span
                className={`absolute left-0 right-0 h-[1.75px] rounded-full bg-ink transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                  navOpen
                    ? 'top-1/2 -translate-y-1/2 rotate-45'
                    : 'top-0'
                }`}
              />
              {/* Middle bar — fades + collapses horizontally on open */}
              <span
                className={`absolute left-0 right-0 h-[1.75px] top-1/2 -translate-y-1/2 rounded-full bg-ink origin-center transition-all duration-200 ease-out ${
                  navOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}
              />
              {/* Bottom bar */}
              <span
                className={`absolute left-0 right-0 h-[1.75px] rounded-full bg-ink transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                  navOpen
                    ? 'bottom-1/2 translate-y-1/2 -rotate-45'
                    : 'bottom-0'
                }`}
              />
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={(e) => handleNavLinkClick(e, link.to)}
                    className={`transition-all duration-200 text-sm lg:text-base font-medium tracking-wide ${
                      location.pathname === link.to ? 'text-accent' : 'text-ink/65 hover:text-ink hover:-translate-y-0.5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4">
              <a
                href="mailto:adam.hruska.s@gyarab.cz"
                className="px-5 py-2.5 rounded-lg bg-ink/[0.05] hover:bg-ink/[0.09] text-ink transition-all duration-200 text-sm lg:text-base font-medium border border-ink/15"
              >
                {t('common.contact', 'Napiš nám')}
              </a>
              <a
                href="https://www.instagram.com/youtharabska/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-ink/[0.04] hover:bg-ink/[0.08] text-ink/60 hover:text-accent transition-all duration-200"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-ink/30 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          navOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setNavOpen(false)}
      />

      <aside
        id="main-navigation"
        className={`fixed top-0 right-0 bottom-0 w-[min(100vw,22rem)] bg-milk/95 backdrop-blur-md border-l border-ink/10 shadow-[0_0_60px_rgba(38,34,52,0.18)] z-50 md:hidden transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0.18,1)] ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top hairline gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent pointer-events-none" />

        {/* Subtle radial glow in upper-right corner */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent/[0.06] rounded-full blur-3xl pointer-events-none" />

        <div
          className="flex flex-col h-full overflow-y-auto px-5 pb-5"
          style={{
            paddingTop: 'max(env(safe-area-inset-top), 1.25rem)',
            paddingBottom: 'max(env(safe-area-inset-bottom), 1.25rem)',
          }}
        >
          {/* Brand + close */}
          <div className="flex items-center justify-between gap-4 mb-7 pb-4 border-b border-ink/[0.08]">
            <div className="min-w-0 flex items-center gap-3">
              <span className="w-4 h-px bg-accent/60 shrink-0" aria-hidden="true" />
              <div className="font-serif text-lg sm:text-xl font-bold tracking-wide leading-none truncate">
                <span className="text-ink">{t('common.brand_youth')}</span>
                <span className="text-gradient ml-1.5">{t('common.brand_arabska')}</span>
              </div>
            </div>

            <button
              className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-ink/[0.06] hover:bg-ink/[0.12] border border-ink/10 text-ink/70 hover:text-ink transition-colors"
              onClick={() => setNavOpen(false)}
              aria-label={t('common.nav.close', 'Zavřít menu')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {/* Section label: navigation */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-ink/10" />
            <span className="text-ink/45 text-[10px] font-semibold tracking-[0.3em] uppercase">
              {t('common.nav.section_navigate', 'Navigace')}
            </span>
            <div className="h-px flex-1 bg-ink/10" />
          </div>

          {/* Nav links */}
          <ul className="flex flex-col gap-1.5 mb-8">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.to
              return (
                <li
                  key={link.to}
                  className={`transition-all duration-500 ease-out ${
                    navOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: navOpen ? `${80 + idx * 55}ms` : '0ms' }}
                >
                  <Link
                    to={link.to}
                    onClick={(e) => handleNavLinkClick(e, link.to)}
                    className={`group flex items-center justify-between py-3.5 px-4 rounded-xl transition-all duration-200 text-[15px] font-medium tracking-wide border-l-2 ${
                      isActive
                        ? 'bg-gradient-to-r from-accent/12 via-accent/5 to-transparent text-accent border-accent'
                        : 'text-ink/75 hover:text-ink hover:bg-ink/[0.04] border-transparent hover:border-ink/20'
                    }`}
                  >
                    <span>{link.label}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-all duration-200 ${
                        isActive
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0'
                      }`}
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Section label: connect */}
          <div className="mt-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-ink/10" />
              <span className="text-ink/45 text-[10px] font-semibold tracking-[0.3em] uppercase">
                {t('common.nav.section_connect', 'Spojení')}
              </span>
              <div className="h-px flex-1 bg-ink/10" />
            </div>

            <div
              className={`grid grid-cols-2 gap-2.5 mb-5 transition-all duration-500 ease-out ${
                navOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: navOpen ? '260ms' : '0ms' }}
            >
              <a
                href="mailto:adam.hruska.s@gyarab.cz"
                className="group flex flex-col items-center justify-center gap-1.5 py-4 px-3 rounded-2xl bg-ink/[0.04] hover:bg-ink/[0.08] border border-ink/10 hover:border-accent/40 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-accent/80 group-hover:text-accent transition-colors">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-ink/85 group-hover:text-ink text-[12px] font-medium tracking-wide transition-colors">
                  {t('common.contact', 'Napiš nám')}
                </span>
              </a>
              <a
                href="https://www.instagram.com/youtharabska/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-1.5 py-4 px-3 rounded-2xl bg-gradient-to-br from-amber-400/[0.12] via-rose-400/[0.12] to-sky-400/[0.12] hover:from-amber-400/25 hover:via-rose-400/20 hover:to-sky-400/25 border border-ink/10 hover:border-ink/20 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-ink/80 group-hover:text-ink transition-colors">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="text-ink/85 group-hover:text-ink text-[12px] font-medium tracking-wide transition-colors">
                  Instagram
                </span>
              </a>
            </div>

            <p className="text-center text-[10px] text-ink/45 tracking-[0.2em] uppercase">
              © {new Date().getFullYear()} · Youth Arabská
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
