import React, { useState } from 'react'
import { Container } from '../components/comon/Container'
import { Logo } from '../components/comon/Logo'
import { navitems } from '../assets/sourse/data'
import { Button } from '../components/comon/Button'
import Mobliemenu from '../components/comon/Mobliemenu'
const Navbar = () => {
    const [isMenu,setInsmenuopen] = useState(false);
    const toggleMenu = ()=> setInsmenuopen((prev)=>!prev)
  return (
    <nav className='py-5'>
        <Container >
            <div className='flex justify-between items-center gap-2.5 sm:px-2  xl:px-[30px] py-2 bg-white rounded-full sm:py-3.5 xl:py-5 '>
                <Logo/>
                <ul className='hidden md:flex gap-3 xl:gap-4'>
                    {navitems.map((item)=>(
                      
                            <a className='text-accent hover:text-primary text-sm xl:text-base transition-colors duration-150 cursor-pointer' key={item.id}>{item.item}</a>

                        
                    ))}
                </ul>
                <div className='flex items-center justify-center gap-2'>
                    <button className='md:hidden block' onClick={toggleMenu}>
                          <div className='space-y-1 '>
                              <span className='block w-6 h-0.5 bg-black'></span>
                              <span className='block w-6 h-0.5 bg-black'></span>
                              <span className='block w-6 h-0.5 bg-black'></span>

                          </div>
                       
                    </button>
                    <Button className="cursor-pointer bg-linear-to-t from-[#059DBE] to-[#00D2FF] px-[10px] sm:text-base text-[10px] sm:flex hidden">Get Started Today</Button>
                </div>
                

            </div>
           {isMenu &&  <Mobliemenu toggleMenu={toggleMenu}/>}

        </Container>
      
    </nav>
  )
}

export default Navbar
