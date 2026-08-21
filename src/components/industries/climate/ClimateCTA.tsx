"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ClimateCTA() {
  return (
    <section className="bg-gradient-to-br from-[#6DC27F] via-[#006D40] via-[35%] to-[#006D40] py-20 md:py-28 relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <div className="mx-auto max-w-[900px] w-full px-6 md:px-12 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-[36px] md:text-[54px] font-bold text-white mb-6 leading-tight tracking-tight">
            Ready to Accelerate Climate Computing?
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Harness AI and HPC to process complex environmental data, accelerate modeling, and unlock deeper insights into our changing climate.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-[#050505] px-8 text-lg font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-[#6DC27F]"
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
            <Link
              href="/contact"
              className="group inline-flex h-11 items-center justify-center rounded-[4px] border border-white px-8 text-lg font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#006D40]"
            >
              Request a demo
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
