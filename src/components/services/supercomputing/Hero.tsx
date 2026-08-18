"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SupercomputingAnimation from "@/components/animations/SupercomputingAnimation";

export default function Hero() {
  return (
    <section className="bg-white pt-20 md:pt-28 pb-16 md:pb-24 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 max-w-2xl">
          <ScrollReveal>
            <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] mb-8 bg-white">
              <span className="text-black font-semibold text-sm md:text-base">
                Supercomputing Consulting
              </span>
            </div>

            <h1 className="text-[40px] md:text-[54px] font-bold text-secondaryBlack mb-6 tracking-tight leading-[1.15]">
              Strategic HPC Consulting for
              <br className="hidden md:block" /> High-Performance Innovation
            </h1>

            <p className="text-[#5D5D5D] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Design, optimize, and scale your high-performance computing
              environment with expert guidance tailored to your research,
              engineering, and business objectives.
            </p>

            <Link
              href="/contact"
              className="group inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 px-6 text-lg font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90"
            >
              <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                <span className="flex h-11 shrink-0 items-center justify-center text-white">
                  Schedule a Consultation
                </span>
                <span className="flex h-11 shrink-0 items-center justify-center text-white">
                  Schedule a Consultation
                </span>
              </span>
            </Link>
          </ScrollReveal>
          </div>

          {/* Right: Animation/Image */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal delay={0.2}>
              <div className="relative w-full aspect-square md:aspect-[4/3]">
                <SupercomputingAnimation />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}


