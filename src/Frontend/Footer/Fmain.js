import React from 'react'
import FooterCard from './FooterCard'

export default function Fmain() {

    const footerData = [
        { heading: "Home", items: ["Categories", "Devices", "Devices", "FAQ"] },
        { heading: "Movies", items: [" Genres", "Trending", "New Release", "Popular"] },
        { heading: "Shows", items: ["Genres", "Shows", "Trending", "New Release", "Popular"] },
        { heading: "Support", items: ["Contact Us"] },
        { heading: "Subscription", items: ["Plans", "Features"] }
    ]
    return (


        <div className='bg-black-6'>
            <div className='px-[80px] pt-[80px] pb-[40px] flex flex-col gap-[80px]'>
                <div className='flex flex-row gap-[80px] justify-center '>

                    {
                        footerData.map((temp, index) => (
                            <FooterCard key={index} heading={temp.heading} items={temp.items} />

                        ))

                    }


                </div>

                <div className='flex flex-col gap-[15px]'>

                    <div className='border-t-[1.5px] border-t-black-15'></div>


                    <div className='flex flex-row justify-between items-center '>
                        <p className='font-mono font-regular text-[14px] text-gray-60 '>@2023 streamvib, All Rights Reserved</p>
                        <div className='flex flex-row  font-mono font-regular text-[14px] text-gray-60'>
                            <p className='border-r-[1px] border-black-15 px-[16px]'>Terms of Use</p>
                            <p className='border-r-[1px] border-black-15 px-[16px]'>Privacy Policy</p>
                            <p className=' px-[16px]'>Cookie Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
