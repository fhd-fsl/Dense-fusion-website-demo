import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 py-24 md:py-32 text-center text-white">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Ready to Understand How Your Landscape Is Changing?
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Discover how PlantX can transform satellite imagery and geospatial data 
            into actionable intelligence.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-[4px] border-2 border-white px-8 text-lg font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#006D40]"
          >
            Request a Demo
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
