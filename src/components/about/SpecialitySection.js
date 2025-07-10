import { gilroy, gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function SpecialitySection() {
    return (
        <div className='h-auto w-full text-[#2E0A49] py-12 px-8'>
            <div className='flex flex-col gap-4'>
                <h5 className={`${gilroy.className} text-center text-5xl`}>Are we special...</h5>
                <h2 className='text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight text-center'>What Makes Us Different?</h2>
                <h5 className={`${gilroy_semibold.className} text-center text-3xl`}>But why!</h5>
            </div>
            <div className="flex flex-col md:flex-row px-4 md:px-16 justify-center items-center gap-5 mt-20">
                <div className="relative w-[230px] h-[250px] flex flex-col justify-between bg-[#FFD980] border-[1.5px] border-[#E39A35] shadow-[inset_0_0_26px_8px_rgba(217,154,38,0.25),_0_72px_50px_0_rgba(0,0,0,0.16)] rounded-[12px] -rotate-[15deg]">
                    {/* Title */}
                    <h6 className={`${gilroy.className} text-2xl text-center font-bold text-[#2E0A49] pt-5 px-3`}>
                        Zero middlemen markup
                    </h6>

                    {/* Image */}
                    <div className="w-full flex justify-center items-end px-3 pb-3">
                        <Image
                            src="/about_imgs/no_middlemen.png"
                            width={180}
                            height={180}
                            alt='no paperwork'
                            className="object-contain max-h-[200px]"
                        />
                    </div>
                </div>
                <div className="relative w-[230px] h-[250px] flex flex-col justify-between bg-[#FFD980] border-[1.5px] border-[#E39A35] shadow-[inset_0_0_26px_8px_rgba(217,154,38,0.25),_0_72px_50px_0_rgba(0,0,0,0.16)] rounded-[12px] -rotate-[4deg]">
                    {/* Title */}
                    <h6 className={`${gilroy.className} text-2xl text-center font-bold text-[#2E0A49] pt-5 px-3`}>
                        No paperwork
                    </h6>

                    {/* Image */}
                    <div className="w-full flex justify-center items-end px-3 pb-3">
                        <Image
                            src="/about_imgs/no_paperwork.png"
                            width={180}
                            height={180}
                            alt='no limit'
                            className="object-contain max-h-[200px]"
                        />
                    </div>
                </div>
                <div className="relative w-[230px] h-[250px] flex flex-col justify-between bg-[#FFD980] border-[1.5px] border-[#E39A35] shadow-[inset_0_0_26px_8px_rgba(217,154,38,0.25),_0_72px_50px_0_rgba(0,0,0,0.16)] rounded-[12px] rotate-[15deg]">
                    {/* Title */}
                    <h6 className={`${gilroy.className} text-2xl text-center font-bold text-[#2E0A49] pt-5 px-3`}>
                        Start from ₹10
                    </h6>

                    {/* Image */}
                    <div className="w-full flex justify-center items-center px-3 pb-3">
                        <Image
                            src="/about_imgs/no_limit.png"
                            width={300}
                            height={300}
                            alt='no middlemen'
                            className="object-contain max-h-[220px]"
                        />
                    </div>
                </div>
                <div className="relative w-[230px] h-[250px] flex flex-col justify-between bg-[#FFD980] border-[1.5px] border-[#E39A35] shadow-[inset_0_0_26px_8px_rgba(217,154,38,0.25),_0_72px_50px_0_rgba(0,0,0,0.16)] rounded-[12px] -rotate-[3deg]">
                    {/* Title */}
                    <h6 className={`${gilroy.className} text-2xl text-center font-bold text-[#2E0A49] pt-5 px-3`}>
                        100% 24K purity
                    </h6>

                    {/* Image Container */}
                    <div className="w-full flex-1 min-h-0 relative overflow-hidden px-3 pb-3">
                        <div className="absolute right-1 -top-4 w-[130%] h-[220%] left-1/2 -translate-x-1/2"> {/* Wider container */}
                            <Image
                                src="/home_imgs/haatak_coin.png"
                                width={700}  
                                height={700}  
                                alt='gold coin'
                                className="object-contain w-full h-full absolute -top-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialitySection