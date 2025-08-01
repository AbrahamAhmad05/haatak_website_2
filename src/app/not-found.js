import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { gilroy_semibold, gotham } from '@/lib/font';

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FFD8AE] to-[#FFE4BF]">
      <div className="container mx-auto px-4 py-16 max-w-4xl flex flex-col items-center">
        {/* Gold-themed 404 badge */}
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-xl opacity-30"></div>
          <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] border-8 border-[#FFE4BF] shadow-lg">
            <span className={`text-4xl font-bold text-[#2E0A49] ${gotham.className}`}>404</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className={`text-2xl md:text-4xl font-bold text-[#2E0A49] mb-6 ${gotham.className}`}>
            PAGE NOT FOUND
          </h1>
          <p className={`text-lg md:text-xl text-[#2E0A49] max-w-2xl mb-4 ${gilroy_semibold.className}`}>
            The Page you&apos;re seeking has vanished! It might have been moved, or is currently being polished to perfection.
          </p>
          
          {/* Gold bar separator */}
          {/* <div className="flex justify-center mb-8">
            <div className="w-32 h-2 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-full"></div>
          </div> */}
        </div>

        <div className="flex flex-col items-center gap-6">
          <Link href="/" passHref>
            <Button 
              size="xl"
              className={`bg-[#2E0A49] hover:bg-[#3d0f5f] text-lg py-7 px-12 rounded-full ${gotham.className} uppercase shadow-lg transition-all duration-300 hover:scale-105`}
            >
              Back to Home
            </Button>
          </Link>
          
          {/* <div className={`flex items-center gap-3 mt-4 ${gotham.className}`}>
            <div className="w-6 h-6 rounded-full bg-[#FFD700] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#2E0A49]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-[#2E0A49] font-semibold text-sm md:text-base">
              Secure 24K Gold Transactions
            </span>
          </div> */}
        </div>

        {/* Decorative gold elements */}
        {/* <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16 opacity-20">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-8 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-t-lg"></div>
              <div className="w-20 h-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-b-lg"></div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default NotFoundPage;