import { MapPin, Phone, Mail, Instagram, Facebook, Coffee, IceCream } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { contactInfo } from '../../data/contact'
import { Link } from 'react-router-dom'

const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer className="bg-iseo-900 text-iseo-100">

            {/* Contingut principal */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Logo, descripció i xarxes */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Coffee className="h-6 w-6 text-iseo-300" />
                            <IceCream className="h-6 w-6 text-iseo-300" />
                            <span className="font-display text-xl font-bold">ISEO</span>
                        </div>
                        <p className="text-iseo-300 leading-relaxed mb-6">
                            {t('footer.desc')}
                        </p>
                        <p className="text-iseo-500 leading-relaxed mb-6">
                            {t('footer.socialPrompt')}
                        </p>
                        <div className="flex space-x-3">
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
                    </div>

                    {/* Contacte */}
                    <div>
                        <h3 className="font-display text-lg font-semibold mb-4">{t('footer.contacteTitle')}</h3>
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
            <div className="border-t border-iseo-800 py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                        <p className="text-iseo-500 text-sm">
                            {t('footer.copyright', { year: new Date().getFullYear() })}
                        </p>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm justify-center">
                            <Link to="/politica-privacitat" className="text-iseo-500 hover:text-iseo-300 transition-colors">
                                {t('footer.privacitat')}
                            </Link>
                            <Link to="/avis-legal" className="text-iseo-500 hover:text-iseo-300 transition-colors">
                                {t('footer.avisLegal')}
                            </Link>
                            <Link to="/politica-cookies" className="text-iseo-500 hover:text-iseo-300 transition-colors">
                                {t('footer.cookies')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
