import React from 'react'

import FaqQa from './FaqQa'

export default function Faq() {
    return (
        <div className='bg-black w-full flex flex-col gap-[50px]'>
            <div className='flex flex-row gap-[30px] justify-between'>
                <div className='flex flex-col items-start'>
                    <p className='font-mono-bold text-[38px]' >Frequently Asked Question</p>
                    <p className='font-mono-regular text -[18px]'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
                </div>

                <div className='flex justify-end items-end'>
                    <button className='w-[176px] h-[63px]  rounded-lg' style={{ backgroundColor: 'rgb(229, 9, 20)' }}>Ask Question</button>
                </div>
            </div>
            <div className='flex flex-row gap-[40px]'>
                <div className='flex flex-col gap-[20px]'>
                    <FaqQa />


                    <FaqQa />
                    <FaqQa />
                    <FaqQa />
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <FaqQa />
                    <FaqQa />
                    <FaqQa />
                    <FaqQa />
                </div>
            </div>
        </div>
    )
}