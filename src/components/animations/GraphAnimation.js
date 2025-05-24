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
        gsap.set(bars, { height: 0 })
        gsap.set(arrowRef.current, {
            scale: 1,
            transformOrigin: 'right bottom' // Matches Tailwind's origin-bottom-right
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
            height: (i) => `${(i + 1) * 25}%`,
            stagger: 0.2,
            ease: 'power4.out',
            duration: 1
        })

        // Arrow animation (scale up in place)
        tl.to(arrowRef.current, {
            opacity: 1,
            scale: 2, // This will scale both width and height by 150%
            duration: 2,
            ease: 'power2.out'
        }, '-=0.8');

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div ref={containerRef} className="min-h-screen flex items-center justify-center">
            <div ref={graphRef} className="relative h-[400px] w-full max-w-4xl px-8 flex items-end gap-8 justify-center">
                {/* Anchored Arrow */}
                <div
                    ref={arrowRef}
                    className="absolute bottom-20 left-0 pointer-events-none"
                    style={{ transformOrigin: 'left top' }} // Reinforce transform origin
                >
                    <Image
                        src="/home_imgs/animation_arrow.png"
                        width={200}
                        height={200}
                        alt='arrow'
                        className="w-[200px] h-[200px] origin-bottom-right" // Add origin here
                    />
                </div>

                {/* Bars with network connections */}
                <div className="relative h-full w-full flex items-end justify-center gap-8">
                    {/* Bars */}
                    <div className="bar w-16 bg-gradient-to-t from-blue-400 to-cyan-500 rounded-t-xl relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-cyan-400 rounded-full network-node opacity-0" />
                    </div>
                    <div className="bar w-16 bg-gradient-to-t from-purple-400 to-fuchsia-600 rounded-t-xl relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-fuchsia-500 rounded-full network-node opacity-0" />
                    </div>
                    <div className="bar w-16 bg-gradient-to-t from-green-400 to-emerald-600 rounded-t-xl relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full network-node opacity-0" />
                    </div>
                    <div className="bar w-16 bg-gradient-to-t from-orange-400 to-red-600 rounded-t-xl relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full network-node opacity-0" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NetworkGraph