import { ArrowLeft, ScrollText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const AvisLegal = () => {
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
                        <ScrollText className="h-10 w-10 text-gelato-500" />
                        <h1 className="font-display text-4xl font-bold text-gray-900">{t('avisLegal.title')}</h1>
                    </div>
                    <div className="prose prose-lg text-justify max-w-none space-y-6 text-gray-600">

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('avisLegal.s1Title')}</h2>
                            <p>{t('avisLegal.s1p')}</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>{t('avisLegal.s1liDenom')}</strong> Cafeteria Gelateria Iseo</li>
                                <li><strong>{t('avisLegal.s1liNIF')}</strong> [A completar]</li>
                                <li><strong>{t('avisLegal.s1liDomicili')}</strong> Avinguda Pi i Margall 82, Caldes de Montbui, Barcelona</li>
                                <li><strong>{t('avisLegal.s1liTelefon')}</strong> +34 608 63 16 36</li>
                                <li><strong>{t('avisLegal.s1liEmail')}</strong> caffeiseo@yahoo.it</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('avisLegal.s2Title')}</h2>
                            <p>{t('avisLegal.s2p1')}</p>
                            <p>{t('avisLegal.s2p2')}</p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('avisLegal.s3Title')}</h2>
                            <p>{t('avisLegal.s3p1')}</p>
                            <p>{t('avisLegal.s3p2')}</p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('avisLegal.s4Title')}</h2>
                            <p>{t('avisLegal.s4p')}</p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('avisLegal.s5Title')}</h2>
                            <p>{t('avisLegal.s5p')}</p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('avisLegal.s6Title')}</h2>
                            <p>{t('avisLegal.s6p')}</p>
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

export default AvisLegal
