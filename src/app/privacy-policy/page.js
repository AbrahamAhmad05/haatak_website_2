import { gilroy_semibold, gotham, montserrat, original, poppins } from '@/lib/font'
import Image from 'next/image'

export const metadata = {
    title: "Haatak Privacy Policy | How We Protect Your Digital Gold & Data",
    description: 'Your privacy matters. Read how Haatak protects your data with encryption, compliance, and transparency while enabling secure digital gold savings.',
    keywords: 'haatak privacy, user data protection, gold app privacy, secure personal data, privacy policy India, gold platform security, RBI app compliance, protect user info, encryption gold app, data storage policy, fintech privacy terms, gold wallet privacy, user rights gold app, privacy commitment haatak, digital finance confidentiality',
}

const PrivacyPolicyPage = () => {
    return (
        <div className={`${poppins.className} bg-white min-h-screen`}>
            {/* Hero image with responsive sizing */}
            <div className='h-full md:h-screen flex flex-col gap-4 justify-center items-center text-center text-[#2E0A49] pt-48 md:pt-24 pb-24 md:pb-2'>

                <h1 className={`${original.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-[700] md:mb-6 `}>
                    Privacy Policy
                </h1>
                <h6 className={`${gotham.className}  capitalize text-xl md:3xl font-medium md:px-72`}>Privacy Policy for Haatak</h6>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-24 max-w-4xl">
                <article className="prose max-w-none">
                    <section className="mb-8 md:mb-12">

                        {/* Publication date */}
                        <div className={`${montserrat.className} text-sm sm:text-base md:text-lg py-3 md:py-4 text-[#2E0A49]`}>
                            1 Mar 2025
                        </div>

                        {/* Policy content with responsive text sizing */}
                        <div className="text-base md:text-lg space-y-6">

                            <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                                Introduction
                            </h3>
                            <p>
                                Welcome to Haatak! We are Unibridg Assets and Vault Private Limited., located at 455 D, 1st Floor, Eshaan Arcade, REMCO BHEL Layout, Rajarajeshwari Nagar, Bengaluru - 560098. Your privacy is important to us. We deeply appreciate your trust and are committed to safeguarding your privacy.
                            </p>
                            <p>
                                This policy explains how we collect, use, and protect your personal information when you visit our website, WAP site, or mobile applications. By using our services, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our website or apps. Note that we may update this policy occasionally, so please check it regularly.
                            </p>

                            <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                                General Information
                            </h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><span className="font-semibold">No Selling or Renting:</span> We do not sell, share, or rent your personal information to third parties. We will not use your email address or phone number for unsolicited messages.</li>
                                <li><span className="font-semibold">Statistical Data:</span> We may share general statistics about our Customers, such as visitor numbers or purchase types, but this information will not personally identify you.</li>
                                <li><span className="font-semibold">Legal Requests:</span> We may disclose your personal information if required by law or if a legal request complies with regulations.</li>
                            </ul>

                            <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                                What We Collect
                            </h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><span className="font-semibold">Personal Information:</span> This includes your name, address, phone number, email, payment details, and any other information you provide when using our services.</li>
                                <li><span className="font-semibold">Technical Data:</span> We may collect information about your internet connection, IP address, and browsing behavior.</li>
                            </ul>

                            <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                                How We Use Your Information
                            </h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><span className="font-semibold">Service Provision:</span> To fulfill your requests for our products and services.</li>
                                <li><span className="font-semibold">Communication:</span> To send you updates, offers, and information about our services.</li>
                                <li><span className="font-semibold">Customization:</span> To tailor our services to your preferences and interests.</li>
                                <li><span className="font-semibold">Security:</span> To detect and prevent fraud and other illegal activities.</li>
                                <li><span className="font-semibold">Feedback:</span> Occasionally, we may ask you to participate in surveys to improve our services.</li>
                            </ul>

                            <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                                Cookies
                            </h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><span className="font-semibold">What Are Cookies:</span> Cookies are small files stored on your device to help us remember your preferences and improve your browsing experience.</li>
                                <li><span className="font-semibold">Usage:</span> We use cookies to enhance your experience on our site. Cookies do not collect personal information unless you have provided it previously.</li>
                                <li><span className="font-semibold">Third Parties:</span> We may share aggregated cookie data with third parties.</li>
                            </ul>

                            <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                                Links to Other Websites
                            </h3>
                            <p>
                                Our website may contain links to other sites. We are not responsible for their privacy practices or content.
                            </p>

                            <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                                Security
                            </h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><span className="font-semibold">Protection Measures:</span> We implement strict security measures to safeguard your information from unauthorized access or misuse.</li>
                                <li><span className="font-semibold">Secure Access:</span> When you access or update your account information, we use secure servers to ensure your data is protected.</li>
                            </ul>

                            <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                                Your Consent
                            </h3>
                            <p>
                                By using Haatak, you consent to our collection, use, and sharing of your information as described in this Privacy Policy.
                            </p>

                            <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                                Contact Us
                            </h3>
                            <p>
                                If you have any questions about our privacy practices and terms, please contact us at our corporate office:
                            </p>
                            <address className="not-italic mt-3">
                                #558, 9th Cross, 3rd Phase, J P Nagar, Bengaluru 560078
                            </address>

                            <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                                Policy Changes
                            </h3>
                            <p>
                                Haatak reserves the right to amend this privacy policy at any time without prior notice. Changes will be posted on our website, and it is the customer’s responsibility to review the policy regularly.
                            </p>

                            <p className="mt-8 italic">
                                Thank you for trusting Haatak with your information.
                            </p>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    )
}

export default PrivacyPolicyPage