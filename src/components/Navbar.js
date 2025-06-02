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
    <header className={`${gotham.className} absolute inset-x-0 top-0 z-50 h-20 flex items-center bg-transparent`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 w-40 md:w-52 h-full flex items-center">
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
        <nav className="hidden md:flex flex-grow justify-center px-4">
          <ul className="flex items-center gap-6 lg:gap-8 xl:gap-10 text-base lg:text-lg font-bold text-black">
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

        {/* Desktop CTA Button */}
        <div className="hidden md:block flex-shrink-0">
          <Link href='/buy-24k-gold'>
            <Button className="uppercase cursor-pointer text-base lg:text-lg text-[#EDB669] bg-[#2E0A49] hover:bg-[#3a0d5d] px-6 py-3 rounded-full">
              Buy 24K Gold
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2 text-black'
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='md:hidden fixed top-20 inset-x-0 bottom-0 bg-gradient-to-r from-[#FFD8AE00] via-[#FFD8AE] to-[#FFD8AE00] backdrop-blur-sm'>
          <div className="container mx-auto px-4 py-6">
            <ul className='flex flex-col items-center gap-8 py-6 text-xl text-black'>
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
              <li className='mt-4 w-full max-w-xs'>
                <Link 
                  href='/buy-24k-gold'
                  onClick={() => setIsOpen(false)}
                  className='block'
                >
                  <Button className="w-full uppercase text-xl text-[#2E0A49] bg-[#EDB669] hover:bg-[#f5c786] py-4 rounded-full">
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
  { href: '/about', label: 'About us' },
  { href: '/how-its-work', label: "How it's work" },
  { href: '/#blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default Navbar