import { gotham } from '@/lib/font'
import React from 'react'

const AboutHero = () => {
    return (
        <div className='bg-[url(/about_imgs/hero.png)] h-[50vh] sm:h-screen  bg-contain bg-no-repeat md:bg-cover flex justify-center items-center text-[#2E0A49]'>
            <div className="flex pt-32 md:pt-80 2xl:mt-20 px-4 text-center w-2xl">
                <h6 className={`${gotham.className}  capitalize text-3xl font-medium `}>We're not just building a gold app. We're building a habit of wealth.</h6>
            </div>
        </div>
    )
}

export default AboutHero