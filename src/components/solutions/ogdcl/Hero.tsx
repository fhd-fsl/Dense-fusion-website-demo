import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal>
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 mb-6 shadow-sm">
                <span className="text-sm font-semibold text-[#006D40]">OGDCL Sustainability & Plantation Monitoring</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-secondaryBlack mb-6 tracking-tight leading-[1.1]">
                Satellite-Powered Intelligence for Plantation & Reforestation
              </h1>

              <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                OGDCL's platform manages plantation and reforestation. It combines geospatial mapping and satellite imagery with plantation analytics and carbon monitoring.
              </p>

              <div className="flex items-center gap-6">
                <Link
                  href="/contact"
                  className="group inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 px-5 text-lg font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90"
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
              </div>
            </ScrollReveal>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal delay={0.2}>
              <div className="relative w-full ">
                <img 
                  src="/assets/solutions/ogdcl/hero-image.svg"
                  alt="OGDCL Hero Graphic"
                  
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
