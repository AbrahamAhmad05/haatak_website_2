// import { montserrat } from '@/lib/font'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { gilroy, gilroy_semibold, montserrat } from '@/lib/font';

const FAQSection = () => {
  const faqItems = [
    {
      question: "How do I create an account on BookurGold?",
      answer: "You can create an account by downloading the BookurGold app from the App Store or Google Play and signing up using your mobile number."
    },
    {
      question: "Can I register multiple accounts?",
      answer: " No, each user is allowed to register only one account. Multiple accounts are not permitted as per our terms of service."
    },
    {
      question: "Is my personal information safe on BookurGold?",
      answer: "Yes, BookurGold uses advanced encryption and security protocols to protect your data, ensuring that your information remains private and secure."
    },
    {
      question: "What happens if I forget my password?",
      answer: "You can reset your password by clicking on &#x201E;Forgot Password&#x201E; on the login screen. A reset link will be sent to your registered email or mobile number."
    },
    {
      question: "Can I update my KYC information after registration?",
      answer: "Yes, you can update your KYC details in the app under the &apos;Profile&apos; section. Ensure that your  documents meet the required criteria."
    },
    {
      question: "What documents do I need for KYC verification in BookurGold APP?",
      answer: "You will need a government-issued ID (such as Aadhar, PAN card, Voter ID or Driving Licence) and a  selfie."
    },
  ];

    return (
        <div className={`${montserrat.className} flex flex-col justify-center items-center w-full py-20`}>
            <div className="text-center mb-12">
                <h3 className='text-2xl md:text-3xl font-bold text-[#2E0A49] text-center'>Frequently Asked Questions</h3>
            </div>
            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full max-w-4xl space-y-4 px-2 ">
                {faqItems.map((item, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border border-[#E39A35] rounded-xl px-6 data-[state=open]:border-[#D3A36D] data-[state=open]:bg-[#FFD8AE10] "
                    >
                        <AccordionTrigger className={`${gilroy_semibold.className} hover:no-underline text-left py-3`}>
                            <span className="text-xl md:text-2xl text-[#2E0A49]">{item.question}</span>
                        </AccordionTrigger>

                        <AccordionContent className={`${montserrat.className} text-[#2E0A49] text-lg pb-4 pr-12`}>
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
                <span className='sr-only'>hey</span>
            </Accordion>
        </div>
    )
}

export default FAQSection