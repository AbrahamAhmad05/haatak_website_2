"use client"

import { gilroy_semibold, poppins } from '@/lib/font'
import { useState, useCallback } from 'react'
import BlogCard from './BlogCard'
import { ArrowDown, ChevronDown } from 'lucide-react'
import moment from 'moment'
import Link from 'next/link'

const MarketBlogs = ({ blogs }) => {
    const [visibleCount, setVisibleCount] = useState(6)

    const [blogsData, setBlogsData] = useState(blogs || []);
    // Sample data for blogs
    // const blogsData = [
    //     {
    //         id: 1,      
    //         title: "Bookurgold: The future of digital gold",
    //         imageUrl: "/blog_imgs/blog_1.png",
    //         releaseDate: "26 apr 2025",
    //         readingTime: "6 min"
    //     },
    //     {
    //         id: 2,
    //         title: "Bookurgold: The future of digital gold",
    //         imageUrl: "/blog_imgs/blog_2.png",
    //         releaseDate: "26 apr 2025",
    //         readingTime: "6 min"
    //     },
    //     {
    //         id: 3,
    //         title: "Bookurgold: The future of digital gold",
    //         imageUrl: "/blog_imgs/blog_3.png",
    //         releaseDate: "26 apr 2025",
    //         readingTime: "6 min"
    //     },
    //     {
    //         id: 4,
    //         title: "Bookurgold: The future of digital gold",
    //         imageUrl: "/blog_imgs/blog_4.png",
    //         releaseDate: "26 apr 2025",
    //         readingTime: "6 min"
    //     },
    //     {
    //         id: 5,
    //         title: "Bookurgold: The future of digital gold",
    //         imageUrl: "/blog_imgs/blog_5.png",
    //         releaseDate: "26 apr 2025",
    //         readingTime: "6 min"
    //     },
    //     {
    //         id: 6,
    //         title: "Bookurgold: The future of digital gold",
    //         imageUrl: "/blog_imgs/blog_6.png",
    //         releaseDate: "26 apr 2025",
    //         readingTime: "6 min"
    //     },
        
    // ]

    const loadMore = useCallback(() => {
        setVisibleCount(prev => Math.min(prev + 6, blogsData.length))
    }, [blogsData.length])

    return (
         <div className={`${poppins.className} w-full `}>
            <div className="container mx-auto px-4">
                {/* Title Section */}
                <div className={`${gilroy_semibold.className} text-center mb-12`}>
                    <h2 className='text-[#2E0A49] text-3xl md:text-5xl font-semibold'>
                        Stories of Wealth by Haatak
                    </h2>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6 pt-8">
                    {blogsData.map((blog) => (
                        // <Link key={blog.id} href={`/blogs/${blog.slug}`} className="group">
                        <div key={blog.id} >
                        <BlogCard
                            title={blog.content.title}
                            imageUrl={blog.content.image?.url}
                            releaseDate={moment(blog.date_created).format("MMM D, YYYY")}
                            readingTime={`${blog.content.read_time} min`}
                            slug={blog.slug}
                        />
                        </div>
                        // </Link>https://haatak.com/blogs/bookurgold-the-future-of-digital-gold-savings-is-here
                    ))}
                </div>
                {/* {visibleCount < blogsData.length && ( */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={loadMore}
                            className={`${gilroy_semibold.className} flex items-center gap-4 text-2xl px-8 py-3 transition-colors duration-300`}
                        >
                            View more
                            <ChevronDown />
                        </button>
                    </div>
                {/* )} */}
            </div>
        </div>
    )
}

export default MarketBlogs