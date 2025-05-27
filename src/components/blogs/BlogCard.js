import { montserrat } from '@/lib/font';
import Image from 'next/image';
import React from 'react';

const BlogCard = ({
  title,
  imageUrl,
  releaseDate,
  readingTime,
}) => {
  return (
    <div  className="w-full max-w-[360px] md:max-w-sm overflow-hidden rounded-2xl">
      {/* Top Image */}
      <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="text-[#2E0A49] py-4 md:py-6">
        {/* Title */}
        <h3 className="text-xl md:text-2xl border-l-[2px] border-[#E39A35] px-2 font-medium mb-2">
          {title}
        </h3>

        {/* Bottom Info Section */}
        <div className={`${montserrat.className} flex justify-between md:justify-start md:gap-20 items-center text-base md:text-xl pt-4`}>
          <span>{releaseDate}</span>
          <span>{readingTime} read</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;