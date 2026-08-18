import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const deliverables = [
  {
    title: "Real-Time Intelligence",
    description: "Access timely insights from complex geospatial and environmental data."
  },
  {
    title: "Long-Term Monitoring",
    description: "Track changes across landscapes and environments over extended periods."
  },
  {
    title: "Data-Driven Decisions",
    description: "Turn complex datasets into information that supports better planning."
  },
  {
    title: "Scalable Analysis",
    description: "Process large geographic areas and growing datasets efficiently."
  },
  {
    title: "Visual Intelligence",
    description: "Make complex spatial information easier to understand through intuitive visualization."
  },
  {
    title: "Actionable Insights",
    description: "Move from simply observing change to understanding what it means."
  }
];

const applications = [
  "Defense & Intelligence",
  "Government & Public Sector",
  "Agriculture",
  "Climate & Environment",
  "Urban Planning",
  "Forestry & Conservation",
  "Research & Academia",
  "Sustainability"
];

export default function SolutionsDeliverables() {
  return (
    <>
      {/* Dark Section - Deliverables */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/solutions/What our solutions deliver bg.svg" 
            alt="Background" 
            fill 
            className="object-cover" 
          />
        </div>

        <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 relative z-10">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                What Our Solutions Deliver
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl">
                Turning Complex Data Into Clear Insights
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-12">
            {deliverables.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="border-b border-gray-800 pb-8 h-full">
                  <h3 className="text-2xl font-bold text-[#6DC27F] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Light Section - Applications */}
      <section className="bg-[#f9f9f9] py-16 md:py-24 text-center">
        <div className="mx-auto max-w-[1000px] w-full px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#006D40] to-[#6DC27F] bg-clip-text text-transparent mb-4 tracking-tight">
              Built for Diverse Real-World Applications
            </h2>
            <p className="text-gray-500 text-lg md:text-xl mb-12">
              Our solutions can support organizations working across:
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {applications.map((app, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 shadow-sm rounded-full px-6 py-3 text-secondaryBlack font-semibold transition-all hover:shadow-md hover:border-[#339b60]/30"
                >
                  {app}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
