"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "How can HPC benefit financial organizations?",
    answer: "HPC can accelerate complex financial models, large-scale analytics, risk calculations, and other compute-intensive workloads."
  },
  {
    question: "Can DenseFusion support financial AI workloads?",
    answer: "Yes. We can build and optimize infrastructure for AI-driven analytics, forecasting, fraud detection, and other financial applications."
  },
  {
    question: "Can you help optimize existing financial computing environments?",
    answer: "Yes. We can assess existing infrastructure and optimize workloads, software stacks, and resource utilization."
  },
  {
    question: "What financial workloads can benefit from HPC?",
    answer: "Risk modeling, financial forecasting, fraud detection, portfolio optimization, algorithmic analytics, and large-scale data processing can all benefit from HPC."
  },
  {
    question: "Can financial computing environments scale?",
    answer: "Yes. Our solutions are designed to scale with growing datasets, workloads, and computational requirements."
  }
];

export default function FinanceFAQ() {
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
                <span className="text-black block mb-1">Frequently</span>
                <span className="text-black block mb-1">Asked</span>
                <span className="text-[#1b8e44] block">Questions</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full md:w-2/3">
            <ScrollReveal delay={0.2}>
              <div className="w-full">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`border-b border-gray-200 last:border-0 ${index !== 0 ? 'mt-4' : ''}`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
                    >
                      <span className="text-lg font-medium text-gray-900 group-hover:text-[#1b8e44] transition-colors pr-6">
                        {faq.question}
                      </span>
                      <span className="text-gray-400 flex-shrink-0 transition-transform duration-300">
                        {openIndex === index ? (
                          <span className="text-2xl font-light">-</span>
                        ) : (
                          <span className="text-2xl font-light">+</span>
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
