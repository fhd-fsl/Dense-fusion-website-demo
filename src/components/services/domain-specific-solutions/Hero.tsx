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
                Domain-Specific Solutions
              </span>
            </div>

            <h1 className="text-[40px] md:text-[54px] font-bold text-secondaryBlack mb-6 tracking-tight leading-[1.15]">
              Domain-Specific Solutions
            </h1>

            <p className="text-[#5D5D5D] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Develop intelligent solutions designed to address complex challenges across specialized industries and research domains.
            </p>

            <Link
              href="#"
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

        <ScrollReveal delay={0.2}>
          <div 
            className="relative w-full aspect-[1221/552]" 
            style={{ 
              WebkitMaskImage: "url('/assets/hero-mask.svg')", 
              maskImage: "url('/assets/hero-mask.svg')",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center"
            }}
          >
            <img
              src="/assets/services/domain-specific-solutions/hero-bg.jpg"
              alt="Domain-Specific Solutions"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

