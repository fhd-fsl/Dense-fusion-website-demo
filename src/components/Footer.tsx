"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-white relative z-10">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* Connect CTA (Green Banner) */}
        <ScrollReveal>
          <div className="bg-[#1b8e44] rounded-t-[24px] md:rounded-t-[32px] rounded-b-none p-12 md:p-20 flex flex-col items-center justify-center text-center relative z-20 mx-auto w-full">
            <button className="bg-[#080808] text-white text-xs font-bold px-6 py-2.5 uppercase tracking-widest rounded-lg mb-8 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95">
              Connect Now
            </button>
            
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

      {/* Main Footer (Black Section) */}
      <div className="bg-[#080808] text-white pt-12 pb-12 px-6 mt-[-1px]">
        <div className="container mx-auto max-w-[1400px]">
          <ScrollReveal delay={0.2}>
            {/* Top Grid - Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16">
              
              {/* Brand Logo & Contact */}
              <div className="lg:col-span-1 flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <Image src="/assets/home-page/footer/logo.svg" alt="Dense Fusion" width={128} height={128} />
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
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">About</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Services</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Industries</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Products</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Solutions</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Marketplace</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Contact us</Link>
              </div>

              {/* Our Services */}
              <div className="flex flex-col gap-3">
                <h4 className="text-[#45b76b] font-bold text-xs uppercase tracking-widest mb-2">Our Services</h4>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Supercomputing Consulting</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">HPC Infrastructure Design & Deployment</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">AI + HPC Integration</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Software Stack Installation & Optimization</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Domain Specific Solution</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Training & Enablement</Link>
              </div>

              {/* Industries */}
              <div className="flex flex-col gap-3">
                <h4 className="text-[#45b76b] font-bold text-xs uppercase tracking-widest mb-2">Industries</h4>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Defense</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Government</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Agriculture</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Climate</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Banking & Finance</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">Education & Research</Link>
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
