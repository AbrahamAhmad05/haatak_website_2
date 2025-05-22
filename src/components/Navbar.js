"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
import { SearchIcon, X, Menu } from 'lucide-react';
import { gotham } from '@/lib/font';

// const gotham = localFont({
//   src: '../styles/fonts/gotham/gotham-font/GOTHAM-MEDIUM.ttf',
//   variable: "--font-gotham",
//   weight: '400'
// })

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`font-Gotham absolute inset-x-0 top-0 z-50 h-20 flex justify-between items-center bg-transparent px-4 md:px-14 py-5`}>
      {/* Logo */}
      <div className='w-48 md:w-72 h-40 flex items-center'>
        <Image 
          src="/home_imgs/haatak_logo.png" 
          width={490} 
          height={117} 
          alt='Haatak logo' 
          className='w-full h-auto'
        />
      </div>

      {/* Hamburger Menu Button */}
      <button
        className='md:hidden p-2 text-black'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <nav className='hidden md:block'>
        <ul className='flex gap-8 lg:gap-16 text-[16px] lg:text-[20px] font-bold text-black'>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <li className='hover:text-gray-600 transition-colors'>{link.label}</li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-[#FFD8AE00] via-[#FFD8AE] to-[#FFD8AE00]  shadow-xl'>
          <ul className='flex flex-col items-center gap-6 py-8 text-[18px] text-black'>
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                <li className='hover:text-gray-600 transition-colors'>{link.label}</li>
              </Link>
            ))}
            <li className='mt-4'>
              <SearchIcon className='text-black' />
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Search Icon */}
      <div className='hidden md:block'>
        <SearchIcon className='text-black hover:text-gray-600 cursor-pointer' />
      </div>
    </div>
  )
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About us' },
  { href: '/#howitworks', label: "How it's work" },
  { href: '/#blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default Navbar