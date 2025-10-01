import { ArrowLeft, Cookie } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const PoliticaCookies = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <button
                    onClick={() => navigate('/')}
                    className="flex items-center space-x-2 text-gelato-600 hover:text-gelato-700 mb-8 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5" />
                    <span>Tornar a l'inici</span>
                </button>

                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="flex items-center space-x-3 mb-8">
                        <Cookie className="h-10 w-10 text-gelato-500" />
                        <h1 className="font-display text-4xl font-bold text-gray-900">Política de Cookies</h1>
                    </div>

                    <div className="prose prose-lg text-justify max-w-none space-y-6 text-gray-600">

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">1. Què són les cookies?</h2>
                            <p>
                                Les cookies són petits arxius de text que els llocs web emmagatzemen al teu dispositiu
                                quan els visites. S'utilitzen àmpliament per fer que els llocs web funcionin de manera
                                més eficient, així com per proporcionar informació als propietaris del lloc.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">2. Tipus de cookies que utilitzem</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.1. Cookies tècniques (necessàries)</h3>
                            <p>
                                Són aquelles que permeten a l'usuari navegar per la pàgina web i utilitzar les diferents
                                opcions o serveis que hi ha. Per exemple, controlar el trànsit i la comunicació de dades,
                                identificar la sessió, etc.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2. Cookies de personalització</h3>
                            <p>
                                Permeten a l'usuari accedir al servei amb algunes característiques de caràcter general
                                predefinides en funció d'una sèrie de criteris al terminal de l'usuari (idioma, tipus de navegador, etc.).
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.3. Cookies d'anàlisi</h3>
                            <p>
                                Permeten quantificar el nombre d'usuaris i així realitzar l'anàlisi estadística de l'ús
                                que fan els usuaris del servei. Per això s'analitza la teva navegació a la nostra pàgina
                                web amb la finalitat de millorar l'oferta de productes o serveis que oferim.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.4. Cookies publicitàries</h3>
                            <p>
                                Permeten gestionar de la forma més eficaç possible l'oferta d'espais publicitaris que hi ha
                                a la pàgina web, adequant el contingut de l'anunci al contingut del servei sol·licitat.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">3. Cookies específiques utilitzades</h2>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 mt-4">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cookie</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipus</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Durada</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Finalitat</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 text-sm">
                                        <tr>
                                            <td className="px-4 py-3">session_id</td>
                                            <td className="px-4 py-3">Tècnica</td>
                                            <td className="px-4 py-3">Sessió</td>
                                            <td className="px-4 py-3">Mantenir la sessió de l'usuari</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3">cookies_accepted</td>
                                            <td className="px-4 py-3">Tècnica</td>
                                            <td className="px-4 py-3">1 any</td>
                                            <td className="px-4 py-3">Recordar l'acceptació de cookies</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3">_ga</td>
                                            <td className="px-4 py-3">Analítica</td>
                                            <td className="px-4 py-3">2 anys</td>
                                            <td className="px-4 py-3">Google Analytics - Distingir usuaris</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">4. Com gestionar les cookies</h2>
                            <p>
                                Pots permetre, bloquejar o eliminar les cookies instal·lades al teu equip mitjançant
                                la configuració de les opcions del navegador instal·lat al teu dispositiu:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Chrome:</strong> Configuració → Privacitat i seguretat → Cookies</li>
                                <li><strong>Firefox:</strong> Opcions → Privacitat i Seguretat → Cookies</li>
                                <li><strong>Safari:</strong> Preferències → Privacitat → Cookies</li>
                                <li><strong>Edge:</strong> Configuració → Cookies i permisos del lloc</li>
                            </ul>
                            <p className="mt-4">
                                Si deshabilites les cookies, algunes funcionalitats del web poden no estar disponibles.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">5. Cookies de tercers</h2>
                            <p>
                                Aquest lloc web utilitza serveis de tercers per recopilar informació amb finalitats
                                estadístiques i d'ús del web. Específicament, s'utilitza Google Analytics per analitzar
                                les estadístiques del lloc web.
                            </p>
                            <p className="mt-4">
                                Pots obtenir més informació sobre les cookies de Google Analytics en
                                <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gelato-600 hover:text-gelato-700 underline ml-1">
                                    aquest enllaç
                                </a>
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">6. Acceptació de cookies</h2>
                            <p>
                                En accedir a aquest lloc web i per millorar el teu servei, s'utilitzaran cookies pròpies
                                i de tercers. Si continues navegant, entenem que acceptes la nostra Política de Cookies.
                            </p>
                            <p className="mt-4">
                                No obstant això, pots canviar la configuració de cookies en qualsevol moment.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">7. Actualitzacions</h2>
                            <p>
                                Aquesta Política de Cookies pot ser modificada en funció de noves exigències legislatives,
                                reglamentàries, o amb la finalitat d'adaptar aquesta política a les instruccions dictades
                                per l'Agència Espanyola de Protecció de Dades.
                            </p>
                        </section>

                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            Última actualització: Setembre de 2025
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoliticaCookies