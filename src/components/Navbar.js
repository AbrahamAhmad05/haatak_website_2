"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { gotham } from '@/lib/font';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${gotham.className} absolute inset-x-0 top-0 z-50 h-16 sm:h-18 md:h-20 flex items-center bg-transparent`}>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 w-28 xs:w-32 sm:w-36 md:w-40 lg:w-48 xl:w-52 h-full flex items-center">
          <Link href="/">
            <Image
              src="/home_imgs/haatak_logo.png"
              width={490}
              height={117}
              alt='Haatak logo'
              className='w-full h-auto object-contain'
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center px-4">
          <ul className="flex items-center gap-6 xl:gap-8 2xl:gap-10 text-sm lg:text-base xl:text-lg font-bold text-black">
            {links.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className='hover:text-gray-600 transition-colors whitespace-nowrap'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tablet Navigation - Simplified */}
        <nav className="hidden md:flex lg:hidden flex-grow justify-center px-2">
          <ul className="flex items-center gap-3 text-sm font-bold text-black">
            {links.slice(0, 4).map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className='hover:text-gray-600 transition-colors whitespace-nowrap'
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* More menu for tablet */}
            <li className="relative group">
              {/* <button className="hover:text-gray-600 transition-colors">
                More
              </button> */}
              <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link 
                  href="/contact" 
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-lg"
                >
                  Contact
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        {/* Desktop & Tablet CTA Button */}
        <div className="hidden md:block flex-shrink-0">
          <Link href='/buy-24k-gold'>
            <Button className="uppercase cursor-pointer text-xs md:text-sm lg:text-base xl:text-lg text-[#EDB669] bg-[#2E0A49] hover:bg-[#3a0d5d] px-3 md:px-4 lg:px-6 py-2 lg:py-3 rounded-full whitespace-nowrap">
              Buy 24K Gold
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-1.5 sm:p-2 text-black'
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='md:hidden fixed top-16 sm:top-18 md:top-20 inset-x-0 bottom-0 bg-gradient-to-r from-[#FFD8AE00] via-[#FFD8AE] to-[#FFD8AE00] backdrop-blur-sm'>
          <div className="container mx-auto px-4 py-4 sm:py-6">
            <ul className='flex flex-col items-center gap-6 sm:gap-8 py-4 sm:py-6 text-lg sm:text-xl text-black'>
              {links.map((link) => (
                <li key={link.href} className='w-full text-center'>
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className='block py-2 hover:text-gray-600 transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className='mt-2 sm:mt-4 w-full max-w-xs'>
                <Link 
                  href='/buy-24k-gold'
                  onClick={() => setIsOpen(false)}
                  className='block'
                >
                  <Button className="w-full uppercase cursor-pointer text-sm sm:text-base text-[#EDB669] bg-[#2E0A49] hover:bg-[#3a0d5d] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full">
                    Buy 24K Gold
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About us' },
  { href: '/how-its-work/', label: "How it's work" },
  { href: '/blogs/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];

export default Navbar