"use client";

import ScrollReveal from "@/components/ScrollReveal";

const solutions = [
  {
    title: "Scientific Computing",
    desc: "Accelerate complex computational workloads across research disciplines.",
  },
  {
    title: "Research Simulations",
    desc: "Run large-scale simulations and models with high-performance infrastructure.",
  },
  {
    title: "AI & Machine Learning",
    desc: "Build and train AI models using scalable GPU and HPC resources.",
  },
  {
    title: "Data-Intensive Research",
    desc: "Process massive research datasets efficiently.",
  },
  {
    title: "Computational Modeling",
    desc: "Support advanced modeling and simulation for scientific discovery.",
  },
  {
    title: "Genomics & Bioinformatics",
    desc: "Accelerate the analysis of large-scale biological and genomic datasets.",
  },
];

export default function EducationHowItHelps() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
            <h2 className="text-[36px] md:text-[54px] font-bold bg-gradient-to-r from-[#006D40] to-lightGreen text-transparent bg-clip-text mb-6 tracking-tight inline-block">
              How DenseFusion Helps
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              DenseFusion helps academic and research organizations build and optimize computing environments for advanced scientific and computational workloads.
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
