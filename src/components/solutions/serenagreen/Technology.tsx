import ScrollReveal from "@/components/ScrollReveal";

const technologies = [
  "GIS & Geospatial",
  "Satellite Imagery",
  "Remote Sensing",
  "AI & ML",
  "Image Processing",
];

export default function Technology() {
  return (
    <section className="bg-[#f9f9f9] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 text-left">
        <ScrollReveal>
          <p className="text-[#006D40] font-bold text-sm md:text-base mb-4 tracking-widest uppercase">
            Technology Behind Serena Green
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-secondaryBlack mb-12 tracking-tight">
            Built for Large-Scale Environmental Intelligence
          </h2>
        </ScrollReveal>

        <div className="flex flex-wrap justify-start gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white px-6 py-4 rounded-[4px] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md cursor-default flex items-center justify-center">
                <span className="text-sm md:text-base font-bold text-secondaryBlack">
                  {tech}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
