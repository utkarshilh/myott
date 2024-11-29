import React from 'react'

export default function FreeTrial() {
    return (
        <div className='flex flex-row justify-between items-center px-[60px] py-[60px] border-2 border-black-12  rounded-lg '>
            <div className='flex flex-col gap-2'>
                <p className='font-mono font-bold text-[28px] flex items-start'>Start your free trial today!</p>
                <p className='font-mono font-regular text-[16px] text-gray-60'>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
            </div>
            <div>
                <button className='flex justify-center items-center rounded-md bg-red-45 w-[149px] h-[49px] border-2 border-black-12'>Start a Free Trial!</button>
            </div>
        </div>
    )
}
