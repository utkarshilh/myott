import React from 'react'


import Navbar from './Navbar'
import ExperienceMessage from './ExperienceMessage'
import Explore from './Explore'
import Faq from './Faq'
import Plans from './Plans'
import FreeTrial from './FreeTrial'



export default function Main() {
    return (
        <div className="gap-[100px] bg-black-6 text-white flex flex-col px-[70px]">
            <div>
                <Navbar />
                <ExperienceMessage />
            </div>
            <Explore />
            <Faq />
            <Plans />
            <FreeTrial />

        </div>
    )
}
