import ScrollReveal from "@/components/ScrollReveal";

import Image from "next/image";

const technologies = [
  { name: "Tech 1", icon: "/assets/solutions/agrovia/techstack/Frame 1171276539.svg" },
  { name: "Tech 2", icon: "/assets/solutions/agrovia/techstack/Frame(.svg" },
  { name: "Tech 3", icon: "/assets/solutions/agrovia/techstack/Frame-1(.svg" },
  { name: "Tech 4", icon: "/assets/solutions/agrovia/techstack/Frame-1.svg" },
  { name: "Tech 5", icon: "/assets/solutions/agrovia/techstack/Frame-2(.svg" },
  { name: "Tech 6", icon: "/assets/solutions/agrovia/techstack/Frame-2.svg" },
  { name: "Tech 7", icon: "/assets/solutions/agrovia/techstack/Frame-3(.svg" },
  { name: "Tech 8", icon: "/assets/solutions/agrovia/techstack/Frame-3.svg" },
  { name: "Tech 9", icon: "/assets/solutions/agrovia/techstack/Frame.svg" },
];

export default function Technology() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-secondaryBlack mb-16 tracking-tight">
            Tech Behind the Solution
          </h2>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="hover:-translate-y-1 transition-transform duration-300 flex items-center justify-center w-48 h-28 md:w-56 md:h-32">
                <Image src={tech.icon} alt={tech.name} width={180} height={80} className="object-contain w-full h-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
