"use client";

import { useEffect, useState, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    title: "Assess",
    label: "STEP 01",
    desc: "Evaluate your team's current skill levels and identify knowledge gaps.",
  },
  {
    title: "Design",
    label: "STEP 02",
    desc: "Create a customized curriculum focused on your specific technologies and use cases.",
  },
  {
    title: "Deliver",
    label: "STEP 03",
    desc: "Conduct engaging, hands-on training sessions led by industry experts.",
  },
  {
    title: "Support",
    label: "STEP 04",
    desc: "Provide ongoing resources, documentation, and mentorship to reinforce learning.",
  },
];

export default function ConsultingProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const stepElements = containerRef.current.querySelectorAll(".step-item");

      let currentActive = 0;
      stepElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        // If the top of the element is above the middle of the screen
        if (rect.top <= window.innerHeight / 2) {
          currentActive = index;
        }
      });

      setActiveIndex(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32 relative">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16 md:mb-24 max-w-3xl">
            <h2 className="text-[36px] md:text-[48px] font-semibold text-white mb-6">
              Our Approach
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
              A proven methodology to deliver impactful learning experiences tailored to your organizational needs.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="flex flex-col md:flex-row gap-12 md:gap-24"
          ref={containerRef}
        >
          {/* Left Column - Sticky Titles */}
          <div className="w-full md:w-1/3 hidden md:block">
            <div className="sticky top-1/3 flex flex-col gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`text-[28px] lg:text-[34px] font-semibold transition-all duration-500 cursor-pointer ${
                    activeIndex === index ? "text-white" : "text-gray-600"
                  }`}
                  onClick={() => {
                    const el = document.getElementById(`step-${index}`);
                    if (el) {
                      const y =
                        el.getBoundingClientRect().top +
                        window.scrollY -
                        window.innerHeight / 3;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  {step.title}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="w-full md:w-2/3 relative">
            <div className="flex flex-col gap-0">
              {steps.map((step, index) => (
                <div
                  key={index}
                  id={`step-${index}`}
                  className={`step-item relative pl-12 md:pl-16 min-h-[150px] md:min-h-[180px] ${index !== steps.length - 1 ? "pb-12 md:pb-20" : "pb-0"}`}
                >
                  {/* Indicator Dot */}
                  <div
                    className={`absolute left-0 top-2 w-[20px] h-[20px] rounded-full border-4 border-[#0a0a0a] transition-all duration-500 z-10 ${
                      activeIndex >= index ? "bg-[#1b8e44]" : "bg-gray-700"
                    } ${
                      activeIndex === index
                        ? "shadow-[0_0_12px_2px_rgba(27,142,68,0.8)] scale-110"
                        : ""
                    }`}
                  ></div>

                  {/* Line Segment connecting to next dot */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[9px] top-[26px] -bottom-[10px] w-[2px] bg-gray-800 z-0 hidden md:block">
                      <div
                        className="w-full bg-[#1b8e44] transition-all duration-500"
                        style={{ height: activeIndex > index ? "100%" : "0%" }}
                      ></div>
                    </div>
                  )}

                  <div className="md:hidden text-[24px] font-semibold mb-2 transition-colors duration-500 text-white">
                    {step.title}
                  </div>

                  <div
                    className={`text-sm md:text-base tracking-widest font-semibold mb-4 transition-colors duration-500 ${
                      activeIndex === index ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {step.label}
                  </div>

                  <p
                    className={`text-[20px] md:text-[24px] leading-relaxed transition-colors duration-500 ${
                      activeIndex === index ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
