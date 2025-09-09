import { useState } from 'react'
import { Star, Clock } from 'lucide-react'
import { gelats } from '../../data/products'

const ProductCard = ({ producte, tipus = 'gelat' }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)

    const handleImageLoad = () => {
        setImageLoaded(true)
    }

    const handleImageError = () => {
        setImageError(true)
        setImageLoaded(true)
    }

    return (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
            {/* Imatge del producte */}
            <div className="relative h-64 bg-gradient-to-br from-gelato-100 to-gelato-200 overflow-hidden">
                {!imageError ? (
                    <img
                        src={producte.imatge || '/images/placeholder-gelato.jpg'}
                        alt={producte.nom}
                        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                ) : (
                    // Placeholder quan no hi ha imatge
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gelato-200 to-gelato-300">
                        <div className="text-center text-gelato-600">
                            <div className="text-6xl mb-2">🍦</div>
                            <p className="font-medium">Foto pròximament</p>
                        </div>
                    </div>
                )}

                {/* Badge si està destacat */}
                {producte.destacat && (
                    <div className="absolute top-4 right-4 bg-gelato-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current" />
                        <span>Destacat</span>
                    </div>
                )}

                {/* Badge si no està disponible */}
                {producte.disponible === false && (
                    <div className="absolute top-4 left-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Temporada</span>
                    </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Contingut del card */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold text-gray-900 group-hover:text-gelato-600 transition-colors">
                        {producte.nom}
                    </h3>
                    {producte.preu && (
                        <span className="text-lg font-bold text-gelato-600 bg-gelato-50 px-2 py-1 rounded-lg">
                            {producte.preu}
                        </span>
                    )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {producte.descripcio}
                </p>

                {/* Categories per altres productes */}
                {producte.categoria && (
                    <div className="flex items-center justify-between">
                        <span className="inline-block bg-caffe/10 text-caffe px-3 py-1 rounded-full text-xs font-medium">
                            {producte.categoria}
                        </span>
                    </div>
                )}

                {/* Estat de disponibilitat */}
                {tipus === 'gelat' && (
                    <div className="mt-4 pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                            <span className={`text-sm font-medium ${producte.disponible
                                ? 'text-green-600'
                                : 'text-amber-600'
                                }`}>
                                {producte.disponible ? '✓ Disponible' : '⏰ Fora de temporada'}
                            </span>

                            {producte.disponible && (
                                <button className="text-gelato-600 hover:text-gelato-700 text-sm font-medium hover:underline transition-colors">
                                    Més info
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductCard