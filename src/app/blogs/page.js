import ExpertAnalysis from '@/components/blogs/ExpertAnalysis'
import MarketBlogs from '@/components/blogs/MarketBlogs'
import { API_BASE_URL } from '@/config'
import { gilroy_semibold, gotham } from '@/lib/font'
import React from 'react'

export const metadata = {
    title: 'Haatak Wealth Stories | Insights on Digital Gold & Smart Savings',
    description: 'Explore expert insights, user stories, and digital gold tips. Learn how small habits grow big wealth with Haatak.',
    keywords: 'gold saving tips, wealth insights blog, haatak stories, smart saving habits, personal finance blog, digital gold India blog, haatak news updates, saving ₹10 daily tips, expert finance content, RBI gold insight, investing blog India, fintech thought leadership, savings education, haatak wealth stories, gold news India',
}

async function Blogs() {
    const getBlogs = await fetch(`${API_BASE_URL}/blogs`, {
        cache: 'no-store',
    });
    const blogs = await getBlogs.json();

    const marketBlogs = blogs.filter(blog => blog.is_expert_insight === false);
    const expertAnalysis = blogs.filter(blog => blog.is_expert_insight === true);
    // console.log("marketBlogs", marketBlogs);
    // console.log("expertAnalysis", expertAnalysis);
    return (
        <main>
            <section className="relative  min-w-full flex items-center py-16">
                {/* Content */}
                <div className="container relative flex justify-center items-center z-10 mx-auto px-2 sm:px-4 md:px-8 text-[#2E0A49] pt-16 md:pt-32">
                    <div className="flex flex-col text-center justify-center items-center">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-[700] md:mb-6 leading-tight">
                            Smart Saving & Digital Gold Insights That Build Wealth
                        </h1>
                        <h5 className={`${gilroy_semibold.className} text-center capitalize text-xl md:text-2xl lg:text-3xl font-medium md:px-16 pt-3`}>
                            Learn, grow, and invest wisely — one blog at a time.
                        </h5>
                        
                        <h6 className={`${gotham.className}  capitalize text-md lg:text-2xl font-medium md:px-16 pt-3`}>Explore tips, stories, and updates on digital gold, investing habits, and how Haatak helps you grow your wealth — Starting from ₹10 at a time. Empower your financial journey with every read.</h6>
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

            <MarketBlogs blogs={marketBlogs} />
            <ExpertAnalysis blogs={expertAnalysis} />

        </main>
    )
}

export default Blogs