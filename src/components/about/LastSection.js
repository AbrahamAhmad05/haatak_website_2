import { gilroy_semibold } from '@/lib/font'
import React from 'react'

function LastSection() {
    return (
        <div className='bg-[url(/about_imgs/bottom_bg.webp)] bg-cover h-auto py-8 md:h-screen flex flex-col justify-center items-center text-[#2E0A49] gap-8'>
            <h2 className='md:w-[72%] text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight text-center'>Driven by Purpose, Built for Progress</h2>
            <h5 className={`${gilroy_semibold.className} text-center text-4xl px-4 md:px-10`}>Thoughtfully crafted to help your wealth grow with trust and ease.</h5>
            <h6 className={`${gilroy_semibold.className} text-3xl px-4 md:px-10 text-center`}>At Haatak, we focus on what truly matters — building simple, secure tools that empower every individual to start saving, own 24K digital gold, and grow wealth with confidence. Just meaningful progress, one smart habit at a time.</h6>
        </div>
    )
}

export default LastSection