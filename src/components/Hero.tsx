"use client"

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import HeroParticleAnimation from "./animations/HeroParticleAnimation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <HeroParticleAnimation />
      <div className="relative z-10 mx-auto max-w-[1300px] px-6 py-20 text-center">
        <ScrollReveal delay={0.1}>
          <p className="inline-block rounded-full px-4 py-2 text-md font-semibold text-secondaryBlack border border-borderGray shadow-sm">
            Applied Supercomputing For Industry Transformation
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="mt-5 text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-darkGreen to-lightGreen bg-clip-text text-transparent">
              Supercomputing
            </span>
            <span className="text-secondaryBlack">,</span>
          </h2>
          <h1 className="mt-2 text-6xl font-bold text-secondaryBlack leading-tight tracking-tight">
            Tailored for Your Industries
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-textGray font-medium">
            DenseFusion delivers high-performance computing solutions, on-premise or in the cloud,
            tailored to your business needs.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="#"
              className="interactive-hover group inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 px-5 text-lg font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90"
            >
              <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                <span className="flex h-11 shrink-0 items-center justify-center text-white">
                  Start Your Project
                </span>
                <span className="flex h-11 shrink-0 items-center justify-center text-white">
                  Start Your Project
                </span>
              </span>
            </Link>

            <Link
              href="/services"
              className="interactive-hover group relative inline-flex items-center rounded px-4 py-3 text-lg font-bold text-lightGray"
            >
              <span className="relative">
                Explore Services
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-lightGray transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </span>
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 rounded-2xl bg-greyBg p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <div className="interactive-hover h-full rounded-xl border border-borderGray2 bg-transparent p-6 transition hover:bg-white">
                <h3 className="text-left text-xl tracking-tight font-semibold text-secondaryBlack">High Performance Computing</h3>
                <p className="mt-3 text-left text-base text-secondaryBlack opacity-80">
                  Gain the computational horsepower required to tackle the most demanding technical and
                  scientific tasks.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="interactive-hover h-full rounded-xl border border-borderGray2 bg-transparent p-6 transition hover:bg-white">
                <h3 className="text-left text-xl font-semibold text-secondaryBlack tracking-tight">AI Consultation</h3>
                <p className="mt-3 text-left text-base text-secondaryBlack opacity-80">
                  Transform ideas into intelligent solutions with our specialized AI roadmap and
                  architectural consultation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="interactive-hover h-full rounded-xl border border-borderGray2 bg-transparent p-6 transition hover:bg-white">
                <h3 className="text-left text-xl font-semibold text-secondaryBlack tracking-tight">Application Development</h3>
                <p className="mt-3 text-left text-base text-secondaryBlack opacity-80">
                  Developing user-friendly, responsive interfaces with stunning visuals optimized for
                  complex datasets.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
