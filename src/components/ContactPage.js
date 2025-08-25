
"use client"

import { original } from '@/lib/font';
import React, { useActionState, useState } from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { useFormStatus } from 'react-dom';

const poppins = Poppins({
    weight: ['400'],
    subsets: ['latin']
});


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

    // Client-side validation
    if (!rawFormData.firstName || !rawFormData.lastName || !rawFormData.email || !rawFormData.subject || !rawFormData.message) {
        return { success: false, message: 'All required fields must be filled' };
    }

    if (rawFormData.subject === 'Other' && !rawFormData.otherText) {
        return { success: false, message: 'Please specify your subject' };
    }

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

function ContactPage() {
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
    const [state, formAction] = useActionState(submitForm, {
        success: false,
        message: ''
    });



    return (
        <div className={`${poppins.className} py-28 md:py-40 px-4 flex flex-col justify-center items-center lg:mx-10`}>
            <h1 className={`${original.className} text-4xl md:text-7xl lg:text-8xl text-[#2E0A49] text-center mb-4`}>
                Need Help? We’re Here for You!
            </h1>
            <h6 className='text-[#2E0A49] text-lg md:text-xl font-semibold text-center mb-8 md:mb-12'>
                Have a question or feedback? Drop us a message — our team will respond within 24 hours.
            </h6>

            <div className="w-full 2xl:px-0">
                <div className="flex flex-col md:flex-row border-[0.5px] rounded-2xl border-[#2E0A49]/66 p-2 ">
                    {/* Left Column */}

                    <div className="relative md:max-w-[50%] w-full flex flex-col justify-between overflow-hidden space-y-4 bg-[#2E0A49] px-6 pt-8 xl:px-10 xl:pt-12 rounded-lg">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-semibold mb-2 xl:mb-2 text-white">Let&apos;s Connect & Grow Together</h2>
                            <p className="text-white/90 mb-4 xl:mb-6 text-lg md:text-2xl font-normal">Your questions matter. We&apos;re here to help — every step of your saving journey.</p>

                            <div className="space-y-6 md:space-y-12 pt-28">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 mr-3 text-white flex-shrink-0" >
                                        <Image src="/contact_imgs/phone_icon.png" width={32} height={32} alt="Phone" />
                                    </div>
                                    <span className="text-white">+91 9100450091</span>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 mr-3 text-white flex-shrink-0" >
                                        <Image src="/contact_imgs/message.png" width={32} height={32} alt="Message" />
                                    </div>
                                    <span className="text-white">support@haatak.com</span>
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
                        {/* <div className="relative flex gap-6 ">
                            <div className="w-8 h-8 ">
                                <Image src="/contact_imgs/twitter_yellow.png" width={40} height={40} alt="social media" />
                            </div>
                            <div className="w-8 h-8 ">
                                <Image src="/contact_imgs/instagram_white.png" width={40} height={40} alt="social media" />
                            </div>
                            <div className="w-8 h-8 ">
                                <Image src="/contact_imgs/discord_yellow.png" width={40} height={40} alt="social media" />
                            </div>
                        </div> */}

                        {/* Bottom-right half-visible circle */}
                        <div className="absolute -right-64 -bottom-64 w-64 h-64 rounded-full bg-[#ffffff4b] -translate-x-3/4 -translate-y-3/4"></div>

                        {/* Overlapping circle */}
                        <div className="absolute -right-0 bottom-6 w-32 h-32 rounded-full bg-gray-200/20  -translate-x-3/4 -translate-y-3/4"></div>
                    </div>
                    {/* <div className=""></div> */}
                    {/* Right Column */}
                    <div className="w-full min-h-screen 
                    [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:min-h-auto 
                    xl:min-h-[80%] px-2 sm:px-4 flex flex-col">
                        <form
                            action={formAction}
                            className="w-full max-w-4xl mx-auto flex-1 flex flex-col justify-between gap-6 py-8 px-4 sm:px-6"
                        >
                            <input type="hidden" name="subject" value={selectedOption} />

                            {/* Form Content */}
                            <div className="space-y-8">
                                {/* Name Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className='text-[#8D8D8D] text-base md:text-lg'>First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            className="w-full text-lg md:text-xl border-b-2 border-[#8D8D8D] bg-transparent py-2 focus:outline-none focus:border-[#2E0A49] transition-all"
                                            placeholder="Ramesh"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className='text-base md:text-lg'>Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            className="w-full text-lg md:text-xl border-b-2 border-[#8D8D8D] bg-transparent py-2 focus:outline-none focus:border-[#2E0A49] transition-all"
                                            placeholder="Naik"
                                        />
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className='text-[#8D8D8D] text-base md:text-lg'>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full text-lg md:text-xl border-b-2 border-[#8D8D8D] bg-transparent py-2 focus:outline-none focus:border-[#2E0A49] transition-all"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className='text-base md:text-lg'>Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="w-full text-lg md:text-xl border-b-2 border-[#8D8D8D] bg-transparent py-2 focus:outline-none focus:border-[#2E0A49] transition-all"
                                            placeholder="+91 1234567890"
                                        />
                                    </div>
                                </div>

                                {/* Subject Selector */}
                                <div className="space-y-4">
                                    <h5 className="text-lg md:text-xl font-semibold text-[#2E0A49]">Select Subject?</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
                                        {options.map((option, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedOption(option);
                                                        if (option !== 'Other') setOtherText('');
                                                    }}
                                                    className="relative"
                                                >
                                                    {selectedOption === option ? (
                                                        <div className="rounded-full w-5 h-5 bg-[#2E0A49] flex items-center justify-center">
                                                            <Check className="text-white w-5 h-5" />
                                                        </div>
                                                    ) : (
                                                        <div className="rounded-full w-5 h-5 bg-[#E0E0E0]" />
                                                    )}
                                                </button>
                                                <p className="text-lg line-clamp-1">{option}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {selectedOption === 'Other' && (
                                        <div className="space-y-2">
                                            <label htmlFor="otherText" className="text-base md:text-lg">Please Specify</label>
                                            <input
                                                type="text"
                                                value={otherText}
                                                onChange={(e) => setOtherText(e.target.value)}
                                                name="otherText"
                                                required
                                                className="w-full text-lg md:text-xl border-b-2 border-[#8D8D8D] bg-transparent py-2 focus:outline-none focus:border-[#2E0A49] transition-all"
                                                placeholder="Please Specify"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-base md:text-lg">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full text-lg md:text-xl border-b-2 border-[#8D8D8D] bg-transparent py-2 focus:outline-none focus:border-[#2E0A49] transition-all resize-y min-h-[120px]"
                                        placeholder="Write your message..."
                                    />
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="space-y-4">
                                {/* Submit */}
                                <div className="flex justify-end">
                                    <SubmitButton className="text-lg md:text-xl px-8 py-3" />
                                </div>

                                {/* State Message */}
                                {state.message && (
                                    <p className={`text-center ${state.success ? 'text-green-600' : 'text-red-600'} text-lg md:text-xl`}>
                                        {state.message}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactPage;