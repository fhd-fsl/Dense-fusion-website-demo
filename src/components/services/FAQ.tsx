"use client";

import { useState } from "react";
import ScrollReveal from "../ScrollReveal";

const faqs = [
  {
    question: "What industries does DenseFusion serve?",
    answer: "We work with government organizations, research institutions, enterprises, healthcare providers, educational organizations, and technology companies across a wide range of industries."
  },
  {
    question: "Can you build custom AI solutions?",
    answer: "Yes, we specialize in building bespoke AI models and pipelines tailored specifically to your organization's unique challenges, datasets, and operational goals."
  },
  {
    question: "Do you provide end-to-end HPC deployment?",
    answer: "Absolutely. We manage everything from initial cluster design and specialized hardware procurement to software stack optimization and 24/7 post-deployment support."
  },
  {
    question: "Can DenseFusion modernize existing infrastructure?",
    answer: "Yes, we can evaluate your current compute environments and implement strategic upgrades, hybrid-cloud integrations, and software tuning to drastically improve performance and efficiency."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Heading */}
          <div className="w-full md:w-1/3">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1]">
                <span className="text-black block mb-1">Frequently Asked</span>
                <span className="text-[#1b8e44] block">Questions</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full md:w-2/3">
            <ScrollReveal delay={0.2}>
              <div className="bg-[#f9f9f9] rounded-xl p-6 md:p-8 lg:p-12">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`border-b border-gray-200 last:border-0 ${index !== 0 ? 'mt-4' : ''}`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
                    >
                      <span className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-[#1b8e44] transition-colors pr-6">
                        {faq.question}
                      </span>
                      <span className="text-gray-400 flex-shrink-0 transition-transform duration-300">
                        {openIndex === index ? (
                          <svg className="w-5 h-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </span>
                    </button>
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed pr-8 md:pr-12 pb-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
