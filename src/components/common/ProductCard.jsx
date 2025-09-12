import { useState } from 'react'
import { Star } from 'lucide-react'

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

                {/* Badge destacat */}
                {producte.destacat && (
                    <div className="absolute top-4 right-4 bg-gelato-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current" />
                        <span>Destacat</span>
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
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {producte.descripcio}
                </p>
            </div>
        </div>
    )
}

export default ProductCard