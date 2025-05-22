import { helvetica_neue, original } from '@/lib/font'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
    return (
        <div className='bg-gradient-to-b from-[#FFFFFF] to-[#EDB669] pt-20 '>
            <div className='max-w-6xl mx-auto px-4 md:px-8'>
                {/* Newsletter Section */}
                <div className={`${original.className} text-center mb-16`}>
                    <h4 className='text-4xl md:text-5xl text-[#2E0A49] mb-4'>Join our tribe</h4>
                    <h6 className='text-xl md:text-2xl text-[#2E0A49] mb-8'>
                        Be the first to hear about fresh news and new products
                    </h6>
                    <div className={`${helvetica_neue.className} flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-center max-w-2xl mx-auto`}>
                        <input
                            type="email"
                            placeholder='Enter your email here'
                            className='w-full md:w-[70%] border-2 border-[#2E0A49] py-4 px-6 rounded-lg md:rounded-r-none text-[#2E0A49] placeholder-[#2E0A49]/80 bg-transparent'
                        />
                        <Button className='w-full md:w-auto h-15 font-bold bg-[#EDB669] hover:bg-[#E39A35] text-[#ffffff] text-lg border-2 border-[#2E0A49] py-4 px-8 rounded-lg md:rounded-l-none transition-colors'>
                            Join
                        </Button>
                    </div>
                </div>

                {/* Footer Links */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-20 border-t-2 border-[#2E0A49]/20 pt-12'>


                    {/* Quick Links */}
                    <div className='space-y-4'>
                        <h5 className={`${helvetica_neue.className} text-2xl text-[#2E0A49] mb-4 uppercase`}>About</h5>
                        <div className="border-t border-[#2E0A49] my-6"></div>
                        <div className='flex gap-4'>
                            <p className='text-[#2E0A49] uppercase'>Buy gold</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-[#2E0A49] uppercase'>About us</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-[#2E0A49] uppercase'>Features</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-[#2E0A49] uppercase'>Blog</p>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className='space-y-4'>
                        <h5 className={`${helvetica_neue.className} text-2xl text-[#2E0A49] mb-4 uppercase`}>Help</h5>
                        <div className="border-t border-[#2E0A49] my-6"></div>
                        <div className='flex gap-4'>
                            <p className='text-[#2E0A49] uppercase'>Shipping & Return</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-[#2E0A49] uppercase'>Terms & conditions</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-[#2E0A49] uppercase'>Privacy Policies</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-[#2E0A49] uppercase'>Contact us</p>
                        </div>
                    </div>

                    {/* Social */}
                    <div className='space-y-4'>
                        <h5 className={`${helvetica_neue.className} text-2xl text-[#2E0A49] mb-4 uppercase`}>Contact</h5>
                        <div className="border-t border-[#2E0A49] my-6"></div>
                        <div className='flex gap-4'>
                            <Phone className='text-[#2E0A49]'/>
                            <p className='text-[#2E0A49]'>+91-9876543201</p>
                        </div>
                        <div className='flex gap-4'>
                            <Mail className='text-[#2E0A49]'/>
                            <p className='text-[#2E0A49] uppercase'>Haatak@gmail.com</p>
                        </div>
                        <div className='flex gap-4'>
                            <MapPin size={64} className='text-[#2E0A49]'/>
                            <p className='text-[#2E0A49] uppercase'>#558, 2nd Floor, 9th Cross, 3rd Phase, J P Nagar,Bengaluru, Karnataka 560 078</p>
                        </div>
                    </div>

                    <div className="lg:visible hidden border-r border-[#2E0A49] mx-6" />
                    {/* Company Info */}
                    <div className='space-y-1'>
                        {/* <h5 className={`${original.className} text-2xl text-[#2E0A49] mb-4`}>Haatak</h5> */}
                        <div className='w-48 md:w-72 h-40 flex items-center'>
                            <Image
                                src="/home_imgs/haatak_logo.png"
                                width={490}
                                height={117}
                                alt='Haatak logo'
                                className='w-full h-auto'
                            />
                        </div>
                        <p className='text-[#2E0A49]/80 text-lg pl-4'>
                            Making gold investment accessible, secure, and effortless for everyone.
                        </p>
                        <div className="flex gap-4">
                            <Image src="/home_imgs/facebook_icon.png" width={32} height={32} alt='facebook logo' />
                            <Image src="/home_imgs/instagram_icon.png" width={32} height={32} alt='facebook logo' />
                            <Image src="/home_imgs/twitter_icon.png" width={32} height={32} alt='facebook logo' />
                            <Image src="/home_imgs/youtube_icon.png" width={32} height={32} alt='facebook logo' />
                            <Image src="/home_imgs/pinterest_icon.png" width={32} height={32} alt='facebook logo' />
                        </div>
                    </div>

                </div>

                {/* Copyright */}
            </div>
                <div className={`${helvetica_neue.className} text-center mt-12 bg-[#E39A35] border-t-2 border-[#2E0A49]/20`}>
                    <p className='text-white text-lg'>
                        ©2024 Haatak, Inc. All rights reserved.  |  <span className='px-2'>Privacy Policy</span>  |  <span  className='px-2'>Terms of Service</span>
                    </p>
                </div>
        </div>
    )
}

export default Footer