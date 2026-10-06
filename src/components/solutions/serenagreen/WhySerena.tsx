import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  {
    title: "Continuous Monitoring",
    description: "Track environmental conditions and changes over extended periods.",
  },
  {
    title: "Large-Scale Analysis",
    description: "Monitor multiple properties and geographic areas through a unified platform.",
  },
  {
    title: "Verified Intelligence",
    description: "Combine satellite observations with plantation and operational data for stronger environmental verification.",
  },
  {
    title: "Data-Driven Sustainability",
    description: "Convert environmental data into measurable insights for ESG planning.",
  },
];

export default function WhySerena() {
  return (
    <section className="bg-[#f9f9f9] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#006D40] mb-6 tracking-tight">
              Why Serena Green?
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-4xl">
              Serena Green brings together geospatial intelligence, satellite observation, and environmental analytics to help organizations measure change, verify environmental initiatives, and make informed sustainability decisions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group bg-white p-8 md:p-10 rounded-xl h-full border-l-[4px] border-transparent hover:border-[#6DC27F] shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-secondaryBlack mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
