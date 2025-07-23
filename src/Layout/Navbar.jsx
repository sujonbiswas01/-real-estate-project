import React, { useEffect, useState } from 'react'
import { Container } from '../components/comon/Container'
import { Logo } from '../components/comon/Logo'
import { Button } from '../components/comon/Button'
import Mobliemenu from '../components/comon/Mobliemenu'
import { Navitem } from '../components/comon/Navitem'
const Navbar = () => {
    const [isMenu,setInsmenuopen] = useState(false);
    const toggleMenu = ()=> setInsmenuopen((prev)=>!prev)
    useEffect(()=>{
        const bodyClass = document.body.classList;
        isMenu?bodyClass.add('no-scroll'):bodyClass.remove('no-scroll')
    })
  return (
    <nav className='py-5'>
        <Container >
            <div className='flex justify-between items-center gap-2.5 sm:px-2  xl:px-[30px] py-2 bg-white rounded-full sm:py-3.5 xl:py-5 '>
                <Logo/>
                <Navitem/>
              
                <div className='flex items-center justify-center gap-2 '>
                    <button className='md:hidden block px-10' onClick={toggleMenu}>
                          <div className='space-y-1 '>
                              <span className='block w-6 h-0.5 bg-black'></span>
                              <span className='block w-6 h-0.5 bg-black'></span>
                              <span className='block w-6 h-0.5 bg-black'></span>

                          </div>
                       
                    </button>
                    <Button className="cursor-pointer bg-linear-to-t from-[#059DBE] to-[#00D2FF] hidden sm:block ">Get Started Today</Button>
                </div>
                

            </div>
           {isMenu &&  <Mobliemenu toggleMenu={toggleMenu}/>}

        </Container>
      
    </nav>
  )
}

export default Navbar
