import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const steps = [
  {
    step: "STEP 01",
    title: "Capture",
    description: "Collect satellite imagery and environmental records.",
    image: "/assets/solutions/serenagreen/How Serena Green Works Images/illustration-frame.svg"
  },
  {
    step: "STEP 02",
    title: "Process",
    description: "Process imagery with GIS and machine-learning tools.",
    image: "/assets/solutions/serenagreen/How Serena Green Works Images/process-ill.svg"
  },
  {
    step: "STEP 03",
    title: "Analyze",
    description: "Classify land cover and measure environmental change.",
    image: "/assets/solutions/serenagreen/How Serena Green Works Images/illustration-frame-1.svg"
  },
  {
    step: "STEP 04",
    title: "Verify",
    description: "Verify analysis with records and ground-level evidence.",
    image: "/assets/solutions/serenagreen/How Serena Green Works Images/illustration-frame-2.svg"
  },
  {
    step: "STEP 05",
    title: "Visualize",
    description: "Present insights with maps, dashboards, and ESG summaries.",
    image: "/assets/solutions/serenagreen/How Serena Green Works Images/illustration-frame-3.svg"
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f9f9f9] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondaryBlack mb-4 tracking-tight">
              How Serena Green Works
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl">
              A Data-Driven Approach to Environmental Monitoring
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex flex-col">
                <div className="w-full bg-black rounded-lg mb-6 flex items-center justify-center overflow-hidden border border-gray-800">
                  <Image src={item.image} alt={item.title} width={400} height={300} className="w-full h-auto" />
                </div>
                
                <span className="text-gray-500 font-bold text-sm mb-2 block">
                  {item.step}
                </span>
                <h3 className="text-2xl font-bold text-secondaryBlack mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
