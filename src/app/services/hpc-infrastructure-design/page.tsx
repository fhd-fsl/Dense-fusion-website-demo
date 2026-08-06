import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import Hero from "@/components/services/hpc-infrastructure-design/Hero";
import ValueProp from "@/components/services/hpc-infrastructure-design/ValueProp";
import InfrastructureServices from "@/components/services/hpc-infrastructure-design/InfrastructureServices";
import InfrastructureProcess from "@/components/services/hpc-infrastructure-design/InfrastructureProcess";
import WhyChoose from "@/components/services/hpc-infrastructure-design/WhyChoose";
import Technologies from "@/components/services/supercomputing/Technologies";
import CTA from "@/components/services/hpc-infrastructure-design/CTA";

export default function HPCInfrastructureDesignPage() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-white font-sans">
        <Navbar />
        <Hero />
        <ValueProp />
        <InfrastructureServices />
        <InfrastructureProcess />
        <WhyChoose />
        <Technologies />
        <CTA />
        <Footer hideConnectCta />
      </main>
    </LenisProvider>
  );
}
