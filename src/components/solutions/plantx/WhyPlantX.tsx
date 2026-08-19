import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  {
    title: "Scalable Analysis",
    description: "Scale computations from a single park plot to multi-country forest reserves automatically."
  },
  {
    title: "Historical Intelligence",
    description: "Construct absolute terrain records over decades to isolate anthropogenic factors."
  },
  {
    title: "Visual Insights",
    description: "Ditch cryptic coordinate files for clean vector maps with high-fidelity measuring dials."
  },
  {
    title: "Data-Driven Monitoring",
    description: "Protect environment investments with rigorous temporal validation rather than sparse checks."
  }
];

export default function WhyPlantX() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#006D40] to-[#6DC27F] bg-clip-text text-transparent mb-6 tracking-tight">
              Why PlantX?
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-4xl">
              PlantX breaks down complex geographic datasets, satellite orbits, and spectra layers 
              into simple, decision-ready visual structures. We connect high-performance compute 
              directly to landscape realities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-[#f9f9f9] p-8 md:p-10 rounded-xl h-full border-l-[4px] border-gray-200 hover:border-[#6DC27F] hover:shadow-md transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-secondaryBlack mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-base md:text-lg">
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
