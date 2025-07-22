import React from 'react'
import { navitems } from '../../assets/sourse/data'
export const Navitem = () => {
    return (
        <ul className='hidden md:flex gap-3 xl:gap-4'>
            {navitems.map((item) => (

                <a className='text-accent hover:text-primary text-sm xl:text-base transition-colors duration-150 cursor-pointer' key={item.id}>{item.item}</a>


            ))}
        </ul>
    )
}

