import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function AboutUs() {
  return (
    <section className="bg-secondaryBlack py-20 md:py-28 text-white">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12">
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

        <ScrollReveal delay={0.4}>
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
