import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Hero = () => {
    const { t } = useTranslation()

    return (
        <section id="hero" className="relative h-[110vh] flex items-center pt-20 overflow-hidden">
            {/* Imatge de fons amb blur */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
                style={{
                    backgroundImage: "url('/llac-iseo.jpg')",
                    filter: 'blur(3px)'
                }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-iseo-900/50"></div>

            {/* Contingut */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-white">
                    <motion.h1
                        className="font-display text-5xl md:text-7xl font-bold mb-6"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        Cafeteria Gelateria
                        <span className="block text-6xl md:text-8xl text-iseo-100">ISEO</span>
                        <span className="block text-2xl md:text-3xl font-normal tracking-widest text-iseo-200 mt-2">Caldes de Montbui</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl mb-8 text-iseo-100/90 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
                    >
                        {t('hero.subtitle')}
                    </motion.p>
                    <motion.button
                        onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-iseo-100 text-iseo-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transform hover:scale-105 transition-all duration-200 shadow-lg"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
                    >
                        {t('hero.cta')}
                    </motion.button>
                </div>
            </div>
        </section>
    )
}

export default Hero
