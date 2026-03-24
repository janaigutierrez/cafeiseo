import { IceCream } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ALERGENS } from '../../data/gelats'

const GelatCard = ({ gelat }) => {
    const { t } = useTranslation()

    const BADGE = {
        temporada: { labelKey: 'temporada', cls: 'bg-amber-400 text-white' },
        puntual:   { labelKey: 'puntual',   cls: 'bg-iseo-500 text-iseo-100' },
        sempre:    { labelKey: 'sempre',    cls: 'bg-green-500 text-iseo-100' },
    }

    const badge = BADGE[gelat.disponibilitat]
    const alergenText = gelat.alergens.map(k => ALERGENS[k]).join(' · ')

    return (
        <div className="bg-iseo-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 group">

            {/* Imatge */}
            <div className="relative aspect-square overflow-hidden">
                {gelat.imatge ? (
                    <img
                        src={gelat.imatge}
                        alt={gelat.nom}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-iseo-100 to-iseo-200 flex items-center justify-center">
                        <IceCream className="h-12 w-12 text-iseo-300" />
                    </div>
                )}
                {badge && (
                    <span className={`absolute top-2 right-2 text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm ${badge.cls}`}>
                        {t(`gelatCard.${badge.labelKey}`)}
                    </span>
                )}
            </div>

            {/* Contingut */}
            <div className="p-3">
                <h3 className="font-display font-semibold text-iseo-900 leading-snug mb-1">
                    {gelat.nom}
                </h3>
                {gelat.descripcio && (
                    <p className="text-xs text-iseo-600 leading-relaxed mb-2">
                        {gelat.descripcio}
                    </p>
                )}
                {alergenText && (
                    <p className="text-xs text-iseo-400 leading-relaxed">
                        {alergenText}
                    </p>
                )}
            </div>

        </div>
    )
}

export default GelatCard
