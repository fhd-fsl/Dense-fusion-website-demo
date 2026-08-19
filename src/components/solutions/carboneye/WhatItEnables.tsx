import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const capabilities = [
  {
    icon: "/assets/solutions/carboneye/What Carbon Eye Enables Icons/Icon Base.svg",
    title: "Carbon Monitoring",
    description: "Analyze environmental indicators and spatial changes associated with carbon trends.",
  },
  {
    icon: "/assets/solutions/carboneye/What Carbon Eye Enables Icons/Icon Base-2.svg",
    title: "Satellite Based Analysis",
    description: "Process satellite imagery to identify environmental patterns across large areas.",
  },
  {
    icon: "/assets/solutions/carboneye/What Carbon Eye Enables Icons/Icon Base-4.svg",
    title: "NDVI Analysis",
    description: "Use vegetation indices to understand vegetation health and environmental changes.",
  },
  {
    icon: "/assets/solutions/carboneye/What Carbon Eye Enables Icons/Icon Base-3.svg",
    title: "Environmental Trend Analysis",
    description: "Track changes over time to identify meaningful environmental patterns.",
  },
  {
    icon: "/assets/solutions/carboneye/What Carbon Eye Enables Icons/Icon Base-5.svg",
    title: "Geospatial Intelligence",
    description: "Combine spatial datasets and analytics to provide a clearer view of environmental conditions.",
  },
  {
    icon: "/assets/solutions/carboneye/What Carbon Eye Enables Icons/Icon Base-1.svg",
    title: "Sustainability Monitoring",
    description: "Support organizations in measuring and understanding environmental changes.",
  },
];

export default function WhatItEnables() {
  return (
    <section className="bg-gradient-to-br from-[#004024] to-[#6DC27F] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              What Carbon Eye Enables
            </h2>
            <p className="text-lightGreen text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Advanced Intelligence for Environmental Monitoring
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
