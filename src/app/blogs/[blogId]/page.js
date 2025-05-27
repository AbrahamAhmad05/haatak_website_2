import RelatedBlogs from '@/components/blogs/RelatedBlogs'
import { gilroy_semibold, montserrat, poppins } from '@/lib/font'
import Image from 'next/image'

const BlogDetailPage = () => {
    return (
        <div className={`${poppins.className} bg-white min-h-screen`}>
            <div className="relative w-full h-[550px] rounded-2xl overflow-hidden mt-36">
                <Image
                    src="/blog_imgs/blog-detail.jpg"
                    alt="Digital Gold Investment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                />
            </div>
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Blog Header */}


                {/* Featured Image */}


                {/* Blog Content */}
                <article className="prose max-w-none">


                    <section className="mb-12">
                        {/* <h2 className={`${gilroy_semibold.className} text-3xl text-[#2E0A49] mb-6 border-l-4 border-[#E39A35] pl-4`}>
              The New Era of Gold Investment
            </h2> */}
                        <h1 className={`${gilroy_semibold.className} text-4xl md:text-5xl text-[#2E0A49] mb-6 border-l-4 border-[#E39A35] pl-4`}>
                            BookurGold: The Future of Digital Gold
                        </h1>
                        <div className="mb-8">

                            <div className={`${montserrat.className} flex justify-between md:justify-start md:gap-20 items-center text-base md:text-xl py-4 text-[#2E0A49]`}>
                                <span>26 Apr 2025</span>
                                {/* <span>•</span> */}
                                <span>6 min read</span>
                            </div>
                        </div>
                        <p className="text-xl font-medium pb-8">
                            Gold savings made simple—start small, grow steadily, and secure your future with ease. In today&apos;s fast-paced world, securing your future is more important than ever.
                            But traditional gold buying can be expensive, inconvenient, and risky.
                            That&apos;s where BookurGold comes in—a secure, flexible, and smart way to
                            invest in gold digitally, without any hassle.
                        </p>

                        <ul className='text-xl font-medium pb-8 px-6'>
                            <li className='list-disc'>No Heavy Investments Needed – Start with as little as ₹100.</li>
                            <li className='list-disc'>100% Secure & Verified – Your gold is backed by real assets.</li>
                            <li className='list-disc'>Earn Daily Rewards–Let your gold work for you!</li>
                            <li className='list-disc'>Zero Lock-In – Withdraw anytime, anywhere</li>
                            <li className='list-disc'>Accessible Anytime – Buy, sell, and track your gold investment on your phone.</li>
                        </ul>

                        <ul className="list-none text-xl font-medium pb-8 space-y-4">
                            <li className="flex items-center gap-2">
                                <Image src='/blog_imgs/checkbox.png' width={20} height={20} alt='checkbox' />
                                No Heavy Investments Needed – Start with as little as ₹100.
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src='/blog_imgs/checkbox.png' width={20} height={20} alt='checkbox' />
                                100% Secure & Verified – Your gold is backed by real assets.
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src='/blog_imgs/checkbox.png' width={20} height={20} alt='checkbox' />
                                Earn Daily Rewards – Let your gold work for you!
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src='/blog_imgs/checkbox.png' width={20} height={20} alt='checkbox' />
                                Zero Lock-In – Withdraw anytime, anywhere.
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src='/blog_imgs/checkbox.png' width={20} height={20} alt='checkbox' />
                                Accessible Anytime – Buy, sell, and track your gold investment on your phone.
                            </li>
                        </ul>
                        <p className="text-xl font-medium">
                            &quot;Your Future Starts Today! Why wait? Join  thousands of smart investors who are already growing their wealth with BookurGold.&quot;
                        </p>
                        <p className="text-xl font-medium">
                            &quot;Download the app now and take the first step toward secure,hassle-free, and rewarding gold investment!&quot;
                        </p>
                    </section>


                </article>

            </div>
            <RelatedBlogs />
        </div>
    )
}

export default BlogDetailPage