import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ca from './locales/ca/translation.json'
import en from './locales/en/translation.json'
import it from './locales/it/translation.json'
import es from './locales/es/translation.json'

i18n.use(initReactI18next).init({
    resources: {
        ca: { translation: ca },
        en: { translation: en },
        it: { translation: it },
        es: { translation: es },
    },
    lng: localStorage.getItem('lang') || 'ca',
    fallbackLng: 'ca',
    interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
    localStorage.setItem('lang', lng)
    document.documentElement.lang = lng
})

export default i18n
