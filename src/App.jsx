import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from './components/comon/Button'
import { SectionTitle } from './components/comon/SectionTitle'
import Grradient from './components/comon/Grradient'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import Mobliemenu from './components/comon/Mobliemenu'


function App() {
  return (
    <>
      <main>
        <Navbar />
        <Footer />

      </main>

     
    </>
  )
}

export default App
