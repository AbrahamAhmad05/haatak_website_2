"use client"

import { gilroy_semibold, poppins } from '@/lib/font'
import { useEffect, useState, useCallback } from 'react'
import BlogCard from './BlogCard'
import { ChevronDown } from 'lucide-react'
import { API_BASE_URL } from '@/config'
import axios from 'axios'
import Link from 'next/link'

const RelatedBlogs = ({ slug }) => {
    const [blogsData, setBlogsData] = useState([])
    const [visibleCount, setVisibleCount] = useState(6)
    const [loading, setLoading] = useState(true)

    const fetchRelatedBlogs = useCallback(async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${API_BASE_URL}/blogs/${slug}/related`)
            setBlogsData(res.data)
        } catch (err) {
            console.error('Error fetching related blogs:', err)
        } finally {
            setLoading(false)
        }
    }, [slug])

    useEffect(() => {
        fetchRelatedBlogs()
    }, [fetchRelatedBlogs])

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 6, blogsData.length))
    }

    return (
        <div className={`${poppins.className} w-full py-8 md:py-36`}>
            <div className="container mx-auto px-4">
                {/* Title Section */}
                <div className={`${gilroy_semibold.className} text-center mb-12`}>
                    <h2 className="text-[#2E0A49] text-3xl md:text-5xl font-semibold">
                        Related blogs
                    </h2>
                </div>

                {/* Loading */}
                {loading ? (
                    <div className="text-center text-gray-500">Loading related blogs...</div>
                ) : (
                    <>
                        {/* Blog Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6 pt-8">
                            {blogsData.slice(0, visibleCount).map((blog) => (
                                // <Link key={blog.id} href={`/blogs/${blog.slug}`} className="group">
                                <div key={blog.id} >
                                    <BlogCard
                                        title={blog.title}
                                        imageUrl={blog.imageUrl?.url}
                                        releaseDate={blog.formatted_date}
                                        readingTime={`${blog.readTime} min`}
                                        slug={blog.slug}
                                    />
                                    </div>
                                // </Link>
                            ))}
                        </div>

                        {/* Load More Button */}
                        {visibleCount < blogsData.length && (
                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={loadMore}
                                    className={`${gilroy_semibold.className} flex items-center gap-4 text-2xl px-8 py-3 transition-colors duration-300`}
                                >
                                    View more
                                    <ChevronDown />
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default RelatedBlogs