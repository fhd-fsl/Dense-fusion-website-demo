import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  {
    title: "Centralized Monitoring",
    description: "Manage plantation information across multiple geographic and organizational levels.",
  },
  {
    title: "Spatial Intelligence",
    description: "Connect every plantation site with its real geographic location and boundary.",
  },
  {
    title: "Data-Driven Tracking",
    description: "Monitor survival, species, carbon, and yearly performance through structured data.",
  },
  {
    title: "Scalable Reporting",
    description: "Turn large volumes of plantation information into clear summaries and actionable insights.",
  },
];

export default function WhyOGDCL() {
  return (
    <section className="bg-[#f9f9f9] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#006D40] mb-6 tracking-tight">
              Why It Matters
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-4xl">
              The platform combines geospatial mapping, satellite analysis, plantation records, and environmental analytics to provide organizations with a structured way to monitor large-scale sustainability initiatives.
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
