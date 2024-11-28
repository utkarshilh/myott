import React from 'react'

import imm from './logo-removebg-preview.png'

export default function Navbar() {
    return (
        <div className='px-4 py-4 bg-black' >

            <div className='flex justify-center space-x-[13rem]'>
                <div className='flex flex-row'>

                    <img src={imm} className="w-[3.75rem] h-[3.75rem]" />
//

                </div>
                <div className='regular-text font-mono flex flex-row w-[34.688rem] h-[4.688rem] px-5  bg-black text-white space-x-[3rem] items-center rounded-md border-4 border-gray-75  text-[18px]'>
                    <p>Home</p>
                    <p>Movies& Shows </p>
                    <p>Supports</p>
                    <p>Subscription</p>

                </div>
                <div className="flex items-center" >
                    <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"/>
                    </svg>
                </div>

            </div>

        </div>
    )
}
