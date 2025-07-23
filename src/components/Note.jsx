import React from 'react'
import { Container } from './comon/Container'
import { Button } from './comon/Button'

const Note = () => {
    return (
        <section className='mt-[50px] max-w-[1184px] mx-auto sm:mt-20  lg:mt-[100px] px-2.5'>
            <Container className='bg-linear-to-b from-[#00D2FF] to-[#059DBE]  pl-10 flex flex-col md:flex-row justify-between items-center py-14 pr-16 max-w-[1074px]'>
                <div className=' justify-between'>
                    <div className='w-5/6'>
                        <h2 className='text-white text-4xl font-bold py-5 max-w-lg '>Ready to Simplify Your Document Management?</h2>
                        <p className=' max-w-[566px] font-bold text-base leading-[140%] text-[#FFFFFF]'>
                            Sign up today and experience the power of AI-driven legal documentation.
                        </p>

                    </div>

                </div>
                <Button className='bg-white text-base text-black mt-3'>Get Started Now</Button>

            </Container>
        </section>
    )
}

export default Note