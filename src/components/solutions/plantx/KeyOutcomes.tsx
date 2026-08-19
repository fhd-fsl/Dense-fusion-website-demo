import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const outcomes = [
  "Faster Geospatial Analysis",
  "Clearer Land-Cover Insights",
  "Long-Term Change Monitoring",
  "Large-Scale Spatial Analysis",
  "Improved Urban Planning",
  "Data-Driven Decisions"
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
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#006D40] to-[#6DC27F] bg-clip-text text-transparent">
              See Change. Understand Patterns. Plan Smarter.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex items-center gap-4 bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image src="/assets/services/supercomputing/tick.svg" alt="Check" width={22} height={22} className="flex-shrink-0 mt-1" />
                <span className="text-lg font-semibold text-secondaryBlack">
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
