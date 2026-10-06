import ScrollReveal from "@/components/ScrollReveal";

export default function Overview() {
  return (
    <section className="bg-[#f9f9f9] py-20 md:py-32 text-center">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <ScrollReveal>
          <p className="font-semibold text-base md:text-lg mb-4 text-[#006D40]">
            Monitor Plantation Progress At Scale
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-secondaryBlack mb-8 tracking-tight">
            From Site Mapping to Environmental Insights
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
            The platform brings plantation sites, satellite imagery, tree survival data, species information, carbon estimates, and reporting into one centralized system, helping organizations monitor environmental initiatives across complex geographic and organizational structures.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
