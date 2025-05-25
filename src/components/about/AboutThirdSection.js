import { gilroy } from '@/lib/font'
import React from 'react'

function AboutThirdSection() {
    return (
        <div className='bg-[url(/about_imgs/gold_bars_mockup.webp)] h-[50vh] sm:h-screen  bg-contain bg-no-repeat md:bg-cover flex justify-between  text-[#2E0A49]'>
            <div className='px-10 py-10 space-y-4'>
                <h5 className={`${gilroy.className} text-3xl md:text-3xl 2xl:text-5xl`}>Backed by vaults. Powered by simplicity.</h5>
                <h2 className="text-6xl">Enter Haatak</h2>
            </div>
            <div className='px-10'></div>
        </div>
    )
}

export default AboutThirdSection