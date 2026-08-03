"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  return (
    <section className="bg-white pt-20 md:pt-28 pb-16 md:pb-24 relative overflow-hidden">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <div className="max-w-4xl mb-12 md:mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] mb-8 bg-white">
              <span className="text-black font-semibold text-sm md:text-base">
                Supercomputing Consulting
              </span>
            </div>

            <h1 className="text-[40px] md:text-[54px] font-bold text-black mb-6 tracking-tight leading-[1.15]">
              Strategic HPC Consulting for
              <br className="hidden md:block" /> High-Performance Innovation
            </h1>

            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Design, optimize, and scale your high-performance computing
              environment with expert guidance tailored to your research,
              engineering, and business objectives.
            </p>

            <Link
              href="#"
              className="group inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-gradient-to-br from-[#6DC27F] to-[#006D40] px-6 text-lg font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90"
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

        <ScrollReveal delay={0.2}>
          <div className="relative w-full">
            <img
              src="/assets/services/supercomputing/hero-bg-diagonal-cut.svg"
              alt="Strategic HPC Consulting"
              className="w-full h-auto"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
