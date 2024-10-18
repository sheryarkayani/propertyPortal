import React from 'react'
import PropertyCarousel from './components/PropertyCarousel'
import ConstructionTimeline from './components/ConstructionTimeline'
import InvestmentCarousel from './components/InvestmentCarousel'
import ClientsTestimonials from './components/ClientsTestimonials'
import NewsUpdate from './components/NewsUpdate'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
function App() {
  return (
    <div>


{/*   Hassan's Task */}

     <Header />
    <HeroSection />

{/* Haroon's Part */}
      <ConstructionTimeline />
      <InvestmentCarousel />
      <PropertyCarousel />

{/* Javeria's Part */}
      <ClientsTestimonials />
      <NewsUpdate />
      <Footer />

    </div>
  )
}

export default App