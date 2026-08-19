import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const outcomes = [
  "Better Environmental Visibility",
  "Large Scale Satellite Analysis",
  "Faster Trend Detection",
  "Improved Vegetation Insights",
  "Long Term Monitoring",
  "Data Driven Sustainability Decisions"
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
              Measure Change. Understand Trends. Act With Confidence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex items-center gap-4 bg-[#f9f9f9] p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <Image src="/assets/services/supercomputing/tick.svg" alt="Check" width={24} height={24} className="flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl font-semibold text-secondaryBlack">
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
