import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const achievements = [
  "Faster application performance",
  "Optimized AI frameworks",
  "Better resource utilization",
  "Improved scalability",
  "Reduced system bottlenecks",
  "Stable production environments",
];

export default function ValueProp() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] w-full px-6 md:px-12 text-center">
        {/* Animated inline text */}
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-semibold text-black leading-[1.25] mb-16 max-w-4xl mx-auto">
            Hardware alone isn't enough. DenseFusion optimizes{" "}
            <span className="inline-flex align-middle mx-1 -translate-y-1 w-9 h-9 md:w-11 md:h-11 bg-[#2f9250] -rotate-6 rounded-lg items-center justify-center shadow-md">
              <Image
                src="/assets/services/supercomputing/brush.svg"
                alt="Icon"
                width={22}
                height={22}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </span>{" "}
            your HPC software stack - from operating systems and compilers to AI{" "}
            <span className="inline-flex align-middle mx-1 -translate-y-1 w-9 h-9 md:w-11 md:h-11 bg-black rotate-6 rounded-lg items-center justify-center shadow-md">
              <Image
                src="/assets/services/supercomputing/graph.svg"
                alt="Icon"
                width={22}
                height={22}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </span>{" "}
            frameworks - to maximize performance, scalability{" "}
            <span className="inline-flex align-middle mx-1 -translate-y-1 w-9 h-9 md:w-11 md:h-11 bg-[#6fcb80] -rotate-6 rounded-lg items-center justify-center shadow-md">
              <Image
                src="/assets/services/supercomputing/rocket.svg"
                alt="Icon"
                width={22}
                height={22}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </span>{" "}
            and resource efficiency.
          </h2>
        </ScrollReveal>

        {/* Divider */}
        <div className="w-full max-w-3xl mx-auto h-[1px] bg-gray-200 mb-16"></div>

        {/* What We Help You Achieve */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
            <h3 className="text-3xl md:text-[40px] font-bold text-black flex items-center">
              <span className="text-[#1b8e44] mr-2">What We Help</span> You
              Achieve
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left">
            {achievements.map((text, index) => (
              <div
                key={index}
                className="flex items-center px-5 py-3 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-lg transition-transform hover:-translate-y-0.5 duration-300"
              >
                <div className="w-7 h-7 rounded-full bg-transparent flex items-center justify-center mr-3 md:mr-4 shrink-0">
                  <Image
                    src="/assets/services/supercomputing/tick.svg"
                    alt="Check"
                    width={22}
                    height={22}
                    className="text-[#1b8e44]"
                  />
                </div>
                <span className="text-gray-800 font-semibold text-[17px] md:text-[20px] leading-tight">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
