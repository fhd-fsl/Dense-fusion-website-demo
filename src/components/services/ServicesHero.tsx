import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function ServicesHero() {
  return (
    <section className="relative bg-[#080808] pt-24 pb-24 md:pt-40 md:pb-32 text-white overflow-hidden min-h-[70vh] flex items-center">
      {/* Background graphic */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 z-0 opacity-40 md:opacity-100">
        <Image 
          src="/assets/services/hero-background.svg" 
          alt="Background" 
          fill 
          className="object-cover md:object-contain object-right" 
          priority
        />
      </div>
      
      <div className="relative z-10 mx-auto max-w-[1300px] w-full px-6 md:px-12 flex flex-col items-start text-left">
        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight mb-6">
            AI & High-Performance <br className="hidden sm:block" />
            Computing Services
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="max-w-xl text-base md:text-lg text-gray-400 mb-10 leading-relaxed">
            We help organizations design, build, and deploy scalable AI, high-performance computing, and intelligent software solutions that accelerate innovation.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              href="#"
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
            <Link
              href="#"
              className="group relative inline-flex items-center rounded px-4 py-3 text-lg font-bold text-lightGray"
            >
              <span className="relative">
                Talk to an Expert
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-lightGray transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
