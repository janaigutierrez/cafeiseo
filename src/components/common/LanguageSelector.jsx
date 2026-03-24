import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'

const SenyeraFlag = () => (
    <svg width="20" height="14" viewBox="0 0 20 14" className="rounded-sm flex-shrink-0" aria-hidden="true">
        <rect width="20" height="14" fill="#FCDD09" />
        <rect y="2" width="20" height="2" fill="#DA121A" />
        <rect y="6" width="20" height="2" fill="#DA121A" />
        <rect y="10" width="20" height="2" fill="#DA121A" />
    </svg>
)

const ItalyFlag = () => (
    <svg width="20" height="14" viewBox="0 0 20 14" className="rounded-sm flex-shrink-0" aria-hidden="true">
        <rect width="20" height="14" fill="#CE2B37" />
        <rect width="14" height="14" fill="#FFFFFF" />
        <rect width="7" height="14" fill="#009246" />
    </svg>
)

const UKFlag = () => (
    <svg width="20" height="14" viewBox="0 0 20 14" className="rounded-sm flex-shrink-0" aria-hidden="true">
        {/* Fons blau */}
        <rect width="20" height="14" fill="#012169" />
        {/* Diagonals blanques (St Andrew) */}
        <line x1="0" y1="0" x2="20" y2="14" stroke="#FFFFFF" strokeWidth="3.5" />
        <line x1="20" y1="0" x2="0" y2="14" stroke="#FFFFFF" strokeWidth="3.5" />
        {/* Diagonals vermelles (St Patrick, sobre les blanques) */}
        <line x1="0" y1="0" x2="20" y2="14" stroke="#C8102E" strokeWidth="1.5" />
        <line x1="20" y1="0" x2="0" y2="14" stroke="#C8102E" strokeWidth="1.5" />
        {/* Creu blanca horitzontal/vertical (St George) */}
        <rect x="8.5" y="0" width="3" height="14" fill="#FFFFFF" />
        <rect x="0" y="5.5" width="20" height="3" fill="#FFFFFF" />
        {/* Creu vermella (St George, sobre la blanca) */}
        <rect x="9.25" y="0" width="1.5" height="14" fill="#C8102E" />
        <rect x="0" y="6.25" width="20" height="1.5" fill="#C8102E" />
    </svg>
)

const SpainFlag = () => (
    <svg width="20" height="14" viewBox="0 0 20 14" className="rounded-sm flex-shrink-0" aria-hidden="true">
        {/* Franja central groga */}
        <rect width="20" height="14" fill="#F1BF00" />
        {/* Franja superior vermella */}
        <rect width="20" height="3.5" fill="#AA151B" />
        {/* Franja inferior vermella */}
        <rect y="10.5" width="20" height="3.5" fill="#AA151B" />
    </svg>
)

const LANGS = [
    { code: 'ca', label: 'Català',     Flag: SenyeraFlag },
    { code: 'it', label: 'Italiano',   Flag: ItalyFlag   },
    { code: 'en', label: 'English',    Flag: UKFlag      },
    { code: 'es', label: 'Castellano', Flag: SpainFlag   },
]

const LanguageSelector = ({ hasBg }) => {
    const { i18n } = useTranslation()
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    const current = LANGS.find(l => l.code === i18n.language) ?? LANGS[0]

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(o => !o)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                    hasBg
                        ? 'border-iseo-300 text-iseo-700 hover:bg-iseo-200'
                        : 'border-white/40 text-white hover:bg-white/10'
                }`}
            >
                <current.Flag />
                <span>{current.code.toUpperCase()}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>

            {open && (
                <div
                    role="listbox"
                    className="absolute right-0 top-full mt-1.5 bg-white rounded-xl shadow-xl border border-iseo-100 py-1 min-w-[148px] z-50"
                >
                    {LANGS.map(lang => (
                        <button
                            key={lang.code}
                            role="option"
                            aria-selected={i18n.language === lang.code}
                            onClick={() => { i18n.changeLanguage(lang.code); setOpen(false) }}
                            className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-left transition-colors ${
                                i18n.language === lang.code
                                    ? 'text-iseo-500 font-semibold bg-iseo-50'
                                    : 'text-iseo-700 hover:bg-iseo-50'
                            }`}
                        >
                            <lang.Flag />
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageSelector
