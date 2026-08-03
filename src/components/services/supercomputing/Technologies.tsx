import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const logos = [
  {
    src: "/assets/services/supercomputing/nvidia-logo.svg",
    alt: "NVIDIA",
    scale: "scale-[2.2]",
  },
  {
    src: "/assets/services/supercomputing/nvidia-cuda-logo.svg",
    alt: "NVIDIA CUDA",
    scale: "scale-[1.4]",
  },
  {
    src: "/assets/services/supercomputing/slurm-logo.svg",
    alt: "SLURM",
    scale: "scale-[1.9]",
  },
  {
    src: "/assets/services/supercomputing/pytorch-logo.svg",
    alt: "PyTorch",
    scale: "scale-110",
  },
  {
    src: "/assets/services/supercomputing/one-api-logo.svg",
    alt: "Intel oneAPI",
    scale: "scale-110",
  },
];

export default function Technologies() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-12">
            Technologies We Work With
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white border border-gray-100/80 rounded-xl w-[160px] h-[70px] md:w-[220px] md:h-[90px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] px-4 overflow-hidden"
              >
                <div className="relative w-full h-[28px] md:h-[38px] flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`max-w-full max-h-full object-contain ${logo.scale}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
