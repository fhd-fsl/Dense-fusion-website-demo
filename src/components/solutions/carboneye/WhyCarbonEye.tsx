import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  {
    title: "Data Driven Monitoring",
    description: "Track environmental conditions using measurable indicators."
  },
  {
    title: "Geospatial Intelligence",
    description: "Understand environmental change across geographic areas."
  },
  {
    title: "Scalable Processing",
    description: "Analyze large volumes of satellite and spatial data."
  },
  {
    title: "Actionable Insights",
    description: "Turn complex environmental information into useful intelligence."
  }
];

export default function WhyCarbonEye() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#006D40] to-[#6DC27F] bg-clip-text text-transparent mb-6 tracking-tight">
              Why Carbon Eye?
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-4xl">
              Carbon Eye transforms complex satellite and environmental datasets into visual intelligence that helps organizations better understand environmental change and carbon-related trends.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group bg-[#f9f9f9] p-8 md:p-10 rounded-xl h-full border-l-[4px] border-gray-200 hover:border-[#6DC27F] hover:shadow-md transition-all duration-300">
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
