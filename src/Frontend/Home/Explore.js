import React from 'react'
import ExploreCard from './ExploreCard'

export default function Explore() {
    return (
        <div className='flex flex-col gap-[30px] '>
            <div className='flex flex-row  '>
                <div className='w-full flex flex-row justify-between items-center'>
                    <div className='space-y-[12px]'>
                        <p className='text-[28px] font-mono-bold flex items-start'>Explore out wide variety of category</p>
                        <p className='text-[14px] font-mono-regular'>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                    </div>

                    <div className='flex flex-row space-x-[12px]'>

                        <div className='flex items-center w-[44px] h-[44px]' style={{ backgroundColor: '#333333  ' }} >
                            <svg class="w-full h-[13.5px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                            </svg>
                        </div>

                        <div className='flex flex-row space-x-[3px] items-center'>

                            <div className=' w-[18px] h-[4px] rounded-md' style={{ backgroundColor: '#E50914' }}></div>
                            <div className=' w-[18px] h-[4px] rounded-md' style={{ backgroundColor: '#E50914' }}></div>
                            <div className=' w-[18px] h-[4px] rounded-md' style={{ backgroundColor: '#E50914' }}></div>

                        </div>

                        <div className='flex items-center w-[44px] h-[44px]'>
                            <svg class="w-full h-[13.5px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </div>
                    </div>

                </div>

            </div>
            <div className='flex flex-row space-x-[20px] items-center px-[70pxx]'>


                <ExploreCard />
                <ExploreCard />
                <ExploreCard />
                <ExploreCard />
                <ExploreCard />

            </div>
        </div>
    )
}
