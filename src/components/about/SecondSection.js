import { original } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function AboutSecondSection() {
  return (
    <div className={`${original.className} bg-[url(/about/second_section_bg.png)] bg-cover bg-no-repeat  text-[#2E0A49] my-10`}>
        {/* <div className="border-2 border-black h-1"></div> */}
        <div className="grid grid-cols-3 h-[1000px] pt-20 overflow-hidden">
            <div className='max-h-[400px]' >
                <Image src="/about_imgs/black_half_coin.png" className='max-h-[250px] md:max-h-[870px]' width={1499} height={1562} alt="rupee coin" />
            </div>
            <div className='flex flex-col justify-center items-center text-center z-10'>
                <h3 className='lg:text-6xl'>Gold was always trusted.</h3>
                <h1 className='lg:text-8xl'>The Old Way Was Complicated</h1>
            </div>
            <div className='' >
                <Image src="/about_imgs/half_rupee_coin.jpg" width={3268} height={1626} alt="rupee coin" />
            </div>
        </div>
        {/* <div className="border-2 border-black h-1"></div> */}
    </div>
  )
}

export default AboutSecondSection