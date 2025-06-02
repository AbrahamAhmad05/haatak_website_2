import ExpertAnalysis from '@/components/blogs/ExpertAnalysis'
import MarketBlogs from '@/components/blogs/MarketBlogs'
import { gotham } from '@/lib/font'
import React from 'react'

function Blogs() {
    return (
        <main>
        <section className="relative h-[80vh] min-w-full flex items-center">
            {/* Content */}
            <div className=" h-full container relative flex justify-center items-center z-10 mx-auto px-4 md:px-8 text-[#2E0A49] gap-4">
                <div className="flex flex-col text-center justify-center items-center">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-[700] mb-6 uppercase">
                        Blog
                    </h1>
                    <h6 className={`${gotham.className}  capitalize text-xl md:3xl font-medium md:px-72`}>Discover insights, tips, and updates on digital gold savings, smart investing, and the Haatak way to grow your wealth—₹1 at a time.</h6>
                    {/* <div >
                        <ul className={`flex text-xl md:text-3xl font-medium mb-8 md:px-48 gap-4 md:gap-8 ${gotham.className}`}>
                            <li >
                                Instagram
                            </li>
                            <li >
                                Twitter
                            </li>
                            <li >
                                Facebook
                            </li>
                        </ul>
                    </div> */}

                </div>
            </div>
        </section>

        <MarketBlogs />
        <ExpertAnalysis />

        </main>
    )
}

export default Blogs