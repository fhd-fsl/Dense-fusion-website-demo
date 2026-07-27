import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Mission() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* Card 1: Innovating for Impact */}
          <ScrollReveal delay={0.1}>
            <div className="flex h-full flex-col justify-between bg-greyBg p-8 md:p-12 border-t-2 border-lightGreen shadow-md">
              <div>
                <Image
                  src="/assets/home-page/union.svg"
                  alt="Innovating for Impact"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
              <div className="mt-12 md:mt-16">
                <h3 className="text-2xl md:text-3xl font-bold text-secondaryBlack tracking-tight">
                  Innovating for Impact
                </h3>
                <p className="mt-3 text-base md:text-lg text-textGray leading-relaxed font-medium">
                  DenseFusion harnesses cutting-edge AI to solve real-world problems, transforming
                  industries and improving lives through smart, client-focused solutions.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Our Mission */}
          <ScrollReveal delay={0.25}>
            <div className="flex h-full flex-col justify-between bg-gradient-to-r from-lightGreen to-gradientGreen1 p-8 md:p-12 shadow-md">
              <div>
                <Image
                  src="/assets/home-page/mission.svg"
                  alt="Our Mission"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
              <div className="mt-12 md:mt-16">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Our Mission
                </h3>
                <p className="mt-3 text-base md:text-lg text-white/90 leading-relaxed font-medium">
                  To deliver tailor-made solutions with integrity and collaboration, creating value,
                  opportunity, and exceeding expectations for global partners.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
