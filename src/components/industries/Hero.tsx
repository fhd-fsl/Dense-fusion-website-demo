"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import VortexAnimation from "@/components/animations/VortexAnimation";

export default function Hero() {
  return (
    <section className="bg-[#050505] pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden min-h-[85vh] flex items-center">
      
      {/* Background Graphic area on the right (using the Vortex Animation) */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-80 md:opacity-100">
        <VortexAnimation />
      </div>

      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 relative z-10">
        <div className="w-full md:w-3/5 lg:w-1/2">
          <ScrollReveal>
            <h1 className="text-[42px] md:text-[60px] lg:text-[72px] font-medium text-white mb-6 leading-[1.1] tracking-tight">
              Powering Innovation Across Industries
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              DenseFusion combines AI, computing, and industry expertise to solve complex challenges and turn data into actionable insights.
            </p>

            <Link
              href="/solutions"
              className="group inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 px-6 text-lg font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90"
            >
              <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                <span className="flex h-11 shrink-0 items-center justify-center text-white">
                  Explore Our Solutions
                </span>
                <span className="flex h-11 shrink-0 items-center justify-center text-white">
                  Explore Our Solutions
                </span>
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
