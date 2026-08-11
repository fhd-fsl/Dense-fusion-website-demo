"use client";

import ScrollReveal from "@/components/ScrollReveal";
import WaveParticles from "@/components/animations/WaveParticles";
import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand your industry challenges, workloads, and business objectives.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Develop a tailored AI and HPC architecture around your requirements.",
  },
  {
    num: "03",
    title: "Build & Deploy",
    desc: "Implement and integrate scalable, production-ready solutions.",
  },
  {
    num: "04",
    title: "Optimize",
    desc: "Continuously improve performance, efficiency, and business outcomes.",
  },
];

export default function Approach() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="bg-[#050505] py-24 md:py-32 relative overflow-hidden">
      {/* Background Pixelated Wave */}
      <div className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none opacity-60">
        <WaveParticles />
      </div>

      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-[32px] md:text-[40px] font-medium leading-[1.2] tracking-tight mb-6">
                <span className="bg-gradient-to-r from-[#6DC27F] to-[#4fa06d] bg-clip-text text-transparent font-medium">Our Approach</span>
                <br />
                <span className="text-white mt-2 block">From Industry Challenges to Intelligent Solutions</span>
              </h2>
            </div>
            
            <div className="md:max-w-md pt-2 md:pt-12">
              <p className="text-gray-400 text-base leading-relaxed">
                A structured approach that combines industry knowledge, advanced computing, and AI to deliver solutions tailored to your specific needs.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-[#111111] border border-gray-800 rounded-xl p-10 md:p-16 relative overflow-hidden">
            {/* Soft background glow inside the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#6DC27F] opacity-[0.03] blur-[100px] pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {steps.map((step, index) => {
                const isActive = hoveredStep === index;
                
                return (
                  <div 
                    key={index} 
                    className="flex flex-col group cursor-pointer"
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Number */}
                    <div className="mb-6">
                      <span className={`text-[42px] font-medium transition-colors duration-300 ${isActive ? 'text-[#6DC27F]' : 'text-white'}`}>
                        {step.num}
                      </span>
                    </div>

                    {/* Line & Dots */}
                    <div className="mb-8 flex flex-col items-center w-fit ml-2">
                      <div className={`w-[6px] h-[6px] rounded-full transition-colors duration-300 ${isActive ? 'bg-[#6DC27F]' : 'bg-gray-700'}`}></div>
                      <div className={`w-[2px] h-12 transition-colors duration-300 ${isActive ? 'bg-[#6DC27F]' : 'bg-gray-700'}`}></div>
                      <div className="w-[6px] h-[6px] rounded-full bg-[#6DC27F]"></div>
                    </div>

                    {/* Title & Desc */}
                    <div>
                      <h3 className={`text-xl font-medium mb-3 transition-colors duration-300 ${isActive ? 'text-[#6DC27F]' : 'text-white'}`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed pr-4">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
