"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTA() {
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
            Ready to Solve Your Next Computational Challenge?
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Partner with DenseFusion to transform complex industry challenges into scalable AI and HPC solutions built for performance, innovation, and long-term impact.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
