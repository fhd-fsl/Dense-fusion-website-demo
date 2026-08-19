import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const capabilities = [
  {
    icon: "/assets/solutions/plantx/What PlantX Enables Icons/Overlay.svg",
    title: "Land Cover Monitoring",
    description: "Analyze vegetation, built-up areas, water bodies, and other land-cover types to understand landscape changes.",
  },
  {
    icon: "/assets/solutions/plantx/What PlantX Enables Icons/Overlay-1.svg",
    title: "Urban Growth Analysis",
    description: "Track urban expansion and development patterns across cities and surrounding areas.",
  },
  {
    icon: "/assets/solutions/plantx/What PlantX Enables Icons/Overlay-2.svg",
    title: "Satellite Imagery Analysis",
    description: "Process satellite imagery to identify and visualize changes across large geographic regions.",
  },
  {
    icon: "/assets/solutions/plantx/What PlantX Enables Icons/Overlay-3.svg",
    title: "Historical Change Detection",
    description: "Compare imagery and land-cover data across multiple years to identify long-term trends.",
  },
  {
    icon: "/assets/solutions/plantx/What PlantX Enables Icons/Overlay-4.svg",
    title: "Geospatial Visualization",
    description: "Transform complex spatial datasets into intuitive maps and visual representations.",
  },
  {
    icon: "/assets/solutions/plantx/What PlantX Enables Icons/Overlay-5.svg",
    title: "Environmental Monitoring",
    description: "Monitor changes in vegetation and surrounding landscapes to support environmental analysis.",
  },
];

export default function WhatItEnables() {
  return (
    <section className="bg-gradient-to-br from-[#004024] to-[#6DC27F] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              What PlantX Enables
            </h2>
            <p className="text-lightGreen text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Powerful Geospatial Analysis At Scale
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
