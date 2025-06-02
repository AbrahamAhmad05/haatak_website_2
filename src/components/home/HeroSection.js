import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { gotham } from '@/lib/font'

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
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-[700] md:mb-6 ">
                        Crafted for <br />Your trustworthy
                    </h1>
                    <p className={`text-xl md:text-3xl font-medium md:px-48 ${gotham.className}`}>
                        Save, grow, and flex your wealth with 24K digital gold — all from one powerful app.
                    </p>
                    
                    {/* UPDATED FEATURE BAR - MOBILE OPTIMIZED */}
                    <div className={`${gotham.className} md:w-2xl my-8 py-3 md:py-1 bg-[#FFE4BF]`}>
                        <div className="flex flex-col md:flex-row justify-center items-center px-4">
                            <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-6">
                            {/* Feature 1 - Security */}
                            <div className='flex items-center gap-2'>
                                <Image
                                    src='/home_imgs/security_icon.png'
                                    width={50}
                                    height={50}
                                    alt='security icon'
                                    className='w-7 h-7 object-contain'
                                />
                                <p className="text-sm text-[#000000] md:text-base font-semibold uppercase">
                                    100% secure
                                </p>
                            </div>
                            
                            {/* Mobile Divider (shown only on mobile) */}
                            <div className="w-full h-[1px] bg-[#000000] md:hidden"></div>
                            
                            {/* Desktop Separator (shown only on desktop) */}
                            <span className="hidden md:inline text-lg md:text-xl font-semibold text-[#000000]">|</span>
                            
                            {/* Feature 2 - Gold */}
                            <div className='flex items-center gap-2'>
                                <Image
                                    src='/home_imgs/goldbar_icon.png'
                                    width={50}
                                    height={50}
                                    alt='gold bar icon'
                                    className='w-7 h-7 object-contain'
                                />
                                <p className="text-sm md:text-base font-semibold text-[#000000] uppercase">
                                    24k gold
                                </p>
                            </div>
                            
                            {/* Mobile Divider (shown only on mobile) */}
                            <div className="w-full h-[1px] bg-[#000000] md:hidden"></div>
                            
                            {/* Desktop Separator (shown only on desktop) */}
                            <span className="hidden md:inline text-lg md:text-xl font-semibold text-[#000000]">|</span>
                            
                            {/* Feature 3 - Purity */}
                            <div className='flex items-center justify-start gap-2'>
                                <Image
                                    src='/home_imgs/purity_icon.png'
                                    width={50}
                                    height={50}
                                    alt='purity icon'
                                    className='w-7 h-7 object-contain'
                                />
                                <p className="text-sm md:text-base font-semibold text-[#000000] uppercase">
                                    99.95% pure gold
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection