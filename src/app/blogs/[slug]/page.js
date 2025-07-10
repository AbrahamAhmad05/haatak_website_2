'use client';

import { useState, useEffect, use } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import RelatedBlogs from '@/components/blogs/RelatedBlogs';
import { gilroy_semibold, montserrat, poppins } from '@/lib/font';
import axios from 'axios';
import Image from 'next/image';
import { API_BASE_URL } from '@/config';

const BlogDetailPage = ({ params }) => {
  const { slug } = use(params);
  console.log(slug)
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    

    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_BASE_URL}/blogs/${slug}`);
        setBlog(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500">Error</h2>
          <p className="mt-2">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-[#E39A35] text-white rounded-md"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

  return (
    <div className={`${poppins.className} bg-white min-h-screen`}>
      {/* Hero Image Skeleton */}
      {loading ? (
        <Skeleton className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px] rounded-2xl mt-16 md:mt-24 lg:mt-36" />
      ) : (
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:min-h-[768px] rounded-2xl overflow-hidden mt-16 md:mt-24 lg:mt-36">
          <Image
            src={blog?.content?.image?.url || '/blog_imgs/blog-detail.jpg'}
            alt={blog?.content?.image?.alt || 'Digital Gold Investment'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>
      )}

      <div className="container mx-auto px-4 pt-8 md:py-12 max-w-4xl">
        <article className="prose max-w-none">
          <section className="md:mb-12">
            {/* Title Skeleton */}
            {loading ? (
              <Skeleton className="h-12 w-full mb-6" />
            ) : (
              <h1 className={`${gilroy_semibold.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2E0A49] mb-4 md:mb-6 border-l-4 border-[#E39A35] pl-3 md:pl-4`}>
                {blog?.content?.title || 'BookurGold: The Future of Digital Gold'}
              </h1>
            )}

            {/* Date/Read Time Skeleton */}
            <div className={`${montserrat.className} flex justify-between md:justify-start md:gap-20 items-center text-sm sm:text-base md:text-lg py-3 md:py-4 text-[#2E0A49]`}>
              {loading ? (
                <>
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-32" />
                </>
              ) : (
                <>
                  <span>{formatDate(blog?.date_created || new Date())}</span>
                  <span>{blog?.content.read_time || 6} min read</span>
                </>
              )}
            </div>

            {/* Content */}
            <div className="text-base md:text-lg lg:text-xl space-y-8 md:space-y-10">
              {/* Subtitle */}
              {loading ? (
                <Skeleton className="h-6 w-full" />
              ) : (
                <p className="font-medium">
                  {blog?.content?.subtitle || 'Gold savings made simple...'}
                </p>
              )}

              {/* Introduction Section */}
              {loading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={`intro-${i}`} className="h-4 w-full" />
                ))
              ) : (
                blog?.content?.introduction && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#2E0A49] mb-3">
                      {blog.content.introduction.heading}
                    </h2>
                    <p className="font-medium">
                      {blog.content.introduction.text}
                    </p>
                  </div>
                )
              )}

              {/* Why Digital Gold? Section */}
              {loading ? (
                <div className="space-y-3">
                  <Skeleton className="h-6 w-1/2" />
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={`main-${i}`} className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
                </div>
              ) : (
                blog?.content?.main_section && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#2E0A49] mb-3">
                      {blog.content.main_section.heading}
                    </h2>
                    <ul className="list-none font-medium space-y-3 md:space-y-4">
                      {(blog.content.main_section.content || []).map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-lg">{item.icon}</span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}

              {/* How BookurGold Works Section */}
              {loading ? (
                <div className="space-y-3">
                  <Skeleton className="h-6 w-1/2" />
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={`details-${i}`} className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
                </div>
              ) : (
                blog?.content?.details_section && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#2E0A49] mb-3">
                      {blog.content.details_section.heading}
                    </h2>
                    <ul className="list-none font-medium space-y-3 md:space-y-4">
                      {(blog.content.details_section.content || []).map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-lg">{item.icon}</span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}

              {/* Smart Choice Section */}
              {loading ? (
                <div className="space-y-3">
                  <Skeleton className="h-6 w-1/2" />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={`smart-${i}`} className="h-4 w-full" />
                  ))}
                </div>
              ) : (
                blog?.content?.smart_choice_section && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#2E0A49] mb-3">
                      {blog.content.smart_choice_section.heading}
                    </h2>
                    <p className="font-medium">
                      {blog.content.smart_choice_section.text}
                    </p>
                  </div>
                )
              )}

              {/* Conclusion Section */}
              {loading ? (
                <div className="space-y-3">
                  <Skeleton className="h-6 w-1/2" />
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={`conclusion-${i}`} className="h-4 w-full" />
                  ))}
                </div>
              ) : (
                blog?.content?.conclusion && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#2E0A49] mb-3">
                      {blog.content.conclusion.heading}
                    </h2>
                    <p className="font-medium">
                      {blog.content.conclusion.text}
                    </p>
                  </div>
                )
              )}
            </div>
          </section>
        </article>
      </div>
      <RelatedBlogs slug={slug} loading={loading} />
    </div>
  );
};

export default BlogDetailPage;