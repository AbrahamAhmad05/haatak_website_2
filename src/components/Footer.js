"use client"

import { albra_grotesk, helvetica_neue, helvetica_neue_th, original } from '@/lib/font';
import React, { useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';
import { API_BASE_URL, config } from '@/config';
import { toast } from 'react-hot-toast';

const Footer = () => {
    const [subscriberEmail, setSubscriberEmail] = useState('');

    const handleSubmit = async () => {
        const data = {
            email: subscriberEmail
        }
        try {
            const res = await axios.post(`${API_BASE_URL}/newsletter/subscribe`, data);
            if (res.status == 201) {
                setSubscriberEmail('');
                toast.success('welcome to haatak.');
            }
        }
        catch (error) {
            console.log("error", error);
            toast.error("failed:", error);
        }
    }
    return (
        <div className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#EDB669] pt-20">
            <div className="px-2 md:px-12">
                {/* Newsletter */}
                <div className={`${original.className} text-center mb-20`}>
                    <h4 className="text-3xl sm:text-4xl md:text-5xl text-[#2E0A49] mb-4">Join the Haatak Circle</h4>
                    <h6 className="text-lg sm:text-xl md:text-2xl text-[#2E0A49] mb-8">
                        Get early access to smart saving tips, new features, and exclusive gold rewards — straight to your inbox.
                    </h6>
                    <div className={`${albra_grotesk.className} flex flex-col sm:flex-row items-center justify-center max-w-3xl mx-auto gap-2 sm:gap-0 `}>
                        <input
                            type="email"
                            onChange={(e) => setSubscriberEmail(e.target.value)}
                            placeholder="Enter your email here"
                            className="w-full sm:w-2/3 border-2 border-[#2E0A49] py-3 px-5 rounded-lg sm:rounded-r-none bg-transparent text-[#2E0A49] placeholder-[#2E0A49]/70"
                        />
                        <Button className="w-full sm:w-auto h-[52px] font-bold bg-[#EDB669] hover:bg-[#E39A35] text-white text-lg border-2 border-[#2E0A49] px-14 leading-[2%] sm:rounded-l-none transition" onClick={() => handleSubmit()}>
                            Join
                        </Button>
                    </div>
                </div>

                {/* Footer Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_35%] gap-8 mt-4 px-6'>

                    {/* About */}
                    <div className="space-y-4">
                        <h5 className={`${helvetica_neue.className} text-lg font-medium  leading-relaxed text-[#2E0A49] uppercase`}>About</h5>
                        <div className="border-t border-[#2E0A49]" />
                        <div className={`${helvetica_neue_th.className} space-y-3`}>
                            <Link href='/buy-24k-gold' className="block cursor-pointer hover:opacity-70 transition-opacity">
                                <p className="text-[#2E0A49] text-base uppercase">Buy gold</p>
                            </Link>
                            <Link href='/about' className="block cursor-pointer hover:opacity-70 transition-opacity">
                                <p className="text-[#2E0A49] text-base uppercase">About us</p>
                            </Link>
                            <Link href='/how-its-work' className="block cursor-pointer hover:opacity-70 transition-opacity">
                                <p className="text-[#2E0A49] text-base uppercase">Features</p>
                            </Link>
                            <Link href='/blogs' className="block cursor-pointer hover:opacity-70 transition-opacity">
                                <p className="text-[#2E0A49] text-base uppercase">Blog</p>
                            </Link>
                        </div>
                    </div>

                    {/* Help */}
                    <div className="space-y-4">
                        <h5 className={`${helvetica_neue.className} text-lg font-medium  leading-relaxed text-[#2E0A49] uppercase`}>Help</h5>
                        <div className="border-t border-[#2E0A49]" />
                        <div className={`${helvetica_neue_th.className} space-y-3`}>
                            <Link href="/terms-of-use" className="block cursor-pointer hover:opacity-70 transition-opacity">
                                <p className="text-[#2E0A49] text-base uppercase">Terms & Conditions</p>
                            </Link>
                            <Link href="/privacy-policy" className="block cursor-pointer hover:opacity-70 transition-opacity">
                                <p className="text-[#2E0A49] text-base uppercase">Privacy Policies</p>
                            </Link>
                            <Link href="#" className="block cursor-pointer hover:opacity-70 transition-opacity">
                                <p className="text-[#2E0A49] text-base uppercase">Shipping & Return</p>
                            </Link>
                            <Link href="/contact" className="block cursor-pointer hover:opacity-70 transition-opacity">
                                <p className="text-[#2E0A49] text-base uppercase">Contact Us</p>
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className={`${helvetica_neue_th.className} space-y-4 `}>
                        <h5 className={`${helvetica_neue.className} text-lg font-medium leading-relaxed text-[#2E0A49] uppercase`}>Contact</h5>
                        <div className="border-t border-[#2E0A49] space-y-3" />
                        <div className="flex items-start gap-3">
                            <div className='pt-[2px]'>
                                <Phone className="text-[#2E0A49]" size={20} />
                            </div>
                            <p className="text-[#2E0A49] text-base">+91 63640 00414</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className='pt-[2px]'>
                                <Mail className="text-[#2E0A49]" size={20} />
                            </div>
                            <p className="text-[#2E0A49] text-base uppercase">support@haatak.com</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className='pt-[2px]'>
                                <MapPin className="text-[#2E0A49]" size={20} />
                            </div>
                            <p className="text-[#2E0A49] text-base uppercase">
                                #558, 9th Cross, 3rd Phase, J P Nagar, Bengaluru 560078
                            </p>
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="space-y-6 flex flex-col justify-center md:justify-start md:items-start items-center lg:border-l-2 border-[#2E0A49] sm:w-md lg:pl-12">
                        <div className="min-w-[200px] md:min-w-[250px] xl:min-w-[350px] ">
                            <Image
                                src="/home_imgs/haatak_logo.png"
                                width={537}
                                height={203}
                                alt="Haatak logo"
                                className="w-full h-auto "
                            />
                        </div>
                        <div className='pl-2'>
                            <p className={`${helvetica_neue.className} text-[#2E0A49]/80 text-lg leading-relaxed text-center md:text-start`}>
                                Start saving in 24K digital gold — secure, simple, and built for your future.
                            </p>

                            <div className="flex gap-5 md:gap-8 pt-4 flex-wrap justify-center md:justify-start">
                                <Link target='_blank' href='http://www.facebook.com/HaatakOfficial'>
                                    <div className="rounded-md w-9 h-9 md:w-10 md:h-10 overflow-hidden bg-white">
                                        <div className="w-full h-full facebook-icon"></div>
                                    </div>
                                </Link>
                                <Link target='_blank' href='http://www.instagram.com/haatakofficial'>
                                    <div className="rounded-md w-9 h-9 md:w-10 md:h-10 overflow-hidden bg-white">
                                        <div className="w-full h-full instagram-icon"></div>
                                    </div>
                                </Link>
                                <Link target='_blank' href='http://www.twitter.com/HaatakOfficial'>
                                    <div className="rounded-md w-9 h-9 md:w-10 md:h-10 overflow-hidden icon-container">
                                        <Image
                                            src="/icons/twitter_icon.jpg"
                                            width={64}
                                            height={64}
                                            alt="twitter"
                                            className="w-full h-full twitter-icon"
                                        />
                                    </div>
                                </Link>
                                <Link target='_blank' href='http://www.youtube.com/@HaatakOfficial'>
                                    <div className="rounded-md w-9 h-9 md:w-10 md:h-10 overflow-hidden icon-container">
                                        <Image
                                            src="/icons/youtube_icon.jpg"
                                            width={64}
                                            height={64}
                                            alt="youtube"
                                            className="w-full h-full youtube-icon"
                                        />
                                    </div>
                                </Link>
                                <Link target='_blank' href='https://www.linkedin.com/company/haatakofficial/'>
                                    <div className="rounded-md w-9 h-9 md:w-10 md:h-10 overflow-hidden bg-white">
                                        <div className="w-full h-full linkedin-icon"></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
            </div>
            <div className={`${albra_grotesk.className} text-center mt-12 border-t-2 border-[#2E0A49]/20 py-2 bg-[#E39A35]`}>
                <p className="text-white text-base sm:text-medium">
                    ©2025 GrowYuga Fintech Private Limited. All rights reserved. 
                </p>
            </div>
        </div>
    );
};

export default Footer;