import RelatedBlogs from '@/components/blogs/RelatedBlogs'
import { gilroy_semibold, montserrat, poppins } from '@/lib/font'
import Image from 'next/image'

const BlogDetailPage = () => {
    return (
        <div className={`${poppins.className} bg-white min-h-screen`}>
            {/* Image container with responsive height */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden mt-16 md:mt-24 lg:mt-36">
                <Image
                    src="/blog_imgs/blog-detail.jpg"
                    alt="Digital Gold Investment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                />
            </div>

            <div className="container mx-auto px-4 pt-8 md:py-12 max-w-4xl">
                <article className="prose max-w-none">
                    <section className=" md:mb-12">
                        {/* Responsive title */}
                        <h1 className={`${gilroy_semibold.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2E0A49] mb-4 md:mb-6 border-l-4 border-[#E39A35] pl-3 md:pl-4`}>
                            BookurGold: The Future of Digital Gold
                        </h1>

                        {/* Date and read time */}
                        <div className={`${montserrat.className} flex justify-between md:justify-start md:gap-20 items-center text-sm sm:text-base md:text-lg py-3 md:py-4 text-[#2E0A49]`}>
                            <span>26 Apr 2025</span>
                            <span>6 min read</span>
                        </div>

                        {/* Responsive body text */}
                        <div className="text-base md:text-lg lg:text-xl space-y-4 md:space-y-6">
                            <p className="font-medium">
                                Gold savings made simple—start small, grow steadily, and secure your future with ease. In today&apos;s fast-paced world, securing your future is more important than ever. But traditional gold buying can be expensive, inconvenient, and risky. That&apos;s where BookurGold comes in—a secure, flexible, and smart way to invest in gold digitally, without any hassle.
                            </p>

                            {/* List with responsive spacing */}
                            <ul className="list-none font-medium space-y-3 md:space-y-4">
                                <li className="flex items-start gap-2">
                                    <Image 
                                        src='/blog_imgs/checkbox.png' 
                                        width={20} 
                                        height={20} 
                                        alt='checkbox'
                                        className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"
                                    />
                                    <span>No Heavy Investments Needed – Start with as little as ₹100.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Image 
                                        src='/blog_imgs/checkbox.png' 
                                        width={20} 
                                        height={20} 
                                        alt='checkbox'
                                        className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"
                                    />
                                    <span>100% Secure & Verified – Your gold is backed by real assets.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Image 
                                        src='/blog_imgs/checkbox.png' 
                                        width={20} 
                                        height={20} 
                                        alt='checkbox'
                                        className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"
                                    />
                                    <span>Earn Daily Rewards – Let your gold work for you!</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Image 
                                        src='/blog_imgs/checkbox.png' 
                                        width={20} 
                                        height={20} 
                                        alt='checkbox'
                                        className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"
                                    />
                                    <span>Zero Lock-In – Withdraw anytime, anywhere.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Image 
                                        src='/blog_imgs/checkbox.png' 
                                        width={20} 
                                        height={20} 
                                        alt='checkbox'
                                        className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"
                                    />
                                    <span>Accessible Anytime – Buy, sell, and track your gold investment on your phone.</span>
                                </li>
                            </ul>

                            <p className="font-medium italic">
                                &quot;Your Future Starts Today! Why wait? Join thousands of smart investors who are already growing their wealth with BookurGold.&quot;
                            </p>
                            <p className="font-medium italic">
                                &quot;Download the app now and take the first step toward secure, hassle-free, and rewarding gold investment!&quot;
                            </p>
                        </div>
                    </section>
                </article>
            </div>
            <RelatedBlogs />
        </div>
    )
}

export default BlogDetailPage