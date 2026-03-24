import { ArrowLeft, Shield } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const PoliticaPrivacitat = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <button
                    onClick={() => navigate('/')}
                    className="flex items-center space-x-2 text-gelato-600 hover:text-gelato-700 mb-8 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5" />
                    <span>{t('legal.backBtn')}</span>
                </button>

                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="flex items-center space-x-3 mb-8">
                        <Shield className="h-10 w-10 text-gelato-500" />
                        <h1 className="font-display text-4xl font-bold text-gray-900">{t('privacitat.title')}</h1>
                    </div>

                    <div className="prose prose-lg max-w-none text-justify space-y-6 text-gray-600">

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('privacitat.s1Title')}</h2>
                            <p>{t('privacitat.s1p')}</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>{t('privacitat.s1liEmail')}</strong> caffeiseo@yahoo.it</li>
                                <li><strong>{t('privacitat.s1liTelefon')}</strong> +34 608 63 16 36</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('privacitat.s2Title')}</h2>
                            <p>{t('privacitat.s2p')}</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>{t('privacitat.s2li1')}</li>
                                <li>{t('privacitat.s2li2')}</li>
                                <li>{t('privacitat.s2li3')}</li>
                                <li>{t('privacitat.s2li4')}</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('privacitat.s3Title')}</h2>
                            <p>{t('privacitat.s3p')}</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>{t('privacitat.s3li1')}</li>
                                <li>{t('privacitat.s3li2')}</li>
                                <li>{t('privacitat.s3li3')}</li>
                                <li>{t('privacitat.s3li4')}</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('privacitat.s4Title')}</h2>
                            <p>{t('privacitat.s4p')}</p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('privacitat.s5Title')}</h2>
                            <p>{t('privacitat.s5p')}</p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('privacitat.s6Title')}</h2>
                            <p>{t('privacitat.s6p')}</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>{t('privacitat.s6liAcces')}</li>
                                <li>{t('privacitat.s6liRect')}</li>
                                <li>{t('privacitat.s6liSupr')}</li>
                                <li>{t('privacitat.s6liLimit')}</li>
                                <li>{t('privacitat.s6liPort')}</li>
                                <li>{t('privacitat.s6liOp')}</li>
                            </ul>
                            <p className="mt-4">{t('privacitat.s6contact')}</p>
                            <p>{t('privacitat.s6aepd')}</p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('privacitat.s7Title')}</h2>
                            <p>{t('privacitat.s7p')}</p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('privacitat.s8Title')}</h2>
                            <p>{t('privacitat.s8p')}</p>
                        </section>

                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500">{t('legal.lastUpdate')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoliticaPrivacitat
