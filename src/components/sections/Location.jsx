import { MapPin, Clock, Phone, Navigation, Car, Bus } from 'lucide-react'
import { contactInfo, horaris } from '../../data/contact'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Location = () => {
    const horarisActuals = horaris.hivern //canviar segons temporada

    const [showMap, setShowMap] = useState(true)

    const diesSetmana = [
        { key: 'dilluns', nom: 'Dilluns' },
        { key: 'dimarts', nom: 'Dimarts' },
        { key: 'dimecres', nom: 'Dimecres' },
        { key: 'dijous', nom: 'Dijous' },
        { key: 'divendres', nom: 'Divendres' },
        { key: 'dissabte', nom: 'Dissabte' },
        { key: 'diumenge', nom: 'Diumenge' }
    ]

    const accesInfo = [
        {
            icon: Car,
            titol: "En cotxe",
            descripcio: "Aparcament gratuït al centre del poble. Fàcil accés des de la C-59."
        },
        {
            icon: Bus,
            titol: "Transport públic",
            descripcio: "Línies regulars d'autobusos des de Barcelona i Vic. Parada a 2 minuts caminant."
        },
        {
            icon: Navigation,
            titol: "A peu",
            descripcio: "Ubicats a l'avinguda principal de Caldes de Montbui, prop de tots els serveis."
        }
    ]

    return (
        <section id="location" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header de la secció */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        On som?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Vine a descobrir-nos al cor de Caldes de Montbui
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">

                    {/* Mapa i informació d'ubicació */}

                    <div>
                        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                            <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                                <MapPin className="h-6 w-6 text-gelato-500 mr-2" />
                                La nostra ubicació
                            </h3>

                            {/* Placeholder per al mapa */}
                            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-64 flex items-center justify-center mb-4">
                                <div className="text-center text-gray-500">
                                    {/* Mapa desplegable */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: showMap ? 'auto' : 0,
                                            opacity: showMap ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4">
                                            <div className="w-full h-64 rounded-lg overflow-hidden border">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d857.9342979665917!2d2.1650333191168043!3d41.630031864688114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4c1b7f1b51781%3A0x2c1486db55e468cf!2sCaffe%20Iseo!5e1!3m2!1sca!2ses!4v1757459499189!5m2!1sca!2ses"
                                                    width="100%"
                                                    height="100%"
                                                    style={{ border: 0 }}
                                                    allowFullScreen=""
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                />
                                            </div>
                                            <p className="text-xs text-gray-500 text-center mt-2">
                                                Clica el mapa per obrir la direcció
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-5 w-5 text-gelato-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-900">{contactInfo.direccio}</p>
                                        <p className="text-gray-600">{contactInfo.codiPostal} {contactInfo.ciutat}</p>
                                        <p className="text-gray-600">{contactInfo.provincia}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5 text-gelato-500 flex-shrink-0" />
                                    <a
                                        href={`tel:${contactInfo.telefon}`}
                                        className="text-gray-600 hover:text-gelato-600 transition-colors"
                                    >
                                        {contactInfo.telefon}
                                    </a>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Horaris i informació */}
                    <div className="space-y-6">

                        {/* Horaris */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                                <Clock className="h-6 w-6 text-gelato-500 mr-2" />
                                Horaris
                            </h3>

                            <div className="space-y-3">
                                {diesSetmana.map((dia) => {
                                    const esTancat = horarisActuals[dia.key] === 'Tancat'
                                    const esAvui = new Date().getDay() === diesSetmana.indexOf(dia) + 1

                                    return (
                                        <div
                                            key={dia.key}
                                            className={`flex justify-between items-center p-3 rounded-lg ${esAvui ? 'bg-gelato-50 border border-gelato-200' : 'bg-gray-50'
                                                }`}
                                        >
                                            <span className={`font-medium ${esAvui ? 'text-gelato-700' : 'text-gray-700'}`}>
                                                {dia.nom}
                                                {esAvui && <span className="ml-2 text-xs bg-gelato-500 text-white px-2 py-1 rounded-full">Avui</span>}
                                            </span>
                                            <span className={`font-medium ${esTancat
                                                ? 'text-red-500'
                                                : esAvui
                                                    ? 'text-gelato-600'
                                                    : 'text-gray-600'
                                                }`}>
                                                {horarisActuals[dia.key]}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                                <p className="text-sm text-blue-700">
                                    <strong>Nota:</strong> Els horaris poden variar durant les festes locals i l'estiu.
                                    Contacta'ns per confirmar l'obertura en dates especials.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Com arribar */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="font-display text-2xl font-semibold text-gray-900 mb-8 text-center">
                        Com arribar
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {accesInfo.map((acces, index) => {
                            const IconComponent = acces.icon
                            return (
                                <div key={index} className="text-center">
                                    <div className="bg-gelato-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="h-8 w-8 text-gelato-600" />
                                    </div>
                                    <h4 className="font-display text-xl font-semibold text-gray-900 mb-2">
                                        {acces.titol}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        {acces.descripcio}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Location