import { gilroy, gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function AboutThirdSection() {
    return (
        <div className='h-auto md:h-[135vh] 
        [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:h-auto 
        [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:flex-col 
        [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:bg-none 
        md:bg-[url(/about_imgs/about_3rd_mockup.webp)] bg-no-repeat md:bg-cover flex flex-col md:flex-row 
        [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:justify-center md:justify-between text-[#2E0A49]'>
            {/* Mobile-only image */}
            <Image
                src="/about_imgs/about_3rd_mockup.webp"
                width={900}
                height={900}
                className="block md:hidden [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:block w-full h-[40vh] object-contain object-top"
                alt="Gold Bars"
            />

            {/* Text Content */}
            <div className='px-5 py-6 md:px-8 md:py-10 lg:py-20 text-center 
            [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:text-center md:text-start space-y-3 md:space-y-4 lg:space-y-8 '>
                <h5 className={`${gilroy.className} text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl`}>
                    Backed by Vaults. Built for You.
                </h5>
                <h2 className="text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight">
                    Haatak: Your Everyday Gold Partner
                </h2>
            </div>

            <div className='px-5 pb-8 md:px-10 md:py-10 lg:py-20 
            [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:py-4 
            [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:px-32
            [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:w-full
            md:w-[500px] 2xl:w-2xl md:text-end capitalize text-center 
            [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:text-center'>
                <h6 className={`${gilroy_semibold.className} text-lg md:text-xl lg:text-2xl 2xl:text-3xl leading-snug`}>
                    Haatak is a secure digital gold app that makes saving in 24K gold as easy as sending a message.
                </h6>
            </div>
        </div>
    )
}

export default AboutThirdSection