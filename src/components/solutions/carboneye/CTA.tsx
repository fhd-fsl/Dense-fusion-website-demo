import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 py-24 md:py-32 text-center text-white">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Ready to Take Control of Your Carbon Footprint?
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Discover how Carbon Eye can help transform satellite data into meaningful carbon intelligence.
          </p>
          
          <Link
            href="/contact"
            className="group inline-flex h-12 items-start justify-center overflow-hidden rounded-[4px] bg-[#050505] px-8 text-lg font-bold text-white shadow-sm transition-colors duration-300 hover:bg-[#6DC27F]"
          >
            <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
              <span className="flex h-12 shrink-0 items-center justify-center text-white">
                Talk to Our Experts
              </span>
              <span className="flex h-12 shrink-0 items-center justify-center text-white">
                Talk to Our Experts
              </span>
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
