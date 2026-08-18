"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutionsData = [
  {
    id: 'plantx',
    title: 'PlantX',
    icon: '/assets/home-page/solutions/earth-refresh.svg',
    description: 'PlantX is an advanced geospatial platform that analyzes high-resolution satellite imagery to track and visualize urban land cover changes. Using Islamabad as a case study, it uncovers a 20-year increase in built-up areas and loss of green spaces, providing critical insights for sustainable urban planning.',
    link: '#'
  },
  {
    id: 'serena-green',
    title: 'Serena Green',
    icon: '/assets/home-page/solutions/farm-spout.svg',
    description: 'Serena Green is a digital platform developed by Serena Hotels in partnership with WWF and AKRSP to monitor, visualize, and verify large-scale afforestation for carbon offsetting and environmental restoration. Its pilot initiative plants over 600,000 trees across Gilgit-Baltistan, Balochistan, Chitral, Punjab, and Khyber Pakhtunkhwa, advancing the hospitality industry toward net-zero emissions.',
    link: '#'
  },
  {
    id: 'carbon-eye',
    title: 'Carbon Eye',
    icon: '/assets/home-page/solutions/eye-streamline.svg',
    description: "Carbon Eye is a web-based platform that leverages remote sensing, GIS, GeoServer, and advanced deep learning to analyze a decade of NDVI and carbon emission trends in six of the world's most climate-vulnerable cities, delivering critical insights for sustainable urban planning and environmental management.",
    link: '#'
  }
];

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);

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
            <Link 
              href="/solutions"
              className="group inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 px-5 text-sm md:text-base font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90"
            >
              <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                <span className="flex h-11 shrink-0 items-center justify-center text-white">
                  View All Solutions
                </span>
                <span className="flex h-11 shrink-0 items-center justify-center text-white">
                  View All Solutions
                </span>
              </span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Content Layout */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[500px]">
            {solutionsData.map((solution, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={solution.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex overflow-hidden rounded-[4px] cursor-pointer transition-all duration-500 ease-out shadow-lg bg-white ${
                    isActive
                      ? "md:flex-[3] lg:flex-[4] flex-1 min-h-[350px] md:min-h-0"
                      : "md:flex-[0_0_96px] lg:flex-[0_0_128px] flex-[0_0_auto] min-h-[80px] md:min-h-0"
                  }`}
                >
                  {/* Background Gradient Layer for active state */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br from-gradientGreen1 from-15% via-gradientGreen2 via-55% to-lightGreen transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`} 
                  />

                  {/* Hover overlay for inactive state */}
                  <div 
                    className={`absolute inset-0 bg-gray-100 transition-opacity duration-300 ${!isActive ? "opacity-0 group-hover:opacity-100" : "opacity-0"}`} 
                  />

                  <div className="relative z-10 w-full h-full">
                    {/* Expanded Content */}
                    <div 
                      className={`absolute inset-0 flex flex-col h-full justify-between p-8 lg:p-12 transition-opacity duration-500 w-[260px] sm:w-[350px] md:w-[400px] lg:w-[600px] xl:w-[750px] shrink-0 ${
                        isActive ? "opacity-100 pointer-events-auto delay-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <div>
                        <div className="mb-6">
                          <span
                            className="inline-block bg-white w-12 h-12"
                            style={{
                              maskImage: `url(${solution.icon})`,
                              WebkitMaskImage: `url(${solution.icon})`,
                              maskSize: "contain",
                              WebkitMaskSize: "contain",
                              maskRepeat: "no-repeat",
                              WebkitMaskRepeat: "no-repeat",
                              maskPosition: "center",
                              WebkitMaskPosition: "center",
                            }}
                          />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white whitespace-nowrap">{solution.title}</h3>
                      </div>
                      
                      <div className="mt-8 md:mt-0">
                        <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8">
                          {solution.description}
                        </p>
                        
                        <button className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300 text-white">
                          View Case Study
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Collapsed Content */}
                    <div 
                      className={`absolute inset-0 flex h-full flex-row md:flex-col items-center md:items-start justify-between p-8 lg:p-12 transition-opacity duration-500 ${
                        isActive ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto delay-100"
                      }`}
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <span
                          className="inline-block bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 w-8 h-8 md:w-10 md:h-10"
                          style={{
                            maskImage: `url(${solution.icon})`,
                            WebkitMaskImage: `url(${solution.icon})`,
                            maskSize: "contain",
                            WebkitMaskSize: "contain",
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                          }}
                        />
                      </div>
                      
                      {/* Title (Mobile: Horizontal, Desktop: Vertical) */}
                      <div className="flex-1 flex items-center md:items-end justify-start md:justify-start md:pb-8 ml-6 md:ml-0">
                        <span 
                          className="text-black font-bold text-xl md:text-2xl whitespace-nowrap hidden md:block"
                          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                        >
                          {solution.title}
                        </span>
                        <span className="text-black font-bold text-xl whitespace-nowrap md:hidden">
                          {solution.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
