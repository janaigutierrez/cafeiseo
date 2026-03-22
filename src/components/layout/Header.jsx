import { useState, useEffect } from 'react'
import { Menu, X, Mail } from 'lucide-react'
import { contactInfo } from '../../data/contact'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Inici', href: '#hero' },
        { name: 'Coneix-nos', href: '#about' },
        { name: 'La nostra carta', href: '#products' },
        { name: 'On som', href: '#location' }
    ]

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMenuOpen(false)
        }
    }

    return (
        <>
            {/* Banner "Treballar amb nosaltres" */}
            <div className="fixed top-0 w-full z-50 bg-iseo-900 text-iseo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center gap-3 py-2 text-sm">
                        <span className="hidden sm:inline">T'agradaria treballar amb nosaltres?</span>
                        <span className="sm:hidden">Vine a treballar amb nosaltres</span>
                        <a
                            href={`mailto:${contactInfo.email}?subject=Sol%C2%B7licitud%20de%20treball%20%E2%80%93%20Caf%C3%A8%20Iseo`}
                            className="inline-flex items-center gap-1.5 bg-iseo-500 hover:bg-iseo-600 text-iseo-100 px-3 py-1 rounded-full font-semibold transition-colors duration-200 text-xs"
                        >
                            <Mail className="h-3 w-3" />
                            Escriu-nos
                        </a>
                    </div>
                </div>
            </div>

            {/* Navegació principal */}
            <header
                className={`fixed top-8 w-full z-40 transition-all duration-300 ${
                    isScrolled
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
                                <h1 className={`font-display text-2xl font-bold transition-colors ${
                                    isScrolled ? 'text-iseo-900' : 'text-white'
                                }`}>
                                    Cafeteria Gelateria
                                </h1>
                                <p className={`text-sm font-semibold tracking-widest transition-colors ${
                                    isScrolled ? 'text-iseo-500' : 'text-iseo-100'
                                }`}>
                                    ISEO
                                </p>
                            </div>
                        </div>

                        {/* Nav desktop */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navItems.map(item => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`font-medium transition-all duration-200 hover:scale-105 ${
                                        isScrolled
                                            ? 'text-iseo-700 hover:text-iseo-500'
                                            : 'text-white hover:text-iseo-100'
                                    }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </nav>

                        {/* Botó menú mòbil */}
                        <button
                            className="lg:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Obrir menú"
                        >
                            {isMenuOpen
                                ? <X className={`h-6 w-6 ${isScrolled ? 'text-iseo-900' : 'text-white'}`} />
                                : <Menu className={`h-6 w-6 ${isScrolled ? 'text-iseo-900' : 'text-white'}`} />
                            }
                        </button>
                    </div>

                    {/* Nav mòbil */}
                    {isMenuOpen && (
                        <div className="lg:hidden absolute top-full left-0 w-full bg-iseo-100 shadow-lg border-t border-iseo-200">
                            <nav className="py-4">
                                {navItems.map(item => (
                                    <button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.href)}
                                        className="block w-full text-left px-6 py-3 text-iseo-700 hover:bg-iseo-200 hover:text-iseo-900 transition-colors font-medium"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header
