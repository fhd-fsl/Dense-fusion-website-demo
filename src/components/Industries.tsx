"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

function ArrowBtn({
  delay = 0.5,
  className = "bg-white text-secondaryBlack shadow-sm",
}: {
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full p-2 transition-all duration-300 group-hover:scale-110 ${className}`}
    >
      <motion.span
        initial={{ opacity: 0, rotate: 180, scale: 0.6 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="inline-flex items-center justify-center"
      >
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </motion.span>
    </div>
  );
}

export default function Industries() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-[50px] font-bold text-secondaryBlack tracking-tight">
            Industries We Serve
          </h2>
          <p className="mt-3 text-lg md:text-xl text-textGray font-medium">
            Delivering AI and HPC solutions across diverse industries.
          </p>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
          {/* Card 01: Defense (Left vertical tall card) */}
          <div className="lg:col-span-3 flex">
            <ScrollReveal delay={0.15} className="w-full flex">
              <Link href="/industries/defense" className="group relative flex w-full flex-col justify-between rounded-2xl bg-greyBg p-6 md:p-8 transition-all duration-300 hover:shadow-lg border border-borderGray2/50">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-lightGray">01</span>
                  <ArrowBtn delay={1} className="bg-white text-secondaryBlack border border-borderGray2/60 shadow-sm" />
                </div>

                {/* Center Icon */}
                <div className="my-10 flex items-center justify-center">
                  <Image
                    src="/assets/home-page/industries/security.svg"
                    alt="Defense"
                    width={56}
                    height={56}
                    className="h-14 w-14 object-contain"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-secondaryBlack tracking-tight">Defense</h3>
                    <ArrowBtn delay={1} className="bg-transparent text-secondaryBlack p-0 shadow-none border-none" />
                  </div>
                  <p className="mt-2 text-sm text-textGray font-medium leading-relaxed">
                    AI and HPC for mission-critical defense solutions
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Column Container */}
          <div className="lg:col-span-9 flex flex-col gap-6">
            {/* Card 02: Government */}
            <ScrollReveal delay={0.25}>
              <Link href="/industries/government" className="group relative flex flex-col justify-between rounded-2xl bg-lightGreen2/30 p-6 md:p-8 border border-lightGreen/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      src="/assets/home-page/industries/government.svg"
                      alt="Government"
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <span className="text-lg font-semibold text-gradientGreen1">02</span>
                </div>

                <div className="mt-12 flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-secondaryBlack tracking-tight">
                      Government
                    </h3>
                    <p className="mt-2 text-base text-textGray font-medium">
                      Secure digital infrastructure for public sector innovation.
                    </p>
                  </div>
                  <ArrowBtn delay={1} className="bg-white text-gradientGreen1 shadow-md border border-lightGreen/20" />
                </div>
              </Link>
            </ScrollReveal>

            {/* Middle Row Cards: 03, 04, 05 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Card 03: Agriculture */}
              <ScrollReveal delay={0.3}>
                <Link href="/industries/agriculture" className="group relative flex h-full flex-col justify-between rounded-2xl bg-white p-6 border border-borderGray2/60 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <Image
                      src="/assets/home-page/industries/agriculture.svg"
                      alt="Agriculture"
                      width={36}
                      height={36}
                      className="h-9 w-9 object-contain"
                    />
                    <span className="text-lg font-semibold text-lightGray">03</span>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-secondaryBlack tracking-tight">Agriculture</h3>
                      <ArrowBtn delay={1} className="bg-greyBg text-secondaryBlack p-1.5" />
                    </div>
                    <p className="mt-2 text-sm text-textGray font-medium leading-relaxed">
                      Smarter farming powered by AI and data
                    </p>
                  </div>
                </Link>
              </ScrollReveal>

              {/* Card 04: Climate */}
              <ScrollReveal delay={0.35}>
                <Link href="/industries/climate" className="group relative flex h-full flex-col justify-between rounded-2xl bg-white p-6 border border-borderGray2/60 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <Image
                      src="/assets/home-page/industries/climate.svg"
                      alt="Climate"
                      width={36}
                      height={36}
                      className="h-9 w-9 object-contain"
                    />
                    <span className="text-lg font-semibold text-lightGray">04</span>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-secondaryBlack tracking-tight">Climate</h3>
                      <ArrowBtn delay={1} className="bg-greyBg text-secondaryBlack p-1.5" />
                    </div>
                    <p className="mt-2 text-sm text-textGray font-medium leading-relaxed">
                      Advanced computing for climate research and modeling
                    </p>
                  </div>
                </Link>
              </ScrollReveal>

              {/* Card 05: Banking & Finance */}
              <ScrollReveal delay={0.4}>
                <Link href="/industries/finance" className="group relative flex h-full flex-col justify-between rounded-2xl bg-white p-6 border border-borderGray2/60 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <Image
                      src="/assets/home-page/industries/banking-finance.svg"
                      alt="Banking & Finance"
                      width={36}
                      height={36}
                      className="h-9 w-9 object-contain"
                    />
                    <span className="text-lg font-semibold text-lightGray">05</span>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-secondaryBlack tracking-tight">Banking & Finance</h3>
                      <ArrowBtn delay={1} className="bg-greyBg text-secondaryBlack p-1.5" />
                    </div>
                    <p className="mt-2 text-sm text-textGray font-medium leading-relaxed">
                      Intelligent, secure, and scalable financial solutions
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>

          {/* Card 06: Education & Research (Bottom full-width card) */}
          <div className="lg:col-span-12">
            <ScrollReveal delay={1}>
              <div className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 p-8 md:p-10 text-white shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <Image
                    src="/assets/home-page/industries/education.svg"
                    alt="Education & Research"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain brightness-0 invert"
                  />
                  <span className="text-lg font-semibold text-white/60">06</span>
                </div>

                <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Education & Research
                      </h3>
                      <ArrowBtn delay={0.5} className="bg-gradientGreen1 text-white border border-white/20" />
                    </div>
                    <p className="mt-2 text-base md:text-lg text-white/90 font-medium">
                      Accelerating research with AI and HPC
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
