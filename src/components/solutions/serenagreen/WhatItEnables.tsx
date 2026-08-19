import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const capabilities = [
  {
    icon: "/assets/solutions/serenagreen/What Serena Green Enables icons/Overlay.svg",
    title: "Forest Monitoring",
    description: "Track forest coverage and vegetation changes across geographic regions.",
  },
  {
    icon: "/assets/solutions/serenagreen/What Serena Green Enables icons/Overlay-1.svg",
    title: "Afforestation Monitoring",
    description: "Monitor reforestation and afforestation activities over time.",
  },
  {
    icon: "/assets/solutions/serenagreen/What Serena Green Enables icons/Overlay-2.svg",
    title: "Satellite-Based Analysis",
    description: "Use satellite imagery to observe environmental changes across large areas.",
  },
  {
    icon: "/assets/solutions/serenagreen/What Serena Green Enables icons/Overlay-3.svg",
    title: "Change Detection",
    description: "Identify and visualize differences between multiple time periods.",
  },
  {
    icon: "/assets/solutions/serenagreen/What Serena Green Enables icons/Overlay-4.svg",
    title: "Vegetation Analysis",
    description: "Analyze vegetation patterns and changes using geospatial data.",
  },
  {
    icon: "/assets/solutions/serenagreen/What Serena Green Enables icons/Overlay-5.svg",
    title: "Environmental Intelligence",
    description: "Transform environmental datasets into insights that support planning and conservation.",
  },
];

export default function WhatItEnables() {
  return (
    <section className="bg-gradient-to-br from-[#004024] to-[#6DC27F] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              What Serena Green Enables
            </h2>
            <p className="text-lightGreen text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Intelligent Monitoring for a Changing Environment
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
