"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

import DefenseAnimation from "@/components/animations/industries/DefenseAnimation";
import GovernmentAnimation from "@/components/animations/industries/GovernmentAnimation";
import AgricultureAnimation from "@/components/animations/industries/AgricultureAnimation";
import ClimateAnimation from "@/components/animations/industries/ClimateAnimation";
import EducationAnimation from "@/components/animations/industries/EducationAnimation";
import FinanceAnimation from "@/components/animations/industries/FinanceAnimation";

const industries = [
  {
    id: "defense",
    label: "Defense",
    title: "Accelerating Mission-Critical Computing",
    description: "Support complex government and defense workloads with secure, scalable AI and HPC solutions built for advanced analytics, simulation, intelligence, and large-scale data processing.",
    points: [
      "AI-powered surveillance",
      "Geospatial intelligence",
      "Threat detection & analysis",
    ],
  },
  {
    id: "government",
    label: "Government",
    title: "Empowering Public Sector Innovation",
    description: "Drive modernization and data-driven policy making with secure, scalable high-performance infrastructure designed for civilian agencies and public services.",
    points: [
      "Smart city infrastructure",
      "Secure data sharing",
      "Policy simulation models",
    ],
  },
  {
    id: "agriculture",
    label: "Agriculture",
    title: "Cultivating Data-Driven Agriculture",
    description: "Optimize crop yields, monitor resources, and predict environmental impacts using advanced AI models and high-performance computing.",
    points: [
      "Precision farming analytics",
      "Crop yield prediction",
      "Supply chain optimization",
    ],
  },
  {
    id: "climate",
    label: "Climate",
    title: "Advancing Environmental Research",
    description: "Model complex climate systems and analyze vast environmental datasets with next-generation simulation and HPC technologies.",
    points: [
      "High-resolution weather modeling",
      "Carbon footprint tracking",
      "Disaster prediction algorithms",
    ],
  },
  {
    id: "education",
    label: "Education & Research",
    title: "Fueling Academic Discovery",
    description: "Accelerate scientific breakthroughs with powerful computing environments tailored for universities and research institutions.",
    points: [
      "Bioinformatics & genomics",
      "Quantum computing research",
      "High-throughput data analysis",
    ],
  },
  {
    id: "finance",
    label: "Banking & Finance",
    title: "Transforming Financial Services",
    description: "Enhance risk management, detect fraud in real-time, and automate complex financial modeling using robust AI and HPC architectures.",
    points: [
      "Algorithmic trading optimization",
      "Real-time fraud detection",
      "Risk & compliance analytics",
    ],
  },
];

export default function IndustriesWeServe() {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  const activeContent = industries.find((i) => i.id === activeTab) || industries[0];

  const renderAnimation = () => {
    switch (activeTab) {
      case "defense": return <DefenseAnimation />;
      case "government": return <GovernmentAnimation />;
      case "agriculture": return <AgricultureAnimation />;
      case "climate": return <ClimateAnimation />;
      case "education": return <EducationAnimation />;
      case "finance": return <FinanceAnimation />;
      default: return null;
    }
  };

  return (
    <section className="bg-[#f9f9f9] py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-[36px] md:text-[48px] font-semibold text-[#006D40] mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto">
              From scientific research and climate modeling to intelligent surveillance and precision agriculture, our solutions are designed to address the unique demands of each industry.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`px-5 py-2.5 rounded text-[15px] font-semibold transition-colors duration-300 border ${
                  activeTab === industry.id
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                }`}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-8 md:p-16 flex flex-col md:flex-row gap-12 md:gap-16 items-center min-h-[450px]">
            
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-[32px] md:text-[42px] font-semibold text-black leading-[1.1] mb-6 tracking-tight">
                {activeContent.title}
              </h3>
              <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
                {activeContent.description}
              </p>

              <div className="flex flex-col gap-4">
                {activeContent.points.map((point, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6DC27F] to-[#006D40] flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Content */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square rounded-full bg-transparent flex items-center justify-center overflow-hidden">
                {renderAnimation()}
              </div>
            </div>
            
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
