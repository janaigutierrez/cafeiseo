import { Heart, Award, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

const About = () => {
    const { t } = useTranslation()

    const valors = [
        { icon: Heart, nomKey: 'valor1Nom', descKey: 'valor1Desc' },
        { icon: Award, nomKey: 'valor2Nom', descKey: 'valor2Desc' },
        { icon: Clock, nomKey: 'valor3Nom', descKey: 'valor3Desc' },
    ]

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-iseo-100 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Títol */}
                <motion.div
                    className="text-center mb-16"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-iseo-900 mb-6">
                        {t('about.sectionTitle')}
                    </h2>
                    <p className="text-xl text-iseo-500 max-w-3xl mx-auto leading-relaxed">
                        {t('about.sectionSubtitle')}
                    </p>
                </motion.div>

                {/* Història: foto gran amb text per sobre */}
                <motion.div
                    className="relative rounded-2xl overflow-hidden mb-20"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <img
                        src="/terrassaiseo.jpg"
                        alt="Terrassa exterior de la Cafeteria Gelateria Iseo a Caldes de Montbui"
                        className="w-full h-[480px] md:h-[560px] object-cover"
                    />
                    {/* Gradient opac a l'esquerra, transparent a la dreta */}
                    <div className="absolute inset-0 bg-gradient-to-r from-iseo-900/90 via-iseo-900/60 sm:to-transparent to-iseo-900/20" />

                    {/* Text sobre la foto */}
                    <div className="absolute inset-0 flex items-center px-8 md:px-14 py-10">
                        <div className="max-w-sm md:max-w-md">
                            <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-6">
                                {t('about.histTitle')}
                            </h3>
                            <div className="space-y-4 text-iseo-200 leading-relaxed text-sm md:text-base">
                                <p>{t('about.hist1')}</p>
                                <p>{t('about.hist2')}</p>
                                <p>{t('about.hist3')}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Valors: icones rodones centrades */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {valors.map((valor, index) => {
                        const IconComponent = valor.icon
                        return (
                            <motion.div
                                key={index}
                                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12 }}
                            >
                                <div className="bg-iseo-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:bg-iseo-100 transition-all duration-300">
                                    <IconComponent className="h-8 w-8 text-iseo-500 group-hover:text-iseo-600" />
                                </div>
                                <h4 className="font-display text-xl font-semibold text-iseo-900 mb-2">
                                    {t(`about.${valor.nomKey}`)}
                                </h4>
                                <p className="text-iseo-600 text-sm leading-relaxed">
                                    {t(`about.${valor.descKey}`)}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Compromís */}
                <motion.div
                    className="bg-iseo-700 rounded-3xl px-8 py-12 md:px-16 md:py-14 text-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-iseo-100 mb-5">
                        {t('about.comprTitle')}
                    </h3>
                    <p className="text-iseo-300 leading-relaxed max-w-4xl mx-auto text-lg">
                        {t('about.comprDesc')}
                    </p>
                </motion.div>

            </div>
        </section>
    )
}

export default About
