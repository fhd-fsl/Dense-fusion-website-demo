import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function SupercomputingCTA() {
  return (
    <section className="bg-gradient-to-br from-[#6DC27F] via-[#006D40] via-[35%] to-[#006D40] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-6">
            Ready to Optimize Your HPC Environment?
          </h2>
          <p className="text-green-50 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Connect with our strategic consultants today to build a compute
            architecture that defines the future of your industry.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex h-12 items-start justify-center overflow-hidden rounded-[4px] bg-secondaryBlack px-8 text-lg font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-lightGreen"
            >
              <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                <span className="flex h-12 shrink-0 items-center justify-center text-white">
                  Schedule a Consultation
                </span>
                <span className="flex h-12 shrink-0 items-center justify-center text-white">
                  Schedule a Consultation
                </span>
              </span>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex h-12 items-center justify-center rounded-[4px] border border-white px-8 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1b8e44]"
            >
              Talk to an Expert
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
