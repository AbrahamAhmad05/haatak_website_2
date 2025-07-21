import { gilroy, gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function OurMissionSection() {
  return (
    <div className='flex flex-col md:flex-row text-[#2E0A49] md:py-2 md:pt-8 px-8 h-auto md:h-[100vh] md:my-16 md:pb-8
                [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:h-[50vh]'>
        <div className="px-4 flex flex-col text-center md:text-start justify-center md:items-start gap-3 md:gap-8 pt-32">
            <h2 className="text-center md:text-start text-4xl md:text-5xl lg:text-7xl font-bold ">Our Mission</h2>
            <h5 className={`${gilroy.className} text-2xl md:text-4xl `}>Simple. Secure. Designed to Grow.</h5>
            <h6 className={`${gilroy_semibold.className} text-lg md:text-xl lg:text-2xl 2xl:text-3xl leading-snug`}>Empowering the world with secure, accessible, and future-ready digital finance.</h6>
        </div>
        <div>
            <Image 
            src='/about_imgs/our_mission_mockup.webp' 
            width={1383} 
            height={1197} 
            className='object-contain'
            alt='our mission mockup' />
        </div>
    </div>
  )
}

export default OurMissionSection