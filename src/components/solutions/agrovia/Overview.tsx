import ScrollReveal from "@/components/ScrollReveal";

export default function Overview() {
  return (
    <section className="bg-[#f9f9f9] py-20 md:py-32 text-center">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <ScrollReveal>
          <p className="font-semibold text-base md:text-lg mb-4 text-[#006D40]">
            Connect Agricultural Intelligence To Field Action
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-secondaryBlack mb-8 tracking-tight">
            From AI Detection to On-Ground Decisions
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
            AGROVIA bridges satellite-driven crop intelligence with real-world field verification and agricultural services, enabling teams to manage advisories, field operations, farmer requests, and service workflows even in low-connectivity environments.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
