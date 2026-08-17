"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const challenges = [
  {
    title: "Massive Environmental Data",
    desc: "Process satellite, weather, sensor, and climate datasets at scale.",
    icon: (
      <Image
        src="/assets/industries/climate/Database-Fill-Check Streamline Bootstrap.svg"
        alt="Icon"
        width={40}
        height={40}
        className="w-10 h-10 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
      />
    ),
  },
  {
    title: "Complex Climate Models",
    desc: "Run computationally intensive simulations and predictive models.",
    icon: (
      <Image
        src="/assets/industries/climate/Complex Climate Models.svg"
        alt="Icon"
        width={40}
        height={40}
        className="w-10 h-10 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
      />
    ),
  },
  {
    title: "Long Processing Times",
    desc: "Accelerate compute-intensive workloads to reduce time to results.",
    icon: (
      <Image
        src="/assets/industries/climate/Long Processing Times.svg"
        alt="Icon"
        width={40}
        height={40}
        className="w-10 h-10 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
      />
    ),
  },
  {
    title: "Changing Environmental Conditions",
    desc: "Analyze complex patterns across large geographic and temporal datasets.",
    icon: (
      <Image
        src="/assets/industries/climate/Changing Environmental Conditions.svg"
        alt="Icon"
        width={40}
        height={40}
        className="w-10 h-10 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
      />
    ),
  },
  {
    title: "Sustainability Planning",
    desc: "Use data-driven insights to support environmental monitoring and planning.",
    icon: (
      <Image
        src="/assets/industries/climate/Sustainability Planning.svg"
        alt="Icon"
        width={40}
        height={40}
        className="w-10 h-10 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
      />
    ),
  },
];

export default function ClimateChallenges() {
  return (
    <section className="bg-[#f9f9f9] py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
              <span className="text-black font-semibold text-sm">
                Climate Research Challenges
              </span>
            </div>
            <h2 className="text-[32px] md:text-[48px] font-medium leading-[1.2] tracking-tight max-w-5xl text-black">
              Climate and environmental research requires processing massive datasets and running complex models. Advanced computing enables researchers and organizations to analyze these workloads faster and generate more meaningful insights.
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
