import { albra_grotesk, helvetica_neue, original } from '@/lib/font';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#EDB669] pt-20">
            <div className="px-12">
                {/* Newsletter */}
                <div className={`${original.className} text-center mb-20`}>
                    <h4 className="text-3xl sm:text-4xl md:text-5xl text-[#2E0A49] mb-4">Join our tribe</h4>
                    <h6 className="text-lg sm:text-xl md:text-2xl text-[#2E0A49] mb-8">
                        Be the first to hear about fresh news and new products
                    </h6>
                    <div className={`${albra_grotesk.className} flex flex-col sm:flex-row items-center justify-center max-w-3xl mx-auto gap-2 sm:gap-0 `}>
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className="w-full sm:w-2/3 border-2 border-[#2E0A49] py-3 px-5 rounded-lg sm:rounded-r-none bg-transparent text-[#2E0A49] placeholder-[#2E0A49]/70"
                        />
                        <Button className="w-full sm:w-auto h-[52px] font-bold bg-[#EDB669] hover:bg-[#E39A35] text-white text-lg border-2 border-[#2E0A49] px-14 leading-[2%] sm:rounded-l-none transition">
                            Join
                        </Button>
                    </div>
                </div>

                {/* Footer Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_30%] gap-8 mt-4'>

                    {/* About */}
                    <div className="space-y-4">
                        <h5 className={`${helvetica_neue.className} text-2xl font-medium  leading-relaxed text-[#2E0A49] uppercase`}>About</h5>
                        <div className="border-t border-[#2E0A49]" />
                        <p className="text-[#2E0A49] uppercase">Buy gold</p>
                        <p className="text-[#2E0A49] uppercase">About us</p>
                        <p className="text-[#2E0A49] uppercase">Features</p>
                        <p className="text-[#2E0A49] uppercase">Blog</p>
                    </div>

                    {/* Help */}
                    <div className="space-y-4">
                        <h5 className={`${helvetica_neue.className} text-2xl font-medium  leading-relaxed text-[#2E0A49] uppercase`}>Help</h5>
                        <div className="border-t border-[#2E0A49]" />
                        <p className="text-[#2E0A49] uppercase">Shipping & Return</p>
                        <p className="text-[#2E0A49] uppercase">Terms & Conditions</p>
                        <p className="text-[#2E0A49] uppercase">Privacy Policies</p>
                        <p className="text-[#2E0A49] uppercase">Contact Us</p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h5 className={`${helvetica_neue.className} text-2xl font-medium leading-relaxed text-[#2E0A49] uppercase`}>Contact</h5>
                        <div className="border-t border-[#2E0A49]" />
                        <div className="flex items-start gap-3">
                            <div className='pt-[2px]'>
                            <Phone className="text-[#2E0A49]" size={20} />
                            </div>
                            <p className="text-[#2E0A49]">+91 63640 00414</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className='pt-[2px]'>
                            <Mail className="text-[#2E0A49]" size={20} />
                            </div>
                            <p className="text-[#2E0A49] uppercase">hello@haatak.com</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className='pt-[2px]'>
                            <MapPin className="text-[#2E0A49]" size={20} />
                            </div>
                            <p className="text-[#2E0A49] uppercase">
                                #558, 9th Cross, 3rd Phase, J P Nagar, Bengaluru 560078
                            </p>
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="space-y-6 lg:border-l-2 border-[#2E0A49] ">
                        <div className="w-full min:min-w-[200px] md:min-w-[350px] xl:min-w-[400px] lg:pl-7 xl:pl-9">  {/* Adjusted width */}
                            <Image
                                src="/home_imgs/haatak_logo.png"
                                width={537}
                                height={203}
                                alt="Haatak logo"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className='lg:pl-8 xl:pl-10'>
                        <p className="text-[#2E0A49]/80 text-2xl leading-relaxed line">
                            Making gold investment accessible, secure, and effortless for everyone.
                        </p>
                        </div>
                        <div className="flex gap-4 pt-2 flex-wrap lg:pl-8 xl:pl-10">
                            <Link href='http://www.facebook.com/HaatakOfficial'>
                                <Image src="/home_imgs/facebook_icon.png" width={32} height={32} alt="facebook" />
                            </Link>
                            <Link href='http://www.instagram.com/haatakofficial'>
                            <Image src="/home_imgs/instagram_icon.png" width={32} height={32} alt="instagram" />
                            </Link>
                            <Link href='http://www.twitter.com/HaatakOfficial'>
                            <Image src="/home_imgs/twitter_icon.png" width={32} height={32} alt="twitter" />
                            </Link>
                            <Link href='http://www.youtube.com/@HaatakOfficial'>
                            <Image src="/home_imgs/youtube_icon.png" width={32} height={32} alt="youtube" />
                            </Link>
                            <Link href='https://www.linkedin.com/company/haatakofficial/'>
                            <Image src="/home_imgs/linked_in_icon.png" width={32} height={32} alt="LinkedIn" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
            </div>
            <div className={`${albra_grotesk.className} text-center mt-12 border-t-2 border-[#2E0A49]/20 py-2 bg-[#E39A35]`}>
                <p className="text-white text-base sm:text-xl">
                    ©2024 Haatak, Inc. All rights reserved. | <span className="px-2">Privacy Policy</span> | <span className="px-2">Terms of Service</span>
                </p>
            </div>
        </div>
    );
};

export default Footer;
