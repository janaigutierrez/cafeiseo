import { MapPin, Phone, Mail, Instagram, Facebook, Coffee, IceCream } from 'lucide-react'
import { contactInfo } from '../../data/contact'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-iseo-900 text-iseo-100">

            {/* CTA Treballar */}
            <div className="border-b border-iseo-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                        T'agradaria treballar amb nosaltres?
                    </h3>
                    <p className="text-iseo-300 mb-6 max-w-xl mx-auto">
                        Si ets una persona amb ganes, treballadora i t'agraden els gelats i el cafè de qualitat,
                        voldríem conèixer-te!
                    </p>
                    <a
                        href={`mailto:${contactInfo.email}?subject=Sol%C2%B7licitud%20de%20treball%20%E2%80%93%20Caf%C3%A8%20Iseo`}
                        className="inline-flex items-center gap-2 bg-iseo-500 hover:bg-iseo-400 text-iseo-100 px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                    >
                        <Mail className="h-5 w-5" />
                        Escriu-nos!
                    </a>
                </div>
            </div>

            {/* Contingut principal */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-20">

                    {/* Logo i descripció */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Coffee className="h-6 w-6 text-iseo-300" />
                            <IceCream className="h-6 w-6 text-iseo-300" />
                            <span className="font-display text-xl font-bold">ISEO</span>
                        </div>
                        <p className="text-iseo-300 leading-relaxed">
                            Els millors gelats artesans i cafès de qualitat al cor de Caldes de Montbui.
                            Vine a descobrir sabors únics elaborats amb passió.
                        </p>
                    </div>

                    {/* Contacte */}
                    <div>
                        <h3 className="font-display text-lg font-semibold mb-4">Contacte</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-iseo-400 mt-0.5 flex-shrink-0" />
                                <div className="text-iseo-300">
                                    <p>{contactInfo.direccio}</p>
                                    <p>{contactInfo.codiPostal} {contactInfo.ciutat}</p>
                                    <p>{contactInfo.provincia}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-iseo-400 flex-shrink-0" />
                                <a href={`tel:${contactInfo.telefon}`} className="text-iseo-300 hover:text-iseo-100 transition-colors">
                                    {contactInfo.telefon}
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-iseo-400 flex-shrink-0" />
                                <a href={`mailto:${contactInfo.email}`} className="text-iseo-300 hover:text-iseo-100 transition-colors">
                                    {contactInfo.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright i legal */}
            <div className="border-t border-iseo-800 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-iseo-500 text-sm">
                            © {new Date().getFullYear()} {contactInfo.nom}. Tots els drets reservats.
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href={`https://instagram.com/${contactInfo.xarxesSocials.instagram.replace('@', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-iseo-800 p-2 rounded-full hover:bg-iseo-500 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href={`https://facebook.com/${contactInfo.xarxesSocials.facebook}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-iseo-800 p-2 rounded-full hover:bg-iseo-500 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm justify-center">
                            <Link to="/politica-privacitat" className="text-iseo-500 hover:text-iseo-300 transition-colors">
                                Política de privacitat
                            </Link>
                            <Link to="/avis-legal" className="text-iseo-500 hover:text-iseo-300 transition-colors">
                                Avís legal
                            </Link>
                            <Link to="/politica-cookies" className="text-iseo-500 hover:text-iseo-300 transition-colors">
                                Política de cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
