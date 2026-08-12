"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const useCases = [
  {
    title: "Intelligence & Analysis",
    desc: "Accelerate the processing of complex intelligence data to support faster analysis and informed decisions.",
  },
  {
    title: "Surveillance & Monitoring",
    desc: "Analyze imagery, video, and sensor feeds to enhance monitoring and situational awareness.",
  },
  {
    title: "Geospatial Analysis",
    desc: "Process large-scale geographic and satellite datasets for intelligence and operational planning.",
  },
  {
    title: "Mission Simulation",
    desc: "Use HPC-powered simulations to evaluate scenarios, test strategies, and support mission planning.",
  },
  {
    title: "Threat Detection",
    desc: "Leverage AI and computer vision to identify patterns and potential threats across large datasets.",
  },
  {
    title: "Operational Analytics",
    desc: "Combine AI and HPC to transform complex operational data into actionable insights.",
  },
];

export default function ClimateUseCases() {
  return (
    <section className="bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Custom SVG Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/industries/climate/Section 3_ Our Expertise.svg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>

      <div className="mx-auto max-w-[1200px] w-full px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-[36px] md:text-[48px] font-semibold text-white mb-4 tracking-tight">
              Climate Use Cases
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              Computing Power That Supports Mission Success
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
