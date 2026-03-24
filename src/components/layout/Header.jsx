import { useState, useEffect } from 'react'
import { Menu, X, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { contactInfo } from '../../data/contact'
import LanguageSelector from '../common/LanguageSelector'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { t } = useTranslation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { key: 'inici',     href: '#hero' },
        { key: 'coneixnos', href: '#about' },
        { key: 'carta',     href: '#products' },
        { key: 'gelats',    href: '#gelats' },
        { key: 'onsom',     href: '#location' },
    ]

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMenuOpen(false)
        }
    }

    // Fons actiu quan s'ha fet scroll O quan el menú mòbil és obert
    const hasBg = isScrolled || isMenuOpen

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                hasBg
                    ? 'bg-iseo-100/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-3">

                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img
                            src="logoiseo.webp"
                            alt="Logo Caffè Iseo"
                            className="w-10 h-10 rounded-md shadow"
                        />
                        <div>
                            <p className={`font-display text-2xl font-bold transition-colors ${
                                hasBg ? 'text-iseo-900' : 'text-white'
                            }`}>
                                Cafeteria Gelateria
                            </p>
                            <p className={`text-sm font-semibold tracking-widest transition-colors ${
                                hasBg ? 'text-iseo-500' : 'text-iseo-100'
                            }`}>
                                ISEO
                            </p>
                        </div>
                    </div>

                    {/* Nav desktop */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navItems.map(item => (
                            <button
                                key={item.key}
                                onClick={() => scrollToSection(item.href)}
                                className={`font-medium transition-all duration-200 hover:scale-105 ${
                                    hasBg
                                        ? 'text-iseo-700 hover:text-iseo-500'
                                        : 'text-white hover:text-iseo-100'
                                }`}
                            >
                                {t(`nav.${item.key}`)}
                            </button>
                        ))}

                        <LanguageSelector hasBg={hasBg} />

                        {/* CTA Treballar */}
                        <a
                            href={`mailto:${contactInfo.email}?subject=Sol%C2%B7licitud%20de%20treball%20%E2%80%93%20Caf%C3%A8%20Iseo`}
                            className="inline-flex items-center gap-2 bg-iseo-500 hover:bg-iseo-600 text-iseo-100 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 shadow-md"
                        >
                            <Mail className="h-4 w-4" />
                            {t('nav.treballar')}
                        </a>
                    </nav>

                    {/* Botó menú mòbil */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Obrir menú"
                    >
                        {isMenuOpen
                            ? <X className={`h-6 w-6 ${hasBg ? 'text-iseo-900' : 'text-white'}`} />
                            : <Menu className={`h-6 w-6 ${hasBg ? 'text-iseo-900' : 'text-white'}`} />
                        }
                    </button>
                </div>

                {/* Nav mòbil */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-iseo-100 shadow-lg border-t border-iseo-200">
                        <nav className="py-4">
                            {navItems.map(item => (
                                <button
                                    key={item.key}
                                    onClick={() => scrollToSection(item.href)}
                                    className="block w-full text-left px-6 py-3 text-iseo-700 hover:bg-iseo-200 hover:text-iseo-900 transition-colors font-medium"
                                >
                                    {t(`nav.${item.key}`)}
                                </button>
                            ))}
                            <div className="px-6 py-3 border-t border-iseo-200">
                                <LanguageSelector hasBg={true} />
                            </div>
                            <div className="px-4 pt-2 pb-3">
                                <a
                                    href={`mailto:${contactInfo.email}?subject=Sol%C2%B7licitud%20de%20treball%20%E2%80%93%20Caf%C3%A8%20Iseo`}
                                    className="flex items-center justify-center gap-2 bg-iseo-500 hover:bg-iseo-600 text-iseo-100 px-4 py-3 rounded-full font-semibold text-sm transition-colors w-full"
                                >
                                    <Mail className="h-4 w-4" />
                                    {t('nav.treballar')}
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
