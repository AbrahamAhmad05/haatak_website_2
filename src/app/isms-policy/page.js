import { gilroy_semibold, gotham, montserrat, original, poppins } from '@/lib/font';
import Image from 'next/image';

export const metadata = {
    title: "ISMS Policy | Secure & Encrypted 24K Digital Gold App",
    description: 'Information Security Management System (ISMS) Policy for 24K Digital Gold savings. Learn how we protect data with encryption, audits, and compliance.',
    keywords: '24k gold ISMS policy, digital gold app security, secure digital gold platform, 24k gold data protection, digital gold encryption policy, online gold investment security, information security digital gold, secure gold transactions app, 24k gold privacy and compliance, digital gold risk management, data security in gold apps, encrypted 24k gold savings, cyber security digital gold, digital gold fraud prevention, secure gold purchase app, information security for fintech gold, 24k gold ISMS compliance, digital gold security audits, safe digital gold investments, secure gold savings platform',
}

const TermsConditionsPage = () => {
    return (
        <div className={`${poppins.className} bg-white min-h-screen`}>
            {/* Hero image with responsive sizing */}
            {/* <div className='h-full md:h-screen flex flex-col gap-4 justify-center items-center text-center text-[#2E0A49] pt-48 md:pt-24 pb-24 md:pb-2'>

                <h1 className={`${original.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-[700] md:mb-6 `}>
                    Terms & Conditions
                </h1>
                <h6 className={`${gotham.className}  capitalize text-xl md:3xl font-medium md:px-72`}>Privacy Policy for Haatak</h6>
            </div> */}
            {/* <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden mt-16 md:mt-24 lg:mt-36">
                <Image
                    src="/blog_imgs/terms-conditions.jpg"
                    alt="Terms & Conditions"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                />
            </div> */}

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <article className="prose max-w-none">
                    <section className="mb-8 md:mb-12">
                        {/* Policy title with responsive sizing */}
                        {/* <h1 className={`${gilroy_semibold.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2E0A49] mb-4 md:mb-6 border-l-4 border-[#E39A35] pl-3 md:pl-4`}>
                            Terms & Conditions
                        </h1> */}
                        <div className='h-full md:h-screen flex flex-col gap-4 justify-center items-center text-center text-[#2E0A49] pt-48 md:pt-24 pb-24 md:pb-2'>
                        
                                        <h1 className={`${original.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-[700] md:mb-6 `}>
                                            ISMS POLICY
                                        </h1>
                                        <h6 className={`${gotham.className}  capitalize text-xl md:3xl font-medium md:px-72`}> Information Security Management System Policy for Haatak </h6>
                                    </div>

                        {/* Publication date */}
                        {/* <div className={`${montserrat.className} text-sm sm:text-base md:text-lg py-3 md:py-4 text-[#2E0A49]`}>
                            Terms of Use for Haatak
                        </div> */}

                        {/* Terms content with responsive text sizing */}
                        <div className="text-base md:text-lg space-y-6">
                            {/* <h2 className={`${gilroy_semibold.className} text-xl md:text-2xl text-[#2E0A49] mt-6 mb-3`}>
                                Terms of Use for Haatak
                            </h2> */}
                        <div className={`${montserrat.className} text-sm sm:text-base md:text-lg py-3 md:py-4 text-[#2E0A49]`}>
                           &nbsp;&nbsp; 25 August 2025
                        </div>

                            {/* Section 1: Introduction */}
                            <div className="  pl-4">
                                <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                                     Introduction
                                </h3>
                                 <p>
                                    Welcome to Haatak! We are GrowYuga Fintech Private Limited, located at #558, 2nd Floor, 3rd Phase, JP Nagar, Bengaluru - 560078. We are committed to safeguarding your information with the utmost care and transparency.

                                 </p>
                                <br/>
                                 <p>
                                    Our Information Security Management System (ISMS) policy outlines how we protect the confidentiality, integrity, and availability of all information systems, processing facilities and assets related to our digital services. This includes everything involved in designing, developing, and supporting our digital mobile and web applications. By using our website, mobile applications, or other services, you agree to the terms of this policy. We may update this policy from time to time, so please review it periodically to stay informed about how we manage and secure your information.
                                 </p>

                                 <br/>

                                 <p>
                                    Your trust is important to us, and we are dedicated to ensuring the highest standards of information security.

                                 </p>
                                <br/>
                                 <p>
                                    We are committed to:
                                 </p>

                                <ol className="list-decimal pl-5 space-y-3">
                                    <li>
                                        <p> <b>Risk Management:</b> Identifying, assessing, and managing risks that could impact our customers, operations, and critical infrastructure. We will implement appropriate information security controls as part of our risk management process.</p>
                                        
                                    </li>
                                    <li>
                                        <p> <b>Security Awareness:</b> Providing information security training to all employees and fostering a strong security culture through ongoing learning and development programs.</p>
                                    </li>
                                    <li>
                                        <p> <b>Policy Development:</b> Creating and enforcing clear objectives, policies, procedures, and processes to support our ISMS. We define roles and responsibilities to ensure effective security management</p>
                                    </li>
                                    <li>
                                       <p> <b>Partnerships</b> Collaborating with customers, partners, and suppliers to build trust and ensure that all parties, including employees, vendors, and third-party contractors, adhere to our security policies and standards.</p>
                                    </li>
                                    <li>
                                        <p> <b>Legal Compliance:</b> Complying with relevant laws, policies, standards, and regulations related to information security management.</p>
                                    </li>
                                    <li>
                                        <p> <b>Continuous Improvement:</b> Regularly reviewing and improving our ISMS objectives and processes to ensure ongoing effectiveness and adaptation to new challenges.</p>
                                    </li>
                                    <li>
                                        <p> <b>Incident Response and Recovery:</b> Promptly address any information security incidents or breaches. We have established a detailed incident response plan to manage and mitigate potential threats. In the event of a security incident, we will notify affected parties as soon as possible and take all necessary steps to recover and secure the impacted data.</p>
                                    </li>
                                    <li>
                                        <p> <b>Regular Audits and Assessments:</b>  Conduct regular internal and external audits of our information security practices to ensure compliance with our policies and industry standards. These audits help us identify potential vulnerabilities and improve our security measures continuously. We are dedicated to maintaining transparency and accountability in our security practices.</p>
                                    </li>
                                    <li>
                                        <p> <b>Data Encryption and Secure Communication:</b> Employ advanced encryption technologies to protect sensitive data both in transit and at rest. Our secure communication channels ensure that all interactions and transactions on our platform are encrypted and protected from unauthorized access.</p>
                                    </li>
                                    <li>
                                        <p> <b>Third-Party Security Management</b> Requires all third-party vendors and partners comply with our information security standards. We perform thorough security assessments of our third-party partners to ensure they adhere to the same high standards of data protection and security that we uphold.</p>
                                    </li>
                                </ol>
                            </div>

                            {/* Section 2: Definitions */}
                         

                            {/* Section 3: Services */}
                            

                            {/* Section 4: Trustee and Safekeeping */}
                           

                            {/* Section 5: Storage */}
                            

                            {/* Section 6-8: Force Majeure, Termination */}
                            
                            {/* Section 9: Governing Law */}
                            

                            {/* Section 10-12: Account, Orders, Purchase */}
                            

                            {/* Section 13-15: Delivery, Sale, Transfer */}
                            

                            {/* Section 16-19: Fraud, Platform Use, Fees */}
                            

                            {/* Section 20-33: Other Terms */}
                            

                            {/* Section 34-37: Final Sections */}

                            <p>
                                By adhering to these principles, Haatak aims to maintain the highest standards of information security and safeguard our digital operations.

                            </p>

                            <p>
                                If you have any questions about our ISMS policy terms, please contact us at our corporate office:

                            </p>

                             <address>
                            GrowYuga Fintech Private Limited<br />  
                            Haatak  <br /> 
                            #558, 2nd Floor, 3rd Phase, <br /> 
                            JP Nagar, Bengaluru - 560078.<br /> 
                            </address>
                            <p>
                            Policy Changes: Haatak reserves the right to amend this refund policy at any time without prior notice. Changes will be posted on our website, and it is the customer’s responsibility to review the policy regularly.
                            </p>
                            <p>
                            Thank you for your understanding and cooperation!
                            
                            </p>
                            
                        </div>
                    </section>
                </article>
            </div>
        </div>
    )
}

export default TermsConditionsPage;