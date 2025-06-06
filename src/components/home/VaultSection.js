"use client"

import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gilroy, gilroy_semibold } from '@/lib/font';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSection() {
    const sectionRef = useRef(null);
    const imageColRef = useRef(null);
    const textColRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        // Check for mobile initially
        const checkMobile = () => window.innerWidth < 768;
        setIsMobile(checkMobile());

        const ctx = gsap.context(() => {
            if (!isMobile) {
                // Desktop animations
                gsap.fromTo(imageColRef.current,
                    { width: '65%' },
                    {
                        width: '35%',
                        duration: 2.5,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top center',
                            end: 'bottom center',
                            toggleActions: "play reverse play reverse",
                        }
                    }
                );

                gsap.fromTo(textColRef.current,
                    { width: '35%' },
                    {
                        width: '65%',
                        duration: 2.5,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top center',
                            end: 'bottom center',
                            toggleActions: "play reverse play reverse",
                        }
                    }
                );
            }
        }, sectionRef);

        // Handle window resize
        const handleResize = () => {
            setIsMobile(checkMobile());
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            ctx.revert();
        };
    }, [isMobile]);

    return (
        <section ref={sectionRef} className="flex flex-col-reverse md:flex-row h-full md:h-screen [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:h-[50vh] w-full overflow-hidden">
            {/* Text Column - full width on mobile */}
            <div ref={textColRef} className="w-full md:w-[35%] h-[40vh] md:h-full px-8 flex flex-col justify-center bg-gray-100 order-2 md:order-1">
                <h5 className={`${gilroy.className} text-xl md:text-3xl bg-gradient-to-br from-[#E39A35] via-[#E39A35] to-[#E39A35] bg-clip-text text-transparent`}>
                    Vault-Grade Security
                </h5>

                <h2 className="text-4xl md:text-7xl bg-gradient-to-br from-[#E39A35] via-[#E39A35] to-[#E39A35] bg-clip-text text-transparent my-4">
                    Your Gold Is Safer Than Selfies.
                </h2>

                <h6 className={`text-base md:text-2xl [background-image:linear-gradient(to_bottom_right,#E39A35,#E39A35,#E39A35)] bg-clip-text text-transparent ${gilroy_semibold.className}`}>
                    Stored in RBI-compliant vaults. Fully insured. End-to-end encrypted. You own it. We protect it.
                </h6>
            </div>

            {/* Image Column - full width on mobile */}
            <div ref={imageColRef} className="w-full md:w-[60%] h-[40vh] md:h-full overflow-hidden order-1 md:order-2">
                <Image
                    src="/home_imgs/vault_img.png"
                    width={1920}
                    height={938}
                    alt="Vault security"
                    className="w-full h-full object-cover"
                    priority
                />
            </div>
        </section>
    );
}