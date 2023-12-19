import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero'
import Modal from './components/Modal'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Hero/>
     <Modal/>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
