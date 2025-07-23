import React, { act, useState } from 'react'
import { Container } from './comon/Container'
import { SectionTitle } from './comon/SectionTitle'
import { HiChevronRight } from "react-icons/hi";
import { faq } from '../assets/sourse/data';
const Faq = () => {
    const [active,setactive] = useState(1)
    const handleChang=(index)=>{
        active ===index?setactive(-1):setactive(index)
    }

    return (
        <section className='mt-[150px]'>
            <Container className="max-w-[982px] ">
                <SectionTitle className='text-center'>
                    Frequently <span className='bg-linear-to-t text-transparent bg-clip-text from-[#059DBE] to-[#00D2FF]'> Asked Questions </span>
                </SectionTitle>
                <div>
                    {faq.map((faq,i)=> (
                         <div className='shadow-sm py-5 px-[25px] rounded-[20px] space-y-[24px]'>
                                    <div key={faq.id} onClick={()=>handleChang(i)} className='flex justify-between items-center'>
                                        <h1>{faq.q}
                                        </h1>
                                        <div className={` text-4xl text-primary ${active===i?'rotate-90':'-rotate-90'}`}>
                                            
                                            <HiChevronRight />
                                        </div>
                                    </div>
                                    {active===i && <p className='text-accent'>{faq.a} </p>}
                        
                                </div>
                    ))}
                
                </div>

            </Container>
        </section>
    )
}

export default Faq