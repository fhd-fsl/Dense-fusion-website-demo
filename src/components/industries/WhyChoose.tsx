"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  {
    title: "Tailored Solutions",
    desc: "Solutions designed around your industry's unique requirements and workloads.",
  },
  {
    title: "AI + HPC Expertise",
    desc: "Combine intelligent computing with high-performance infrastructure.",
  },
  {
    title: "Data-Driven Insights",
    desc: "Turn complex datasets into actionable intelligence and better decisions.",
  },
  {
    title: "Performance Optimization",
    desc: "Maximize computing resources for faster results and greater efficiency.",
  },
  {
    title: "End-to-End Support",
    desc: "From strategy and design to deployment, optimization, and ongoing support.",
  },
];

export default function WhyChoose() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-[36px] md:text-[48px] font-semibold text-black mb-6 tracking-tight">
              Industry Expertise Meets <span className="text-[#3b9f5e]">Advanced Computing</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-4xl leading-relaxed">
              DenseFusion combines industry-focused problem solving with advanced AI and HPC capabilities to deliver scalable solutions for complex, data-intensive challenges.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {reasons.map((reason, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <ScrollReveal key={index} delay={0.1 * index} className={index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}>
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`p-8 md:p-10 rounded-xl h-full min-h-[220px] flex flex-col border transition-colors duration-300 cursor-pointer ${
                    isHovered
                      ? "bg-gradient-to-br from-[#006D40] to-[#6DC27F] border-transparent text-white shadow-lg"
                      : "bg-white border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] text-black hover:border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isHovered ? 'bg-white' : 'bg-[#006D40]'}`}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke={isHovered ? "#006D40" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300"/>
                      </svg>
                    </div>
                    <h3 className={`text-[20px] md:text-[22px] font-semibold transition-colors duration-300 ${isHovered ? 'text-white' : 'text-black'}`}>
                      {reason.title}
                    </h3>
                  </div>
                  <p className={`text-base leading-relaxed transition-colors duration-300 ${isHovered ? 'text-white/90' : 'text-gray-500'}`}>
                    {reason.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
