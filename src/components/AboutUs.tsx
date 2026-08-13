import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function AboutUs() {
  return (
    <section className="bg-secondaryBlack py-16 md:py-24 text-white">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 w-full max-w-2xl">
            <ScrollReveal delay={0.1}>
              <h2 className="text-xl md:text-2xl font-semibold text-lightGray tracking-tight">
                About Us
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-8 text-2xl md:text-3xl lg:text-[34px] font-normal leading-[1.4] tracking-tight">
                <span className="font-bold">DenseFusion</span> is an AI-driven technology
                company dedicated to building intelligent solutions that solve complex challenges, accelerate
                innovation and empower businesses to grow with confidence.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="mt-10 md:mt-12">
                <Link
                  href="/about"
                  className="group inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 px-5 text-lg font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90"
                >
                  <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                    <span className="flex h-11 shrink-0 items-center justify-center text-white">
                      Explore More
                    </span>
                    <span className="flex h-11 shrink-0 items-center justify-center text-white">
                      Explore More
                    </span>
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full lg:max-w-[500px]">
            <ScrollReveal delay={0.45}>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/assets/home-page/about/tech cloud.svg"
                  alt="Tech Cloud"
                  fill
                  className="object-contain mix-blend-screen"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Divider */}
        <ScrollReveal delay={0.5}>
          <hr className="my-16 border-[#1f1f1f]" />
        </ScrollReveal>

        {/* Bottom Section */}
        <div className="flex flex-col gap-12 max-w-3xl">
          {/* Item 1 */}
          <ScrollReveal delay={0.55}>
            <div className="flex flex-col gap-5">
              <div 
                className="w-11 h-11 bg-gradient-to-br from-lightGreen to-gradientGreen1" 
                style={{ 
                  WebkitMaskImage: 'url(/assets/home-page/union.svg)', 
                  WebkitMaskSize: 'contain', 
                  WebkitMaskRepeat: 'no-repeat', 
                  WebkitMaskPosition: 'left center',
                  maskImage: 'url(/assets/home-page/union.svg)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'left center'
                }} 
              />
              <h3 className="text-2xl md:text-[28px] font-bold text-white tracking-tight">
                Innovating for Impact
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed font-medium">
                DenseFusion harnesses cutting-edge AI to solve real-world problems, transforming
                industries and improving lives through smart, client-focused solutions.
              </p>
            </div>
          </ScrollReveal>

          {/* Item 2 */}
          <ScrollReveal delay={0.65}>
            <div className="flex flex-col gap-5 mt-2">
              <div 
                className="w-11 h-11 bg-gradient-to-br from-lightGreen to-gradientGreen1" 
                style={{ 
                  WebkitMaskImage: 'url(/assets/home-page/mission.svg)', 
                  WebkitMaskSize: 'contain', 
                  WebkitMaskRepeat: 'no-repeat', 
                  WebkitMaskPosition: 'left center',
                  maskImage: 'url(/assets/home-page/mission.svg)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'left center'
                }} 
              />
              <h3 className="text-2xl md:text-[28px] font-bold text-white tracking-tight">
                Our Mission
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed font-medium">
                To deliver tailor-made solutions with integrity and collaboration, creating value,
                opportunity, and exceeding expectations for global partners.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
