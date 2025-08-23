import { gilroy_semibold, gotham, montserrat, original, poppins } from '@/lib/font'
import Image from 'next/image'

export const metadata = {
    title: "Haatak Shipping & Return Policy | Secure & Transparent Process",
    description: 'Read Haatak&apos;s Shipping & Return Policy for secure, transparent digital gold orders. Learn about deliveries, order rules, inspections, and customer care.',
    keywords: 'Read Haatak Shipping & Return Policy for secure, transparent digital gold orders. Learn about deliveries, order rules, inspections, and customer care. digital gold customer support',
}

const PrivacyPolicyPage = () => {
    return (
        <div className={`${poppins.className} bg-white min-h-screen`}>
            {/* Hero image with responsive sizing */}
            <div className='h-full md:h-screen flex flex-col gap-4 justify-center items-center text-center text-[#2E0A49] pt-48 md:pt-24 pb-24 md:pb-2'>

                <h1 className={`${original.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-[700] md:mb-6 `}>
                    Shipping & Return
                </h1>
                <h6 className={`${gotham.className}  capitalize text-xl md:3xl font-medium md:px-72`}>Shipping & Return Policy for Haatak</h6>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-24 max-w-4xl">
                <article className="prose max-w-none">
                    <section className="mb-8 md:mb-12">

                        {/* Publication date */}
                        <div className={`${montserrat.className} text-sm sm:text-base md:text-lg py-3 md:py-4 text-[#2E0A49]`}>
                            23 August 2025
                        </div>

                        {/* Policy content with responsive text sizing */}
                        <div className="text-base md:text-lg space-y-6">

                            <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                                Introduction
                            </h3>
                            <p>
                                Welcome to Haatak! We are GrowYuga Fintech Private Limited, based at #558, 2nd Floor, 3rd Phase, JP Nagar, Bengaluru - 560078. We value your trust and are dedicated to providing a transparent and fair refund process. Your satisfaction is important to us, and we are committed to handling refunds and exchanges with care and clarity.
                            </p>
                            <p>
                                This policy outlines the conditions for refunds and exchanges when you use our services through our website, WAP site, or mobile applications. By placing an order with us, you agree to the terms outlined in this Refund Policy. If you do not agree with these terms, please refrain from using our services. Please be aware that we may update this policy from time to time, so we encourage you to review it periodically.
                            </p>

                            <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                                Order Confirmation:
                            </h3>
                            <p>
                            Final Orders: Once you confirm an order for purchase or sale, it cannot be refunded or canceled. All orders are final after your confirmation.
                            Order Changes: No changes can be made to your order after it has been confirmed. This includes alterations to delivery address or product specifications.
                            Order Verification: We may contact you to verify details of your order before processing. Any discrepancies or inaccuracies must be resolved prior to confirmation.
                            Order Processing Time: Orders will be processed according to the availability of products and current business operations. Haatak is not responsible for any delays in processing time that occur after order confirmation.
                            </p>

                            <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                                Delivery Process:
                            </h3>
                            <p>
                            Registered Address : Deliveries are made only to the address you’ve registered. Please have proof of identity ready at the time of delivery for verification.
                            Missed Delivery: If no one is available to receive the package, we will attempt delivery once more. After this, the package will be returned to us, and we will credit your account with the equivalent amount of gold. Shipping charges will apply for re-delivery requests.
                            Force Majeure: Haatak is not responsible for any delays or inability to fulfill orders due to circumstances beyond our control, including but not limited to natural disasters, strikes, or technical failures.
                            </p>

                            <p>
                            Customer Responsibility : The delivery will be made only to the registered recipient and will require OTP verification before handover. It is the customer&apos;s responsibility to ensure that the delivery address is correct and is available to receive the package. Haatak is not liable for any loss or delay caused by incorrect address details or the recipient&apos;s unavailability
                            </p>

                            <h3 className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] mt-6 mb-2`}>
                            Package Inspection:
                            </h3>
                            <p>
                            Check Upon Delivery: Please inspect the package upon delivery to ensure it hasn’t been tampered with and is in good condition. Once you accept the delivery, returns and refunds are not possible.
                            </p>
                            <p>
                            Quality Assurance: All our products are 100% certified, and we ensure their quality. If you encounter any issues, please contact us at support@Haatak.com. We will investigate and address any concerns.
                            </p>
                            <p>
                            Refunds and Exchanges: Refunds and exchanges are not permitted for any items once the order is confirmed and delivery is accepted. Any requests for refunds due to perceived defects or dissatisfaction after delivery will be handled on a case-by-case basis and may require additional verification.
                            </p>
                            <p>
                            Transaction Fees: If the refund or exchange is due to an error on Haatak&apos;s part, we will cover any associated transaction fees. However, if the request is not due to a mistake on our part, any transaction fees or costs incurred will be paid by the customer.
                            </p>
                            <p>
                            If you have any questions about our refund policy terms, please contact us at our corporate office:
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

export default PrivacyPolicyPage
