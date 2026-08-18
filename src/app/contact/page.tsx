import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center pt-32 pb-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#006D40]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              We're here to help you solve your most complex geospatial and AI challenges. 
              Our team of experts will be in touch shortly.
            </p>
            <div className="p-12 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm max-w-lg mx-auto">
              <h2 className="text-2xl font-bold text-[#6DC27F] mb-4">Placeholder Form Area</h2>
              <p className="text-gray-400 text-sm">
                (The actual contact form or details will be implemented here)
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <Footer hideConnectCta={true} />
    </main>
  );
}
