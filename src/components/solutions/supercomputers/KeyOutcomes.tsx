import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const outcomes = [
  "Faster Hardware Configuration",
  "Automated Compatibility Validation",
  "Real-World 3D Visualization",
  "Thermal & Power Awareness",
  "Detailed Technical Quotations",
  "More Confident HPC Procurement",
];

export default function KeyOutcomes() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondaryBlack mb-4 tracking-tight">
              Key Outcomes
            </h2>
            <p className="text-lg md:text-xl font-medium text-[#006D40]">
              From Hardware Selection to Deployment Confidence
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <Image src="/assets/services/supercomputing/tick.svg" alt="Check" width={24} height={24} className="flex-shrink-0" />
                <span className="text-base md:text-lg font-semibold text-secondaryBlack">
                  {outcome}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
