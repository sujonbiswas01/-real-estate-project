import React from 'react'
import { Logo } from './Logo'
import { IoClose } from "react-icons/io5";
import { navitems } from '../../assets/sourse/data';
const Mobliemenu = ({toggleMenu}) => {
    return (
        <div className='lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-hidden'>
            <div className='flex justify-between items-center '>
                <Logo />
                <button onClick={toggleMenu} className='text-black text-2xl self-end' aria-label='Close Menu'><IoClose />
                </button>
            </div>

            <div className='flex flex-col space-y-4 mt-10'>
                {
                    navitems.map((itms)=>(
                        <a key={itms.id} className='block text-lg hover:text-primary text-accent transition-colors duration-150'>
                            {itms.item}

                        </a>
                    ))
                }
            </div>


        </div>
    )
}

export default Mobliemenu