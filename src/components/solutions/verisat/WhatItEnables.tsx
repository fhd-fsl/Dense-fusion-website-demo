import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const capabilities = [
  {
    icon: "/assets/solutions/verisat/Seedling-Fill Streamline Remix-Fill.svg",
    title: "Plantation Management",
    description: "Organize plantation sites across organizations, regions, categories, and individual locations.",
  },
  {
    icon: "/assets/solutions/verisat/Satellite Streamline Ultimate.svg",
    title: "Satellite & Drone Analysis",
    description: "Analyze satellite and drone imagery to track green coverage and plantation conditions.",
  },
  {
    icon: "/assets/solutions/verisat/Energy-Program-Time-Used Streamline Rounded-Streamline-Material-Free.svg",
    title: "Tree Survival Monitoring",
    description: "Track species, planting counts, dates, and changes in plantation coverage over time.",
  },
  {
    icon: "/assets/solutions/verisat/carbon stock estimation.svg",
    title: "Carbon Stock Estimation",
    description: "Estimate site and species carbon using IPCC methods and age-adjusted biomass models.",
  },
  {
    icon: "/assets/solutions/verisat/Warranty-Badge-Highlight Streamline Flex.svg",
    title: "MRV Evidence",
    description: "Maintain GPS records, photos, and MRV maps to support plantation verification.",
  },
  {
    icon: "/assets/solutions/verisat/Threat-Document Streamline Core.svg",
    title: "Confidence & Anomalies",
    description: "Identify spatial anomalies and confidence ratings to strengthen monitoring and reporting.",
  },
];

export default function WhatItEnables() {
  return (
    <section className="bg-[#1b7948] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              What VERISAT Enables
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Intelligent Monitoring For Tree-Planting Programs
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg h-full transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-lg bg-[#eaf4ed]">
                  <Image src={item.icon} alt={item.title} width={24} height={24} />
                </div>
                <h3 className="text-xl font-bold text-secondaryBlack mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
