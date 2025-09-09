import { MapPin, Phone, Mail, Instagram, Facebook, Coffee, IceCream } from 'lucide-react'
import { contactInfo, horaris } from '../../data/contact'

const Footer = () => {
    const horarisActuals = horaris.hivern // Canviar segons temporada

    const diesSetmana = [
        { key: 'dilluns', nom: 'Dilluns' },
        { key: 'dimarts', nom: 'Dimarts' },
        { key: 'dimecres', nom: 'Dimecres' },
        { key: 'dijous', nom: 'Dijous' },
        { key: 'divendres', nom: 'Divendres' },
        { key: 'dissabte', nom: 'Dissabte' },
        { key: 'diumenge', nom: 'Diumenge' }
    ]

    return (
        <footer className="bg-gray-900 text-white">
            {/* Contingut principal del footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Logo i descripció */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <Coffee className="h-6 w-6 text-gelato-400" />
                            <IceCream className="h-6 w-6 text-gelato-400" />
                            <span className="font-display text-xl font-bold">ISEO</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Els millors gelats artesans i cafès de qualitat al cor de Caldes de Montbui.
                            Vine a descobrir sabors únics elaborats amb passió.
                        </p>

                        {/* Xarxes socials */}
                        <div className="flex space-x-4">
                            <a
                                href={`https://instagram.com/${contactInfo.xarxesSocials.instagram.replace('@', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-2 rounded-full hover:bg-gelato-500 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href={`https://facebook.com/${contactInfo.xarxesSocials.facebook}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-2 rounded-full hover:bg-gelato-500 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Informació de contacte */}
                    <div>
                        <h3 className="font-display text-lg font-semibold mb-4">Contacte</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-gelato-400 mt-0.5 flex-shrink-0" />
                                <div className="text-gray-300">
                                    <p>{contactInfo.direccio}</p>
                                    <p>{contactInfo.codiPostal} {contactInfo.ciutat}</p>
                                    <p>{contactInfo.provincia}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-gelato-400 flex-shrink-0" />
                                <a
                                    href={`tel:${contactInfo.telefon}`}
                                    className="text-gray-300 hover:text-gelato-400 transition-colors"
                                >
                                    {contactInfo.telefon}
                                </a>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-gelato-400 flex-shrink-0" />
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-gray-300 hover:text-gelato-400 transition-colors"
                                >
                                    {contactInfo.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Horaris */}
                    <div>
                        <h3 className="font-display text-lg font-semibold mb-4">Horaris</h3>
                        <div className="space-y-2">
                            {diesSetmana.map((dia) => (
                                <div key={dia.key} className="flex justify-between items-center">
                                    <span className="text-gray-300">{dia.nom}</span>
                                    <span className={`text-sm ${horarisActuals[dia.key] === 'Tancat'
                                            ? 'text-red-400'
                                            : 'text-gelato-400'
                                        }`}>
                                        {horarisActuals[dia.key]}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-4">
                            * Horaris d'hivern. Els horaris poden variar durant l'estiu.
                        </p>
                    </div>

                    {/* Navegació ràpida */}
                    <div>
                        <h3 className="font-display text-lg font-semibold mb-4">Navegació</h3>
                        <div className="space-y-2">
                            <button
                                onClick={() => document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })}
                                className="block text-gray-300 hover:text-gelato-400 transition-colors"
                            >
                                Inici
                            </button>
                            <button
                                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                                className="block text-gray-300 hover:text-gelato-400 transition-colors"
                            >
                                Coneix-nos
                            </button>
                            <button
                                onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
                                className="block text-gray-300 hover:text-gelato-400 transition-colors"
                            >
                                Els nostres productes
                            </button>
                            <button
                                onClick={() => document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' })}
                                className="block text-gray-300 hover:text-gelato-400 transition-colors"
                            >
                                On som
                            </button>
                            <button
                                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="block text-gray-300 hover:text-gelato-400 transition-colors"
                            >
                                Contacte
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright i informació legal */}
            <div className="border-t border-gray-800 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} {contactInfo.nom}. Tots els drets reservats.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <button className="text-gray-400 hover:text-gelato-400 transition-colors">
                                Política de privacitat
                            </button>
                            <button className="text-gray-400 hover:text-gelato-400 transition-colors">
                                Avís legal
                            </button>
                            <button className="text-gray-400 hover:text-gelato-400 transition-colors">
                                Política de cookies
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer