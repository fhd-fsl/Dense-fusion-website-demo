"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutionsData = [
  {
    id: 'serenagreen',
    title: 'Serena Green',
    icon: '/assets/solutions/ogdcl/tree.svg',
    description: 'Serena Green combines satellite Earth observation, GIS, AI, and carbon modeling to monitor forests, afforestation, and environmental impact- bringing geospatial and ESG intelligence into one platform.',
    link: '/solutions/serenagreen'
  },
  {
    id: 'ogdcl',
    title: 'OGDCL',
    icon: '/assets/solutions/verisat/Seedling-Fill Streamline Remix-Fill.svg',
    description: 'OGDCL’s platform manages plantation and reforestation. It combines geospatial mapping and satellite imagery with plantation analytics and carbon monitoring.',
    link: '/solutions/ogdcl'
  },
  {
    id: 'verisat',
    title: 'VERISAT',
    icon: '/assets/solutions/agrovia/Network-Pin Streamline Ultimate.svg',
    description: 'VERISAT is a tree-plantation monitoring and carbon-stock reporting platform that combines satellite and drone imagery, multi-temporal analysis, carbon estimation, and MRV capabilities to provide verifiable insights into plantation outcomes.',
    link: '/solutions/verisat'
  },
  {
    id: 'supercomputers',
    title: 'Supercomputers',
    icon: '/assets/solutions/supercomputers/Database-Server-2 Streamline Core.svg',
    description: 'Teraforge is an enterprise storefront, 3D configurator, and quotation platform for refurbished high-performance computing hardware, including AI workstations, GPU servers, and clusters.',
    link: '/solutions/supercomputers'
  },
  {
    id: 'agrovia',
    title: 'AGROVIA',
    icon: '/assets/home-page/solutions/farm-spout.svg',
    description: 'AGROVIA/FAMS connects AI crop intelligence, agronomists, managers, field agents, and farmers through an edge-capable advisory and service platform.',
    link: '/solutions/agrovia'
  },
  {
    id: 'nazar',
    title: 'Nazar',
    icon: '/assets/solutions/nazar/Drone-2 Streamline Micro.svg',
    description: 'Nazar is a real-time tactical command, control, and aerial reconnaissance platform for autonomous UAV fleets, with live telemetry, geospatial visualization, sensor data, and edge alerts.',
    link: '/solutions/nazar'
  }
];

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .custom-collapsed-padding {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
          .custom-title-container {
            flex: none !important;
            margin-top: auto !important;
            justify-content: center !important;
          }
        }
        @media (min-width: 1024px) {
          .custom-collapsed-padding {
            padding-top: 3rem !important;
          }
        }
      `}</style>
      <section className="bg-[#080808] py-24 text-white">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Solutions We Worked On
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
                    isActive ? "md:flex-[3] lg:flex-[4] flex-1 min-h-[400px] md:min-h-0" : ""
                  }`}
                  style={isActive ? undefined : { flex: "0 0 80px" }}
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
                      className={`absolute inset-0 flex flex-col h-full justify-between p-6 sm:p-8 lg:p-10 transition-opacity duration-500 w-full md:max-w-sm lg:max-w-md xl:max-w-lg shrink-0 ${
                        isActive ? "opacity-100 pointer-events-auto delay-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <div>
                        <div className="mb-6">
                          <span
                            className="inline-block bg-white w-12 h-12"
                            style={{
                              maskImage: `url('${solution.icon}')`,
                              WebkitMaskImage: `url('${solution.icon}')`,
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
                        <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl font-medium">
                          {solution.description}
                        </p>
                        
                        <Link href={solution.link} className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300 text-white">
                          View Solution
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Collapsed Content */}
                    <div 
                      className={`custom-collapsed-padding absolute inset-0 flex h-full flex-row md:flex-col items-center justify-between p-4 md:px-2 lg:px-4 xl:px-6 transition-opacity duration-500 ${
                        isActive ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto delay-100"
                      }`}
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0 flex items-center justify-center w-full">
                        <span
                          className="inline-block bg-gradient-to-br from-[#006D40] to-[#6DC27F] w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10"
                          style={{
                            maskImage: `url('${solution.icon}')`,
                            WebkitMaskImage: `url('${solution.icon}')`,
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
                      <div className="custom-title-container flex flex-row items-center justify-start md:justify-center w-full ml-6 md:ml-0">
                        <span 
                          className="text-gray-500 font-bold text-xl md:text-2xl lg:text-3xl whitespace-nowrap hidden md:block tracking-wide rotate-180"
                          style={{ writingMode: 'vertical-rl' }}
                        >
                          {solution.title}
                        </span>
                        <span className="text-gray-500 font-bold text-xl whitespace-nowrap md:hidden">
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
    </>
  );
}
