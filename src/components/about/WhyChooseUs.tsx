"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const reasons = [
  "Advanced AI & Supercomputing Expertise",
  "Scalable, Future-Ready Solutions",
  "End-to-End Technology Services",
  "Industry-Focused Innovation",
  "Collaborative Partnership Approach",
  "Quality, Security & Reliability",
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white font-sans py-20 md:py-28">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12">
        <ScrollReveal delay={0.1}>
          <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-4xl md:text-[50px] font-bold text-secondaryBlack tracking-tight">
            <span>Why Organizations Choose</span>
            <span className="flex items-center gap-x-2">
              <Image
                src="/assets/about/dense-fusion-logo.svg"
                alt="DenseFusion icon"
                width={56}
                height={58}
                className="h-10 md:h-[46px] w-auto object-contain"
              />
              <span className="bg-gradient-to-r from-[#006D40] to-[#6DC27F] bg-clip-text text-transparent">
                DenseFusion
              </span>
            </span>
          </h2>
        </ScrollReveal>

        <div className="mx-auto mt-16 md:mt-24 max-w-[1000px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {reasons.map((reason, index) => (
              <ScrollReveal key={reason} delay={0.2 + index * 0.05}>
                <div className="flex items-center gap-5 rounded-xl bg-white py-5 px-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-black/[0.03]">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#006D40] to-[#6DC27F]">
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3.5} />
                  </div>
                  <span className="text-base md:text-[17px] font-bold text-[#5D5D5D]">
                    {reason}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
