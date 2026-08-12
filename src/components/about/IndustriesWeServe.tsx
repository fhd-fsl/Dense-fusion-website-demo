import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

const industries = [
  { name: "Defense", icon: "/assets/home-page/industries/security.svg", link: "/industries/defense" },
  { name: "Government", icon: "/assets/home-page/industries/government.svg", link: "/industries/government" },
  { name: "Agriculture", icon: "/assets/home-page/industries/agriculture.svg", link: "/industries/agriculture" },
  { name: "Climate", icon: "/assets/home-page/industries/climate.svg", link: "/industries/climate" },
  { name: "Education & Research", icon: "/assets/home-page/industries/education.svg", link: "#" },
  { name: "Banking & Finance", icon: "/assets/home-page/industries/banking-finance.svg", link: "/industries/finance" },
];

export default function IndustriesWeServe() {
  return (
    <section className="w-full bg-[#F5F5F5] font-sans py-20 md:py-28">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col max-w-3xl">
            <h2 className="text-4xl md:text-[50px] font-bold tracking-tight text-secondaryBlack">
              Industries We Serve
            </h2>
            <p className="mt-4 text-base md:text-lg text-textGray leading-relaxed">
              DenseFusion develops intelligent computing solutions across multiple sectors.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <ScrollReveal key={item.name} delay={0.15 + index * 0.08}>
              <Link
                href={item.link || "#"}
                className="group relative overflow-hidden flex flex-col items-center justify-center gap-4 rounded-xl bg-white py-12 px-6 transition-all duration-300 cursor-pointer h-full border border-borderGray/40 shadow-sm hover:shadow-md"
              >
                {/* Expanding Top Border */}
                <div className="absolute top-0 left-1/2 h-[3px] w-0 -translate-x-1/2 bg-[#1b8e44] transition-all duration-300 ease-out group-hover:w-full" />

                <div className="flex shrink-0 items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-semibold text-secondaryBlack transition-colors duration-300">
                  {item.name}
                </h3>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
