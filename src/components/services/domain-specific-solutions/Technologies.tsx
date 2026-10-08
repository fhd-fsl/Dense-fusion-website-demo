import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const technologies = [
  { name: "Tech 1", icon: "/assets/services/domain-specific-solutions/techstack/Background+Border-1.svg" },
  { name: "Tech 2", icon: "/assets/services/domain-specific-solutions/techstack/Background+Border-2.svg" },
  { name: "Tech 3", icon: "/assets/services/domain-specific-solutions/techstack/Background+Border.svg" },
  { name: "Tech 4", icon: "/assets/services/domain-specific-solutions/techstack/Frame 1171276556.svg" }
];

type TechnologiesProps = {
  subtitle?: string;
};

export default function Technologies({ subtitle }: TechnologiesProps) {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className={`text-3xl md:text-5xl font-bold text-secondaryBlack ${subtitle ? "mb-6" : "mb-16"} tracking-tight`}>
            Technologies We Work With
          </h2>
          {subtitle && (
            <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
              {subtitle}
            </p>
          )}
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="hover:-translate-y-1 transition-transform duration-300 flex items-center justify-center w-48 h-28 md:w-56 md:h-32">
                <Image src={tech.icon} alt={tech.name} width={224} height={128} className="object-contain w-full h-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
