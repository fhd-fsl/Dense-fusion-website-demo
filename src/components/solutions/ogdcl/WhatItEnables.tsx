import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const capabilities = [
  {
    icon: "/assets/solutions/ogdcl/Earth-Pin-2 Streamline Ultimate.svg",
    title: "Site Management",
    description: "Organize sites by organization, region, category, sub-category, and individual location.",
  },
  {
    icon: "/assets/solutions/ogdcl/map.svg",
    title: "Geographic Site Mapping",
    description: "Map plantation boundaries and explore sites through interactive satellite and geographic maps.",
  },
  {
    icon: "/assets/solutions/ogdcl/tree.svg",
    title: "Tree Survival Monitoring",
    description: "Track yearly planting activity, tree species, and survival rates at each plantation site.",
  },
  {
    icon: "/assets/solutions/ogdcl/Analytics-Board-Graph-Line Streamline Ultimate.svg",
    title: "Carbon Stock Analysis",
    description: "Monitor estimated carbon stock and environmental performance across plantation sites.",
  },
  {
    icon: "/assets/solutions/ogdcl/Satellite.svg",
    title: "Satellite-Based Analysis",
    description: "View vegetation classifications and satellite imagery alongside site-level analytics.",
  },
  {
    icon: "/assets/solutions/ogdcl/Design-File-Text-Image Streamline Ultimate.svg",
    title: "Reporting & Administration",
    description: "Generate category summaries and manage platform data through role-based administrative access.",
  },
];

export default function WhatItEnables() {
  return (
    <section className="bg-[#1b7948] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              What the OGDCL Enables
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Intelligent Plantation & Sustainability Monitoring
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
