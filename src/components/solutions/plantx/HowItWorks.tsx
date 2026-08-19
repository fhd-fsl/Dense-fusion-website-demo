import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const steps = [
  {
    step: "STEP 01",
    title: "Collect",
    description: "Gather satellite imagery and relevant geospatial datasets.",
    image: "/assets/solutions/plantx/How PlantX Works Images/illustration-frame.svg"
  },
  {
    step: "STEP 02",
    title: "Analyze",
    description: "Process imagery and identify land-cover patterns and changes.",
    image: "/assets/solutions/plantx/How PlantX Works Images/illustration-frame (1).svg"
  },
  {
    step: "STEP 03",
    title: "Compare",
    description: "Analyze changes across different locations and time periods.",
    image: "/assets/solutions/plantx/How PlantX Works Images/illustration-frame (2).svg"
  },
  {
    step: "STEP 04",
    title: "Visualize",
    description: "Present results through interactive maps and intuitive visualizations.",
    image: "/assets/solutions/plantx/How PlantX Works Images/illustration-frame (3).svg"
  },
  {
    step: "STEP 05",
    title: "Understand",
    description: "Turn geospatial changes into insights that support better decisions.",
    image: "/assets/solutions/plantx/How PlantX Works Images/illustration-frame (4).svg"
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f9f9f9] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondaryBlack mb-4 tracking-tight">
              How PlantX Works
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl">
              From Satellite Imagery to Actionable Intelligence
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
                
                <span className="text-[#006D40] font-bold text-sm tracking-widest mb-2">
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
