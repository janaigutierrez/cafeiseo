import { useState } from 'react'
import { IceCream, Coffee, GlassWater, Utensils } from 'lucide-react'
import { gelats, cafesXocolataInfusions, begudes, perMenjar } from '../../data/products'

const tabs = [
    { id: 'gelats',  nom: 'Gelats',                      icon: IceCream,   data: gelats },
    { id: 'cafes',   nom: 'Cafès, Xocolata i Infusions', icon: Coffee,     data: cafesXocolataInfusions },
    { id: 'begudes', nom: 'Begudes',                      icon: GlassWater, data: begudes },
    { id: 'menjar',  nom: 'Per Menjar',                   icon: Utensils,   data: perMenjar },
]

function agruparPerSubcategoria(items) {
    const grups = []
    const vistes = new Map()
    for (const item of items) {
        if (!vistes.has(item.subcategoria)) {
            const grup = { nom: item.subcategoria, items: [] }
            vistes.set(item.subcategoria, grup)
            grups.push(grup)
        }
        vistes.get(item.subcategoria).items.push(item)
    }
    return grups
}

// Distribueix grups en dues columnes equilibrades pel pes total d'items
function distribuirColumnes(grups) {
    if (grups.length <= 1) return [grups, []]

    const pesos = grups.map(g => g.items.length + 1.5) // +1.5 per la capçalera de grup
    const total = pesos.reduce((a, b) => a + b, 0)

    let millor = 1
    let millsDiff = Infinity
    let acumulat = 0

    for (let i = 0; i < grups.length - 1; i++) {
        acumulat += pesos[i]
        const diff = Math.abs(acumulat - (total - acumulat))
        if (diff < millsDiff) {
            millsDiff = diff
            millor = i + 1
        }
    }

    return [grups.slice(0, millor), grups.slice(millor)]
}

const ItemFila = ({ item }) => {
    if (item.extra) {
        return (
            <div className="flex items-center justify-between py-1 pl-4 text-sm text-iseo-400">
                <span className="italic">{item.nom}</span>
                <span className="font-medium ml-4 whitespace-nowrap">{item.preu}</span>
            </div>
        )
    }

    return (
        <div className="flex items-start justify-between py-2.5 border-b border-iseo-200 last:border-0 gap-4">
            <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-semibold text-iseo-900 leading-snug">{item.nom}</span>
                    {item.nota && (
                        <span className="text-xs text-iseo-500 bg-iseo-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                            {item.nota}
                        </span>
                    )}
                </div>
                {item.descripcio && (
                    <p className="text-sm text-iseo-500 leading-relaxed mt-0.5">{item.descripcio}</p>
                )}
            </div>
            {item.preu && (
                <span className="font-bold text-iseo-500 whitespace-nowrap text-sm mt-0.5">{item.preu}</span>
            )}
        </div>
    )
}

const GrupSubcategoria = ({ grup }) => (
    <div className="mb-6">
        <h4 className="font-display text-xs font-bold tracking-widest uppercase text-iseo-500 mb-3 pb-1.5 border-b-2 border-iseo-300">
            {grup.nom}
        </h4>
        <div>
            {grup.items.map(item => <ItemFila key={item.id} item={item} />)}
        </div>
    </div>
)

const Products = () => {
    const [activeTab, setActiveTab] = useState('gelats')

    const tabActual = tabs.find(t => t.id === activeTab)
    const grups = agruparPerSubcategoria(tabActual?.data || [])
    const [columnaEsquerra, columnaDreta] = distribuirColumnes(grups)

    return (
        <section id="products" className="py-20 bg-iseo-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Capçalera */}
                <div className="text-center mb-12">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-iseo-900 mb-4">
                        La nostra carta
                    </h2>
                    <p className="text-iseo-500 text-lg max-w-2xl mx-auto">
                        Productes elaborats cada dia amb ingredients frescos i naturals
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {tabs.map(tab => {
                        const Icon = tab.icon
                        const actiu = activeTab === tab.id
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 border-2 ${
                                    actiu
                                        ? 'bg-iseo-500 border-iseo-500 text-iseo-100'
                                        : 'bg-iseo-50 border-iseo-200 text-iseo-500 hover:border-iseo-500 hover:bg-iseo-100'
                                }`}
                            >
                                <Icon className="h-4 w-4 flex-shrink-0" />
                                <span>{tab.nom}</span>
                            </button>
                        )
                    })}
                </div>

                {/* Cos de la carta */}
                <div className="bg-iseo-100 rounded-2xl shadow-md p-6 md:p-10">

                    <h3 className="font-display text-2xl font-bold text-iseo-900 mb-8 text-center">
                        {tabActual?.nom}
                    </h3>

                    {/* Dues columnes equilibrades */}
                    <div className="grid md:grid-cols-2 gap-x-12">
                        <div>
                            {columnaEsquerra.map(grup => (
                                <GrupSubcategoria key={grup.nom} grup={grup} />
                            ))}
                        </div>
                        <div>
                            {columnaDreta.map(grup => (
                                <GrupSubcategoria key={grup.nom} grup={grup} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Products
