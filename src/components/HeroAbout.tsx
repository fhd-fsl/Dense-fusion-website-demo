import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function HeroAbout() {
  return (
    <section
      className="w-full font-sans"
      style={{
        background: "linear-gradient(180deg, #E8F7EF 0%, #ffffff 100%)",
      }}
    >
      <div className="mx-auto max-w-[1300px] px-6 py-16 md:py-24 flex flex-col gap-12">
        {/* Top content row */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <ScrollReveal delay={0.1} className="flex-1">
            <h1
              className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight"
              style={{ color: "#090909" }}
            >
              Building the Future with AI &amp; Supercomputing
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.25} className="flex-1">
            <div className="flex flex-col gap-6">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "#5D5D5D" }}>
                Harness the power of applied AI and high-performance computing to transform
                complex data into actionable insights and accelerate innovation across industries.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#"
                  className="group inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] px-6 text-sm font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #6DC27F 0%, #006D40 100%)",
                  }}
                >
                  <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                    <span className="flex h-11 shrink-0 items-center justify-center">
                      Explore Our Expertise
                    </span>
                    <span className="flex h-11 shrink-0 items-center justify-center">
                      Explore Our Expertise
                    </span>
                  </span>
                </Link>

                <Link
                  href="#"
                  className="text-sm font-semibold transition hover:opacity-70 ml-4"
                  style={{ color: "#5D5D5D" }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/About-us_page/527bf2cce55756b91a8fda3b44f8a7462f3e0dea.jpg"
              alt="AI and Supercomputing visualization"
              width={1300}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
