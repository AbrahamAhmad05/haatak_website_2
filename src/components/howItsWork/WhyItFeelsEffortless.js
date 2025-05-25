import { gilroy, gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function WhyItFeelsEffortless() {
    return (
        <div className='h-auto w-full text-[#2E0A49] py-48 px-8 space-y-36'>
            <div className='flex flex-col gap-4'>
                <h5 className={`${gilroy.className} text-center text-5xl`}>Are we special...</h5>
                <h2 className='text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight text-center'>Why it Feels Effortless</h2>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-12 py-12 px-4 md:px-8 lg:container lg:mx-auto">
                {/* Each Feature Item */}
                {[1, 2, 3, 4].map((_, index) => (
                    <div key={index} className="flex flex-col items-center gap-6 w-full sm:w-64 md:w-72 lg:w-80 px-4">
                        {/* Image Container */}
                        <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
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