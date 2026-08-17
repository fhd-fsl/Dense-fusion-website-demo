"use client";

import ScrollReveal from "@/components/ScrollReveal";

const solutions = [
  {
    title: "Risk Modeling",
    desc: "Accelerate complex financial models to support risk assessment and analysis.",
  },
  {
    title: "Fraud Detection",
    desc: "Use AI and large-scale data processing to identify suspicious patterns and anomalies.",
  },
  {
    title: "Financial Forecasting",
    desc: "Analyze historical and real-time data to support predictive financial models.",
  },
  {
    title: "Portfolio Optimization",
    desc: "Run complex analytics to evaluate portfolios and support investment decisions.",
  },
  {
    title: "Algorithmic Analytics",
    desc: "Use high-performance computing to accelerate computational financial workloads.",
  },
  {
    title: "Large-Scale Data Processing",
    desc: "Process massive financial datasets efficiently for advanced analytics.",
  },
];

export default function FinanceHowItHelps() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
            <h2 className="text-[36px] md:text-[54px] font-bold bg-gradient-to-r from-[#006D40] to-lightGreen text-transparent bg-clip-text mb-6 tracking-tight inline-block">
              How DenseFusion Helps
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              DenseFusion builds scalable computing environments that accelerate financial analytics, modeling, and AI-driven applications.
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
