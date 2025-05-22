// TestimonialCard.tsx
import Image from 'next/image'
import React from 'react'
import { montserrat } from '@/lib/font'

const TestimonialCard = ({ review }) => {
  return (
    <div className={`${montserrat.className} flex flex-col gap-4 p-6 h-full`}>
        <div className={`flex gap-4 items-start`}>
            <div className="relative min-w-[74px] min-h-[74px]">
                <Image 
                    src={review.image_url} 
                    width={74} 
                    height={74} 
                    alt={review.name}
                    className="rounded-full object-cover"
                />
            </div>
            <div className='text-start'>
                <h6 className="text-xl font-bold text-[#2E0A49]">{review.name}</h6>
                <p className='text-[#2E0A49]/80'>{review.profession}</p>
            </div>
        </div>
        
        <div className='text-start space-y-4'>
            <Image 
                src="/home_imgs/quotes.png" 
                width={40} 
                height={40} 
                alt='quotes' 
                className='text-[#2E0A49]'
            />
            <p className='text-[#2E0A49]/90 text-base leading-relaxed'>
                {review.message}
            </p>
        </div>
    </div>
  )
}

export default TestimonialCard