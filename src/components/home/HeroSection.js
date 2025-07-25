import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { gilroy_semibold, gotham } from '@/lib/font'

/**
 * The `HeroSection` function returns a JSX component for a hero section with a background image,
 * content including a title and description, and a feature bar with icons and text.
 * @returns The `HeroSection` component is being returned. It consists of a section element with a
 * background image and gradient overlay, followed by content including a heading, paragraph, and a
 * feature bar with security, gold, and purity features displayed using icons and text.
 */
const HeroSection = () => {
    return (
        <section className="relative min-h-screen min-w-full md:min-h-screen flex items-center">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/home_imgs/haatak_hero_bg.webp')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD8AE00] via-[#FFD8AE] to-[#FFD8AE00]" />
            </div>

            {/* Content */}
            <div className="container relative flex justify-center items-center z-10 mx-auto px-2 sm:px-4 md:px-8 text-[#2E0A49] pt-16 md:pt-32">
                <div className="w-full md:max-w-6xl flex flex-col text-center justify-center items-center">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-[700] md:mb-6 leading-normal">
                        Your Trusted Choice for Digital Gold Savings
                    </h1>
                    <p className={`text-lg md:text-2xl text-[#2E0A49] font-bold ${gilroy_semibold.className}`}>
                        Start Small. Grow Big. Stay Golden. <br/>Build your future with 24K digital gold — safe, simple, and just a tap away.
                    </p>
                    
                    <div className={`${gotham.className} md:w-2xl my-4 md:my-8 py-3 md:py-1 bg-[#FFE4BF]`}>
                        <div className="flex flex-col md:flex-row justify-center items-center px-4">
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
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