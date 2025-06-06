import { gilroy, gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function OurMissionSection() {
  return (
    <div className='flex flex-col md:flex-row text-[#2E0A49] py-10 md:py-2 pt-8 px-8 mt-16
                [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:h-[50vh]'>
        <div className="px-4 flex flex-col text-center md:text-start justify-center items-start gap-8">
            <h2 className="text-7xl lg:text-8xl font-bold ">Our Mission</h2>
            <h5 className={`${gilroy.className} text-4xl `}>Designed to Feel Premium</h5>
            <h6 className={`${gilroy_semibold.className} text-3xl md:w-md`}>To help Indians build wealth — one rupee, one digital gram, one smart habit at a time.</h6>
        </div>
        <div>
            <Image 
            src='/about_imgs/trends_mockup.jpg' 
            width={1383} 
            height={1197} 
            className='object-contain'
            alt='trends mockup' />
        </div>
    </div>
  )
}

export default OurMissionSection