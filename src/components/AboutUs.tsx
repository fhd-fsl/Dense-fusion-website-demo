import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function AboutUs() {
  return (
    <section className="bg-secondaryBlack py-16 md:py-24 text-white">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal delay={0.1}>
          <h2 className="text-xl md:text-2xl font-semibold text-lightGray tracking-tight">
            About Us
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="mt-8 max-w-5xl text-3xl md:text-4xl lg:text-[42px] font-normal leading-[1.3] tracking-tight">
            <span className="font-bold">DenseFusion</span> is an AI-driven technology company
            dedicated to building intelligent solutions that solve complex challenges, accelerate
            innovation and empower businesses to grow with confidence.
          </p>
        </ScrollReveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* Card 1: Innovating for Impact */}
          <ScrollReveal delay={0.35}>
            <div className="flex h-full flex-col justify-between rounded-[4px] bg-white p-8 md:p-12 shadow-md">
              <div>
                <Image
                  src="/assets/home-page/union.svg"
                  alt="Innovating for Impact"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
              <div className="mt-12 md:mt-16">
                <h3 className="text-2xl md:text-3xl font-bold text-secondaryBlack tracking-tight">
                  Innovating for Impact
                </h3>
                <p className="mt-3 text-base md:text-lg text-textGray leading-relaxed font-medium">
                  DenseFusion harnesses cutting-edge AI to solve real-world problems, transforming
                  industries and improving lives through smart, client-focused solutions.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Our Mission */}
          <ScrollReveal delay={0.45}>
            <div className="flex h-full flex-col justify-between rounded-[4px] bg-gradient-to-br from-lightGreen to-gradientGreen1 p-8 md:p-12 shadow-md">
              <div>
                <Image
                  src="/assets/home-page/mission.svg"
                  alt="Our Mission"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
              <div className="mt-12 md:mt-16">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Our Mission
                </h3>
                <p className="mt-3 text-base md:text-lg text-white/90 leading-relaxed font-medium">
                  To deliver tailor-made solutions with integrity and collaboration, creating value,
                  opportunity, and exceeding expectations for global partners.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.55}>
          <div className="mt-10 md:mt-12">
            <Link
              href="/about"
              className="group inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 px-6 text-md font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90"
            >
              <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                <span className="flex h-11 shrink-0 items-center justify-center text-white">
                  Explore More
                </span>
                <span className="flex h-11 shrink-0 items-center justify-center text-white">
                  Explore More
                </span>
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
