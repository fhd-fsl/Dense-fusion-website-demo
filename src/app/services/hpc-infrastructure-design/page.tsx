import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import Hero from "@/components/services/hpc-infrastructure-design/Hero";
import ValueProp from "@/components/services/hpc-infrastructure-design/ValueProp";
import InfrastructureServices from "@/components/services/hpc-infrastructure-design/InfrastructureServices";
import InfrastructureProcess from "@/components/services/hpc-infrastructure-design/InfrastructureProcess";
import WhyChoose from "@/components/services/hpc-infrastructure-design/WhyChoose";
import Technologies from "@/components/services/hpc-infrastructure-design/Technologies";
import CTA from "@/components/services/hpc-infrastructure-design/CTA";

export const metadata = {
  title: 'HPC Infrastructure Design Service | Dense Fusion',
};


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
        <Technologies subtitle="We design and deploy reliable HPC infrastructure using modern provisioning, private cloud, and GPU technologies—from bare metal to production-ready environments." />
        <CTA />
        <Footer hideConnectCta />
      </main>
    </LenisProvider>
  );
}
