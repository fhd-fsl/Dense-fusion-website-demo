import ScrollReveal from "@/components/ScrollReveal";

export default function Overview() {
  return (
    <section className="bg-[#f9f9f9] py-20 md:py-32 text-center">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <ScrollReveal>
          <p className="font-semibold text-base md:text-lg mb-4 text-[#006D40]">
            Monitor Environmental Change At Scale
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-secondaryBlack mb-8 tracking-tight">
            From Satellite Observation to Environmental Intelligence
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
            Serena Green brings satellite imagery, geospatial analytics, carbon accounting, and environmental telemetry together in a unified platform, helping organizations monitor environmental conditions, verify sustainability activities, and understand change over time.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
