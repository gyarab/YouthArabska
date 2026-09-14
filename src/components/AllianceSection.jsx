import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useReveal from '../hooks/useReveal'

export default function AllianceSection() {
  const { t } = useTranslation()
  const ref = useReveal()
  const [copiedEmail, setCopiedEmail] = useState(null)

  function handleCopy(email) {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    setTimeout(() => setCopiedEmail(null), 2500)
  }

  const organizers = [
    {
      name: 'Adam Hruška',
      role: 'Organizátor Youth Arabské',
      email: 'adam.hruska.s@gyarab.cz',
      mailto: 'mailto:adam.hruska.s@gyarab.cz?subject=Žádost%20o%20připojení%20k%20Youth%20Arabské',
    },
    {
      name: 'Lujza Palečková',
      role: 'Organizátorka Youth Arabské',
      email: 'lujza.paleckova.s@gyarab.cz',
      mailto: 'mailto:lujza.paleckova.s@gyarab.cz?subject=Žádost%20o%20připojení%20k%20Youth%20Arabské',
    },
  ]

  return (
    <section id="spojenectvi" className="relative py-16 sm:py-20 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="glass-card p-6 sm:p-10 md:p-14 reveal-enter rounded-3xl"
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-accent/60" />
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                {t('alliance.badge', 'Přímý kontakt')}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4">
              {t('alliance.title', 'Chceš se přidat?')}
            </h2>
            <p className="text-ink/75 text-base sm:text-lg leading-relaxed">
              {t(
                'alliance.description',
                'Hledáme lidi, kteří chtějí něco dělat — ne jen být součástí. Věříme na přímou komunikaci bez anonymních formulářů. Napiš e-mail přímo Adamovi nebo Lujze a domluvíme se.'
              )}
            </p>
          </div>

          {/* Organizer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {organizers.map((org) => (
              <div
                key={org.email}
                className="glass-card p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-accent/12 text-accent text-xs font-semibold">
                      {org.role}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-ink mb-1">
                    {org.name}
                  </h3>

                  <p className="text-ink/65 text-sm font-mono break-all mb-6">
                    {org.email}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={org.mailto}
                    className="btn-glow-gold flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-bold text-sm text-center inline-flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span>Napsat e-mail</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(org.email)}
                    className="py-3 px-4 rounded-xl border border-ink/15 hover:bg-ink/[0.05] text-ink/80 text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    {copiedEmail === org.email ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-emerald-700 font-bold">Zkopírováno!</span>
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                        </svg>
                        <span>Kopírovat e-mail</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Combined Banner */}
          <div className="pt-6 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-ink/70 text-sm">
              <span className="font-semibold text-ink">{t('alliance.labels.headquarters', 'Kde nás najdeš')}:</span> {t('common.gymnazium_long')}
            </div>

            <a
              href="mailto:adam.hruska.s@gyarab.cz?cc=lujza.paleckova.s@gyarab.cz&subject=Žádost%20o%20připojení%20k%20Youth%20Arabské"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-ink/20 hover:border-accent/40 bg-ink/[0.03] hover:bg-ink/[0.06] text-ink font-semibold text-sm transition-all duration-200 text-center inline-flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>Napsat oběma organizátorům</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
