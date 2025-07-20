import { gilroy_semibold } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function PolicySection() {
    return (
        <div className='h-auto w-full text-[#2E0A49] py-2 md:py-24'>
            <h2 className='text-4xl md:text-7xl 2xl:text-8xl font-bold leading-tight text-center'>Built on Trust. <br /> Built for You.</h2>
            <h5 className={`${gilroy_semibold.className} text-center text-2xl md:text-3xl`}>Secure Gold Ownership, Made Effortless.</h5>

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
        <div className="w-[250px] h-[350px] md:w-[300px] md:h-[350px] lg:h-[450px] xl:w-[350px] xl:h-[500px] 
                        flex flex-col justify-between 
                        bg-[radial-gradient(circle_at_bottom,#EDB669_0%,_transparent_70%)] 
                        border-2 border-[#E39A35] shadow-2xl rounded-2xl overflow-hidden">
            
            {/* Title Section */}
            <div className="pt-4 px-3 text-center">
                <h6 className="text-xl md:text-2xl xl:text-3xl font-bold text-[#2E0A49] leading-snug">
                    {title}
                </h6>
            </div>

            {/* Image Section */}
            <div className="flex-grow flex items-end justify-center pb-4">
                <Image
                    src={image}
                    width={300}
                    height={250}
                    alt='step icon'
                    className="object-contain max-h-[180px] md:max-h-[250px] xl:max-h-[300px]"
                />
            </div>
        </div>
    );
};

export default PolicySection