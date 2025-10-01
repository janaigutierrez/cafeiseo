import { ArrowLeft, ScrollText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const AvisLegal = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Botó tornar */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center space-x-2 text-gelato-600 hover:text-gelato-700 mb-8 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5" />
                    <span>Tornar a l'inici</span>
                </button>

                {/* Contingut */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="flex items-center space-x-3 mb-8">
                        <ScrollText className="h-10 w-10 text-gelato-500" />
                        <h1 className="font-display text-4xl font-bold text-gray-900">Avís Legal</h1>
                    </div>
                    <div className="prose prose-lg text-justify max-w-none space-y-6 text-gray-600">

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">1. Dades identificatives</h2>
                            <p>
                                D'acord amb el que disposa l'article 10 de la Llei 34/2002, d'11 de juliol,
                                de Serveis de la Societat de la Informació i de Comerç Electrònic, s'informa que:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Denominació social:</strong> Cafeteria Gelateria Iseo</li>
                                <li><strong>NIF:</strong> [A completar]</li>
                                <li><strong>Domicili social:</strong> Avinguda Pi i Margall 82, Caldes de Montbui, Barcelona</li>
                                <li><strong>Telèfon:</strong> +34 608 63 16 36</li>
                                <li><strong>Email:</strong> caffeiseo@yahoo.it</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">2. Objecte</h2>
                            <p>
                                El present avís legal regula l'ús del lloc web "caffeiseo.netlify.app" (d'ara endavant, el Web),
                                del qual és titular Cafeteria Gelateria Iseo.
                            </p>
                            <p>
                                La navegació pel Web atribueix la condició d'usuari del mateix i comporta l'acceptació
                                plena i sense reserves de totes i cadascuna de les disposicions incloses en aquest Avís Legal.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">3. Condicions d'ús</h2>
                            <p>
                                L'usuari es compromet a utilitzar el Web, els seus continguts i serveis de conformitat
                                amb la llei, el present Avís Legal, les bones costums i l'ordre públic.
                            </p>
                            <p>
                                Queda prohibit l'ús del Web amb finalitats il·lícites o lesives, o que, de qualsevol forma,
                                puguin causar perjudici o impedir el normal funcionament del Web.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">4. Propietat intel·lectual i industrial</h2>
                            <p>
                                Tots els continguts del Web, incloent-hi sense limitació texts, fotografies, gràfics,
                                imatges, icones, tecnologia, software, així com el disseny gràfic i codis font,
                                constitueixen una obra la propietat de la qual pertany a Cafeteria Gelateria Iseo,
                                sense que puguin entendre's cedits a l'usuari cap dels drets d'explotació reconeguts
                                per la normativa vigent en matèria de propietat intel·lectual sobre els mateixos.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">5. Responsabilitat</h2>
                            <p>
                                Cafeteria Gelateria ISEO no es responsabilitza dels danys i perjudicis que es puguin
                                derivar de interferències, omissions, interrupcions, virus informàtics, avaries telefòniques
                                o desconnexions en el funcionament operatiu del sistema electrònic, motivades per causes
                                alienes a aquesta.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">6. Llei aplicable i jurisdicció</h2>
                            <p>
                                Les presents Condicions Generals es regeixen per la legislació espanyola.
                                Per a la resolució de qualsevol controvèrsia relativa a l'aplicació, interpretació i compliment
                                d'aquestes Condicions Generals, les parts se sotmeten, amb renúncia expressa a qualsevol altre fur,
                                als Jutjats i Tribunals de Barcelona.
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

export default AvisLegal