import { gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function OurWinsSection() {
    return (
        <div className='text-[#2E0A49] w-full py-12 md:pb-12 space-y-16'>

            <div className='flex flex-col gap-4 justify-center items-center'>
                <h2 className='text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight text-center'>Our Wins (So Far)</h2>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] ">
                <div className="bg-gradient-to-br from-[#F3C862] via-[#FFE196] via-80% to-[#D99A26] p-1 rounded-r-lg">
                    <div className="w-auto h-52 rounded-r-lg p-6 transition-colors duration-300 bg-gradient-br from-[#E7CB86] via-[#FFF4DF] to-[#E7CB86] md:px-20 lg:px-20 xl:px-24 flex justify-center items-center" >
                        <h4 className={`${gilroy_semibold.className} text-4xl text-center md:text-end`}>10,000+ users in 6 months</h4>
                    </div>
                </div>
                <div className='border-y-[1px] border-[#2E0A49] my-10 flex flex-col py-4 justify-center items-center gap-6'>
                    <h5 className={`${gilroy_semibold.className} text-2xl capitalize`}>Featured in</h5>
                    <div className='w-48 h-16'>
                    <Image src='/about_imgs/forbes.png' className='w-full h-full object-contain' width={266} height={156} alt='forbes' />
                    </div>
                </div>
                <div className="bg-gradient-to-br from-[#F3C862] via-[#FFE196] via-80% to-[#D99A26] p-1 rounded-l-lg">
                    <div className="w-auto h-52 rounded-l-lg p-6 transition-colors duration-300 bg-gradient-br from-[#E7CB86] via-[#FFF4DF] to-[#E7CB86] md:px-20 lg:px-20 xl:px-24 flex justify-center items-center" >
                        <h4 className={`${gilroy_semibold.className} text-4xl text-center md:text-start`}>₹2 Cr+ saved in digital gold</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWinsSection