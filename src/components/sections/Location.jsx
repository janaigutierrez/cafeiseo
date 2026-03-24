import { MapPin, Clock, Phone, Navigation, Car, Bus } from 'lucide-react'
import { contactInfo, horaris } from '../../data/contact'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function getTemporada() {
    const avui = new Date()
    const md = (avui.getMonth() + 1) * 100 + avui.getDate() // ex: 315 = 15 de març
    if (md >= 315 && md < 624) return 'primavera'
    if (md >= 624 && md < 911) return 'estiu'
    return 'hivern'
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

const Location = () => {
    const { t } = useTranslation()
    const horarisActuals = horaris[getTemporada()]

    const diesSetmana = [
        { key: 'dilluns' },
        { key: 'dimarts' },
        { key: 'dimecres' },
        { key: 'dijous' },
        { key: 'divendres' },
        { key: 'dissabte' },
        { key: 'diumenge' },
    ]

    const accesInfo = [
        { icon: Car,        titolKey: 'cotxeTitle', descKey: 'cotxeDesc' },
        { icon: Bus,        titolKey: 'busTitle',   descKey: 'busDesc'   },
        { icon: Navigation, titolKey: 'peuTitle',   descKey: 'peuDesc'   },
    ]

    const avui = new Date().getDay() // 0=diumenge, 1=dilluns...6=dissabte

    const esAvui = (index) => {
        // diesSetmana: índex 0=dilluns(1)...5=dissabte(6), 6=diumenge(0)
        if (index === 6) return avui === 0
        return avui === index + 1
    }

    return (
        <section id="location" className="py-20 bg-gradient-to-b from-iseo-50 to-iseo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    className="text-center mb-16"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-iseo-900 mb-6">
                        {t('location.sectionTitle')}
                    </h2>
                    <p className="text-xl text-iseo-500 max-w-3xl mx-auto leading-relaxed">
                        {t('location.sectionSubtitle')}
                    </p>
                </motion.div>

                {/* Mapa + Horaris — mateixa alçada */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16 items-stretch">

                    {/* Mapa */}
                    <motion.div
                        className="bg-iseo-50 rounded-2xl shadow-lg p-6 flex flex-col"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="font-display text-2xl font-semibold text-iseo-900 mb-4 flex items-center">
                            <MapPin className="h-6 w-6 text-iseo-500 mr-2" />
                            {t('location.ubicacioTitle')}
                        </h3>

                        <div className="flex-1 flex flex-col">
                            <div className="w-full h-64 rounded-lg overflow-hidden border border-iseo-200 mb-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d857.9342979665917!2d2.1650333191168043!3d41.630031864688114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4c1b7f1b51781%3A0x2c1486db55e468cf!2sCaffe%20Iseo!5e0!3m2!1sca!2ses!4v1757459499189!5m2!1sca!2ses"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            <p className="text-xs text-iseo-400 text-center mb-4">
                                {t('location.mapInstruction')}
                            </p>

                            <div className="space-y-3 mt-auto">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-5 w-5 text-iseo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-iseo-900">{contactInfo.direccio}</p>
                                        <p className="text-iseo-600">{contactInfo.codiPostal} {contactInfo.ciutat}</p>
                                        <p className="text-iseo-600">{contactInfo.provincia}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5 text-iseo-500 flex-shrink-0" />
                                    <a
                                        href={`tel:${contactInfo.telefon}`}
                                        className="text-iseo-600 hover:text-iseo-500 transition-colors"
                                    >
                                        {contactInfo.telefon}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Horaris */}
                    <motion.div
                        className="bg-iseo-50 rounded-2xl shadow-lg p-6 flex flex-col"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        <h3 className="font-display text-2xl font-semibold text-iseo-900 mb-4 flex items-center">
                            <Clock className="h-6 w-6 text-iseo-500 mr-2" />
                            {t('location.horarisTitle')}
                        </h3>

                        <div className="space-y-2 flex-1">
                            {diesSetmana.map((dia, index) => {
                                const esTancat = horarisActuals[dia.key] === 'Tancat'
                                const avuiEsAquestDia = esAvui(index)

                                return (
                                    <div
                                        key={dia.key}
                                        className={`flex justify-between items-center p-3 rounded-lg ${avuiEsAquestDia
                                            ? 'bg-iseo-200 border border-iseo-300'
                                            : 'bg-iseo-100/60'
                                            }`}
                                    >
                                        <span className={`font-medium ${avuiEsAquestDia ? 'text-iseo-800' : 'text-iseo-700'}`}>
                                            {t(`location.days.${dia.key}`)}
                                            {avuiEsAquestDia && (
                                                <span className="ml-2 text-xs bg-iseo-500 text-iseo-100 px-2 py-0.5 rounded-full">
                                                    {t('location.avui')}
                                                </span>
                                            )}
                                        </span>
                                        <span className={`font-medium ${esTancat ? 'text-red-500' : avuiEsAquestDia ? 'text-iseo-600' : 'text-iseo-500'
                                            }`}>
                                            {horarisActuals[dia.key]}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="mt-4 p-3 bg-iseo-200 rounded-lg border border-iseo-300">
                            <p className="text-sm text-iseo-700">
                                <strong>{t('location.nota')}</strong> {t('location.notaText')}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Com arribar */}
                <motion.div
                    className="bg-iseo-50 rounded-2xl shadow-lg p-8"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h3 className="font-display text-2xl font-semibold text-iseo-900 mb-8 text-center">
                        {t('location.comArrTitle')}
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {accesInfo.map((acces, index) => {
                            const IconComponent = acces.icon
                            return (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.12 }}
                                >
                                    <div className="bg-iseo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="h-8 w-8 text-iseo-500" />
                                    </div>
                                    <h4 className="font-display text-xl font-semibold text-iseo-900 mb-2">
                                        {t(`location.${acces.titolKey}`)}
                                    </h4>
                                    <p className="text-iseo-600 leading-relaxed">
                                        {t(`location.${acces.descKey}`)}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Location
