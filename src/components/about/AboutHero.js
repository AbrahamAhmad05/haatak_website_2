import { gotham } from '@/lib/font'
import React from 'react'

const AboutHero = () => {
    return (
        <div className='h-full md:h-[80vh] [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:h-[70vh] flex flex-col gap-4 justify-center items-center text-center text-[#2E0A49] pt-48 md:pt-24 pb-24 md:pb-2'>
            
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-[700] md:mb-6 ">
                        About Us
                    </h1>
                <h6 className={`${gotham.className}  capitalize text-xl md:3xl font-medium md:px-72`}>We&apos;re not just building a gold app. We&apos;re building a habit of wealth.</h6>
        </div>
    )
}

export default AboutHero