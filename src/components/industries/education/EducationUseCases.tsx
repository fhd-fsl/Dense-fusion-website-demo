"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const useCases = [
  {
    title: "Scientific Simulations",
    desc: "Run complex computational models for research and experimentation.",
  },
  {
    title: "AI Research",
    desc: "Train and evaluate advanced AI and machine learning models at scale.",
  },
  {
    title: "Genomics & Bioinformatics",
    desc: "Process large genomic datasets to support biological research.",
  },
  {
    title: "Computational Science",
    desc: "Enable researchers to solve complex scientific and mathematical problems.",
  },
  {
    title: "Data-Intensive Research",
    desc: "Analyze massive datasets generated through experiments and research programs",
  },
  {
    title: "Academic HPC",
    desc: "Provide scalable computing environments for universities, research centers, and academic teams.",
  },
];

export default function EducationUseCases() {
  return (
    <section className="bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Custom SVG Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/industries/education/Section 3_ Our Expertise.svg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>

      <div className="mx-auto max-w-[1200px] w-full px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-[36px] md:text-[48px] font-semibold text-white mb-4 tracking-tight">
              Education & Research Use Cases
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              Accelerating Discovery Through Advanced Computing
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {useCases.map((useCase, index) => {
            return (
              <ScrollReveal key={index} delay={0.1 * index}>
                <div className="relative w-full h-auto lg:h-[200px] cursor-pointer group lg:[perspective:1000px]">
                  <div className="w-full h-full transition-transform duration-500 lg:[transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)]">
                    
                    {/* Front Face (Always visible on mobile, front of card on desktop) */}
                    <div className="lg:absolute lg:inset-0 lg:[backface-visibility:hidden] bg-[#141414] flex flex-col items-center justify-center p-6 lg:p-6 rounded-[4px] border border-gray-800 transition-colors group-hover:bg-[#1a1a1a]">
                      <h3 className="text-[#6DC27F] text-[22px] md:text-[24px] font-medium text-center tracking-tight lg:mb-0">
                        {useCase.title}
                      </h3>
                      {/* Mobile Description */}
                      <p className="text-gray-300 text-[15px] md:text-[17px] text-center leading-relaxed mt-4 block lg:hidden">
                        {useCase.desc}
                      </p>
                    </div>

                    {/* Back Face (Desktop only hover state) */}
                    <div className="hidden lg:flex absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#1c1c1c] items-center justify-center p-8 rounded-[4px] border border-[#2a2a2a] shadow-inner shadow-black/50">
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
