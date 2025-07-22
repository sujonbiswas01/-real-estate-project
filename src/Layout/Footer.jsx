import React from 'react'
import { Navitem } from '../components/comon/Navitem'
import { socialIcon } from '../assets/sourse/data'
import { Container } from '../components/comon/Container'
const Footer = () => {
  return (
    <Container>
      <footer className=' pt-5 lg:pt-24'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-2.5'>
          <h1 className='font-primary text-xl sm:text-2xl lg:text-lg xl:text-[40px] font-bold'>
            Ai GoverningDocs
          </h1>
          <div >
            <Navitem />
          </div>
          <div className='flex gap-2.5 '>
            {socialIcon.map((social) => {
              return <article className='bg-gray-400 px-4 py-4 rounded-full text-white' key={social.id}>
                <a href="">{social.img}</a>
              </article>
            })}
          </div>

        </div>
        <div className='pt-[120px]'>
          <p className='text-center  border-t border-primary pt-3.5'>Ai GoverningDocs 2024. All Rights Reserved.</p>
        </div>


      </footer>
    </Container>
  )
}

export default Footer