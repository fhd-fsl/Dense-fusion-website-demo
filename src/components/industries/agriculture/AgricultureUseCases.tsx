"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const useCases = [
  {
    title: "Crop Health Monitoring",
    desc: "Identify crop conditions and changes using AI and remote sensing data.",
  },
  {
    title: "Precision Farming",
    desc: "Use data-driven insights to optimize field-level decisions and resource use",
  },
  {
    title: "Yield Forecasting",
    desc: "Analyze historical and environmental data to support production planning.",
  },
  {
    title: "Satellite Analysis",
    desc: "Process large volumes of satellite imagery to monitor agricultural landscapes",
  },
  {
    title: "Resource Optimization",
    desc: "Use analytics to improve water, soil, and resource management",
  },
  {
    title: "Environmental Intelligence",
    desc: "Combine climate and agricultural data for better planning and sustainability",
  },
];

export default function AgricultureUseCases() {
  return (
    <section className="bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Custom SVG Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/industries/agriculture/Section 3_ Our Expertise.svg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>

      <div className="mx-auto max-w-[1200px] w-full px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-[36px] md:text-[48px] font-semibold text-white mb-4 tracking-tight">
              Agriculture Use Cases
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              Turning Agricultural Data into Actionable Insights
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {useCases.map((useCase, index) => {
            return (
              <ScrollReveal key={index} delay={0.1 * index}>
                <div className="relative w-full h-[180px] md:h-[200px] cursor-pointer group [perspective:1000px]">
                  <div className="w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    
                    {/* Front Face */}
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-[#141414] flex items-center justify-center p-6 rounded-[4px] border border-gray-800 transition-colors group-hover:bg-[#1a1a1a]">
                      <h3 className="text-[#6DC27F] text-[22px] md:text-[24px] font-medium text-center tracking-tight">
                        {useCase.title}
                      </h3>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#1c1c1c] flex items-center justify-center p-8 rounded-[4px] border border-[#2a2a2a] shadow-inner shadow-black/50">
                      <p className="text-gray-300 text-[15px] md:text-[17px] text-center leading-relaxed">
                        {useCase.desc}
                      </p>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
