"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const outcomes = [
  "Faster Data Processing",
  "Accelerated Intelligence",
  "Improved Situational Awareness",
  "Scalable Computing Capacity",
  "Faster Simulation & Analysis",
  "More Efficient AI Workloads",
];

export default function GovernmentOutcomes() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-[36px] md:text-[48px] font-bold text-black leading-[1.25] mb-4 tracking-tight">
              Key Outcomes
            </h2>
            <h3 className="text-[20px] md:text-[24px] font-medium bg-gradient-to-r from-lightGreen to-[#006D40] text-transparent bg-clip-text mb-4 inline-block">
              Computing Power That Supports Mission Success
            </h3>
            <p className="text-gray-500 text-lg max-w-3xl">
              We help government organizations turn complex computational challenges into measurable operational advantages.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {outcomes.map((text, index) => (
              <div
                key={index}
                className="flex items-center px-5 py-4 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-lg transition-transform hover:-translate-y-0.5 duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-lightGreen to-[#006D40] flex items-center justify-center mr-4 shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-[17px] md:text-[18px]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
