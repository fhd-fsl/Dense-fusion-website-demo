import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function SolutionsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#081810] via-[#050505] to-[#050505] pt-32 pb-24 md:pt-40 md:pb-32 text-center">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Intelligent Solutions for
              <br className="hidden md:block" /> Real-World Challenges
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              DenseFusion develops intelligent solutions that combine GIS, satellite imagery, 
              AI, and advanced analytics to help organizations understand complex 
              environments, monitor change, and make data-driven decisions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Primary Button */}
              <Link
                href="#plantx"
                className="group inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 px-5 text-lg font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90"
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

              {/* Secondary Button */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center rounded px-4 py-3 text-lg font-bold text-white"
              >
                <span className="relative">
                  Request a demo
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Decorative radial glow matching design */}
      <div className="absolute top-0 right-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#006D40]/20 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
