"use client";

import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Solutions() {
  return (
    <section className="bg-[#080808] py-24 text-white">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Solutions We worked on
            </h2>
            <p className="text-gray-400 max-w-3xl text-sm md:text-base leading-relaxed mb-8">
              Our products harness advanced GIS technologies to provide accurate, real-time
              insights. By integrating satellite imagery with robust analytics, they enable long-
              term monitoring of environmental and urban transformations.
            </p>
            <button className="group inline-flex items-center justify-center overflow-hidden rounded-[4px] bg-gradient-to-r from-lightGreen to-gradientGreen1 px-6 py-2.5 text-sm md:text-base font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90">
              View All Solutions
            </button>
          </div>
        </ScrollReveal>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[500px]">
          {/* Main Case Study (PlantX) */}
          <div className="flex-1 bg-gradient-to-br from-gradientGreen1 from-15% via-gradientGreen2 via-55% to-lightGreen rounded-[4px] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
            <ScrollReveal direction="up" delay={0.2} className="h-full flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <Image src="/assets/home-page/solutions/earth-refresh.svg" alt="Earth" width={48} height={48} />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">PlantX</h3>
              </div>
              
              <div className="mt-8 md:mt-0 max-w-[90%]">
                <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8">
                  PlantX is an advanced geospatial platform that analyzes high-
                  resolution satellite imagery to track and visualize urban land
                  cover changes. Using Islamabad as a case study, it uncovers a
                  20-year increase in built-up areas and loss of green spaces,
                  providing critical insights for sustainable urban planning.
                </p>
                
                <button className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300">
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar Nav 1 (Serena Green) */}
          <div className="w-full md:w-24 lg:w-32 bg-white rounded-[4px] py-8 px-4 flex flex-col items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors shadow-lg">
            <ScrollReveal direction="up" delay={0.3} className="h-full flex flex-col items-center justify-between">
              <div className="text-[#1b8e44] mb-8 mt-4">
                <Image src="/assets/home-page/solutions/farm-spout.svg" alt="Leaf" width={32} height={32} />
              </div>
              
              <div className="flex-1 flex items-end justify-center pb-8">
                <span 
                  className="text-black font-bold text-xl md:text-2xl whitespace-nowrap"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  Serena Green
                </span>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Sidebar Nav 2 (Carbon Eye) */}
          <div className="w-full md:w-24 lg:w-32 bg-white rounded-[4px] py-8 px-4 flex flex-col items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors shadow-lg">
            <ScrollReveal direction="up" delay={0.4} className="h-full flex flex-col items-center justify-between">
              <div className="text-[#1b8e44] mb-8 mt-4">
                <Image src="/assets/home-page/solutions/eye-streamline.svg" alt="Eye" width={32} height={32} />
              </div>
              
              <div className="flex-1 flex items-end justify-center pb-8">
                <span 
                  className="text-black font-bold text-xl md:text-2xl whitespace-nowrap"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  Carbon Eye
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
