import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from './components/comon/Button'
import { SectionTitle } from './components/comon/SectionTitle'
import Grradient from './components/comon/Grradient'


function App() {
  return (
    <>
     <h1 className='text-center font-primary font-bold text-primary'>sujon biswas</h1>
     <Button className=" bg-red-500 text-white shadow-2xs">
      sujon biswas
     </Button>
     <Button className=" bg-amber-200 text-green-500">
      sujon biswas
     </Button>
     <Button className="px-14">
      suj
     </Button>
     <SectionTitle className="bg-amber-400 rounded-full mt-9 text-white">sujonh jslfjsdjfsj && <Grradient>sujon biswas</Grradient> </SectionTitle>
     
    </>
  )
}

export default App
