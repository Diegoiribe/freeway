import React from 'react'
import 'lazysizes'
import './App.css'
import Home from './Components/Home'
import Services from './Components/Services'
import Nosotros from './Components/Nosotros'
import Galeria from './Components/Galeria'
import Contacto from './Components/Contacto'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Home />
      <Services />
      <Nosotros />
      <Galeria />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
