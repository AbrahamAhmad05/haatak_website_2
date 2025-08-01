import { gilroy, gotham, mont } from '@/lib/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DownloadAppSection() {
    return (
        <div className='h-auto lg:h-[135vh] py-10
        [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:h-auto
        [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:bg-none
        [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:flex-col
        [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:justify-center
         md:bg-[url(/how_it_work_imgs/download_app.webp)] bg-no-repeat md:bg-cover flex flex-col md:flex-row md:justify-between text-[#2E0A49]'>
            {/* Mobile-only image */}
            <Image
                src="/how_it_work_imgs/download_app.webp"
                width={900}
                height={900}
                className="block md:hidden 
                [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:block
                w-full h-[40vh] object-contain object-top"
                alt="Gold App"
            />

            {/* Text Content */}
            <div className='max-w-4xl text-center px-5 md:px-16 md:py-36 space-y-1 md:space-y-2 lg:space-y-3'>
                <h5 className={` text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl`}>
                    Start Saving in Seconds
                </h5>
                <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-bold leading-tight">
                    No paperwork.<br/> No waiting.<br/> Just possibilities.
                </h2>
                <p className={`[@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:px-2 [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:w-full text-lg pt-2 font-medium mb-8  ${gotham.className}`}>
                    Download the Haatak app and begin your journey toward smart, secure gold savings — anytime, anywhere. It’s quick, seamless, and built for every individual ready to grow wealth the modern way.
                </p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-stretch px-4">
                    {/* Apple Button */}
                    <Link href='https://apps.apple.com/in/app/haatak/id6670161811' target='_blank' className='w-full md:max-w-md'>
                    <div className="w-full md:max-w-md bg-gradient-to-br from-[#F3C862] via-[#FFE196] to-[#D99A26] p-1 rounded-lg mx-auto">
                        <div className="w-full flex items-center justify-between bg-gradient-to-br from-[#E7CB86] via-[#FFF4DF] to-[#E7CB86] p-3 md:p-4 rounded-[6px] gap-3 md:gap-6">
                            <Image
                                src="/how_it_work_imgs/apple_icon.png"
                                width={48}
                                height={48}
                                className="w-12 h-12 md:w-16 md:h-16"
                                alt='Apple logo'
                            />
                            <div className='text-start flex-1'>
                                <p className={`${mont.className} font-semibold text-sm md:text-xl`}>available on</p>
                                <h6 className={`${gilroy.className} text-lg md:text-3xl font-bold`}>App store</h6>
                            </div>
                        </div>
                    </div>
                    </Link>

                    {/* Android Button */}
                    <Link href='https://play.google.com/store/apps/details?id=com.copuchin.jarapp&hl=en_IN' target='_blank' className='w-full md:max-w-md'>
                    <div className="w-full md:max-w-md bg-gradient-to-br from-[#F3C862] via-[#FFE196] to-[#D99A26] p-1 rounded-lg mx-auto">
                        <div className="w-full flex items-center justify-between bg-gradient-to-br from-[#E7CB86] via-[#FFF4DF] to-[#E7CB86] p-3 md:p-4 rounded-[6px] gap-3 md:gap-6">
                            <Image
                                src="/how_it_work_imgs/android_play.png"
                                width={48}
                                height={48}
                                className="w-12 h-12 md:w-16 md:h-16"
                                alt='Play Store logo'
                            />
                            <div className='text-start flex-1'>
                                <p className={`${mont.className} font-semibold text-sm md:text-xl`}>get it on</p>
                                <h6 className={`${gilroy.className} text-lg md:text-3xl font-bold`}>Google Play</h6>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DownloadAppSection