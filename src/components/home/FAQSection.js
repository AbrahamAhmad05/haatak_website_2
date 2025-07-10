"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { API_BASE_URL } from '@/config';
import { gilroy_semibold, montserrat } from '@/lib/font';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton'; // Adjust path if needed

const FAQSection = () => {
  const [faqItems, setFaqItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/faqs`);
      setFaqItems(response.data);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${montserrat.className} w-full pt-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32`}>
      <div className="text-center mb-4 md:mb-16">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2E0A49]">
          Got Questions? We’ve Got You Covered.
        </h3>
        <h6 className={`text-lg md:text-2xl text-[#2E0A49] font-bold pt-3 md:pt-6 ${gilroy_semibold.className}`}>
          Clear answers to help you start saving smartly with confidence — because every good decision begins with understanding.
        </h6>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-5xl xl:max-w-6xl mx-auto space-y-4">
        {loading ? (
          // Render 5 skeleton accordion items while loading
          Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="border border-[#E39A35] rounded-xl px-4 sm:px-6 py-4 space-y-3"
            >
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-5 w-full" />
              {/* <Skeleton className="h-5 w-5/6" /> */}
            </div>
          ))
        ) : (
          faqItems.map((item, index) => (
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
          ))
        )}
        <div className="h-6 md:h-12" />
      </Accordion>
    </div>
  );
};

export default FAQSection;