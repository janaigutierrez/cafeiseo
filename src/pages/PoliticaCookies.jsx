import { ArrowLeft, Cookie } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const PoliticaCookies = () => {
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
                        <Cookie className="h-10 w-10 text-gelato-500" />
                        <h1 className="font-display text-4xl font-bold text-gray-900">{t('cookies.title')}</h1>
                    </div>

                    <div className="prose prose-lg text-justify max-w-none space-y-6 text-gray-600">

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('cookies.s1Title')}</h2>
                            <p>{t('cookies.s1p')}</p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('cookies.s2Title')}</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('cookies.s21Title')}</h3>
                            <p>{t('cookies.s21p')}</p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('cookies.s22Title')}</h3>
                            <p>{t('cookies.s22p')}</p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('cookies.s23Title')}</h3>
                            <p>{t('cookies.s23p')}</p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('cookies.s24Title')}</h3>
                            <p>{t('cookies.s24p')}</p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('cookies.s3Title')}</h2>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 mt-4">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('cookies.s3thCookie')}</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('cookies.s3thTipus')}</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('cookies.s3thDurada')}</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('cookies.s3thFinalitat')}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 text-sm">
                                        <tr>
                                            <td className="px-4 py-3">session_id</td>
                                            <td className="px-4 py-3">{t('cookies.s3r1Tipus')}</td>
                                            <td className="px-4 py-3">{t('cookies.s3r1Durada')}</td>
                                            <td className="px-4 py-3">{t('cookies.s3r1Finalitat')}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3">cookies_accepted</td>
                                            <td className="px-4 py-3">{t('cookies.s3r2Tipus')}</td>
                                            <td className="px-4 py-3">{t('cookies.s3r2Durada')}</td>
                                            <td className="px-4 py-3">{t('cookies.s3r2Finalitat')}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3">_ga</td>
                                            <td className="px-4 py-3">{t('cookies.s3r3Tipus')}</td>
                                            <td className="px-4 py-3">{t('cookies.s3r3Durada')}</td>
                                            <td className="px-4 py-3">{t('cookies.s3r3Finalitat')}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('cookies.s4Title')}</h2>
                            <p>{t('cookies.s4p1')}</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>{t('cookies.s4liChrome')}</li>
                                <li>{t('cookies.s4liFirefox')}</li>
                                <li>{t('cookies.s4liSafari')}</li>
                                <li>{t('cookies.s4liEdge')}</li>
                            </ul>
                            <p className="mt-4">{t('cookies.s4p2')}</p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('cookies.s5Title')}</h2>
                            <p>{t('cookies.s5p')}</p>
                            <p className="mt-4">
                                {t('cookies.s5p2')}{' '}
                                <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gelato-600 hover:text-gelato-700 underline">
                                    {t('cookies.s5link')}
                                </a>
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('cookies.s6Title')}</h2>
                            <p>{t('cookies.s6p1')}</p>
                            <p className="mt-4">{t('cookies.s6p2')}</p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">{t('cookies.s7Title')}</h2>
                            <p>{t('cookies.s7p')}</p>
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

export default PoliticaCookies
