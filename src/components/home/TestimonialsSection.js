"use client"

import { gilroy } from '@/lib/font'
import React, { useEffect, useState } from 'react'
import TestimonialCard from '../TestimonialCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { API_BASE_URL } from '@/config';
import axios from 'axios';

const TestimonialsSection = () => {

    const [reviewsData, setReviewsData] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);
    
    const fetchReviews = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/testimonials`);
            setReviewsData(res.data);
        }
        catch (error) {
            console.error("Error fetching reviews:", error);
        }
    }
    const reviews = [
        {
            name: "Subramanyamraj",
            profession: "Engineer",
            image_url: "/home_imgs/review_2.png",
            message: "Superb Experience! Buying digital gold online was never this easy. Highly recommend!"
        },
        {
            name: "Dr.AishwaryaH",
            profession: "Doctor",
            image_url: "/home_imgs/review_1.png",
            message: "Haatak makes gold investment effortless and secure! Started my journey with just ₹10, and I’m already on my way to growing my wealth hassle-free. With real-time gold prices, seamless buy/sell options, and SafeGold-backed security, it’s the perfect platform for smart savings. Whether you’re planning for the future or looking for a trusted investment, Haatak is a game-changer! Highly recommended!"
        },
        {
            name: "Vinnay Anantharaamu",
            profession: "Doctor",
            image_url: "/home_imgs/review_1.png",
            message: "Haatak is a brilliant idea. Flexibility to buy and sell gold anytime at real time prices and them monetization of gold assets for interest is getting the best of both the world's. Just signed up. Looking forward for more daily savings."
        },
        // {
        //     name: "Ankita Bera",
        //     profession: "Doctor",
        //     image_url: "/home_imgs/review_1.png",
        //     message: "Lorem ipsum dolor sit amet consectetur. Massa sapien tincidunt faucibus gravida ullamcorper pulvinar. Auctor varius ultrices et purus id pellentesque velit maecenas euismod."
        // },
        // {
        //     name: "Tony Stark",
        //     profession: "Engineer",
        //     image_url: "/home_imgs/review_2.png",
        //     message: "Lorem ipsum dolor sit amet consectetur. Massa sapien tincidunt faucibus gravida ullamcorper pulvinar. Auctor varius ultrices et purus id pellentesque velit maecenas euismod."
        // },
        // {
        //     name: "John Smith",
        //     profession: "Professional Weight Lifter",
        //     image_url: "/home_imgs/review_1.png",
        //     message: "Lorem ipsum dolor sit amet consectetur. Massa sapien tincidunt faucibus gravida ullamcorper pulvinar. Auctor varius ultrices et purus id pellentesque velit maecenas euismod."
        // },
    ]

  return (
    <div className='w-full bg-[url(/home_imgs/testimonial_bg.webp)] bg-cover bg-center'>
        <div className="bg-[#FFE0BFCC] flex flex-col justify-center items-center text-center pt-20 pb-24 px-4 md:px-8">
            <h5 className={`${gilroy.className} text-2xl md:text-4xl text-[#2E0A49]`}>Real users. Real stories. See how Haatak is helping people build wealth with confidence.</h5>
            <h2 className='text-6xl md:text-8xl font-medium text-[#2E0A49] pt-4 md:pt-6'>Trusted by Many. Growing Together.</h2>
            
            <Carousel 
                opts={{ 
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-6xl mt-12"
            >
                <CarouselContent className="-ml-4">
                    {reviewsData.map((review, index) => (
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