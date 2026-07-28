"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const PARTNERS = [
  "1p.png",
  "3p.png",
  "4p.png",
  "5p.png",
  "7p.png",
  "8p.png",
  "9p.png",
];

export default function Partners() {
  return (
    <section className="bg-white py-24 border-y border-gray-100 overflow-hidden relative">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12 mb-12">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
              Our Partners & Affiliations
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Animation */}
      <div className="relative flex overflow-x-hidden w-full">
        <div className="animate-marquee whitespace-nowrap flex items-center w-max">
          {/* Double the list for infinite scroll effect */}
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <div 
              key={idx} 
              className="mx-8 lg:mx-16 flex-none invert opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={`/assets/home-page/partners/${partner}`}
                alt="Partner Logo"
                width={160}
                height={80}
                className="object-contain w-32 md:w-40 h-16 md:h-20"
              />
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
