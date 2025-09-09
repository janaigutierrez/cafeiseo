import { useState } from 'react'
import { gelats, cafes, altres } from '../../data/products'
import ProductCard from '../common/ProductCard'
import { IceCream, Coffee, Utensils } from 'lucide-react'

const Products = () => {
    const [activeTab, setActiveTab] = useState('gelats')

    const tabs = [
        {
            id: 'gelats',
            nom: 'Gelats Artesans',
            icon: IceCream,
            data: gelats,
            color: 'text-gelato-600 border-gelato-600 bg-gelato-50'
        },
        {
            id: 'cafes',
            nom: 'Cafès',
            icon: Coffee,
            data: cafes,
            color: 'text-caffe border-caffe bg-yellow-50'
        },
        {
            id: 'altres',
            nom: 'Altres productes',
            icon: Utensils,
            data: altres,
            color: 'text-gray-600 border-gray-600 bg-gray-50'
        }
    ]

    const currentData = tabs.find(tab => tab.id === activeTab)?.data || []

    return (
        <section id="products" className="py-20 bg-gradient-to-b from-white to-gelato-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header de la secció */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Els nostres productes
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Descobreix la nostra selecció de gelats artesans, cafès de qualitat superior
                        i altres delícies elaborades cada dia amb ingredients frescos i naturals
                    </p>
                </div>

                {/* Tabs de navegació */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => {
                        const IconComponent = tab.icon
                        const isActive = activeTab === tab.id

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${isActive
                                        ? tab.color
                                        : 'text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                            >
                                <IconComponent className="h-5 w-5" />
                                <span>{tab.nom}</span>
                                <span className="bg-white/70 text-xs px-2 py-1 rounded-full">
                                    {tab.data.length}
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* Grid de productes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentData.map((producte) => (
                        <div
                            key={producte.id}
                            className="animate-fadeIn"
                        >
                            <ProductCard
                                producte={producte}
                                tipus={activeTab === 'gelats' ? 'gelat' : 'general'}
                            />
                        </div>
                    ))}
                </div>

                {/* Missatge especial per gelats */}
                {activeTab === 'gelats' && (
                    <div className="mt-16 text-center">
                        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gelato-100">
                            <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                                🍦 Gelats artesans de temporada
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Els nostres gelats es preparen diàriament amb ingredients frescos i naturals.
                                La disponibilitat pot variar segons la temporada i la qualitat dels ingredients.
                                Pregunta al nostre equip per les novetats del dia!
                            </p>
                        </div>
                    </div>
                )}

                {/* CTA final */}
                <div className="text-center mt-16">
                    <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-gelato-500 hover:bg-gelato-600 text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        Vine a provar-los!
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Products