import { albra_grotesk, gotham, mont, montserrat } from '@/lib/font'
import Image from 'next/image'
import React from 'react'
import { gilroy_semibold } from '@/lib/font'

function HeroSection() {
    return (
        <section className="relative min-h-screen min-w-full md:min-h-screen flex items-center">
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    <Image
                        src="/how_it_work_imgs/hero_bg.webp"
                        alt="Background"
                        fill
                        className="object-cover opacity-10" // Adjust opacity here (50% in this case)
                    />
                </div>
            </div>
            {/* Content */}
            <div className=" h-full container relative flex justify-center items-center z-10 mx-auto px-4 md:px-8 text-[#2E0A49]">
                <div className="flex flex-col text-center justify-center items-center">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-[700] mb-6 ">
                        How Haatak Works
                    </h1>
                    <p className={`text-xl md:text-3xl font-medium mb-8 md:px-48 ${gotham.className}`}>
                        Gold saving that feels nothing like saving.
                    </p>
                    {/* <div className='flex items-center justify-center bg-gradient-to-br from-[#ffffff52] via-[#9999992a] to-[#ffffff2a] border-[1px] border-[#626262] mt-10 gap-2 p-2 rounded-[12px]'> */}
                    <div className="w-60 max-w-md bg-gradient-to-br from-[#F3C862] via-[#FFE196] to-[#D99A26] p-1 rounded-lg">
                        <div className="flex items-center justify-center bg-gradient-to-br from-[#E7CB86] via-[#FFF4DF] to-[#E7CB86] px-6 py-3  rounded-[6px] text-3xl md:text-4xl font-semibold gap-6">
                        <Image 
                            src="/qr_code.png"
                            className='w-24 h-24'
                            width={144}
                            height={144}
                            alt="QR code"
                        />
                        <div>
                            <p className={`${mont.className} font-semibold text-xl`}>download</p>
                            <h6 className='text-3xl'>Haatak</h6>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection