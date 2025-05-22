// TestimonialsSection.tsx
import { gilroy } from '@/lib/font'
import React from 'react'
import TestimonialCard from '../TestimonialCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const TestimonialsSection = () => {
    const reviews = [
        {
            name: "Ankita Bera",
            profession: "Doctor",
            image_url: "/home_imgs/review_1.png",
            message: "Lorem ipsum dolor sit amet consectetur. Massa sapien tincidunt faucibus gravida ullamcorper pulvinar. Auctor varius ultrices et purus id pellentesque velit maecenas euismod."
        },
        {
            name: "Tony Stark",
            profession: "Engineer",
            image_url: "/home_imgs/review_2.png",
            message: "Lorem ipsum dolor sit amet consectetur. Massa sapien tincidunt faucibus gravida ullamcorper pulvinar. Auctor varius ultrices et purus id pellentesque velit maecenas euismod."
        },
        {
            name: "John Smith",
            profession: "Professional Weight Lifter",
            image_url: "/home_imgs/review_1.png",
            message: "Lorem ipsum dolor sit amet consectetur. Massa sapien tincidunt faucibus gravida ullamcorper pulvinar. Auctor varius ultrices et purus id pellentesque velit maecenas euismod."
        },
        {
            name: "Ankita Bera",
            profession: "Doctor",
            image_url: "/home_imgs/review_1.png",
            message: "Lorem ipsum dolor sit amet consectetur. Massa sapien tincidunt faucibus gravida ullamcorper pulvinar. Auctor varius ultrices et purus id pellentesque velit maecenas euismod."
        },
        {
            name: "Tony Stark",
            profession: "Engineer",
            image_url: "/home_imgs/review_2.png",
            message: "Lorem ipsum dolor sit amet consectetur. Massa sapien tincidunt faucibus gravida ullamcorper pulvinar. Auctor varius ultrices et purus id pellentesque velit maecenas euismod."
        },
        {
            name: "John Smith",
            profession: "Professional Weight Lifter",
            image_url: "/home_imgs/review_1.png",
            message: "Lorem ipsum dolor sit amet consectetur. Massa sapien tincidunt faucibus gravida ullamcorper pulvinar. Auctor varius ultrices et purus id pellentesque velit maecenas euismod."
        },
    ]

  return (
    <div className='w-full bg-[url(/home_imgs/testimonial_bg.png)] bg-cover bg-center'>
        <div className="bg-[#FFE0BFCC] flex flex-col justify-center items-center text-center pt-20 pb-24 px-4 md:px-8">
            <h5 className={`${gilroy.className} text-3xl text-[#2E0A49]`}>Did you know?</h5>
            <h2 className='text-4xl md:text-6xl font-bold text-[#2E0A49] pt-4 md:pt-6'>They talk about us!</h2>
            
            <Carousel 
                opts={{ 
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-6xl mt-12"
            >
                <CarouselContent className="-ml-4">
                    {reviews.map((review, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <TestimonialCard review={review} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
                {/* Navigation Arrows */}
                <div className="hidden md:flex gap-4 mt-8">
                    <CarouselPrevious className="static translate-x-0 translate-y-0 size-12 bg-white/80 hover:bg-white" />
                    <CarouselNext className="static translate-x-0 translate-y-0 size-12 bg-white/80 hover:bg-white" />
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default TestimonialsSection