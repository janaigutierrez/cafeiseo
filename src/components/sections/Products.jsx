import { useState } from 'react'
import { gelats, cafes, altres } from '../../data/products'
import ProductCard from '../common/ProductCard'
import { IceCream, Coffee, Utensils, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const Products = () => {
    const [activeTab, setActiveTab] = useState('gelats')
    const [currentIndex, setCurrentIndex] = useState(0)

    const tabs = [
        {
            id: 'gelats',
            nom: 'Gelats',
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

    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
        setCurrentIndex(0)
    }

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % currentData.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + currentData.length) % currentData.length)
    }

    const getVisibleCards = () => {
        if (currentData.length === 0) return []
        const prevIndex = (currentIndex - 1 + currentData.length) % currentData.length
        const nextIndex = (currentIndex + 1) % currentData.length
        return [
            { ...currentData[prevIndex], position: 'prev' },
            { ...currentData[currentIndex], position: 'current' },
            { ...currentData[nextIndex], position: 'next' }
        ]
    }

    const visibleCards = getVisibleCards()

    return (
        <section id="products" className="py-20 bg-gradient-to-b from-white to-gelato-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Els nostres productes
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Descobreix la nostra selecció de gelats artesans, cafès de qualitat superior
                        i altres delícies elaborades cada dia amb ingredients frescos i naturals
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => {
                        const IconComponent = tab.icon
                        const isActive = activeTab === tab.id

                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
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

                {/* Carrussel de productes */}
                <div className="relative mb-16">

                    {/* Desktop (3 targetes) */}
                    <div className="hidden md:flex items-center justify-center">

                        {/* Botó anterior */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        {/* Cards */}
                        <div className="flex items-center space-x-8 w-full max-w-6xl">
                            {visibleCards.map((item, index) => (
                                <div
                                    key={`${item.id}-${index}`}
                                    className={`transition-all duration-500 ${item.position === 'current'
                                        ? 'scale-100 opacity-100 z-10'
                                        : 'scale-75 opacity-40 z-0'
                                        } ${item.position === 'prev' ? '-translate-x-4' :
                                            item.position === 'next' ? 'translate-x-4' : ''
                                        }`}
                                    style={{
                                        flex: item.position === 'current' ? '0 0 400px' : '0 0 300px'
                                    }}
                                >
                                    <ProductCard
                                        producte={item}
                                        tipus={activeTab === 'gelats' ? 'gelat' : 'general'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Botó següent */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Mobile (1 targeta) */}
                    <div className="md:hidden relative max-w-sm mx-auto px-4">

                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        <div className="transition-all duration-500">
                            <ProductCard
                                producte={currentData[currentIndex]}
                                tipus={activeTab === 'gelats' ? 'gelat' : 'general'}
                            />
                        </div>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Indicadors */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {currentData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-gelato-500 scale-125' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto mb-8">
                        <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                            I encara hi ha més!
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Vine al local i podràs trobar encara més coses! Begudes fresques, entrepans diaris,
                            pastes i creps. Sempre estem innovant!
                        </p>

                        <a
                            href="https://carta.avocaty.io/caffe-iseo-gelateria"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-gelato-500 hover:bg-gelato-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                        >
                            <span>Veure carta completa</span>
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
