"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import SupercomputingAnimation from "@/components/animations/SupercomputingAnimation";
import HpcInfrastructureAnimation from "@/components/animations/HpcInfrastructureAnimation";
import AiHpcAnimation from "@/components/animations/AiHpcAnimation";
import SoftwareStackAnimation from "@/components/animations/SoftwareStackAnimation";
import DomainSpecificAnimation from "@/components/animations/DomainSpecificAnimation";
import TrainingAnimation from "@/components/animations/TrainingAnimation";

interface ServiceItem {
  id: string;
  title: string;
  iconPath?: string;
  isTargetIcon?: boolean;
  AnimationComponent: React.ComponentType;
  description: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    id: "supercomputing-consulting",
    title: "Supercomputing Consulting",
    iconPath: "/assets/home-page/services/supercomputer.svg",
    AnimationComponent: SupercomputingAnimation,
    description:
      "HPC Needs Assessment & Feasibility Studies Industry-specific Workflow Analysis (e.g.,CFD, genomics, geospatial AI) ROI & TCO Calculations for HPC Investments Green HPC & Energy-Efficient Cluster Design.",
    href: "/services/supercomputing-consulting",
  },
  {
    id: "hpc-infrastructure-design",
    title: "HPC Infrastructure Design",
    iconPath: "/assets/home-page/services/HPC.svg",
    AnimationComponent: HpcInfrastructureAnimation,
    description:
      "Custom architectural designs for high-performance computing clusters, liquid cooling setups, low-latency interconnects, and scalable high-speed parallel storage systems.",
    href: "/services/hpc-infrastructure-design",
  },
  {
    id: "ai-hpc-integration",
    title: "AI + HPC Integration",
    iconPath: "/assets/home-page/services/AI+HPC.svg",
    AnimationComponent: AiHpcAnimation,
    description:
      "Seamless blending of AI deep learning workloads with traditional HPC environments, enabling distributed GPU model training and high-throughput inference.",
    href: "/services/ai-hpc-integration",
  },
  {
    id: "software-stack-optimization",
    title: "Software Stack Optimization",
    iconPath: "/assets/home-page/services/stack-optimization.svg",
    AnimationComponent: SoftwareStackAnimation,
    description:
      "Fine-tuning compilers, MPI libraries, CUDA kernels, and job schedulers to squeeze maximum performance out of hardware investments.",
    href: "/services/software-stack-optimization",
  },
  {
    id: "domain-specific-solutions",
    title: "Domain-Specific Solutions",
    iconPath: "/assets/home-page/services/domain-specific.svg",
    AnimationComponent: DomainSpecificAnimation,
    description:
      "Tailored computational platforms engineered for specialized industries including finance, life sciences, energy, aerospace, and autonomous systems.",
    href: "/services/domain-specific-solutions",
  },
  {
    id: "training-enablement",
    title: "Training & Enablement",
    iconPath: "/assets/home-page/services/training-enablement.svg",
    AnimationComponent: TrainingAnimation,
    description:
      "Comprehensive hands-on training and capacity building for engineering and research teams to master modern supercomputing tools and AI frameworks.",
    href: "/services/training-and-enablement",
  },
];

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="bg-greyBg/60 py-20 md:py-28">
      {/* SVG Gradient definition for Lucide icons */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="heroBtnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="15%" stopColor="#6DC27F" />
            <stop offset="55%" stopColor="#147D4C" />
            <stop offset="100%" stopColor="#006D40" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mx-auto max-w-[1300px] px-6 md:px-12">
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-[50px] font-bold text-secondaryBlack tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 max-w-5xl text-lg md:text-xl text-textGray font-medium leading-relaxed">
            We help organizations harness the power of AI and High-Performance Computing (HPC) with
            tailored solutions that maximize performance, scalability, and business impact.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Services List */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollReveal delay={0.25}>
              <div className="flex flex-col">
                {services.map((service, index) => {
                  const isSelected = activeIndex === index;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveIndex(index)}
                      className={`group w-full text-left transition-all duration-300 px-5 py-4 flex items-center gap-4 ${
                        isSelected
                          ? "rounded-[4px] bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 text-white shadow-md font-bold"
                          : "border-b border-borderGray2/70 text-secondaryBlack font-bold hover:bg-white/60 bg-transparent"
                      }`}
                    >
                      {/* Icon rendering */}
                      {service.iconPath ? (
                        <span
                          className={`h-5 w-5 shrink-0 inline-block transition-colors duration-300 ${
                            isSelected
                              ? "bg-white"
                              : "bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1"
                          }`}
                          style={{
                            maskImage: `url(${service.iconPath})`,
                            WebkitMaskImage: `url(${service.iconPath})`,
                            maskSize: "contain",
                            WebkitMaskSize: "contain",
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                          }}
                        />
                      ) : service.isTargetIcon ? (
                        <Target
                          className="h-5 w-5 shrink-0 transition-colors duration-300"
                          style={{
                            stroke: isSelected ? "#FFFFFF" : "url(#heroBtnGradient)",
                          }}
                        />
                      ) : (
                        <span className="w-5 shrink-0" />
                      )}

                      <span className="text-lg tracking-tight">
                        {service.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Service Card Details */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.35}>
              <div className="h-[500px] md:h-[520px] flex flex-col justify-between rounded-2xl bg-white p-6 md:p-8 shadow-xl border border-borderGray2/50">
                <div>
                  <div className="relative h-[220px] md:h-[250px] w-full overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
                    <activeService.AnimationComponent key={activeService.id} />
                  </div>

                  <p className="mt-5 text-base md:text-lg text-textGray font-medium leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                <div className="mt-4 pt-2">
                  <Link
                    href={activeService.href}
                    className="group inline-flex items-center gap-2 text-lg font-bold transition-opacity hover:opacity-80"
                  >
                    <span className="bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 bg-clip-text text-transparent">
                      Explore
                    </span>
                    <ArrowRight
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      style={{ stroke: "url(#heroBtnGradient)" }}
                    />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}