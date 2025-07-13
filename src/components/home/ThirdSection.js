import React from 'react'
import { gilroy, gilroy_semibold } from '@/lib/font'
import GraphAnimation from '../animations/GraphAnimation'

const ThirdSection = () => {
  return (
    <div className='flex flex-col md:flex-row max-md:h-[80vh] max-lg:h-screen lg:h-full xl:h-screen items-center justify-center md:justify-between px-4 md:pl-8 lg:pl-16 py-10 md:py-20 bg-gradient-to-r from-[#FFD8AE00] from-10% via-[#FFD8AE] via-20% to-[#FFD8AE]/10 to-50%'>

      {/* Text Container */}
      <div className='w-full md:w-1/2 mb-10 md:mb-0 md:pr-8 z-10'>
        <h3 className={`text-[#2E0A49] ${gilroy.className} text-3xl md:text-4xl lg:text-5xl font-normal`}>
          Set & Forget Savings
        </h3>
        <h2 className='text-5xl md:text-6xl lg:text-8xl 
                                  /* iPad Pro text sizing */
                                  [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:text-6xl
                                  [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:text-7xl
                                  font-bold text-[#2E0A49] pt-3 md:pt-5'>
          Save Gold Easily — Daily, Without Lifting a Finger
        </h2>
        <h6 className={`text-base md:text-xl text-[#2E0A49] font-bold pt-3 md:pt-5 ${gilroy_semibold.className}`}>
          Turn small steps into lasting wealth with automated 24K gold savings.
        </h6>
      </div>

      {/* Graph Container */}
      <div className='w-full md:w-1/2 h-[40vh] md:h-[50vh] flex items-center justify-center relative z-0'>
        <GraphAnimation />
      </div>
    </div>
  )
}

export default ThirdSection