"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
import { SearchIcon, X, Menu } from 'lucide-react';
import { gotham } from '@/lib/font';
import { Button } from './ui/button';
// import { gotham } from '@/lib/font';

// const gotham = localFont({
//   src: '../styles/fonts/gotham/gotham-font/GOTHAM-MEDIUM.ttf',
//   variable: "--font-gotham",
//   weight: '400'
// })

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${gotham.className} uppercase text absolute inset-x-0 top-0 z-50 h-20 flex justify-between items-center bg-transparent px-4 md:px-14 py-5`}>
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
        <ul className='flex gap-8 lg:gap-16 text-xl lg:text-[20px] font-bold text-black'>
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
          <ul className='flex flex-col items-center gap-6 py-8 text-xl text-black'>
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                <li className='hover:text-gray-600 transition-colors'>{link.label}</li>
              </Link>
            ))}
            {/* <li className='mt-4'>
              <Link href='/buy-24k-gold'>
                <button className={`${gotham.className} px-8 py-4 uppercase text-xl text-[#2E0A49] rounded-full bg-[#EDB669] opacity-75 hover:opacity-100 cursor-pointer`}>
                  Buy 24K Gold
                </button>
              </Link>
            </li> */}
          </ul>
        </div>
      )}

      {/* Desktop Search Icon */}
      <div className='hidden md:block'>
        {/* <SearchIcon className='text-black hover:text-gray-600 cursor-pointer' /> */}
        {/* <Link href='/buy-24k-gold'>
          <button className={`${gotham.className} px-8 py-4 uppercase text-xl text-[#2E0A49] rounded-full bg-[#EDB669] opacity-75 hover:opacity-100 cursor-pointer`}>
            Buy 24K Gold
          </button>
        </Link> */}
      </div>
    </div>
  )
}


const links = [
  { href: '/', label: 'Home' },
  // { href: '/about', label: 'About us' },
  // { href: '/how-its-work', label: "How it's work" },
  // { href: '/#blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default Navbar