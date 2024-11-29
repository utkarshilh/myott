import React from 'react'

export default function FaqQa() {
    return (
        <div>
            <div className='flex flex-row gap-10 w-[620px] '>
                <div className='w-[52px] h-[54px] bg-black-12 rounded-md flex items-center justify-center' >
                    <p>01</p>
                </div>
                <div className='flex flex-col items-start'>
                    <p>What is StreamVibe</p>
                    <p className='font-mono-regular text-[16px] text-gray-60 '>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
                </div>
                <div className='flex item-center justify-center'>
                    <button className="text-2xl font-bold text-white-500">-</button>
                </div>

            </div>

        </div>
    )
}
