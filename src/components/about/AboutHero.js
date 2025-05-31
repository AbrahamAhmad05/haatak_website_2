import { gotham } from '@/lib/font'
import React from 'react'

const AboutHero = () => {
    return (
        <div className='h-[50vh] sm:h-screen flex flex-col justify-center items-center text-[#2E0A49]'>
            <div className=" pt-32 md:pt-80 2xl:mt-20 px-2 text-center space-y-4">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-[700] md:mb-6 ">
                        About Haatak
                    </h1>
                <h6 className={`${gotham.className}  capitalize text-xl md:3xl font-medium md:px-72`}>We&apos;re not just building a gold app. We&apos;re building a habit of wealth.</h6>
            </div>
        </div>
    )
}

export default AboutHero