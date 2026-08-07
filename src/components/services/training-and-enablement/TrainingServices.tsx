import ScrollReveal from "@/components/ScrollReveal";

export default function TrainingServices() {
  return (
    <section className="bg-[#f9f9f9] py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4">
              Our Domain Expertise
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
              Industry-focused solutions designed to accelerate innovation, improve
              efficiency, and deliver measurable business outcomes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between min-h-[220px] md:min-h-[260px]">
                <h3 className="text-[28px] md:text-[34px] font-semibold text-black leading-tight">
                  Geospatial Intelligence
                </h3>
                <p className="text-gray-600 text-base md:text-lg mt-8">
                  Advanced GIS, satellite imagery, and spatial analytics.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between min-h-[220px] md:min-h-[260px]">
                <h3 className="text-[28px] md:text-[34px] font-semibold text-black leading-tight">
                  Bioinformatics
                </h3>
                <p className="text-gray-600 text-base md:text-lg mt-8">
                  Accelerate genomics, life sciences, and biomedical research.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Middle Column (Tall Green Card) */}
          <div className="flex flex-col">
            <ScrollReveal delay={0.3} className="h-full">
              <div className="bg-gradient-to-br from-[#006D40] to-[#6DC27F] p-8 md:p-10 rounded-xl shadow-lg h-full flex flex-col justify-between min-h-[220px] md:min-h-[464px]">
                <h3 className="text-[28px] md:text-[34px] font-semibold text-white leading-tight">
                  AI-Powered Surveillance
                </h3>
                <p className="text-green-50 text-base md:text-lg mt-8">
                  Real-time monitoring and intelligent threat detection.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0.4}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between min-h-[220px] md:min-h-[260px]">
                <h3 className="text-[28px] md:text-[34px] font-semibold text-black leading-tight">
                  Climate Modeling
                </h3>
                <p className="text-gray-600 text-base md:text-lg mt-8">
                  High-performance simulations for climate and environmental research.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between min-h-[220px] md:min-h-[260px]">
                <h3 className="text-[28px] md:text-[34px] font-semibold text-black leading-tight">
                  Precision Agriculture
                </h3>
                <p className="text-gray-600 text-base md:text-lg mt-8">
                  AI-driven insights for crop monitoring and resource optimization.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
