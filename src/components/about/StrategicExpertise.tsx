import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

const expertiseItems = [
  {
    title: "Supercomputing Consulting",
    description:
      "Assess HPC requirements, optimize workflows, evaluate ROI, and design energy-efficient HPC infrastructure.",
    icon: "/assets/about/supercomputing-consulting-logo.svg",
    href: "/services/supercomputing-consulting",
  },
  {
    title: "HPC Infrastructure Design",
    description:
      "Custom HPC infrastructure, hybrid cloud integration, GPU acceleration, and high-speed networking solutions.",
    icon: "/assets/about/HPC-Infra_Design-logo.svg",
  },
  {
    title: "AI + HPC Integration",
    description:
      "Deliver high-performance AI with distributed training, generative AI, and multimodal data processing on HPC.",
    icon: "/assets/about/AI+HPC-integration-logo.svg",
  },
  {
    title: "Software Stack Optimization",
    description:
      "Deliver high-performance AI with distributed training, generative AI, and multimodal data processing on HPC.",
    icon: "/assets/about/software-stack-optimization-logo.svg",
  },
  {
    title: "Domain-Specific Solutions",
    description:
      "Build intelligent solutions for geospatial analytics, AI-powered surveillance, climate modeling, and bioinformatics.",
    icon: "/assets/about/Domain-Specific%20Solutions-logo.svg",
  },
  {
    title: "Training & Enablement",
    description:
      "Empower teams with HPC bootcamps, AI workshops, certification programs, and expert knowledge transfer.",
    icon: "/assets/about/Training%20&%20Enablement-logo.svg",
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
            <h2 className="text-4xl md:text-[50px] font-bold tracking-tight text-white">
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
              <Link 
                href={item.href || "#"} 
                className="group flex flex-col gap-6 rounded-xl border border-white/5 p-8 transition-all duration-300 cursor-pointer h-full bg-[#1E1E1E] hover:bg-gradient-to-br hover:from-[#6DC27F] hover:to-[#006D40]"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />

                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#A0A0A0] group-hover:text-white/90 transition-colors duration-300">
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
