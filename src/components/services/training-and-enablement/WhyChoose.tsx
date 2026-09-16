import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const formats = [
  {
    title: "Corporate Training",
    desc: "Focused training programs designed to strengthen technical capabilities across AI, HPC, DevOps, and machine learning.",
  },
  {
    title: "Team-Based Learning",
    desc: "Training tailored to the knowledge and requirements of your technical teams.",
  },
  {
    title: "Practical Learning",
    desc: "Relevant technical concepts and applications that teams can apply in their work.",
  },
  {
    title: "Technology-Focused Training",
    desc: "Focused learning across AI, HPC, DevOps, and machine learning.",
  },
];

export default function TrainingFormats() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-[36px] md:text-[48px] font-bold text-black tracking-tight mb-4">
              Training Formats
            </h2>
            <h3 className="text-[#40A865] text-xl md:text-2xl font-medium">
              Flexible Training for Technical Teams
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 lg:gap-x-24">
            {formats.map((format, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center mb-3">
                  <div className="flex items-center justify-center mr-3 shrink-0">
                    <Image
                      src="/assets/services/supercomputing/tick.svg"
                      alt="Check"
                      width={24}
                      height={24}
                    />
                  </div>
                  <h4 className="text-black font-semibold text-[20px] md:text-[22px]">
                    {format.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed pl-[36px]">
                  {format.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
