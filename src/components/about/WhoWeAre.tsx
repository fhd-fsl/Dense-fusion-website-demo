import ScrollReveal from "../ScrollReveal";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white font-sans py-16 md:py-24">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-[50px] font-bold tracking-tight text-secondaryBlack">
                Who We Are
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#006D40] to-[#6DC27F] bg-clip-text text-transparent">
                Engineering Intelligence Through AI & Supercomputing
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-5 text-base md:text-lg leading-relaxed text-[#5D5D5D]">
                <p>
                  DenseFusion is a technology company specializing in <span className="font-semibold text-gray-700">High-Performance Computing (HPC), Applied Artificial Intelligence, Geospatial AI</span>, and intelligent software solutions
                </p>
                <p>
                  We help enterprises, research institutions, and government organizations harness advanced computing technologies to solve computationally intensive challenges and accelerate innovation.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Image Content */}
          <ScrollReveal delay={0.4} className="h-full">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-sm">
               <Image 
                 src="/assets/about/527bf2cce55756b91a8fda3b44f8a7462f3e0dea.jpg" 
                 alt="Who We Are"
                 fill
                 className="object-cover"
               />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
