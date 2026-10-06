import ScrollReveal from "@/components/ScrollReveal";

import Image from "next/image";

const technologies = [
  { name: "Next.js", icon: "/assets/solutions/serenagreen/techstack/nextjs card.svg" },
  { name: "Node.js", icon: "/assets/solutions/serenagreen/techstack/js card.svg" },
  { name: "Express", icon: "/assets/solutions/serenagreen/techstack/express card.svg" },
  { name: "Next.js", icon: "/assets/solutions/serenagreen/techstack/nextjs card.svg" },
  { name: "PostGIS", icon: "/assets/solutions/serenagreen/techstack/PostGIS card.svg" },
  { name: "FastAPI", icon: "/assets/solutions/serenagreen/techstack/FastAPI cloud card.svg" },
  { name: "Python", icon: "/assets/solutions/serenagreen/techstack/Python Card.svg" },
  { name: "Minio", icon: "/assets/solutions/serenagreen/techstack/Mino card.svg" },
  { name: "Leaflet", icon: "/assets/solutions/serenagreen/techstack/Leaflet card.svg" },
  { name: "Redis", icon: "/assets/solutions/serenagreen/techstack/redis card.svg" },
];

export default function Technology() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-5xl w-full px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-secondaryBlack mb-16 tracking-tight">
            Tech Behind the Solution
          </h2>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="hover:-translate-y-1 transition-transform duration-300 flex items-center justify-center w-36 h-20 md:w-40 md:h-24">
                <Image src={tech.icon} alt={tech.name} width={100} height={40} className="object-contain w-full h-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
