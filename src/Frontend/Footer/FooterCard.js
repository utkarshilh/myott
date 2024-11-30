import React from 'react'

export default function FooterCard({ heading, items }) {

    console.log(items)

    return (



        <div className='flex flex-col justify-start items-start gap-[20px] w-[196px]' >
            <p className='font-mono font-semibold text-[18px] '>{heading}</p>
            <div className='font-mono font-medium  text-[16px] text-gray-60 gap-[10px] flex flex-col items-start justify-start '>

                {items.map((llist, index) => (
                    <p key={index}>{llist}</p>
                ))}



                <h1>Hello</h1>
            </div>
        </div >

    )
}
