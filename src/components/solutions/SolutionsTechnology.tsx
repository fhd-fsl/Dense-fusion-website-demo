import ScrollReveal from "@/components/ScrollReveal";

const technologies = [
  {
    title: "Geospatial",
    description: "Analyze, visualize, and interpret location-based data at scale.",
    isPrimary: true
  },
  {
    title: "Remote Sensing",
    description: "Monitor landscapes and agriculture with Earth observation data.",
    isPrimary: false
  },
  {
    title: "AI & Machine Learning",
    description: "Automate classification, detection, prediction, and complex data analysis.",
    isPrimary: false
  },
  {
    title: "Data Analytics",
    description: "Transform large and complex datasets into meaningful insights.",
    isPrimary: false
  },
  {
    title: "HPC Infrastructure",
    description: "Support computationally intensive AI, geospatial, and scientific workloads.",
    isPrimary: false
  },
  {
    title: "Cloud Infrastructure",
    description: "Scale systems to process, store, and manage large data volumes.",
    isPrimary: false
  }
];

export default function SolutionsTechnology() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 mb-6 bg-white shadow-sm">
              <span className="text-secondaryBlack font-semibold text-sm">
                What Powers Our Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondaryBlack mb-4 tracking-tight">
              Advanced Technology Behind Every Solution
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-3xl leading-relaxed">
              We combine advanced computing, geospatial technologies, AI, and data engineering to build reliable solutions for complex real-world environments.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div 
                className="group relative p-8 rounded-xl h-full bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-[#339b60] hover:border-transparent overflow-hidden"
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#339b60] text-white group-hover:bg-white group-hover:text-[#339b60] transition-colors duration-300">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-secondaryBlack group-hover:text-white transition-colors duration-300">
                        {tech.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500 group-hover:text-white/90 transition-colors duration-300">
                    {tech.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
