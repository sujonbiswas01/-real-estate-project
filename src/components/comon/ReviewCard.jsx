import React from 'react'

const ReviewCard = ({img,titile,des1}) => {
    return (
        <div className='sm:w-[491px] w-[300px] border border-primary rounded-[20px] flex justify-start items-start  gap-[93px]'>
            <div className={`flex justify-normal items-center ${titile=='John Smith'?'bg-primary rounded-2xl w-full border-l-2 border-primary ':"bg-none"}`}>
                <img   src={img} alt="" />
                <div className=' font-semibold font-primary text-[#666666]'><p >{titile}</p>
                    <p>{des1}</p></div>

            </div>
        </div>
    )
}

export default ReviewCard