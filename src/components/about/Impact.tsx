"use client";

import { useEffect, useRef } from "react";
import { useInView, useSpring } from "motion/react";
import ScrollReveal from "../ScrollReveal";

function AnimatedNumber({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2500,
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, springValue, value]);

  useEffect(() => {
    return springValue.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(v).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}

export default function Impact() {
  return (
    <section className="w-full bg-white font-sans py-20 md:py-28">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Text */}
          <div className="flex flex-col max-w-md">
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-[50px] font-bold tracking-tight text-secondaryBlack leading-[1.1]">
                Delivering <br />
                Measurable <br />
                <span className="text-[#1b8e44]">Impact</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-8 text-base md:text-lg text-textGray leading-relaxed max-w-[340px]">
                Trusted by organizations to solve complex challenges through intelligent technology.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Stats Grid */}
          <ScrollReveal delay={0.3} className="w-full">
            <div className="grid grid-cols-2 w-full">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center py-12 md:py-16 border-b border-r border-black/10">
                <div className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight bg-gradient-to-br from-[#006D40] to-[#6DC27F] bg-clip-text text-transparent">
                  <AnimatedNumber value={50} suffix="+" />
                </div>
                <div className="mt-4 text-sm md:text-base text-secondaryBlack font-medium">
                  Projects Delivered
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center py-12 md:py-16 border-b border-black/10">
                <div className="text-4xl md:text-5xl lg:text-[64px] font-bold text-secondaryBlack tracking-tight">
                  <AnimatedNumber value={30} suffix="+" />
                </div>
                <div className="mt-4 text-sm md:text-base text-secondaryBlack font-medium">
                  AI Solutions
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center py-12 md:py-16 border-r border-black/10">
                <div className="text-4xl md:text-5xl lg:text-[64px] font-bold text-secondaryBlack tracking-tight">
                  <AnimatedNumber value={25} suffix="+" />
                </div>
                <div className="mt-4 text-sm md:text-base text-secondaryBlack font-medium">
                  Enterprise Clients
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center justify-center py-12 md:py-16">
                <div className="text-4xl md:text-5xl lg:text-[64px] font-bold text-secondaryBlack tracking-tight">
                  <AnimatedNumber value={15} suffix="+" />
                </div>
                <div className="mt-4 text-sm md:text-base text-secondaryBlack font-medium">
                  Strategic Partnerships
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
