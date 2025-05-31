import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button' // Assuming you have a Button component
import localFont from 'next/font/local'
import { gotham } from '@/lib/font'

// const gotham = localFont({
//   src: '../../styles/fonts/gotham/gotham-font/GOTHAM-MEDIUM.ttf',
//   variable: "--font-gotham",
//   weight: '700'
// })

const HeroSection = () => {
    return (
        <section className="relative min-h-screen min-w-full md:min-h-screen flex items-center">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/home_imgs/haatak_hero_bg.webp')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD8AE00] via-[#FFD8AE] to-[#FFD8AE00]" />
            </div>

            {/* Content */}
            <div className="container relative flex justify-center items-center z-10 mx-auto px-4 md:px-8 text-[#2E0A49]">
                <div className="max-w-5xl flex flex-col text-center justify-center items-center">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-[700] mb-6 ">
                        Crafted for <br />Your trustworthy
                    </h1>
                    <p className={`text-xl md:text-3xl font-medium md:px-48 ${gotham.className}`}>
                        Save, grow, and flex your wealth with 24K digital gold — all from one powerful app.
                    </p>
                    {/* <div className="flex mb-8 md:px-48 bg-[#FFE4BF] justify-center items-center">
                        <div className="flex justify-center items-center">
                            <Image
                                src='/home_imgs/security_icon.png'
                                width={50}
                                height={50}
                                alt='security icon'
                                className='object-contain mr-2'
                            />
                            <p className="text-lg md:text-xl font-semibold">
                                100% secure
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default HeroSection
