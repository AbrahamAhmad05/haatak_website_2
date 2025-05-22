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
      answer: "No, each user is allowed to register only one account. Multiple accounts are not permitted as per our terms of service."
    },
    {
      question: "Is my personal information safe on BookurGold?",
      answer: "Yes, BookurGold uses advanced encryption and security protocols to protect your data, ensuring that your information remains private and secure."
    },
    {
      question: "What happens if I forget my password?",
      answer: "You can reset your password by clicking on “Forgot Password” on the login screen. A reset link will be sent to your registered email or mobile number."
    },
    {
      question: "Can I update my KYC information after registration?",
      answer: "Yes, you can update your KYC details in the app under the 'Profile' section. Ensure that your documents meet the required criteria."
    },
    {
      question: "What documents do I need for KYC verification in BookurGold APP?",
      answer: "You will need a government-issued ID (such as Aadhar, PAN card, Voter ID or Driving Licence) and a selfie."
    },
  ];

  return (
    <div className={`${montserrat.className} w-full pt-16 pb-40 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32`}>
      <div className="text-center mb-10 md:mb-16">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2E0A49]">
          Frequently Asked Questions
        </h3>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-4xl xl:max-w-5xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-[#E39A35] rounded-xl px-4 sm:px-6 py-2 scroll-mt-28 data-[state=open]:border-[#D3A36D] data-[state=open]:bg-[#FFD8AE10]"
          >
            <AccordionTrigger className={`${gilroy_semibold.className} hover:no-underline text-left py-3`}>
              <span className="text-lg sm:text-xl lg:text-2xl text-[#2E0A49]">{item.question}</span>
            </AccordionTrigger>

            <AccordionContent className={`${montserrat.className} text-[#2E0A49] text-base sm:text-lg lg:text-xl pb-6 pr-2 sm:pr-8`}>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}

        {/* Add a visible spacer at the end to ensure nothing gets hidden */}
        <div className="h-20 md:h-32" />
      </Accordion>
    </div>
  );
};

export default FAQSection;
