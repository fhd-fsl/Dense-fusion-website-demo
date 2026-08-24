import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#006D40]">
      {/* Background Gradient & Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6DC27F] via-[#006D40] via-[30%] to-[#006D40] pointer-events-none" />
      
      {/* Background SVG - Right Aligned */}
      <div className="absolute top-0 right-0 w-full md:w-3/5 lg:w-1/2 h-full pointer-events-none flex items-center justify-end">
        <div className="relative w-full h-[150%] md:h-[120%] mr-[-20%] md:mr-0 opacity-80">
          <Image 
            src="/assets/services/accelerate-innovation-bg.svg" 
            alt="Global Innovation Pattern" 
            fill 
            className="object-right object-contain md:object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 relative z-10 py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Ready to Accelerate<br />
              Innovation?
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed font-medium">
              Whether you're deploying AI at scale, designing next<br className="hidden md:block" />
              generation HPC infrastructure, or building intelligent platforms,<br className="hidden md:block" />
              DenseFusion has the expertise to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
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
    </section>
  );
}
