import { useState, useEffect } from 'react'
import './index.css'
import Header from './components/layout/Header'
import Products from './components/sections/Products'
import About from './components/sections/About'
import Footer from './components/layout/Footer'
import Location from './components/sections/Location'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />

      <main>
        {/* Hero Section */}
        <section id="hero" className="bg-gradient-to-br from-gelato-400 via-gelato-500 to-gelato-600 min-h-screen flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                Cafeteria Gelateria
                <span className="block text-6xl md:text-8xl text-gelato-200">ISEO</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gelato-100 max-w-3xl mx-auto">
                Els millors gelats artesans del Vallès Oriental, elaborats cada dia amb ingredients naturals de primera qualitat
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

        {/* About Section */}
        <About />

        {/* Products Section */}
        <Products />

        {/* Location Section */}
        <Location />


      </main>

      <Footer />
    </div>
  )
}

export default App