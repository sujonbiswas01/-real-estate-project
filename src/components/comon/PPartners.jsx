import React from 'react'
import { Container } from './Container'
import { SectionTitle } from './SectionTitle'
import { partners } from '../../assets/sourse/data'
const PPartners = () => {
  return (
    <section>
        <Container className="bg-[#E6F9FD] max-w-[1296px] py-[50px] rounded-[20px]">
            <SectionTitle className="text-center">
                Our <span className='text-primary'>Partners</span>
            </SectionTitle>
            <div className='pt-10 flex flex-wrap justify-center gap-[28px]'>
                {partners.map((item,index)=><div key={index} className='w-[274px] bg-white border-[#D6D6D6]  rounded-[12px] h-[101px] flex justify-center items-center'>
                    <img src={item.img} alt="" />

                </div>)}
            </div>
        </Container>

    </section>
  )
}

export default PPartners