import React from 'react'

export default function PlanCard() {
    return (
        <div className='flex flex-col justify-center items-start bg-black-10 px-[40px] py-[40px] rounded-lg gap-[40px]'>
            <div className='flex flex-col '>
                <p className='font-mono font-bold text-[20px] items-start justify-start  '>Basic Plan</p>
                <p className='font-mono font-regular text-[16px] text-gray-60 '>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
            </div>
            <div className='flex flex-row'>
                <p className='font-mono font-semibold text-[30px]'>$9.99</p>
                <p className='flex justify-center items-end font-mono font-medium text-[16px] text-gray-60 '>/month</p>
            </div>
            <div className='flex flex-row gap-[12px] text-[14px] font-mono font-semibold '>
                <button className='bg-black-6 border-20 border-black-10 w-[160px] h-[49px] rounded-lg ' >Start Free Trial</button>
                <button className='bg-red-45 w-[160px] h-[49px] rounded-lg'>Choose Plan </button>
            </div>
        </div>
    )
}