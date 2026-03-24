import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, X, Search, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { gelatsList, CATEGORIES, envasos } from '../../data/gelats'
import { contactInfo } from '../../data/contact'
import GelatCard from '../common/GelatCard'

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
)

const categoriesAmbGelats = CATEGORIES
    .filter(c => c.id !== 'tots')
    .map(cat => ({ ...cat, gelats: gelatsList.filter(g => g.categoria === cat.id) }))
    .filter(c => c.gelats.length > 0)

// Capitalitza el primer caràcter de l'id per fer la clau de traducció (ex: 'cremosos' → 'catCremosos')
const catKey = (id) => `cat${id.charAt(0).toUpperCase()}${id.slice(1)}`

const PREVIEW_COUNT = 8

const Gelats = () => {
    const [categoriaActiva, setCategoriaActiva] = useState('tots')
    const [mostraTots, setMostraTots] = useState(false)
    const [midaSeleccionada, setMidaSeleccionada] = useState(null)
    const [modalObert, setModalObert] = useState(false)
    const [gustosSeleccionats, setGustosSeleccionats] = useState([])
    const [notes, setNotes] = useState('')
    const [cerca, setCerca] = useState('')
    const { t } = useTranslation()

    const gelatsVisibles = categoriaActiva === 'tots'
        ? gelatsList
        : gelatsList.filter(g => g.categoria === categoriaActiva)

    const gelatsMostrats = categoriaActiva === 'tots' && !mostraTots
        ? gelatsVisibles.slice(0, PREVIEW_COUNT)
        : gelatsVisibles

    const handleCategoriaChange = (id) => {
        setCategoriaActiva(id)
        setMostraTots(false)
    }

    const categoriesDisponibles = CATEGORIES.filter(cat =>
        cat.id === 'tots' || gelatsList.some(g => g.categoria === cat.id)
    )

    const gelatsFiltrats = categoriesAmbGelats
        .map(cat => ({
            ...cat,
            gelats: cat.gelats.filter(g =>
                g.nom.toLowerCase().includes(cerca.toLowerCase())
            )
        }))
        .filter(c => c.gelats.length > 0)

    const toggleGust = (nom) => setGustosSeleccionats(prev =>
        prev.includes(nom) ? prev.filter(n => n !== nom) : [...prev, nom]
    )

    const tancarModal = () => {
        setModalObert(false)
        setGustosSeleccionats([])
        setNotes('')
        setCerca('')
    }

    const obrirWhatsApp = () => {
        const gustosText = gustosSeleccionats.length > 0
            ? gustosSeleccionats.join(', ')
            : 'sense especificar'
        const notesText = notes.trim() ? ` ${notes.trim()}` : ''
        const missatge = encodeURIComponent(
            t('gelats.waMsg', { mida: midaSeleccionada, gustos: gustosText }) + notesText
        )
        const tel = contactInfo.telefon.replace(/[\s+]/g, '')
        window.open(`https://wa.me/${tel}?text=${missatge}`, '_blank', 'noopener,noreferrer')
        tancarModal()
    }

    return (
        <section id="gelats" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Capçalera */}
                <motion.div
                    className="text-center mb-12"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-iseo-900 mb-4">
                        {t('gelats.sectionTitle')}*
                    </h2>
                    <p className="text-iseo-500 text-lg max-w-2xl mx-auto">
                        {t('gelats.sectionSubtitle')}
                    </p>
                    <p className="text-iseo-400 text-sm max-w-2xl mx-auto mt-2">
                        *({t('gelats.sectionNota')})
                    </p>
                </motion.div>

                {/* Tabs de categoria */}
                <motion.div
                    className="flex flex-wrap justify-center gap-2 mb-10"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                >
                    {categoriesDisponibles.map(cat => {
                        const activa = categoriaActiva === cat.id
                        const count = cat.id === 'tots'
                            ? gelatsList.length
                            : gelatsList.filter(g => g.categoria === cat.id).length
                        return (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoriaChange(cat.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 border-2 ${activa
                                    ? 'bg-iseo-500 border-iseo-500 text-iseo-100'
                                    : 'bg-white border-iseo-200 text-iseo-500 hover:border-iseo-500 hover:bg-iseo-50'
                                    }`}
                            >
                                {t(`gelats.${catKey(cat.id)}`)}
                                <span className={`text-xs font-normal ${activa ? 'text-iseo-200' : 'text-iseo-400'}`}>
                                    {count}
                                </span>
                            </button>
                        )
                    })}
                </motion.div>

                {/* Grid de gelats — AnimatePresence per a la transició entre filtres */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${categoriaActiva}-${mostraTots}`}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                        {gelatsMostrats.map(gelat => (
                            <GelatCard key={gelat.id} gelat={gelat} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Botó veure més / menys (només a "Tots") */}
                {categoriaActiva === 'tots' && gelatsVisibles.length > PREVIEW_COUNT && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => setMostraTots(m => !m)}
                            className="flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-iseo-300 text-iseo-500 font-medium text-sm hover:border-iseo-500 hover:bg-iseo-50 transition-all duration-200"
                        >
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mostraTots ? 'rotate-180' : ''}`} />
                            {mostraTots
                                ? t('gelats.veureMenys')
                                : t('gelats.veureMes', { n: gelatsVisibles.length - PREVIEW_COUNT })
                            }
                        </button>
                    </div>
                )}

                {/* Bloc reserves d'envasos */}
                <motion.div
                    className="mt-16 bg-iseo-50 rounded-2xl p-8 border border-iseo-200"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-8">
                        <h3 className="font-display text-2xl font-semibold text-iseo-900 mb-3">
                            {t('gelats.blocTitle')}
                        </h3>
                        <p className="text-iseo-600 max-w-xl mx-auto">
                            {t('gelats.blocSubtitle')}
                        </p>
                    </div>

                    {/* Mides d'envàs — seleccionables */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {envasos.map(env => {
                            const sel = midaSeleccionada === env.id
                            return (
                                <button
                                    key={env.id}
                                    onClick={() => setMidaSeleccionada(env.id)}
                                    className={`rounded-xl px-6 py-4 text-center border-2 min-w-[88px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-iseo-500 ${sel
                                        ? 'bg-iseo-100 border-iseo-500 shadow-md scale-105'
                                        : 'bg-white border-iseo-200 shadow-sm hover:border-iseo-400 hover:bg-iseo-50'
                                        }`}
                                >
                                    <Package className={`h-6 w-6 mx-auto mb-2 ${sel ? 'text-iseo-500' : 'text-iseo-400'}`} />
                                    <p className="font-display text-2xl font-bold text-iseo-900">{env.mida}</p>
                                    <p className="text-sm text-iseo-500 mt-0.5">{env.litres}</p>
                                    <p className="text-sm font-semibold text-iseo-400 mt-1">
                                        {env.preu ?? '— €'}
                                    </p>
                                </button>
                            )
                        })}
                    </div>

                    {/* Botó WhatsApp */}
                    <div className="text-center">
                        <button
                            onClick={() => midaSeleccionada && setModalObert(true)}
                            disabled={!midaSeleccionada}
                            className={`inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold text-white transition-all duration-200 shadow-md ${midaSeleccionada
                                ? 'hover:scale-105 hover:shadow-lg cursor-pointer'
                                : 'opacity-50 cursor-not-allowed'
                                }`}
                            style={{ backgroundColor: '#25D366' }}
                        >
                            <WhatsAppIcon />
                            {t('gelats.btnReservar')}
                        </button>
                        {!midaSeleccionada && (
                            <p className="mt-2 text-sm text-iseo-400">
                                {t('gelats.hintMida')}
                            </p>
                        )}
                    </div>
                </motion.div>

            </div>

            {/* Modal de confirmació de reserva */}
            <AnimatePresence>
                {modalObert && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Overlay */}
                        <div
                            className="absolute inset-0 bg-iseo-900/60 backdrop-blur-sm"
                            onClick={tancarModal}
                        />

                        {/* Card */}
                        <motion.div
                            className="relative bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col max-h-[90vh]"
                            initial={{ y: 48, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 48, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                        >
                            {/* Capçalera */}
                            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-iseo-100 flex-shrink-0">
                                <div>
                                    <h3 className="font-display text-xl font-semibold text-iseo-900">
                                        {t('gelats.modalTitle')}
                                    </h3>
                                    <p className="text-sm text-iseo-500 mt-0.5">
                                        {t('gelats.modalEnvas')} <span className="font-semibold">{midaSeleccionada}</span>
                                        {envasos.find(e => e.id === midaSeleccionada)?.litres
                                            ? ` · ${envasos.find(e => e.id === midaSeleccionada).litres}`
                                            : ''}
                                    </p>
                                </div>
                                <button
                                    onClick={tancarModal}
                                    className="text-iseo-400 hover:text-iseo-700 transition-colors p-1 -mr-1"
                                    aria-label="Tanca el modal"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Cos scrollable */}
                            <div className="overflow-y-auto flex-1 px-6 py-4 space-y-5">

                                {/* Cerca */}
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-iseo-400 pointer-events-none" />
                                    <input
                                        type="text"
                                        value={cerca}
                                        onChange={e => setCerca(e.target.value)}
                                        placeholder={t('gelats.modalCercaPlaceholder')}
                                        className="w-full rounded-xl border border-iseo-200 pl-9 pr-4 py-2.5 text-sm text-iseo-700 placeholder:text-iseo-300 focus:outline-none focus:border-iseo-500 transition-colors"
                                    />
                                </div>

                                {/* Chips per categoria */}
                                {gelatsFiltrats.length > 0 ? (
                                    gelatsFiltrats.map(cat => (
                                        <div key={cat.id}>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-iseo-400 mb-2">
                                                {t(`gelats.${catKey(cat.id)}`)}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {cat.gelats.map(g => {
                                                    const sel = gustosSeleccionats.includes(g.nom)
                                                    return (
                                                        <button
                                                            key={g.id}
                                                            onClick={() => toggleGust(g.nom)}
                                                            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 ${sel
                                                                ? 'bg-iseo-500 border-iseo-500 text-iseo-100'
                                                                : 'bg-white border-iseo-200 text-iseo-600 hover:border-iseo-400'
                                                                }`}
                                                        >
                                                            {g.nom}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-iseo-400 text-center py-4">
                                        {t('gelats.modalNoResults', { query: cerca })}
                                    </p>
                                )}

                                {/* Resum selecció */}
                                {gustosSeleccionats.length > 0 && (
                                    <p className="text-xs text-iseo-400">
                                        {t('gelats.modalSeleccionats')} <span className="text-iseo-600 font-medium">{gustosSeleccionats.join(', ')}</span>
                                    </p>
                                )}

                                {/* Notes opcionals */}
                                <div>
                                    <label className="text-xs font-semibold uppercase tracking-wider text-iseo-400 block mb-2">
                                        {t('gelats.modalNotesLabel')}
                                    </label>
                                    <input
                                        type="text"
                                        value={notes}
                                        onChange={e => setNotes(e.target.value)}
                                        maxLength={80}
                                        placeholder={t('gelats.modalNotesPlaceholder')}
                                        className="w-full rounded-xl border border-iseo-200 px-4 py-2.5 text-sm text-iseo-700 placeholder:text-iseo-300 focus:outline-none focus:border-iseo-500 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Peu */}
                            <div className="flex gap-3 px-6 py-4 border-t border-iseo-100 flex-shrink-0">
                                <button
                                    onClick={tancarModal}
                                    className="flex-1 py-2.5 rounded-full border-2 border-iseo-200 text-iseo-500 font-semibold text-sm hover:border-iseo-400 transition-colors"
                                >
                                    {t('gelats.modalCancel')}
                                </button>
                                <button
                                    onClick={obrirWhatsApp}
                                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-full font-semibold text-white text-sm transition-all hover:scale-[1.02] shadow-md"
                                    style={{ backgroundColor: '#25D366' }}
                                >
                                    <WhatsAppIcon />
                                    {t('gelats.modalEnviar')}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Gelats
