import { gilroy, gotham, mont } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function DownloadAppSection() {
    return (
        <div className='h-auto md:h-[135vh] md:bg-[url(/how_it_work_imgs/second_section_bg.webp)] bg-no-repeat md:bg-cover flex flex-col md:flex-row md:justify-between text-[#2E0A49]'>
            {/* Mobile-only image */}
            <Image
                src="/how_it_work_imgs/second_section_bg.webp"
                width={900}
                height={900}
                className="block md:hidden w-full h-[40vh] object-contain object-top"
                alt="Gold App"
            />

            {/* Text Content */}
            <div className='mx-w-2xl text-center px-5 py-6 md:px-16 md:py-28 space-y-1 md:space-y-2 lg:space-y-3'>
                <h5 className={` text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl`}>
                    No paperwork. No queues.
                </h5>
                <h2 className="text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight">
                    Download the App
                </h2>
                <p className={`max-w-2xl text-xl md:text-3xl font-medium mb-8 md:px-48 ${gotham.className}`}>
                    Just hit download and dive in.
                </p>
                <div className="flex flex-col md:flex-row gap-2 md:gap-8 justify-between">
                    <div className="flex items-center justify-center bg-gradient-to-br from-[#FFFFFF] via-[#99999971] to-[#FFFFFF] mt-10 gap-6 px-6 py-3 rounded-[12px]">
                        <Image
                            src="/how_it_work_imgs/apple_icon.png"
                            width={64}
                            height={64}
                            alt='Apple logo'
                        />
                        <div className='text-start'>
                            <p className={`${mont.className} font-semibold text-xl`}>available on</p>
                            <h6 className={`${gilroy.className} text-3xl font-bold`}>App store</h6>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-br from-[#ffffff83] via-[#99999971] to-[#ffffff83] mt-10 gap-6 px-6 py-3 rounded-[12px]">
                        <Image
                            src="/how_it_work_imgs/android_play.png"
                            width={64}
                            height={64}
                            alt='Apple logo'
                        />
                        <div className='text-start'>
                            <p className={`${mont.className} font-semibold text-xl`}>get it on</p>
                            <h6 className={`${gilroy.className} text-3xl font-bold`}>Google Play</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadAppSection