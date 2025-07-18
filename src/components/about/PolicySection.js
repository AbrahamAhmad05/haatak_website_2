import { gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function PolicySection() {
    return (
        <div className='h-auto w-full text-[#2E0A49] py-12 md:py-24'>
            <h2 className='text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight text-center'>Built on Trust. <br /> Built for You.</h2>
            <h5 className={`${gilroy_semibold.className} text-center text-3xl`}>Secure Gold Ownership, Made Effortless.</h5>

            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-20 mt-16 px-6 md:px-16">
                <PolicyCard image='/about_imgs/vault_img.png' title="RBI‑regulated gold vaulting" />
                <PolicyCard image='/about_imgs/iso_certifies.png' title="End‑to‑end encryption (ISO‑grade)" />
                <PolicyCard image='/about_imgs/transparent_operations.png' title="Clear fees, no surprises" />
            </div>
        </div>
    )
}

const PolicyCard = ({ image, title }) => {
    return (
        <div className="max-w-4xl h-[300px] md:h-[500px] 2xl:h-[600px] 
                    [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:h-[400px]
                    [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:w-[250px]
                     flex flex-col justify-between bg-[radial-gradient(circle_at_bottom,#EDB669_0%,_transparent_70%)] border-[2px] border-[#E39A35] shadow-2xl relative">
            {/* Title - Aligned to top */}
            <div className="pt-4 px-4 md:px-4 lg:px-4 text-center">
                <h6 className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2E0A49]`}>
                    {title}
                </h6>
            </div>

            {/* Image - Aligned to bottom */}
            <div className="flex items-end justify-center flex-grow pb-4">
                <Image
                    src={image}
                    width={530}
                    height={400}
                    alt='step icon'
                    className="object-contain w-[auto] max-h-[200px] md:max-h-[300px] lg:max-h-[400px] xl:max-h-[500px]"
                />
            </div>
        </div>
    )
}

export default PolicySection