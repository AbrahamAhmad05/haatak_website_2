import React from 'react'
import { gilroy, gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import NetworkGraph from '../animations/GraphAnimation'
// import AnimatedGraph from '../animations/GraphAnimation'

const ThirdSection = () => {
  return (
    <div className='grid grid-cols-2 relative min-h-screen flex-col md:flex-row justify-between px-6 md:px-14 py-20 bg-gradient-to-r from-[#FFD8AE00] from-10% via-[#FFD8AE] via-20% to-[#FFD8AE]/10 to-50%'>
      
        <div className='text-start w-[60vw]'>
            <h3 className={`text-[#2E0A49] ${gilroy.className} text-4xl md:text-5xl lg:text-6xl font-normal`}>Set & Forget Savings</h3>
            <h2 className='text-5xl md:text-7xl lg:text-8xl font-bold text-[#2E0A49] pt-4 md:pt-6'>Grow while you sleep.</h2>
            <h6 className={`text-lg md:text-2xl text-[#2E0A49] font-bold pt-3 md:pt-6 ${gilroy_semibold.className}`}>Automate daily gold savings and watch your wealth build — one digital gram at a time.</h6>
        </div>
        <div className=''>
            {/* <Image src="/home_imgs/third_section_anim.png" width={746} height={572} alt="graph Image" /> */}
            <NetworkGraph />
        </div>
    </div>
  )
}

export default ThirdSection