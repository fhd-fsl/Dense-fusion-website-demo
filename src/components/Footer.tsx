"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Footer({ hideConnectCta = false }: { hideConnectCta?: boolean }) {
  return (
    <footer className="bg-white relative z-10">
      {!hideConnectCta && (
      <div className="mx-auto max-w-[1300px] px-6 md:px-12">
        
        {/* Connect CTA (Green Banner) */}
        <ScrollReveal>
          <div className="bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 rounded-t-[4px] rounded-b-none p-12 md:p-20 flex flex-col items-center justify-center text-center relative z-20 mx-auto w-full">
            <Link href="/contact" className="group inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-secondaryBlack px-5 text-md font-bold text-white shadow-sm transition-colors duration-300 hover:bg-lightGreen mb-8">
              <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                <span className="flex h-11 shrink-0 items-center justify-center text-white">
                  Connect Now
                </span>
                <span className="flex h-11 shrink-0 items-center justify-center text-white">
                  Connect Now
                </span>
              </span>
            </Link>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
              Let's Build The Future Together
            </h2>
            
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              Ready to challenge limits and reimagine what's possible? Let's connect and create
              solutions that shape industries, empower communities, and define the future together.
            </p>
          </div>
        </ScrollReveal>

      </div>
      )}

      {/* Main Footer (Black Section) */}
      <div className="bg-[#080808] text-white pt-12 pb-12 px-6 mt-[-1px]">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12">
          <ScrollReveal delay={0.2}>
            {/* Top Grid - Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16">
              
              {/* Brand Logo & Contact */}
              <div className="lg:col-span-1 flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <Link href="/">
                    <Image src="/assets/home-page/footer/logo.svg" alt="Dense Fusion" width={128} height={128} />
                  </Link>
                </div>
                
                <div className="flex flex-col gap-3">
                  <h4 className="text-[#45b76b] font-bold text-xs uppercase tracking-widest mb-1">Contact Us</h4>
                  <div className="flex items-center gap-3 text-gray-400 text-xs">
                    <Image src="/assets/home-page/footer/mail.svg" alt="Mail" width={16} height={16} />
                    info@densefusion.com
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-xs">
                    <Image src="/assets/home-page/footer/call.svg" alt="Call" width={16} height={16} />
                    +92 302 8671230
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-col gap-3">
                <h4 className="text-[#45b76b] font-bold text-xs uppercase tracking-widest mb-2">Quick Links</h4>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">About</Link>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Services</Link>
                <Link href="/industries" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Industries</Link>
                <Link href="/solutions" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Solutions</Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Contact us</Link>
              </div>

              {/* Our Services */}
              <div className="flex flex-col gap-3">
                <h4 className="text-[#45b76b] font-bold text-xs uppercase tracking-widest mb-2">Our Services</h4>
                <Link href="/services/supercomputing-consulting" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Supercomputing Consulting</Link>
                <Link href="/services/hpc-infrastructure-design" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">HPC Infrastructure Design & Deployment</Link>
                <Link href="/services/ai-hpc-integration" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">AI + HPC Integration</Link>
                <Link href="/services/software-stack-optimization" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Software Stack Installation & Optimization</Link>
                <Link href="/services/domain-specific-solutions" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Domain-Specific Solutions</Link>
                <Link href="/services/training-and-enablement" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Training & Enablement</Link>
              </div>

              {/* Industries */}
              <div className="flex flex-col gap-3">
                <h4 className="text-[#45b76b] font-bold text-xs uppercase tracking-widest mb-2">Industries</h4>
                <Link href="/industries/defense" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Defense</Link>
                <Link href="/industries/government" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Government</Link>
                <Link href="/industries/agriculture" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Agriculture</Link>
                <Link href="/industries/climate" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Climate</Link>
                <Link href="/industries/finance" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Banking & Finance</Link>
                <Link href="/industries/education" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Education & Research</Link>
              </div>

              {/* Solutions */}
              <div className="flex flex-col gap-3">
                <h4 className="text-[#45b76b] font-bold text-xs uppercase tracking-widest mb-2">Solutions</h4>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">PlantX</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Serena Green</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Carbon Eye</Link>
              </div>
            </div>

            {/* Address Row */}
            <div className="border-t border-white/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="flex flex-col gap-2">
                <h4 className="text-[#45b76b] font-bold text-xs uppercase tracking-widest mb-2">Address</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32">
                  <p className="text-gray-400 text-[11px] leading-relaxed max-w-xs uppercase">
                    REGIONAL OFFICE USA: DENSEFUSION<br/>
                    LLC, 7901 4TH ST N STE 24436 ST<br/>
                    PETERSBURG, FL 33702, USA
                  </p>
                  <p className="text-gray-400 text-[11px] leading-relaxed max-w-xs uppercase">
                    HEAD OFFICE: Office No. 1C4-K, Building 01,<br/>
                    National Science and Technology Park(NSTP),<br/>
                    NUST Campus, Sector H-12, Islamabad
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-6 md:mt-0">
                <Link href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                  <Image src="/assets/home-page/footer/linkedin.svg" alt="LinkedIn" width={32} height={32} />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                  <Image src="/assets/home-page/footer/github.svg" alt="Github" width={32} height={32} />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                  <Image src="/assets/home-page/footer/facebook.svg" alt="Facebook" width={32} height={32} />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                  <Image src="/assets/home-page/footer/instagram.svg" alt="Instagram" width={32} height={32} />
                </Link>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 font-medium">
              <p>
                © 2026 Dense Fusion. All Rights Reserved.
              </p>
              
              <div className="flex items-center gap-6">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms & Condition</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
