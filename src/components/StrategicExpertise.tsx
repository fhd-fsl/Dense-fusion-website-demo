import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const expertiseItems = [
  {
    title: "Supercomputing Consulting",
    description:
      "Custom transformer architectures and reinforcement learning models tailored for specific domain workflows.",
    icon: "/About-us_page/Icon.svg",
    href: "/services/supercomputing-consulting",
  },
  {
    title: "HPC Infrastructure Design",
    description:
      "Seamless workload distribution across heterogeneous GPU and NPU clusters with zero latency overhead.",
    icon: "/About-us_page/Container%20(2).svg",
  },
  {
    title: "AI + HPC Integration",
    description:
      "Real-time planetary-scale analysis combining satellite telemetry with predictive atmospheric modeling.",
    icon: "/About-us_page/Vector.svg",
  },
  {
    title: "Software Stack Optimization",
    description:
      "Industrial edge vision systems for defect detection, spatial mapping, and autonomous navigation.",
    icon: "/About-us_page/Container%20(3).svg",
  },
  {
    title: "Domain-Specific Solutions",
    description:
      "Robust full-stack platforms that integrate legacy systems with modern AI-driven decision engines.",
    icon: "/About-us_page/Vector%20(1).svg",
  },
  {
    title: "Training & Enablement",
    description:
      "Bare-metal optimization and containerization strategies for secure, private cloud deployments.",
    icon: "/About-us_page/Subtract.svg",
  },
];

export default function StrategicExpertise() {
  return (
    <section className="relative w-full overflow-hidden bg-secondaryBlack font-sans py-20 md:py-28">
      {/* Subtle grid at bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1300px] px-6 md:px-12 flex flex-col gap-12">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-white">
              Our Strategic Expertise
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#A0A0A0" }}>
              Unlocking the potential of massive data through specialized vertical AI engines and
              optimized high-density computing clusters.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertiseItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={0.15 + index * 0.08}>
              <Link href={item.href || "#"} className="expertise-card group flex flex-col gap-5 rounded-xl bg-white p-7 transition-all duration-300 cursor-pointer h-full">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-colors duration-300 group-hover:border-white/25"
                  style={{ border: "1px solid #9E9E9E1A" }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain transition duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-[#090909] transition-colors duration-300 group-hover:text-[#FDFFFF]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5D5D5D] transition-colors duration-300 group-hover:text-[#FDFFFF]">
                    {item.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
