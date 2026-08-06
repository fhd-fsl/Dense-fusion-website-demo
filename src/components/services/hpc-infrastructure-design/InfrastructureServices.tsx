import ScrollReveal from "@/components/ScrollReveal";

export default function ConsultingServices() {
  return (
    <section className="bg-[#f9f9f9] py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4">
              Our Infrastructure Services
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
              Comprehensive HPC design services tailored to optimize
              performance, scalability, and long-term value.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between min-h-[220px] md:min-h-[260px]">
                <h3 className="text-[28px] md:text-[34px] font-semibold text-black leading-tight">
                  GPU & CPU Cluster Design
                </h3>
                <p className="text-gray-600 text-base md:text-lg mt-8">
                  Custom compute architecture tailored to demanding workloads.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between min-h-[220px] md:min-h-[260px]">
                <h3 className="text-[28px] md:text-[34px] font-semibold text-black leading-tight">
                  Hybrid Cloud Integration
                </h3>
                <p className="text-gray-600 text-base md:text-lg mt-8">
                  Extend computing resources across cloud and on-premises.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Middle Column (Tall Green Card) */}
          <div className="flex flex-col">
            <ScrollReveal delay={0.3} className="h-full">
              <div className="bg-gradient-to-br from-[#006D40] to-[#6DC27F] p-8 md:p-10 rounded-xl shadow-lg h-full flex flex-col justify-between min-h-[220px] md:min-h-[464px]">
                <h3 className="text-[28px] md:text-[34px] font-semibold text-white leading-tight">
                  High-Speed Networking
                </h3>
                <p className="text-green-50 text-base md:text-lg mt-8">
                  Low-latency networking for seamless communication.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0.4}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between min-h-[220px] md:min-h-[260px]">
                <h3 className="text-[28px] md:text-[34px] font-semibold text-black leading-tight">
                  Parallel Storage Systems
                </h3>
                <p className="text-gray-600 text-base md:text-lg mt-8">
                  High-throughput storage optimized for HPC workloads.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between min-h-[220px] md:min-h-[260px]">
                <h3 className="text-[28px] md:text-[34px] font-semibold text-black leading-tight">
                  Infrastructure Monitoring
                </h3>
                <p className="text-gray-600 text-base md:text-lg mt-8">
                  Continuous monitoring and performance optimization.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
