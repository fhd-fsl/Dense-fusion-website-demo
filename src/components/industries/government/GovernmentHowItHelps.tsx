"use client";

import ScrollReveal from "@/components/ScrollReveal";

const solutions = [
  {
    title: "Geospatial Intelligence",
    desc: "Analyze satellite imagery, mapping data, and spatial information to generate actionable intelligence.",
  },
  {
    title: "AI-Powered Surveillance",
    desc: "Process video, imagery, and sensor data using AI-powered detection and classification.",
  },
  {
    title: "Computer Vision",
    desc: "Accelerate image and video analysis for automated identification, monitoring, and intelligence workflows.",
  },
  {
    title: "Simulation & Modeling",
    desc: "Run complex simulations to support mission planning, scenario analysis, and operational research.",
  },
  {
    title: "Data Analytics",
    desc: "Process and analyze massive datasets to uncover patterns and support data-driven decisions.",
  },
  {
    title: "Predictive Intelligence",
    desc: "Apply AI and advanced analytics to identify trends, patterns, and potential outcomes.",
  },
];

export default function GovernmentHowItHelps() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
            <h2 className="text-[36px] md:text-[54px] font-bold bg-gradient-to-r from-[#006D40] to-lightGreen text-transparent bg-clip-text mb-6 tracking-tight inline-block">
              How DenseFusion Helps
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              We design and optimize computing environments around the unique requirements of government organizations, combining advanced AI capabilities with high-performance infrastructure.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <div className="h-full p-8 bg-[#fbfbfb] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-l-[3px] border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b8e44]">
                <h3 className="text-2xl font-medium text-black mb-4 tracking-tight">
                  {solution.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  {solution.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
