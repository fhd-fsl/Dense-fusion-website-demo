"use client";

import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function AboutCta() {
  return (
    <section className="w-full bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 py-20 md:py-28 font-sans">
      <div className="mx-auto max-w-[1000px] px-6 md:px-12 text-center">
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-[50px] md:leading-[1.1] font-bold text-white tracking-tight">
            Let's Build the Future Together
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-white/95 leading-relaxed font-medium mx-auto max-w-3xl">
            Whether you're exploring Applied AI, High-Performance Computing, or enterprise innovation, our team is ready to help you transform ideas into intelligent, scalable solutions.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Black Button */}
            <Link
              href="/services"
              className="group inline-flex h-12 items-start justify-center overflow-hidden rounded-[4px] bg-[#050505] px-8 text-lg font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-lightGreen"
            >
              <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                <span className="flex h-12 shrink-0 items-center justify-center text-white">
                  Explore our services
                </span>
                <span className="flex h-12 shrink-0 items-center justify-center text-white">
                  Explore our services
                </span>
              </span>
            </Link>
            
            {/* Secondary Outline Button */}
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[4px] border-2 border-white px-8 text-lg font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#006D40]"
            >
              Schedule a Consultation
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
