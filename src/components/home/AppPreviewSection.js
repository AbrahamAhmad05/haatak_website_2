"use client";

import { gilroy, gilroy_semibold } from '@/lib/font';
import Image from 'next/image';
import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const AppPreviewSection = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const cardsRef = useRef([]);
    const containerRef = useRef(null);

    const mockups = [
        { id: 0, src: "/home_imgs/app_mockup_2.png", width: 550, height: 805 },
        { id: 1, src: "/home_imgs/app_mockup_1.png", width: 423, height: 620 },
        { id: 2, src: "/home_imgs/app_mockup_3.png", width: 423, height: 620 },
    ];

    useLayoutEffect(() => {
        gsap.context(() => {
            const animateCards = () => {
                mockups.forEach((_, index) => {
                    const card = cardsRef.current[index];
                    if (!card) return;

                    const position = (index - activeIndex + mockups.length) % mockups.length;
                    const isMobile = window.innerWidth < 768;

                    let xPosition = 0;
                    let scale = 1;
                    let opacity = 1;
                    let zIndex = 20;

                    switch(position) {
                        case 0: // Active card
                            xPosition = 0;
                            scale = 1;
                            opacity = 1;
                            zIndex = 20;
                            break;
                        case 1: // Next card
                            xPosition = isMobile ? 100 : 80;
                            scale = 0.8;
                            opacity = 0.8;
                            zIndex = 10;
                            break;
                        case 2: // Previous card
                            xPosition = isMobile ? -100 : -80;
                            scale = 0.8;
                            opacity = 0.8;
                            zIndex = 10;
                            break;
                    }

                    gsap.to(card, {
                        x: `${xPosition}%`,
                        scale: scale,
                        opacity: opacity,
                        zIndex: zIndex,
                        duration: 0.6,
                        ease: 'power3.out',
                        overwrite: true
                    });
                });
            };

            animateCards();
            window.addEventListener('resize', animateCards);
            return () => window.removeEventListener('resize', animateCards);
        }, containerRef);
    }, [activeIndex]);

    return (
        <div className='mt-64 flex flex-col justify-center items-center w-full px-4 text-center'>
            <h3 className={`text-[#2E0A49] ${gilroy.className} text-4xl md:text-6xl font-[400]`}>
                Designed to Feel Premium
            </h3>
            <h2 className='text-6xl md:text-8xl font-bold text-[#2E0A49] pt-4 md:pt-6'>
                Because finance should feel fine.
            </h2>
            <h6 className={`text-lg md:text-2xl text-[#2E0A49] font-bold pt-3 md:pt-6 ${gilroy_semibold.className}`}>
                A clutter-free, calming app interface that makes you want to come back — even if it&apos;s just to admire it.
            </h6>

            <div 
                ref={containerRef}
                className="relative w-[80%] md:max-w-6xl mx-auto mt-8 md:mt-12 h-[500px] md:h-[700px]"
            >
                {mockups.map((mockup, index) => (
                    <div
                        key={mockup.id}
                        ref={el => cardsRef.current[index] = el}
                        className="absolute top-1/9 left-1/3 -translate-x-1/2 -translate-y-1/2 cursor-pointer w-[40%] md:w-[35%] transition-transform duration-300"
                        onClick={() => setActiveIndex(index)}
                    >
                        <Image
                            src={mockup.src}
                            width={mockup.width}
                            height={mockup.height}
                            alt='app preview'
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppPreviewSection;