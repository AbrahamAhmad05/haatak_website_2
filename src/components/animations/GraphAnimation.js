"use client"
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

const GraphAnimation = () => {
    const graphRef = useRef(null)
    const arrowRef = useRef(null)
    const containerRef = useRef(null)
    const firstBarRef = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const bars = gsap.utils.toArray('.bar')
        const arrow = arrowRef.current

        // Set initial positions
        gsap.set(bars, { height: 10 })
        gsap.set(arrowRef.current, {
            scale: 0,
            transformOrigin: "0% 100%",
        });

        // Create timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: graphRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                markers: false
            }
        })

        // Bar animations
        tl.to(bars, {
            height: (i) => `${(i + 1) * 22}%`,
            stagger: 0.2,
            ease: 'power4.out',
            duration: 1
        })

        // Arrow animation
        tl.to(arrowRef.current, {
            scale: 1.8,
            duration: 1,
            ease: "power2.out"
        }, "-=0.5");

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div ref={containerRef} className="w-full h-full flex items-center justify-center">
            <div ref={graphRef} className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] w-full md:max-w-4xl  md:px-8 xl:pr-24 [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:h-[30vh]">
                {/* Graph container with arrow and bars */}
                <div className="relative h-full w-full flex items-end justify-start">
                    {/* Arrow positioned relative to the first bar */}
                    <div
                        ref={arrowRef}
                        className="absolute bottom-1/3 left-[33%] md:left-[50%] lg:left-[40%] 2xl:left-[55%] transform -translate-x-[80%] translate-y-[15%] md:translate-y-[7%] pointer-events-none [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:left-[25%]"
                        style={{
                            transformOrigin: '0% 100%',
                            transform: "translateZ(0)"
                        }}
                    >
                        <Image
                            src="/home_imgs/animation_arrow.png"
                            width={400}
                            height={400}
                            alt="arrow"
                            className="w-[160px] h-[120px] md:w-[180px] md:h-[150px] lg:w-[240px] lg:h-[180px]"
                        />
                    </div>

                    {/* Bars container */}
                    <div className="h-full w-full flex items-end justify-center md:items-end md:justify-end gap-6 md:gap-8 lg:gap-12">
                        {/* First bar with ref */}
                        <div
                            ref={firstBarRef}
                            className="bar w-12 md:w-14 lg:w-20 bg-gradient-to-b from-[#EDB669] via-[#F6DEA2] to-[#F6B02F] rounded-xl relative"
                        >
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-cyan-400 rounded-full network-node opacity-0" />
                        </div>

                        {/* Other bars */}
                        <div className="bar w-12 md:w-14 lg:w-20 bg-gradient-to-b from-[#EDB669] via-[#F6DEA2] to-[#F6B02F] rounded-xl relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-fuchsia-500 rounded-full network-node opacity-0" />
                        </div>
                        <div className="bar w-12 md:w-14 lg:w-20 bg-gradient-to-b from-[#EDB669] via-[#F6DEA2] to-[#F6B02F] rounded-xl relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-emerald-500 rounded-full network-node opacity-0" />
                        </div>
                        <div className="bar w-12 md:w-14 lg:w-20 bg-gradient-to-b from-[#EDB669] via-[#F6DEA2] to-[#F6B02F] rounded-xl relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-red-500 rounded-full network-node opacity-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphAnimation