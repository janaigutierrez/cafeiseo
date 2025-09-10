import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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
        { name: 'Els nostres productes', href: '#products' },
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
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                            <img
                                src='logoiseo.webp'
                                alt='Imatge del local'
                                className='w-10 h-10 rounded-md shadow items-center'
                            ></img>
                        </div>
                        <div>
                            <h1 className={`font-display text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'} transition-colors`}>
                                Cafeteria Gelateria
                            </h1>
                            <p className={`text-sm ${isScrolled ? 'text-caffe' : 'text-white/90'} transition-colors`}>
                                ISEO
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className={`font-medium transition-all duration-200 hover:scale-105 transform ${isScrolled
                                    ? 'text-gray-700 hover:text-gelato-500'
                                    : 'text-white hover:text-gelato-200'
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
                        ) : (
                            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
                        <nav className="py-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gelato-50 hover:text-gelato-600 transition-colors"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header