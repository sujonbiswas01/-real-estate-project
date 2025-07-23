import React from 'react'
import { HiChevronRight } from "react-icons/hi";
export const FaqCard = ({q,a,onclick,isactive}) => {
    return (
        <div className='shadow-sm py-5 px-[25px] rounded-[20px] space-y-[24px]'>
            <div onClick={onclick} className='flex justify-between items-center'>
                <h1>{q}
                </h1>
                <div className='-rotate-90 text-4xl text-primary'>
                    <HiChevronRight />
                </div>
            </div>
            {isactive && <p className='text-accent'>{a} </p>}

        </div>
    )
}

