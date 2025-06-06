import { gilroy, gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function WhyItFeelsEffortless() {
    return (
        <div className='h-auto w-full text-[#2E0A49] py-12 md:py-12 px-8 space-y-8 md:space-y-12'>
            <div className='flex flex-col gap-4'>
                <h5 className={`${gilroy.className} text-center text-5xl`}>Are we special...</h5>
                <h2 className='text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight text-center'>Why it Feels Effortless</h2>
            </div>

            <div className="flex flex-col md:flex-row  justify-center items-center gap-8 md:gap-12 [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:flex-col
             md:py-12 py-2 px-4 md:px-4 lg:container md:mx-auto">
                {/* Each Feature Item */}
                {[1, 2, 3, 4].map((_, index) => (
                    <div key={index} className="flex flex-col items-center gap-6 w-80 px-4">
                        {/* Image Container */}
                        <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
                            <Image
                                src={`/how_it_work_imgs/${imageNames[index]}.png`}
                                fill
                                alt={altTexts[index]}
                                className="object-contain"
                                sizes="(max-width: 640px) 192px, 256px"
                            />
                        </div>

                        {/* Title */}
                        <h6 className={`${gilroy_semibold.className} text-xl md:text-2xl lg:text-3xl text-center leading-tight px-6`}>
                            {titles[index]}
                        </h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

const imageNames = [
  "instant_gold",
  "no_lock_in",
  "24k_purity",
  "youre_incharge"
];

const altTexts = [
  "Instant gold ownership",
  "No lock-in, no stress",
  "24K purity guarantee",
  "Full control of your gold"
];

const titles = [
  "Instant gold ownership",
  "No lock-in, no stress",
  "24K purity, always",
  "You’re in charge, every step"
];

export default WhyItFeelsEffortless