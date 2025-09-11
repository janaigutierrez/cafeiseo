import { useState, useEffect } from 'react'
import './index.css'
import Header from './components/layout/Header'
import Products from './components/sections/Products'
import About from './components/sections/About'
import Footer from './components/layout/Footer'
import Location from './components/sections/Location'
import Hero from './components/sections/Hero'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />

      <main>
        {/* Hero */}
        <Hero />

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