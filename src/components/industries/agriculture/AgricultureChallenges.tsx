"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const challenges = [
  {
    title: "Massive Data Volumes",
    desc: "Process large-scale imagery, video, geospatial, and sensor datasets efficiently.",
    icon: (
      <Image
        src="/assets/industries/agriculture/Database Streamline Sharp.svg"
        alt="Database"
        width={48}
        height={48}
        className="w-12 h-12 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
      />
    ),
  },
  {
    title: "Real-Time Intelligence",
    desc: "Accelerate data analysis to support faster situational awareness and decision-making.",
    icon: (
      <Image
        src="/assets/industries/agriculture/Bolt-Fill Streamline Sharp-Fill-Streamline-Material-Free.svg"
        alt="Bolt"
        width={48}
        height={48}
        className="w-12 h-12 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
      />
    ),
  },
  {
    title: "Complex Simulations",
    desc: "Run computationally intensive simulations and models for planning, testing, and analysis.",
    icon: (
      <svg className="w-12 h-12 transition-all duration-300" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="group-hover:fill-white transition-colors duration-300" d="M34.6951 10.9777L24.9479 4.43655C24.4347 4.08802 23.8318 3.89503 23.2117 3.88074C22.5915 3.86645 21.9804 4.03147 21.4517 4.356L5.42118 14.216C4.95383 14.5043 4.5679 14.9072 4.30003 15.3866C4.03216 15.8659 3.89123 16.4058 3.89063 16.9549V26.3316C3.88983 26.8594 4.01871 27.3793 4.26592 27.8456C4.51313 28.312 4.87112 28.7104 5.30841 29.006L15.0556 35.5632C15.5688 35.9118 16.1716 36.1047 16.7918 36.119C17.412 36.1333 18.0231 35.9683 18.5517 35.6438L34.5823 25.7838C35.0497 25.4955 35.4356 25.0926 35.7034 24.6132C35.9713 24.1339 36.1122 23.594 36.1129 23.0449V13.6521C36.1136 13.1243 35.9848 12.6044 35.7376 12.138C35.4903 11.6717 35.1324 11.2732 34.6951 10.9777Z" fill="url(#paint0_linear_519_268)" stroke="url(#paint1_linear_519_268)" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="group-hover:stroke-lightGreen transition-colors duration-300" d="M16.7791 36.1112V23.2223L4.29297 15.4084" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="group-hover:stroke-lightGreen transition-colors duration-300" d="M16.7773 23.2221L35.7401 12.1538" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_519_268" x1="48.808" y1="42.376" x2="-3.12814" y2="25.6863" gradientUnits="userSpaceOnUse">
            <stop offset="5.6684e-05" stopColor="#6DC27F"/>
            <stop offset="1" stopColor="#006D40"/>
          </linearGradient>
          <linearGradient id="paint1_linear_519_268" x1="48.808" y1="42.376" x2="-3.12814" y2="25.6863" gradientUnits="userSpaceOnUse">
            <stop offset="5.6684e-05" stopColor="#6DC27F"/>
            <stop offset="1" stopColor="#006D40"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Advanced AI Workloads",
    desc: "Deploy AI and machine learning models for demanding agriculture applications.",
    icon: (
      <Image
        src="/assets/industries/agriculture/Cpu-Chip Streamline Heroicons.svg"
        alt="Chip"
        width={48}
        height={48}
        className="w-12 h-12 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
      />
    ),
  },
  {
    title: "Scalable Computing",
    desc: "Support workloads with flexible infrastructure that scales with demand.",
    icon: (
      <Image
        src="/assets/industries/agriculture/Server Streamline Font-Awesome.svg"
        alt="Server"
        width={48}
        height={48}
        className="w-12 h-12 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
      />
    ),
  },
];

export default function AgricultureChallenges() {
  return (
    <section className="bg-[#f9f9f9] py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
              <span className="text-black font-semibold text-sm">
                Agricultural Challenges
              </span>
            </div>
            <h2 className="text-[32px] md:text-[48px] font-medium leading-[1.2] tracking-tight max-w-5xl text-black">
              Modern agriculture operations depend on large datasets, real-time intelligence, and complex computational workloads. Organizations require secure, scalable computing environments for quick and reliable information processing.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl flex flex-col h-full bg-white text-black shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:bg-gradient-to-r hover:from-lightGreen hover:to-[#006D40]"
              >
                <div className="flex items-center justify-center mb-6 w-fit">
                  {challenge.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight transition-colors duration-300 group-hover:text-white text-black">
                  {challenge.title}
                </h3>
                <p className="text-base leading-relaxed transition-colors duration-300 group-hover:text-white/90 text-gray-500">
                  {challenge.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
