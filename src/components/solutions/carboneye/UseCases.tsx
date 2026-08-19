import ScrollReveal from "@/components/ScrollReveal";

const cases = [
  {
    title: "Carbon Monitoring",
    desc: "Track environmental indicators and changes associated with carbon trends."
  },
  {
    title: "Vegetation Analysis",
    desc: "Analyze vegetation health using NDVI and other indices to monitor ecological shifts."
  },
  {
    title: "Environmental Monitoring",
    desc: "Track deforestation, land-cover changes, and overall environmental conditions."
  },
  {
    title: "Sustainability Analytics",
    desc: "Support sustainability initiatives with data-driven insights and large-scale spatial analysis."
  }
];

export default function UseCases() {
  return (
    <section className="bg-[#050505] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-bold text-lg md:text-xl mb-4 tracking-wide bg-gradient-to-r from-[#006D40] to-[#6DC27F] bg-clip-text text-transparent">
              Use Cases
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Supporting Carbon Intelligence
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="relative w-full h-auto lg:h-[220px] cursor-pointer group lg:[perspective:1000px]">
                <div className="w-full h-full transition-transform duration-500 lg:[transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)]">
                  
                  {/* Front Face (Always visible on mobile, front of card on desktop) */}
                  <div className="lg:absolute lg:inset-0 lg:[backface-visibility:hidden] bg-[#111111] flex flex-col items-center justify-center text-center p-8 md:p-10 rounded-xl shadow-lg group-hover:bg-gradient-to-br group-hover:from-[#006D40] group-hover:to-[#6DC27F] lg:group-hover:bg-[#111111] transition-all duration-300">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight text-white">
                      {item.title}
                    </h3>
                    {/* Mobile Description */}
                    <p className="text-white/80 text-[15px] md:text-[17px] leading-relaxed mt-4 block lg:hidden">
                      {item.desc}
                    </p>
                  </div>

                  {/* Back Face (Desktop only hover state) */}
                  <div className="hidden lg:flex absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#006D40] to-[#6DC27F] flex-col items-center justify-center text-center p-8 md:p-10 rounded-xl shadow-lg">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-[15px] md:text-[16px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
