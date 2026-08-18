import ScrollReveal from "@/components/ScrollReveal";

const technologies = [
  {
    title: "GIS & Geospatial",
    description: "Analyze, visualize, and interpret location-based data at scale.",
    isPrimary: true
  },
  {
    title: "Satellite Imagery",
    description: "Combine intelligent computing with high-performance infrastructure.",
    isPrimary: false
  },
  {
    title: "Artificial Intelligence",
    description: "Apply intelligent models to automate analysis and uncover patterns.",
    isPrimary: false
  },
  {
    title: "Machine Learning",
    description: "Detect trends and classify complex environmental and spatial data.",
    isPrimary: false
  },
  {
    title: "Advanced Data Analytics",
    description: "Transform large datasets into meaningful insights and actionable information.",
    isPrimary: false
  },
  {
    title: "High-Performance Co.",
    description: "Support computationally intensive geospatial and AI workloads with scalable infrastructure.",
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
              DenseFusion combines GIS, deep learning algorithms, high-performance computing, and multi-sensor datasets to deliver high-confidence spatial products.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div 
                className="group relative p-8 rounded-xl h-full bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-transparent overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#006D40] to-[#6DC27F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#006D40] to-[#6DC27F] text-white group-hover:bg-none group-hover:bg-white group-hover:text-[#006D40] transition-all duration-300">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-secondaryBlack group-hover:text-white transition-colors duration-300">
                      {tech.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
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
