import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  {
    title: "Continuous Monitoring",
    description: "Track environmental changes over extended periods.",
  },
  {
    title: "Large-Scale Analysis",
    description: "Monitor broad geographic areas efficiently.",
  },
  {
    title: "Visual Intelligence",
    description: "Make complex environmental data easier to understand.",
  },
  {
    title: "Data-Driven Decisions",
    description: "Support conservation and sustainability initiatives with reliable insights.",
  },
];

export default function WhySerena() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#006D40] to-[#6DC27F] bg-clip-text text-transparent mb-6 tracking-tight">
              Why Serena Green?
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-4xl">
              Serena Green brings together geospatial technology and satellite-based analysis to help organizations better understand environmental transformation and make informed decisions.
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
