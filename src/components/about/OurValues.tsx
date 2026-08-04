"use client";

import ScrollReveal from "../ScrollReveal";

const values = [
  {
    title: "Innovation",
    description: "We embrace emerging technologies to create forward-thinking solutions that solve today's challenges and prepare organizations for tomorrow."
  },
  {
    title: "Excellence",
    description: "We strive for the highest standards in every project, delivering reliable, scalable, and impactful technology solutions."
  },
  {
    title: "Collaboration",
    description: "Strong partnerships and open communication enable us to build solutions that truly address our clients' needs."
  },
  {
    title: "Integrity",
    description: "We operate with transparency, accountability, and a commitment to building lasting relationships based on trust."
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and so do we. We continuously explore new ideas, tools, and methodologies to deliver better outcomes."
  },
  {
    title: "Impact",
    description: "Every solution we build is designed to create measurable value, improve decision-making, and drive meaningful transformation."
  }
];

export default function OurValues() {
  return (
    <section 
      className="relative w-full bg-[#050505] font-sans py-20 md:py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/about/our-values-bg.svg')" }}
    >
      {/* Dark overlay just in case the asset needs a bit of dimming, but keeping it very subtle */}
      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-[1300px] px-6 md:px-12">
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-[50px] font-bold text-white tracking-tight">
            Our Values
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#A0A0A0] max-w-2xl font-medium">
            The principles that shape our culture, innovation, and long-term partnerships.
          </p>
        </ScrollReveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-8">
          {values.map((value, index) => {
            return (
              <ScrollReveal key={value.title} delay={0.15 + index * 0.08} className="h-full">
                <div 
                  className={`
                    flex flex-col h-full pb-8
                    ${index < 5 ? 'border-b border-white/10' : ''} 
                    ${index === 4 ? 'md:border-b-0' : ''}
                  `}
                >
                  <h3 className="text-xl md:text-[22px] font-semibold text-[#6DC27F]">
                    {value.title}
                  </h3>
                  <p className="mt-3 md:mt-4 text-base md:text-lg text-[#A0A0A0] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
