import ScrollReveal from "@/components/ScrollReveal";

export default function Overview() {
  return (
    <section className="bg-[#f9f9f9] py-20 md:py-32 text-center">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <ScrollReveal>
          <p className="font-semibold text-base md:text-lg mb-4 text-[#006D40]">
            Configure HPC Infrastructure With Confidence
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-secondaryBlack mb-8 tracking-tight">
            From Hardware Discovery to Validated Configurations
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
            Teraforge combines hardware catalog management, intelligent compatibility validation, procedural 3D visualization, and enterprise quotation workflows into a unified platform for HPC infrastructure planning.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
