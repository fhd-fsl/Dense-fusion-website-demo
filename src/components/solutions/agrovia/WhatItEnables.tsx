import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const capabilities = [
  {
    icon: "/assets/solutions/agrovia/Scan-Line Streamline Mingcute.svg",
    title: "AI Crop Monitoring",
    description: "Receive and validate satellite-detected crop anomalies, including disease, water stress, and pest issues.",
  },
  {
    icon: "/assets/solutions/agrovia/Network-Pin Streamline Ultimate.svg",
    title: "Field Verification",
    description: "Assign field agents to investigate AI-generated advisories and record ground-level verification.",
  },
  {
    icon: "/assets/solutions/agrovia/Cloud-Check Streamline Core.svg",
    title: "Offline-First Operations",
    description: "Continue critical workflows with intermittent or unavailable internet connectivity.",
  },
  {
    icon: "/assets/solutions/agrovia/Megaphone-2 Streamline Sharp-Remix.svg",
    title: "Farmer Advisories",
    description: "Deliver verified agricultural advisories to farmers based on field-validated information.",
  },
  {
    icon: "/assets/solutions/agrovia/cube.svg",
    title: "Services & Products",
    description: "Manage requests for machinery, agricultural services, seeds, fertilizers, and other inputs.",
  },
  {
    icon: "/assets/solutions/agrovia/Leaderboard-Fill Streamline Sharp-Fill-Streamline-Material-Free.svg",
    title: "Performance Analytics",
    description: "Track agent response times, verification accuracy, and performance by location and crop type.",
  },
];

export default function WhatItEnables() {
  return (
    <section className="bg-[#1b7948] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              What AGROVIA Enables
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Intelligent Agricultural Operations
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
