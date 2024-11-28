import React from 'react'

export default function ExperienceMessage() {
    return (
        <div className='text-white flex flex-col items-center space-y-[40px] px-[150px]'>

            <div>
                <div className='text-[48px] font-mono-bold'>
                    <p>The Best Streaming Experience </p>
                </div>

                <div className='text-[14px] font-mono-regular'>
                    <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                </div>

            </div>


            <div className='flex items-center w-[209px] h-[52px] rounded-md ' style={{ backgroundColor: '#E50914' }}>
                <div className='flex flex-row justify-center w-full'>

                    <svg className="w-[24px] h-[24px]  text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                        <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                    </svg>
                    <button className="text-[14px] font-semibold">Star Watching Now</button>
                </div>

            </div>

        </div>
    )
}
