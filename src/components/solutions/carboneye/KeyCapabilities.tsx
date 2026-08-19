import ScrollReveal from "@/components/ScrollReveal";

const capabilities = [
  {
    title: "Carbon Trend Monitoring",
    description: "Analyze environmental data to identify carbon-related patterns and changes.",
  },
  {
    title: "NDVI Analysis",
    description: "Use vegetation data to monitor environmental and land-cover conditions.",
  },
  {
    title: "Satellite Data Processing",
    description: "Analyze large-scale satellite imagery for environmental insights.",
  },
  {
    title: "Change Detection",
    description: "Identify changes across geographic locations and different time periods.",
  },
];

export default function KeyCapabilities() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/3">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-secondaryBlack mb-6 tracking-tight">
                Key Capabilities
              </h2>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                From Environmental Data to Clear Intelligence
              </p>
            </ScrollReveal>
          </div>

          {/* Right Cards Stack */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            {capabilities.map((cap, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group bg-[#f9f9f9] p-8 md:p-10 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-secondaryBlack mb-3 group-hover:bg-gradient-to-r group-hover:from-[#006D40] group-hover:to-[#6DC27F] group-hover:bg-clip-text group-hover:text-transparent">
                    {cap.title}
                  </h3>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                    {cap.description}
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
