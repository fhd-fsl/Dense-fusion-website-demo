import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import Hero from "@/components/industries/Hero";
import ValueProp from "@/components/industries/ValueProp";
import IndustriesWeServe from "@/components/industries/IndustriesWeServe";
import Capabilities from "@/components/industries/Capabilities";
import Approach from "@/components/industries/Approach";
import WhyChoose from "@/components/industries/WhyChoose";
import CTA from "@/components/industries/CTA";

export default function IndustriesPage() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-white font-sans">
        <Navbar />
        <Hero />
        <ValueProp />
        <IndustriesWeServe />
        <Capabilities />
        <Approach />
        <WhyChoose />
        <CTA />
        <Footer hideConnectCta />
      </main>
    </LenisProvider>
  );
}
