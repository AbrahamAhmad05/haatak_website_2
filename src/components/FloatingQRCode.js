"use client";
import { gilroy, gilroy_semibold, mont } from "@/lib/font";
import { QrCode, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";


const FloatingQRCode = () => {
    const [isVisible, setIsVisible] = useState(false);
    //   const [qrData, setQrData] = useState('https://your-website.com');

    const toggleQR = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            {/* Floating Toggle Button */}
            {/* <button
        onClick={toggleQR}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Toggle QR Code"
      >
        <QrCode size={24} />
      </button> */}

            {/* QR Code Modal/Overlay */}
            {/* {isVisible && ( */}
            <div className="fixed inset-0 bg-transparent bg-opacity-50 z-40 flex items-end justify-end p-4">
                <div className="glass-card rounded-sm max-w-sm p-2 relative">
                    {/* Close Button */}
                    {/* <button
              onClick={toggleQR}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close QR Code"
            >
              <X size={24} />
            </button> */}

                    {/* QR Code Content */}
                    <div className="text-center">
                        {/* <h3 className="text-lg font-semibold mb-4">Scan QR Code</h3> */}
                        <div className="flex justify-center ">
                            <Link href="https://bookurgold.com/app" target="_blank" className="flex items-center justify-center gap-2">
                                <Image src={"/qr_code.jpeg"} width={200} height={200} alt="QR Code" className="w-24 h-24" />
                                <div className='pr-2 flex flex-col items-center justify-center'>
                                    <p className={`${gilroy_semibold.className} text-[#2E0A49] font-bold text-xl`}>download</p>
                                    <h6 className='text-3xl text-[#2E0A49]'>Haatak</h6>
                                </div>
                            </Link>
                            {/* <QRCodeSVG
                  value={qrData}
                  size={200}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="M"
                /> */}
                        </div>
                        {/* <p className="text-sm text-gray-600 break-all">{qrData}</p> */}
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    );
};

export default FloatingQRCode;