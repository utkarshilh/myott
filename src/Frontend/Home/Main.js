import React from 'react'


import Navbar from './Navbar'
import ExperienceMessage from './ExperienceMessage'
import Explore from './Explore'



export default function Main() {
    return (
        <div className="bg-black text-white">
            <Navbar />

            <ExperienceMessage />

            <Explore />

        </div>
    )
}
