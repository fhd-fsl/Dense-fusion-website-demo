import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const capabilities = [
  {
    icon: "/assets/solutions/serenagreen/What Serena Green Enables icons/Overlay.svg",
    title: "Forest Monitoring",
    description: "Track forest coverage, vegetation health, density, and land-cover changes across geographic regions.",
  },
  {
    icon: "/assets/solutions/serenagreen/What Serena Green Enables icons/Overlay-1.svg",
    title: "Afforestation Monitoring",
    description: "Monitor plantation and rehabilitation projects, including tree survival, species, planting activity, and site-level progress.",
  },
  {
    icon: "/assets/solutions/serenagreen/What Serena Green Enables icons/Overlay-2.svg",
    title: "Satellite-Based Analysis",
    description: "Analyze multi-temporal satellite imagery to observe environmental changes across large geographic areas.",
  },
  {
    icon: "/assets/solutions/serenagreen/What Serena Green Enables icons/Overlay-3.svg",
    title: "Carbon Analytics",
    description: "Estimate biomass, carbon stocks, and sequestered CO2 using species data and IPCC-based carbon models.",
  },
  {
    icon: "/assets/solutions/serenagreen/What Serena Green Enables icons/Overlay-4.svg",
    title: "Environmental Stewardship",
    description: "Monitor sustainability indicators including solar generation, waste management, and treated water utilization.",
  },
  {
    icon: "/assets/solutions/serenagreen/What Serena Green Enables icons/Overlay-5.svg",
    title: "ESG Intelligence",
    description: "Bring environmental metrics and spatial information together for sustainability reporting and decision-making.",
  },
];

export default function WhatItEnables() {
  return (
    <section className="bg-[#1b7948] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              What Serena Green Enables
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Intelligent Monitoring For A Changing Environment
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg h-full transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-6">
                  <Image src={item.icon} alt={item.title} width={48} height={48} />
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
