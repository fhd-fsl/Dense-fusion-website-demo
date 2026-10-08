import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import Hero from "@/components/services/domain-specific-solutions/Hero";
import ValueProp from "@/components/services/domain-specific-solutions/ValueProp";
import DomainServices from "@/components/services/domain-specific-solutions/DomainServices";
import DomainProcess from "@/components/services/domain-specific-solutions/DomainProcess";
import WhyChoose from "@/components/services/domain-specific-solutions/WhyChoose";
import Technologies from "@/components/services/domain-specific-solutions/Technologies";
import CTA from "@/components/services/domain-specific-solutions/CTA";

export const metadata = {
  title: 'Domain Specific Solutions Service | Dense Fusion',
};


export default function DomainSpecificSolutionsPage() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-white font-sans">
        <Navbar />
        <Hero />
        <ValueProp />
        <DomainServices />
        <DomainProcess />
        <WhyChoose />
        <Technologies subtitle="Support demanding engineering and scientific workloads through HPC, GPU, and advanced computing technologies." />
        <CTA />
        <Footer hideConnectCta />
      </main>
    </LenisProvider>
  );
}
