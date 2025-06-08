import { montserrat, original } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function AboutSecondSection() {
  return (
    <div className={`${original.className} py-8 md:h-screen bg-[url(/about_imgs/second_section_bg.png)] bg-cover 
    bg-no-repeat text-[#2E0A49] my-4 md:my-10 
    [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:h-[50vh] 
    [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:my-4 
    [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:py-6`}>

      <div className="md:h-screen [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:h-auto flex items-center justify-center relative overflow-hidden px-4">
        {/* Left Coin */}
        <div className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 
          w-[230px] h-[230px] md:w-[450px] md:h-[400px] lg:w-[650px] lg:h-[600px] 
          transition-opacity duration-300 ">
          <Image
            src="/about_imgs/dark_coin.png"
            layout="fill"
            objectFit="contain"
            alt="dark coin"
            className="animate-float"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center max-w-xs sm:max-w-xl md:max-w-4xl space-y-6 md:space-y-10 py-6 md:py-10 [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:px-16 [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:py-2">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal md:leading-snug">
            Gold was always trusted.
          </h3>
          <h2 className="px-4 text-4xl md:text-6xl lg:text-8xl font-bold leading-tight 
                       text-balance break-words">
            The Old Way Was Complicated
          </h2>
          <h5 className={`${montserrat.className} text-xl md:text-3xl lg:text-4xl 
                        font-medium max-w-prose mx-auto leading-snug`}>
            But buying it? Complex. Time-consuming. Paper-heavy. We said — enough.
          </h5>
        </div>

        {/* Right Coin */}
        <div className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 
          w-[230px] h-[230px] md:w-[450px] md:h-[400px] lg:w-[650px] lg:h-[600px] 
          transition-opacity duration-300">
          <Image
            src="/about_imgs/light_coin.png"
            layout="fill"
            objectFit="contain"
            alt="light coin"
            className="animate-float-delayed"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutSecondSection