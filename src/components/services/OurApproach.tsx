import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We understand your goals, challenges, and technical requirements."
  },
  {
    num: "02",
    title: "Design",
    desc: "We architect the right AI, HPC, or software solution tailored to your needs."
  },
  {
    num: "03",
    title: "Build & Deploy",
    desc: "We develop, integrate, test, and launch production ready solutions."
  },
  {
    num: "04",
    title: "Optimize",
    desc: "We continuously monitor, optimize, and provide ongoing technical support."
  }
];

export default function OurApproach() {
  return (
    <section className="bg-gray-50 py-10 md:py-16 relative overflow-hidden">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        
        {/* Header Section */}
        <ScrollReveal>
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black tracking-tight">
              Our Approach
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
              A streamlined process that transforms ideas into scalable AI and HPC solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Image and Overlapping Card */}
        <ScrollReveal delay={0.2}>
          <div className="relative w-full">
            
            {/* Banner Image */}
            <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-md">
              <Image 
                src="/assets/services/our-approach-bg.svg" 
                alt="Our Approach Background" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Overlapping White Card */}
            <div className="relative z-10 mx-auto w-[92%] md:w-[85%] lg:w-[90%] -mt-24 md:-mt-32 lg:-mt-40 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-12 lg:p-16 border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12">
                
                {steps.map((step, index) => (
                  <div key={step.num} className="flex flex-col">
                    {/* Number */}
                    <div className="text-4xl md:text-5xl font-bold text-[#5cb97b] mb-4 tracking-tight">
                      {step.num}
                    </div>
                    
                    {/* Decorative Line */}
                    <div className="h-12 w-0.5 relative mb-6 ml-2 bg-[#d7e9dc]">
                      <div className="absolute -top-1 -left-1 w-2.5 h-2.5 rounded-full bg-[#5cb97b]"></div>
                      <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 rounded-full bg-[#5cb97b]"></div>
                    </div>
                    
                    {/* Text content */}
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-black mb-3">
                        {step.title}
                      </h4>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
