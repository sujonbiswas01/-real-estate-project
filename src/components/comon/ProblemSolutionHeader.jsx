import React from 'react'
import { SectionTitle } from './SectionTitle'
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
const ProblemSolutionHeader = () => {
  return (
    <div className='flex justify-between '>
        <SectionTitle className="bg-white">
            Problem Problem & <span className='text-primary'> Solution </span>
        </SectionTitle>
        <div className='flex justify-center items-center gap-10'>
            <button><SlArrowLeft /></button>
            <button className='bg-[#00D2FF] px-4 py-4 rounded-full shadow-sm text-[#FCFCFC] font-primary font-bold'><SlArrowRight/></button>
        </div>
    </div>
  )
}

export default ProblemSolutionHeader