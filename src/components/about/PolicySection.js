import { gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function PolicySection() {
    return (
        <div className='h-auto w-full md:h-[135vh] text-[#2E0A49]'>
            <h2 className='text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight text-center'>Built on Trust. <br /> Backed by Tech.</h2>
            <h5 className={`${gilroy_semibold.className} text-center text-3xl`}>Your gold is yours. We just make it easier to own.</h5>

            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-16 lg:gap-20 mt-28 px-8 md:px-16">
                <PolicyCard image='/about_imgs/vault_img.png' title="RBI-compliant vaults" />
                <PolicyCard image='/about_imgs/ISO_security_img.png' title="ISO-certified security" />
                <PolicyCard image='/about_imgs/transparent_operations.png' title="Transparent operations" />
            </div>
        </div>
    )
}

const PolicyCard = ({ image, title }) => {
    return (
        <div className="w-full max-w-4xl h-[400px] md:h-[500px] 2xl:h-[600px] flex flex-col justify-between bg-[radial-gradient(circle_at_bottom,#EDB669_0%,_transparent_70%)] border-[2px] border-[#E39A35] shadow-2xl relative">
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
                    width={513}
                    height={438}
                    alt='step icon'
                    className="object-contain xl:max-h-[80%] w-auto"
                />
            </div>
        </div>
    )
}

export default PolicySection