import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <LenisProvider>
        <main className="min-h-screen bg-white flex flex-col">
          {/* Hero Section */}
          <section className="bg-[#050505] relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
             {/* Background glow matching the screenshot */}
             <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#006D40]/15 rounded-full blur-[120px] pointer-events-none" />
             <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#6DC27F]/10 rounded-full blur-[120px] pointer-events-none" />
             
             <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
               <ScrollReveal>
                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                   Contact Us
                 </h1>
                 <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
                   We're here to help! Whether you have questions about our fusion technology, need implementation support, or want to explore partnership opportunities, our team is ready to assist.
                 </p>
               </ScrollReveal>
             </div>
          </section>

          {/* Contact Details & Form */}
          <section className="py-16 md:py-24">
            <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                
                {/* Left: Contact Info */}
                <div className="w-full lg:w-1/2">
                  <ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondaryBlack mb-12 tracking-tight">
                      Get in touch
                    </h2>
                    
                    <div className="flex flex-col gap-10">
                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-[4px] bg-[#f4fbf6] flex items-center justify-center shrink-0 mt-1">
                           <Mail className="w-5 h-5 text-[#006D40]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-secondaryBlack mb-1 text-base">Email</h4>
                          <p className="text-gray-500 text-sm font-medium">info@densefusion.com</p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-[4px] bg-[#f4fbf6] flex items-center justify-center shrink-0 mt-1">
                           <Phone className="w-5 h-5 text-[#006D40]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-secondaryBlack mb-1 text-base">Phone</h4>
                          <p className="text-gray-500 text-sm font-medium">+92 302 8671230</p>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-[4px] bg-[#f4fbf6] flex items-center justify-center shrink-0 mt-1">
                           <MapPin className="w-5 h-5 text-[#006D40]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-secondaryBlack mb-4 text-base">Address</h4>
                          
                          <div className="mb-6">
                            <p className="text-secondaryBlack text-xs uppercase tracking-widest mb-1.5 font-medium">REGIONAL OFFICE USA</p>
                            <p className="text-gray-500 text-sm uppercase max-w-[300px] font-medium leading-relaxed">DENSEFUSION LLC, 7901 4TH ST N STE 24436 ST PETERSBURG, FL 33702, USA</p>
                          </div>
                          
                          <div>
                            <p className="text-secondaryBlack text-xs uppercase tracking-widest mb-1.5 font-medium">HEAD OFFICE</p>
                            <p className="text-gray-500 text-sm max-w-[350px] font-medium leading-relaxed">Office No. 1C4-K, Building 01, National Science and Technology Park(NSTP), NUST Campus, Sector H-12, Islamabad</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Right: Form */}
                <div className="w-full lg:w-1/2">
                  <ScrollReveal delay={0.2}>
                    <div className="bg-[#f9f9f9] rounded-xl p-8 md:p-10 lg:p-12">
                      <form className="flex flex-col gap-8">
                        <div>
                          <label className="block text-[11px] font-bold text-secondaryBlack mb-2 uppercase tracking-widest">Full Name</label>
                          <input type="text" placeholder="Your name" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm text-secondaryBlack font-medium focus:outline-none focus:border-[#006D40] transition-colors placeholder:text-gray-400 placeholder:font-normal" />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-secondaryBlack mb-2 uppercase tracking-widest">Email Address</label>
                          <input type="email" placeholder="Your email address" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm text-secondaryBlack font-medium focus:outline-none focus:border-[#006D40] transition-colors placeholder:text-gray-400 placeholder:font-normal" />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-secondaryBlack mb-2 uppercase tracking-widest">Message</label>
                          <textarea placeholder="Write something..." rows={4} className="w-full bg-transparent border-b border-gray-300 py-3 text-sm text-secondaryBlack font-medium focus:outline-none focus:border-[#006D40] transition-colors placeholder:text-gray-400 placeholder:font-normal resize-none"></textarea>
                        </div>
                        
                        <button type="submit" className="group w-full h-11 inline-flex items-start justify-center overflow-hidden rounded-[4px] bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 px-5 text-base font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90 mt-2">
                          <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                            <span className="flex h-11 shrink-0 items-center justify-center text-white">
                              Send Message
                            </span>
                            <span className="flex h-11 shrink-0 items-center justify-center text-white">
                              Send Message
                            </span>
                          </span>
                        </button>
                      </form>
                    </div>
                  </ScrollReveal>
                </div>

              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="pb-24">
            <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
              <ScrollReveal>
                <div className="w-full h-[400px] md:h-[500px] bg-gray-100 rounded-xl overflow-hidden mb-6 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d530.9207537377981!2d72.99759245781526!3d33.64599863854787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95de92aee6ef%3A0x8da9cec30919bc4c!2sJXWX%2B94Q%2C%20H-12%2C%20Islamabad%2C%20Pakistan!5e1!3m2!1sen!2s!4v1787232484205!5m2!1sen!2s" 
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
                
                <div className="flex justify-end">
                  <Link href="https://maps.google.com/?q=33.645998,72.997592" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-400 hover:text-secondaryBlack transition-colors flex items-center gap-2 group">
                    Open In Google Maps
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-secondaryBlack transition-colors" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </main>
      </LenisProvider>
      <Footer hideConnectCta={true} />
    </>
  );
}
