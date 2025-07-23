import React from 'react'

export const ProblemsolutionCard = ({img,titile,des1,des2}) => {
  return (
       <div className='w-[272px] h-[349px] rounded-[20px] p-5 space-y-5 shadowCard hover:bg-primary group-hover:text-white' >
            <div className='bg-primary size-[58px] rounded-full flex justify-center items-center '>
              <img src={img} alt="" />


            </div>
            <h1 className='font-bold hover:text-white text-lg text-secondary leading-none'>{titile}</h1>
            <div className='space-y-[10px] hover:text-white text-accent '>
              <p>{des1}</p>
              {des2 && <p>{des2}</p>}
            </div>

          </div>
  )
}

