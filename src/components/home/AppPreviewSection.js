import { gilroy, gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

const AppPreviewSection = () => {
    return (
        <div className='mt-20 flex flex-col justify-center items-center w-full px-4 text-center'>
            <h3 className={`text-[#2E0A49] ${gilroy.className} text-4xl md:text-5xl font-[400]`}>Designed to Feel Premium</h3>
            <h2 className='text-5xl md:text-6xl font-bold text-[#2E0A49] pt-4 md:pt-6'>Because finance should feel fine.</h2>
            <h6 className={`text-lg md:text-2xl text-[#2E0A49] font-bold pt-3 md:pt-6 ${gilroy_semibold.className}`}>A clutter-free, calming app interface that makes you want to come back — even if it&apos;s just to admire it.</h6>

            <div className="relative flex justify-center items-center w-full max-w-6xl mx-auto mt-8 md:mt-12 h-[500px] md:h-[700px]">
                {/* Left Image */}
                <div className="absolute z-10 left-[10%] md:left-[15%] top-1/2 -translate-y-1/2 w-[45%] max-w-[300px] transform scale-90 opacity-90 hover:scale-95 transition-all">
                    <Image
                        src="/home_imgs/app_mockup_1.png"
                        width={400}
                        height={600}
                        alt='app preview left'
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Center Active Image */}
                <div className="relative z-20 w-[45%] md:w-[60%] max-w-[400px] transform hover:scale-105 transition-all">
                    <Image
                        src="/home_imgs/app_mockup_2.png"
                        width={400}
                        height={600}
                        alt='active app preview'
                        className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Right Image */}
                <div className="absolute z-10 right-[10%] md:right-[15%] top-1/2 -translate-y-1/2 w-[45%] max-w-[300px] transform scale-90 opacity-90 hover:scale-95 transition-all">
                    <Image
                        src="/home_imgs/app_mockup_3.png"
                        width={400}
                        height={600}
                        alt='app preview right'
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default AppPreviewSection