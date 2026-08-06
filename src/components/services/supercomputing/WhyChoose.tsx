import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  "Specialized HPC expertise",
  "Scalable architecture design",
  "AI-ready infrastructure planning",
  "End-to-end solution engineering",
  "Vendor-neutral recommendations",
  "Long-term technical partnership",
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/services/supercomputing/why-choose-densefusion-bg.svg"
          alt="Abstract Background"
          fill
          className="object-cover opacity-60 md:opacity-100"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px] w-full px-6 md:px-12 flex justify-center">
        <ScrollReveal className="w-full max-w-5xl">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-14 lg:p-20">
            <h2 className="text-[32px] md:text-[42px] font-medium text-black mb-3 tracking-tight">
              Why Choose DenseFusion
            </h2>
            <h3 className="text-[#40A865] text-lg md:text-xl font-medium mb-6">
              Trusted HPC Expertise
            </h3>
            <p className="text-gray-500 text-base md:text-[17px] leading-relaxed mb-12 max-w-4xl">
              Our consultants combine deep technical knowledge with practical
              industry experience to help organizations build reliable,
              scalable, and high-performing computing environments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 lg:gap-x-24">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex items-center justify-center mr-4 shrink-0 mt-1">
                    <Image
                      src="/assets/services/supercomputing/tick.svg"
                      alt="Check"
                      width={22}
                      height={22}
                    />
                  </div>
                  <span className="text-gray-600 font-medium text-[16px] md:text-[18px]">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
