import { Routes, Route } from 'react-router-dom'
import './index.css'

// Layout components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Sections
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Products from './components/sections/Products'
import Gelats from './components/sections/Gelats'
import Location from './components/sections/Location'

// Pages
import AvisLegal from './pages/AvisLegal'
import PoliticaPrivacitat from './pages/PoliticaPrivacitat'
import PoliticaCookies from './pages/PoliticaCookies'

// Pàgina principal
const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Products />
        <Gelats />
        <Location />
      </main>
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        {/* Pàgina principal amb Header i Footer */}
        <Route path="/" element={
          <>
            <Header />
            <HomePage />
            <Footer />
          </>
        } />

        {/* Pàgines legals SENSE Header ni Footer */}
        <Route path="/avis-legal" element={<AvisLegal />} />
        <Route path="/politica-privacitat" element={<PoliticaPrivacitat />} />
        <Route path="/politica-cookies" element={<PoliticaCookies />} />
      </Routes>
    </div>
  )
}

export default App