"use client";
import { gilroy, gilroy_semibold, mont } from "@/lib/font";
import { QrCode, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FloatingQRCode = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleQR = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            {/* Fixed positioned QR card - only takes space it needs */}
            <div className="fixed bottom-4 right-4 z-40 pointer-events-none">
                <div className="glass-card rounded-sm max-w-sm p-2 relative pointer-events-auto">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <Link 
                                href="https://bookurgold.com/app" 
                                target="_blank" 
                                className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
                            >
                                <Image 
                                    src="/qr_code.png" 
                                    width={500} 
                                    height={500} 
                                    alt="QR Code" 
                                    className="w-18 h-18 lg:w-24 lg:h-24" 
                                />
                                <div className='pr-2 flex flex-col items-center justify-center'>
                                    <p className={`${gilroy_semibold.className} text-[#2E0A49] font-bold text-lg lg:text-xl`}>
                                        download
                                    </p>
                                    <h6 className='text-xl lg:text-3xl text-[#2E0A49]'>
                                        Haatak
                                    </h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FloatingQRCode;