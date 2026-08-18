import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function SolutionsCTA() {
  return (
    <section className="bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 py-20 md:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Have a Complex Data Challenge?
            </h2>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you need to monitor environmental change, analyze satellite imagery, or optimize geospatial infrastructure, our experts are here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Black Button */}
              <Link
                href="/contact"
                className="group inline-flex h-12 items-start justify-center overflow-hidden rounded-[4px] bg-[#050505] px-8 text-lg font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-lightGreen"
              >
                <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                  <span className="flex h-12 shrink-0 items-center justify-center text-white">
                    Start a Conversation
                  </span>
                  <span className="flex h-12 shrink-0 items-center justify-center text-white">
                    Start a Conversation
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
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
    </section>
  );
}
