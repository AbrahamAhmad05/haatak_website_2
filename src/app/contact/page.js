"use client"

import { original } from '@/lib/font';
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { Check } from 'lucide-react';

const poppins = Poppins({
    weight: ['400'],
    subsets: ['latin']
});

import { useFormState, useFormStatus } from 'react-dom';

async function submitForm(prevState, formData) {
    const rawFormData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        otherText: formData.get('otherText'),
    };

    try {
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...rawFormData,
                subject: rawFormData.subject === 'Other'
                    ? rawFormData.otherText
                    : rawFormData.subject,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to submit form');
        }

        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        return { success: false, message: 'Failed to send message. Please try again.' };
    }
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`bg-[#2E0A49] text-white px-8 py-3 rounded-md transition-colors w-full md:w-auto ${pending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2E0A49]/80'
                }`}
        >
            {pending ? 'Sending...' : 'Send Message'}
        </button>
    );
}

function Contact() {
    const options = [
        'General Inquiry',
        'Partnership Opportunity',
        'Media / Press Inquiry',
        'Product / Service Inquiry',
        'Investor Relations',
        'Feedback or Suggestions',
        'Technical Support',
        'Billing or Payment Issue',
        'Career / Internship Opportunities',
        'Other',
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [otherText, setOtherText] = useState('');

    

    return (
        <div className={`${poppins.className} py-28 md:py-40 px-4 flex flex-col justify-center items-center`}>
            <h1 className={`${original.className} text-4xl md:text-7xl lg:text-8xl text-[#2E0A49] text-center mb-4`}>
                Contact Us
            </h1>
            <h6 className='text-[#2E0A49] text-lg md:text-xl font-semibold text-center mb-8 md:mb-12'>
                Any question or remarks? Just write us a message!
            </h6>

            <div className="w-full 2xl:px-0">
                <div className="flex flex-col md:flex-row border-[0.5px] rounded-2xl border-[#2E0A49]/66 p-2">
                    {/* Left Column */}
                    <div className="relative flex flex-col justify-between overflow-hidden h-screen space-y-4 bg-[#2E0A49] px-6 pt-8 xl:px-10 xl:pt-12 rounded-lg">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-semibold mb-2 xl:mb-2 text-white">Contact Information</h2>
                            <p className="text-white/90 mb-4 xl:mb-6 text-lg md:text-2xl font-normal">Say something to start a live chat!</p>

                            <div className="space-y-6 md:space-y-12 pt-28">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 mr-3 text-white flex-shrink-0" >
                                        <Image src="/contact_imgs/phone_icon.png" width={32} height={32} alt="Phone" />
                                    </div>
                                    <span className="text-white">+91-9876543201</span>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 mr-3 text-white flex-shrink-0" >
                                        <Image src="/contact_imgs/message.png" width={32} height={32} alt="Message" />
                                    </div>
                                    <span className="text-white">hello@haatak.com</span>
                                </div>

                                <div className="w-64 flex items-start gap-4">
                                    <div className="w-4 h-4 mr-3 text-white flex-shrink-0" >
                                        <Image src="/contact_imgs/location.png" width={32} height={32} alt="Location" />
                                    </div>
                                    <span className="text-white block">
                                        #558, 9TH CROSS, 3RD PHASE, J P NAGAR, BENGALURU 560 078
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className="relative flex gap-6 ">
                            <div className="w-8 h-8 ">
                                <Image src="/contact_imgs/twitter_yellow.png" width={40} height={40} alt="social media" />
                            </div>
                            <div className="w-8 h-8 ">
                                <Image src="/contact_imgs/instagram_white.png" width={40} height={40} alt="social media" />
                            </div>
                            <div className="w-8 h-8 ">
                                <Image src="/contact_imgs/discord_yellow.png" width={40} height={40} alt="social media" />
                            </div>
                        </div>

                        {/* Bottom-right half-visible circle */}
                        <div className="absolute -right-64 -bottom-64 w-64 h-64 rounded-full bg-[#ffffff4b] -translate-x-3/4 -translate-y-3/4"></div>

                        {/* Overlapping circle */}
                        <div className="absolute -right-0 bottom-6 w-32 h-32 rounded-full bg-gray-200/20  -translate-x-3/4 -translate-y-3/4"></div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6 py-8 px-6 md:px-8 ">
                        {/* <form action={formAction}> */}
                            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                <div className=''>
                                    <label className="" htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="w-full border-[#8D8D8D] border-b-2  bg-transparent px-0 pb-1 mt-2 focus:outline-none focus:border-[#2E0A49]  focus:ring-0 transition-all"
                                        placeholder="John" />
                                </div>
                                <div>
                                    <label className="" htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="w-full border-[#8D8D8D] border-b-2  bg-transparent px-0 pb-1 mt-2 focus:outline-none focus:border-[#2E0A49]  focus:ring-0 transition-all"
                                        placeholder="Doe" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                <div className=''>
                                    <label className="" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full border-[#8D8D8D] border-b-2  bg-transparent px-0 pb-1 mt-2 focus:outline-none focus:border-[#2E0A49]  focus:ring-0 transition-all"
                                        placeholder="Email" />
                                </div>
                                <div>
                                    <label className="" htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full border-[#8D8D8D] border-b-2  bg-transparent px-0 pb-1 mt-2 focus:outline-none focus:border-[#2E0A49]  focus:ring-0 transition-all"
                                        placeholder="+91 1234567890" />
                                </div>

                            </div>

                            <div className='space-y-2'>
                                <label className="text-lg font-semibold text-[#2E0A49]" htmlFor="subject">Select Subject?</label>
                                <div>
                                    <div className="grid xl:grid-cols-3 md:grid-cols-2 ">
                                        {options.map((option, i) => (
                                            <div key={i} className='flex items-center gap-2'>
                                                <button

                                                    onClick={() => {
                                                        setSelectedOption(option === selectedOption ? null : option);
                                                        if (option !== 'Other') setOtherText('');
                                                    }}
                                                    className={`relative py-3 rounded-lg transition-all`}
                                                    name="subject"
                                                    value={selectedOption}
                                                >
                                                    {selectedOption === option ? <div className='rounded-full w-6 h-6 bg-[#2E0A49]'><Check className='text-[#fff]' /> </div> : (<div className='rounded-full w-6 h-6 bg-[#E0E0E0]' />)}
                                                </button>
                                                <p className='text-sm line-clamp-1'>{option}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {selectedOption === 'Other' && (
                                        <div className=''>
                                            <label className="" htmlFor="first-name">Please Specify</label>
                                            <input
                                                type="text"
                                                value={otherText}
                                                onChange={(e) => setOtherText(e.target.value)}
                                                name="otherText"
                                                className="w-full border-[#8D8D8D] border-b-2  bg-transparent px-0 pb-1 mt-2 focus:outline-none focus:border-[#2E0A49]  focus:ring-0 transition-all"
                                                placeholder="Please Specify" />
                                        </div>
                                    )}
                                </div>

                            </div>
                            <div className=''>
                                <label className="" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full border-[#8D8D8D] border-b-2  bg-transparent px-0 pb-1 mt-2 focus:outline-none focus:border-[#2E0A49]  focus:ring-0 transition-all"
                                    placeholder="Write your message..." />
                            </div>
                            <div className="flex justify-center md:justify-end mt-6 md:mt-8">
                                <button
                                    className="bg-[#2E0A49] text-white px-8 py-3 rounded-md hover:bg-[#2E0A49]/80 transition-colors w-full md:w-auto"
                                >
                                    Send Message
                                </button>
                            </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;