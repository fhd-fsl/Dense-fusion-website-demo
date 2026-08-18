import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Understand",
    description: "Identify the challenge, data sources, objectives, and expected outcomes.",
  },
  {
    num: "02",
    title: "Analyze",
    description: "Process and analyze complex datasets using GIS, AI, and advanced analytics.",
  },
  {
    num: "03",
    title: "Visualize",
    description: "Transform results into intuitive maps, dashboards, and actionable insights.",
  },
  {
    num: "04",
    title: "Evolve",
    description: "Continuously improve the solution as new data, technologies, and requirements emerge.",
  }
];

export default function SolutionsApproach() {
  return (
    <section className="bg-[#050505] py-16 md:py-24 border-b border-gray-800">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        
        {/* Header Section */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                From Data to Decisions
              </h2>
              <h3 className="text-2xl md:text-3xl text-gray-500 font-medium">
                Our Solution Development <br className="hidden md:block"/> Approach
              </h3>
            </div>
            <div className="lg:w-1/3 lg:pt-4">
              <p className="text-gray-400 text-base leading-relaxed">
                We combine domain understanding, advanced technology, and continuous optimization to turn complex challenges into practical solutions.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Steps Container */}
        <div className="bg-[#121212] rounded-xl p-10 md:p-14 lg:p-16 border border-white/5 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group flex flex-col cursor-default">
                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white group-hover:text-[#6DC27F] transition-colors duration-300">
                    {step.num}
                  </div>
                  
                  {/* Vertical dashed line with dot */}
                  <div className="flex flex-col items-center w-12 mb-6">
                    <div className="h-12 w-px border-l-2 border-dashed border-gray-600 mb-1.5 opacity-60"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#6DC27F] transition-colors duration-300"></div>
                  </div>

                  {/* Text Content */}
                  <h4 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-[#6DC27F] transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed md:max-w-[90%]">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
