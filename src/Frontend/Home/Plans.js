import React from 'react'
import PlanCard from './PlanCard'

export default function Plans() {
    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='flex flex-row gap-[80px]'>
                <div className='flex flex-col justify-start items-start'>
                    <p className='font-mono-bold text-[28px] '>Choose the plan that's right for you</p>
                    <p className='font-mono-regular text-[16px] text-gray-60'>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
                </div>
                <div className='flex flex-row justify-center items-center w-[190px] h-[61px] border-2 rounded-lg border-black-12 font-mono font-medium text-[14px] '>
                    <button className='bg-black-12 rounded-md w-[80px] h-[45px] flex items-center justify-center '>Monthly</button>
                    <button className='w-[80px] h-[45px] flex items-center justify-center'>Yearly</button >

                </div>
            </div>

            <div className='flex flex-row gap-10'>
                <PlanCard />
                <PlanCard />
                <PlanCard />
            </div>

        </div>
    )
}
