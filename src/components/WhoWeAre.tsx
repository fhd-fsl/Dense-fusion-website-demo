import ScrollReveal from "./ScrollReveal";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white font-sans">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12 py-16 md:py-24 border-t border-borderGray">
        <ScrollReveal delay={0.1}>
          <span
            className="inline-block rounded-[4px] px-5 py-2.5 text-sm font-bold tracking-widest text-white uppercase"
            style={{ background: "linear-gradient(135deg, #6DC27F 0%, #006D40 100%)" }}
          >
            Who We Are
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <h2
            className="mt-6 text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.15] tracking-tight max-w-2xl"
            style={{ color: "#090909" }}
          >
            Specializing in Applied AI and HPC Orchestration
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-8 flex flex-col gap-5 max-w-3xl">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#5D5D5D" }}>
              DenseFusion was founded on the principle of Computational Sovereignty. We empower
              organizations to reclaim control over their data and intelligence infrastructure
              through bespoke AI models and hardware-aware software architectures.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#5D5D5D" }}>
              Our team of technical architects and research scientists bridge the gap between
              theoretical AI and industrial-scale deployment, ensuring every operation is
              efficient, secure, and infinitely scalable.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
