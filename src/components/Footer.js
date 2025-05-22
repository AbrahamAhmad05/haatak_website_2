import { helvetica_neue, original } from '@/lib/font';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#EDB669] pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                {/* Newsletter */}
                <div className={`${original.className} text-center mb-20`}>
                    <h4 className="text-3xl sm:text-4xl md:text-5xl text-[#2E0A49] mb-4">Join our tribe</h4>
                    <h6 className="text-lg sm:text-xl md:text-2xl text-[#2E0A49] mb-8">
                        Be the first to hear about fresh news and new products
                    </h6>
                    <div className={`${helvetica_neue.className} flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto`}>
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className="w-full sm:w-2/3 border-2 border-[#2E0A49] py-3 px-5 rounded-lg sm:rounded-r-none bg-transparent text-[#2E0A49] placeholder-[#2E0A49]/70"
                        />
                        <Button className="w-full sm:w-auto h-12 font-bold bg-[#EDB669] hover:bg-[#E39A35] text-white text-lg border-2 border-[#2E0A49] px-6 sm:rounded-l-none transition">
                            Join
                        </Button>
                    </div>
                </div>

                {/* Footer Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20 border-t-2 border-[#2E0A49]/20 pt-12'>




                    {/* About */}
                    <div className="space-y-4">
                        <h5 className={`${helvetica_neue.className} text-xl text-[#2E0A49] uppercase`}>About</h5>
                        <div className="border-t border-[#2E0A49]" />
                        <p className="text-[#2E0A49] uppercase">Buy gold</p>
                        <p className="text-[#2E0A49] uppercase">About us</p>
                        <p className="text-[#2E0A49] uppercase">Features</p>
                        <p className="text-[#2E0A49] uppercase">Blog</p>
                    </div>

                    {/* Help */}
                    <div className="space-y-4">
                        <h5 className={`${helvetica_neue.className} text-xl text-[#2E0A49] uppercase`}>Help</h5>
                        <div className="border-t border-[#2E0A49]" />
                        <p className="text-[#2E0A49] uppercase">Shipping & Return</p>
                        <p className="text-[#2E0A49] uppercase">Terms & Conditions</p>
                        <p className="text-[#2E0A49] uppercase">Privacy Policies</p>
                        <p className="text-[#2E0A49] uppercase">Contact Us</p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h5 className={`${helvetica_neue.className} text-xl text-[#2E0A49] uppercase`}>Contact</h5>
                        <div className="border-t border-[#2E0A49]" />
                        <div className="flex items-start gap-3">
                            <Phone className="text-[#2E0A49]" size={20} />
                            <p className="text-[#2E0A49]">+91-9876543201</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <Mail className="text-[#2E0A49]" size={20} />
                            <p className="text-[#2E0A49] uppercase">Haatak@gmail.com</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="text-[#2E0A49]" size={20} />
                            <p className="text-[#2E0A49] uppercase">
                                #558, 2nd Floor, 9th Cross, 3rd Phase, J P Nagar, Bengaluru, Karnataka 560078
                            </p>
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="w-48 md:w-56">
                            <Image
                                src="/home_imgs/haatak_logo.png"
                                width={490}
                                height={117}
                                alt="Haatak logo"
                                className="w-full h-auto"
                            />
                        </div>
                        <p className="text-[#2E0A49]/80 text-base leading-relaxed">
                            Making gold investment accessible, secure, and effortless for everyone.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Image src="/home_imgs/facebook_icon.png" width={32} height={32} alt="facebook" />
                            <Image src="/home_imgs/instagram_icon.png" width={32} height={32} alt="instagram" />
                            <Image src="/home_imgs/twitter_icon.png" width={32} height={32} alt="twitter" />
                            <Image src="/home_imgs/youtube_icon.png" width={32} height={32} alt="youtube" />
                            <Image src="/home_imgs/pinterest_icon.png" width={32} height={32} alt="pinterest" />
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className={`${helvetica_neue.className} text-center mt-12 border-t-2 border-[#2E0A49]/20 py-6 bg-[#E39A35]`}>
                    <p className="text-white text-base sm:text-lg">
                        ©2024 Haatak, Inc. All rights reserved. | <span className="px-2">Privacy Policy</span> | <span className="px-2">Terms of Service</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
