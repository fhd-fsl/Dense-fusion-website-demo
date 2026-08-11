"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function ValueProp() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full border border-gray-200/80 shadow-sm bg-white">
            <span className="text-black font-bold text-sm">
              Computing Power Built Around Your Industry
            </span>
          </div>

          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium text-black leading-[1.2] tracking-tight w-full mb-16 md:mb-24 text-balance">
            Every industry faces unique data challenges. DenseFusion offers tailored AI and HPC solutions to improve efficiency, accelerate discovery, and enhance decision-making.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {/* Image */}
          <div className="w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden relative shadow-lg bg-[#050505]">
            <Image 
              src="/assets/industries/value prop bg.svg" 
              alt="Computing Power"
              fill
              className="object-cover"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
