"use client"
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

const NetworkGraph = () => {
    const graphRef = useRef(null)
    const arrowRef = useRef(null)
    const containerRef = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const bars = gsap.utils.toArray('.bar')
        const arrow = arrowRef.current

        // Set initial positions
        gsap.set(bars, { height: 10 })
        gsap.set(arrowRef.current, {
            scale: 0,
            transformOrigin: "0% 100%", // Bottom-left corner (x: 0%, y: 100%)
        });

        // Create timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: graphRef.current,
                start: 'bottom bottom',
                toggleActions: 'play none none reverse'
            }
        })

        // Bar animations
        tl.to(bars, {
            height: (i) => `${(i + 1) * 20}%`,
            stagger: 0.2,
            ease: 'power4.out',
            duration: 1
        })

        // Arrow animation (scale up in place)
        tl.to(arrowRef.current, {
            scale: 2, // Or different X/Y scale values
            duration: 2,
            ease: "power2.out"
        }, "-=0.5");

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div ref={containerRef} className="min-h-screen flex items-start xl:items-center justify-start">
            <div ref={graphRef} className="relative h-[400px] w-full max-w-4xl px-8 flex items-end gap-8 justify-center">
                {/* Anchored Arrow */}


                {/* Bars with network connections */}
                <div className="relative h-full w-full flex items-end justify-end gap-8">
                    <div
                        ref={arrowRef}
                        className="absolute bottom-25 left-44  2xl:left-80  pointer-events-none"
                        style={{
                            transformOrigin: '0% 200%', // Reinforce bottom-left origin
                            transform: "translateZ(0)" // Enable GPU acceleration
                        }}
                    >
                        <Image
                            src="/home_imgs/animation_arrow.png"
                            width={200}
                            height={200}
                            alt="arrow"
                            className="w-[200px] h-[200px] origin-[0%_200%]"
                            style={{
                                transform: "translateZ(0)", // GPU acceleration
                                backfaceVisibility: "hidden" // Prevent flickering
                            }}
                        />
                    </div>
                    {/* Bars */}
                    <div className="bar w-16 bg-gradient-to-b from-[#EDB669] via-[#F6DEA2] to-[#F6B02F] rounded-xl relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-cyan-400 rounded-full network-node opacity-0" />
                    </div>
                    <div className="bar w-16 bg-gradient-to-b from-[#EDB669] via-[#F6DEA2] to-[#F6B02F] rounded-xl relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-fuchsia-500 rounded-full network-node opacity-0" />
                    </div>
                    <div className="bar w-16 bg-gradient-to-b from-[#EDB669] via-[#F6DEA2] to-[#F6B02F] rounded-xl relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full network-node opacity-0" />
                    </div>
                    <div className="bar w-16 bg-gradient-to-b from-[#EDB669] via-[#F6DEA2] to-[#F6B02F] rounded-xl relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full network-node opacity-0" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NetworkGraph