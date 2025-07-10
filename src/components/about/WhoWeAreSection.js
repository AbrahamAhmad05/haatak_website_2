import { gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function WhoWeAreSection() {
  return (
    <div className='text-[#2E0A49] w-full py-12 md:py-24 space-y-16'>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h2 className='text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight text-center'>Who We Are</h2>
            <h5 className={`${gilroy_semibold.className} text-center text-4xl px-4 md:px-10`}>We’re a team of creators and changemakers on a mission to make gold accessible, useful, and rewarding for everyone. Because your savings deserve to grow — not just stay locked away.</h5>
            <h6 className={`${gilroy_semibold.className} text-3xl px-4 md:px-10 text-center`}>Driven by Purpose. Built for Progress.</h6>
        </div>
            <div>
                <Image src='/about_imgs/who_we_are.png' className='w-full h-full object-contain' width={1920} height={300} alt='Builders' />
            </div>
    </div>
  )
}

export default WhoWeAreSection