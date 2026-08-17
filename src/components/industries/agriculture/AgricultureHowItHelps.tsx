"use client";

import ScrollReveal from "@/components/ScrollReveal";

const solutions = [
  {
    title: "Precision Agriculture",
    desc: "Use AI and geospatial analytics to support data-driven agricultural decisions.",
  },
  {
    title: "Crop Monitoring",
    desc: "Analyze satellite and sensor data to monitor crop health and field conditions.",
  },
  {
    title: "Satellite Imagery Analysis",
    desc: "Process large-scale imagery for agricultural and environmental insights.",
  },
  {
    title: "Yield Prediction",
    desc: "Apply AI and predictive analytics to identify patterns and estimate potential yields.",
  },
  {
    title: "Soil & Resource Analysis",
    desc: "Analyze soil and environmental data to improve resource utilization.",
  },
  {
    title: "Environmental Monitoring",
    desc: "Monitor changing environmental conditions to support sustainable agricultural practices.",
  },
];

export default function AgricultureHowItHelps() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
            <h2 className="text-[36px] md:text-[54px] font-bold bg-gradient-to-r from-[#006D40] to-lightGreen text-transparent bg-clip-text mb-6 tracking-tight inline-block">
              How DenseFusion Helps
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              DenseFusion delivers scalable computing environments that help agricultural organizations turn complex data into actionable insights.
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
