"use client";

import ScrollReveal from "@/components/ScrollReveal";

const capabilities = [
  {
    title: "AI & Machine Learning",
    description: "Build and deploy intelligent models for automation, prediction, and advanced analytics.",
  },
  {
    title: "High-Performance Computing",
    description: "Accelerate simulations, modeling, and compute-intensive workloads.",
  },
  {
    title: "Geospatial Analytics",
    description: "Process large-scale spatial and satellite datasets for actionable insights.",
  },
  {
    title: "Data Processing",
    description: "Handle massive datasets with scalable, high-performance infrastructure.",
  },
  {
    title: "Simulation & Modeling",
    description: "Run complex simulations faster to support research, planning, and decision-making.",
  },
  {
    title: "GPU Acceleration",
    description: "Leverage GPU computing to accelerate AI, analytics, and scientific workloads.",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16 md:mb-20">
            <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 tracking-tight">
              Cross-Industry Capabilities
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-3xl">
              Our AI and HPC capabilities can be adapted across industries to support a wide range of computational workloads.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((cap, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <div className="bg-[#f8f8f8] rounded-xl p-8 md:p-10 h-full flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="w-5 h-5 rounded-[4px] bg-gradient-to-br from-[#006D40] to-[#6DC27F] mb-6"></div>
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-black mb-4">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-base leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
