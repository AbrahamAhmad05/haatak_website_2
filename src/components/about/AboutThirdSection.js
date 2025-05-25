import { gilroy, gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function AboutThirdSection() {
    return (
        <div className='h-auto md:h-[135vh] md:bg-[url(/about_imgs/gold_bars_mockup.webp)] bg-no-repeat md:bg-cover flex flex-col md:flex-row md:justify-between text-[#2E0A49]'>
            {/* Mobile-only image */}
            <Image
                src="/about_imgs/gold_bars_mockup.webp"
                width={900}
                height={900}
                className="block md:hidden w-full h-[40vh] object-contain object-top"
                alt="Gold Bars"
            />

            {/* Text Content */}
            <div className='px-5 py-6 md:px-10 md:py-10 lg:py-20 space-y-3 md:space-y-4 lg:space-y-8'>
                <h5 className={`${gilroy.className} text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl`}>
                    Backed by vaults. Powered by simplicity.
                </h5>
                <h2 className="text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight">
                    Enter Haatak
                </h2>
            </div>

            <div className='px-5 pb-8 md:px-10 md:py-10 lg:py-20 md:w-[500px] 2xl:w-2xl md:text-end capitalize'>
                <h6 className={`${gilroy_semibold.className} text-lg md:text-xl lg:text-2xl 2xl:text-3xl leading-snug`}>
                    A digital gold wallet that makes saving gold as effortless as sending a text. Built for the everyday saver.
                </h6>
            </div>
        </div>
    )
}

export default AboutThirdSection