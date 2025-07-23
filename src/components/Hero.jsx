import React from 'react'
import { Container } from './comon/Container'
import { Button } from './comon/Button'

const Hero = () => {
  return (
    <section className='pt-[142px]'>
        <Container className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <div className='space-y-8'> 
                <h1 className='font-primary font-bold text-[60px] leading-[76px]  max-w-[593px]'>Simplify your real estate document analysis</h1>
                <p className='font-semibold text-xl max-w-[519px] text-accent'>Streamline, Automate, and Secure Your Business Documents with Ai GoverningDocs</p>
                <Button>Get Started Today</Button>
            </div>
            <div>
                <img src="/hero-side.svg" alt="" />
            </div>
        </Container>
    </section>
  )
}
export default Hero