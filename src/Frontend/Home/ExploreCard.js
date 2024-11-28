import React from 'react'

import photo from './dilwale.jpg'
export default function ExploreCard() {
    return (
        <div className='  px-[30px] py-[30px] rounded-lg flex items-center' style={{ backgroundColor: '#1A1A1A' }}>

            <div className='flex flex-col '>

                <div className='flex flex-col gap-2 '>
                    <div className='flex flex-row gap-2'>
                        <div><img src={photo} alt="" className='rounded-md' /></div>
                        <div><img src={photo} alt="" className='rounded-md' /></div>
                    </div>
                    <div className='flex flex-row gap-2' >
                        <div><img src={photo} alt="" className='rounded-md' /></div>
                        <div><img src={photo} alt="" className='rounded-md' /></div>
                    </div>
                </div>


                <div className='flex flex-row justify-between items-center'>
                    <div className='font-mono-semibold text-[18px]'>Action</div>
                    <div><svg class="w-[18.75px] h-[16.88px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg> </div>

                </div>

            </div>

        </div>


    )
}
