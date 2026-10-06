import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const capabilities = [
  {
    icon: "/assets/solutions/supercomputers/Database-Server-2 Streamline Core.svg",
    title: "HPC Hardware Discovery",
    description: "Explore refurbished AI workstations, GPU servers, and high-performance computing components.",
  },
  {
    icon: "/assets/solutions/supercomputers/Computer-Chip-1 Streamline Flex.svg",
    title: "Configuration Intelligence",
    description: "Validate hardware combinations against technical and physical compatibility requirements.",
  },
  {
    icon: "/assets/solutions/supercomputers/Temperature-Medium Streamline Nova.svg",
    title: "Thermal & Power Validation",
    description: "Evaluate thermal limits, power, electrical constraints, and component clearances.",
  },
  {
    icon: "/assets/solutions/supercomputers/Module Streamline Sharp.svg",
    title: "3D Hardware Configuration",
    description: "Visualize complete hardware builds using real component dimensions.",
  },
  {
    icon: "/assets/solutions/supercomputers/Checklist Streamline Ultimate.svg",
    title: "Technical Quotation",
    description: "Generate technical quotes with configuration specifications and derived performance metrics.",
  },
  {
    icon: "/assets/solutions/supercomputers/Hierarchy-5-Organize Streamline Ultimate.svg",
    title: "Enterprise Workflows",
    description: "Support structured B2B purchasing and configuration workflows through a secure architecture.",
  },
];

export default function WhatItEnables() {
  return (
    <section className="bg-[#1b7948] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              What Supercomputers Enables
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Intelligent Configuration For HPC
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
