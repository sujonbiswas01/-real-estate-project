import React from 'react'
import { SectionTitle } from '../components/comon/SectionTitle'
import { Container } from '../components/comon/Container'
import ReviewCard from '../components/comon/ReviewCard'
import { review } from '../assets/sourse/data'
import { start } from '../assets/sourse/data'
const Review = () => {
  return (
    <section className='my-[150px] bg-[#F6F6F6] py-20'>
        <Container >
            <SectionTitle className='text-center'>Reviews From <span className='text-primary'>Our Client </span> </SectionTitle>

            <div className='pt-10 flex flex-col md:flex-row border-l-2 border-accent px-5 '>
                <div className='flex-grow space-y-[15px]'>
                    {review.map((rev,index)=>   <ReviewCard {...rev} key={index}/> )}
                      
                        
                </div>
                <div className='flex justify-center items-center'>
                    
                <div className='space-y-[30px]'>
                    <h1 className='font-bold text-[30px]'>It Was A Amazing Experiance!</h1>
                    <div className='flex gap-[10px] '>
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                        <img src={start} alt="" />
                    </div>
                    <h3 className='text-accent max-w-[555px] font-secoundary'>The AI features saved us countless hours and ensured our compliance was spot on.</h3>
                </div>
                </div>
              
            </div>
        </Container>
        
    </section>
  )
}

export default Review