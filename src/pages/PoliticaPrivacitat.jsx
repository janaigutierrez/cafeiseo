import { ArrowLeft, Shield } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const PoliticaPrivacitat = () => {
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
                        <Shield className="h-10 w-10 text-gelato-500" />
                        <h1 className="font-display text-4xl font-bold text-gray-900">Política de Privacitat</h1>
                    </div>

                    <div className="prose prose-lg max-w-none text-justify space-y-6 text-gray-600">

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">1. Responsable del tractament</h2>
                            <p>
                                El responsable del tractament de les dades personals recollides a través del Web és
                                Cafeteria Gelateria Iseo, amb domicili a Avinguda Pi i Margall 82, Caldes de Montbui, Barcelona.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Email de contacte:</strong> caffeiseo@yahoo.it</li>
                                <li><strong>Telèfon:</strong> +34 608 63 16 36</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">2. Finalitat del tractament</h2>
                            <p>Les dades personals que ens facilitis seran tractades amb les següents finalitats:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Gestió de consultes i sol·licituds d'informació</li>
                                <li>Enviament de comunicacions comercials (només amb el teu consentiment previ)</li>
                                <li>Gestió de la relació comercial i pressupostària</li>
                                <li>Compliment d'obligacions legals</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">3. Legitimació</h2>
                            <p>La base legal per al tractament de les teves dades és:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>El consentiment de l'interessat</li>
                                <li>L'execució d'un contracte en què l'interessat és part</li>
                                <li>El compliment d'obligacions legals aplicables al responsable</li>
                                <li>L'interès legítim del responsable</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">4. Conservació de dades</h2>
                            <p>
                                Les dades personals seran conservades mentre es mantingui la relació comercial o durant
                                els anys necessaris per complir amb les obligacions legals. Finalitzat aquest període,
                                les dades seran eliminades o anonimitzades.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">5. Destinataris</h2>
                            <p>
                                Les teves dades no seran cedides a tercers, excepte obligació legal. En cas necessari
                                per a la prestació de serveis, es podran comunicar dades a proveïdors de serveis que
                                actuïn com a encarregats del tractament, amb els quals s'han subscrit els corresponents
                                contractes de confidencialitat i tractament de dades.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">6. Drets dels usuaris</h2>
                            <p>Pots exercir els següents drets:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Dret d'accés:</strong> Saber quines dades tenim sobre tu</li>
                                <li><strong>Dret de rectificació:</strong> Corregir dades inexactes</li>
                                <li><strong>Dret de supressió:</strong> Sol·licitar l'eliminació de les teves dades</li>
                                <li><strong>Dret a la limitació:</strong> Limitar el tractament de les teves dades</li>
                                <li><strong>Dret a la portabilitat:</strong> Rebre les teves dades en format estructurat</li>
                                <li><strong>Dret d'oposició:</strong> Oposar-te al tractament de les teves dades</li>
                            </ul>
                            <p className="mt-4">
                                Per exercir aquests drets, pots contactar-nos a: caffeiseo@yahoo.it
                            </p>
                            <p>
                                També tens dret a presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (www.aepd.es).
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">7. Seguretat</h2>
                            <p>
                                Hem adoptat les mesures tècniques i organitzatives necessàries per garantir la seguretat
                                i integritat de les dades personals que tractem, així com per evitar la seva pèrdua,
                                alteració i/o accés per part de tercers no autoritzats.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">8. Actualitzacions</h2>
                            <p>
                                Ens reservem el dret a modificar la present Política de Privacitat per adaptar-la a
                                novetats legislatives, jurisprudencials o pràctiques del sector. En aquests supòsits,
                                es publicarà la nova versió en aquesta pàgina.
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

export default PoliticaPrivacitat