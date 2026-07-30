import ScrollReveal from "../ScrollReveal";

const advantages = [
  {
    title: "Enterprise Scale",
    desc: "Decades of combined experience deploying mission-critical systems for Fortune 500 leaders."
  },
  {
    title: "AI + HPC Hybrid",
    desc: "Unique hybrid expertise spanning both specialized hardware and high-level model architecture."
  },
  {
    title: "End-to-End Delivery",
    desc: "We manage the full lifecycle from early-stage discovery to 24/7 post-deployment optimization."
  },
  {
    title: "Growth Ready",
    desc: "Systems built to grow alongside your data requirements, ensuring long-term protection."
  },
  {
    title: "Industry Experience",
    desc: "Proven track record in highly regulated sectors including Finance, Biotech, and Defense."
  },
  {
    title: "Long-Term Partnership",
    desc: "We don't just deliver products; we become an extension of your technical leadership team."
  }
];

export default function Advantage() {
  return (
    <section className="bg-[#187C45] py-16 md:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              The DenseFusion Advantage
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Pioneering the intersection of massive-scale compute<br className="hidden md:block" /> and advanced neural networks.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] rounded-xl overflow-hidden shadow-2xl bg-[#146C3B]">
            {advantages.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 md:p-12 h-full flex flex-col transition-transform duration-300 hover:bg-gray-50 cursor-default"
              >
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
