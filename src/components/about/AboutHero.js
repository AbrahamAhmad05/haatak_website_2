import { gotham } from '@/lib/font'
import React from 'react'

const AboutHero = () => {
    return (
        <div className='h-full md:h-[80vh] [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:h-[80vh] flex flex-col gap-4 justify-center items-center text-center text-[#2E0A49] pt-48 md:pt-24 pb-24 md:pb-2'>
            
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-[700] md:mb-6 ">
                        About Us
                    </h1>
                <h6 className={`${gotham.className}  capitalize text-xl md:text-2xl lg:text-3xl font-medium lg:px-72`}>Building a Habit of Wealth: Simple, Secure Digital Gold for All</h6>
        </div>
    )
}

export default AboutHero