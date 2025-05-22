import { original } from '@/lib/font'
import React from 'react'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400'],
    subsets: ['latin']
})

function Contact() { 
    return (
        <div className={`${poppins.className} py-20 md:py-40 px-4 flex flex-col justify-center items-center`}>
            <h1 className={`${original.className} text-4xl md:text-7xl lg:text-8xl text-[#2E0A49] text-center mb-4`}>
                Contact Us
            </h1>
            <h6 className='text-[#2E0A49] text-lg md:text-xl font-semibold text-center mb-8 md:mb-12'>
                Any question or remarks? Just write us a message!
            </h6>

            <div className="w-full max-w-6xl">
                <div className="grid md:grid-cols-2 gap-8 border-[0.5px] rounded-2xl border-[#2E0A49]/66 p-4 md:p-8">
                    {/* Left Column */}
                    <div className="space-y-6 bg-[#2E0A49] px-4 md:px-6 py-6 md:py-8 rounded-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Contact Information</h2>
                        <p className="text-white/90 mb-6">Say something to start a live chat!</p>

                        <div className="space-y-6 md:space-y-8 pt-8 md:pt-12">
                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-3 text-white flex-shrink-0" aria-hidden="true">
                                    {/* Phone icon */}
                                </svg>
                                <span className="text-white">+91-9876543201</span>
                            </div>

                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-3 text-white flex-shrink-0" aria-hidden="true">
                                    {/* Email icon */}
                                </svg>
                                <span className="text-white">Haatak@gmail.com</span>
                            </div>

                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-3 text-white flex-shrink-0" aria-hidden="true">
                                    {/* Location icon */}
                                </svg>
                                <span className="text-white block">
                                    #558, 2ND FLOOR, 9TH CROSS,<br />
                                    3RD PHASE, J P NAGAR,<br />
                                    BENGALURU, KARNATAKA 560 078
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6 py-4 md:py-0">
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            <div>
                                <label className="sr-only" htmlFor="first-name">First Name</label>
                                <input
                                    id="first-name"
                                    type="text"
                                    className="w-full p-3 border rounded-md"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="last-name">Last Name</label>
                                <input
                                    id="last-name"
                                    type="text"
                                    className="w-full p-3 border rounded-md"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            <div>
                                <label className="sr-only" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full p-3 border rounded-md"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="phone">Phone Number</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    className="w-full p-3 border rounded-md"
                                    placeholder="Phone Number"
                                    defaultValue="+91 "
                                />
                            </div>
                        </div>

                        <div>
                            <label className="sr-only" htmlFor="subject">Select Subject</label>
                            <select
                                id="subject"
                                className="w-full p-3 border rounded-md"
                            >
                                <option>General Inquiry</option>
                                {/* Other options */}
                            </select>
                        </div>

                        <div>
                            <label className="sr-only" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="w-full p-3 border rounded-md h-32"
                                placeholder="Write your message..."
                            />
                        </div>

                        <div className="flex justify-center mt-6 md:mt-8">
                            <button
                                className="bg-[#2E0A49] text-white px-8 py-3 rounded-md hover:bg-[#2E0A49]/80 transition-colors w-full md:w-auto"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact