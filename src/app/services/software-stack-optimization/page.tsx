import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import Hero from "@/components/services/software-stack-optimization/Hero";
import ValueProp from "@/components/services/software-stack-optimization/ValueProp";
import SoftwareServices from "@/components/services/software-stack-optimization/SoftwareServices";
import SoftwareProcess from "@/components/services/software-stack-optimization/SoftwareProcess";
import WhyChoose from "@/components/services/software-stack-optimization/WhyChoose";
import Technologies from "@/components/services/supercomputing/Technologies";
import CTA from "@/components/services/software-stack-optimization/CTA";

export default function SoftwareStackOptimizationPage() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-white font-sans">
        <Navbar />
        <Hero />
        <ValueProp />
        <SoftwareServices />
        <SoftwareProcess />
        <WhyChoose />
        <Technologies />
        <CTA />
        <Footer hideConnectCta />
      </main>
    </LenisProvider>
  );
}
