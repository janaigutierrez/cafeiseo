const Hero = () => {
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

            {/* Overlay semi-transparent */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Contingut per sobre (sense blur) */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-white">
                    <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
                        Cafeteria Gelateria
                        <span className="block text-6xl md:text-8xl text-gelato-200">ISEO</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gelato-100 max-w-3xl mx-auto text-shadow">
                        Els millors gelats artesans del Vallès, elaborats cada dia amb ingredients naturals de primera qualitat
                    </p>
                    <button
                        onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white text-gelato-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gelato-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                        Descobreix els nostres gelats
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero