import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import Hero from "@/components/services/ai-hpc-integration/Hero";
import ValueProp from "@/components/services/ai-hpc-integration/ValueProp";
import AIHPCServices from "@/components/services/ai-hpc-integration/AIHPCServices";
import AIHPCProcess from "@/components/services/ai-hpc-integration/AIHPCProcess";
import WhyChoose from "@/components/services/ai-hpc-integration/WhyChoose";
import Technologies from "@/components/services/ai-hpc-integration/Technologies";
import CTA from "@/components/services/ai-hpc-integration/CTA";

export const metadata = {
  title: 'AI & HPC Integration Service | Dense Fusion',
};


export default function AIHPCIntegrationPage() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-white font-sans">
        <Navbar />
        <Hero />
        <ValueProp />
        <AIHPCServices />
        <AIHPCProcess />
        <WhyChoose />
        <Technologies subtitle="Connect AI workloads with high-performance computing infrastructure to accelerate GPU-intensive processing, model workloads, and large-scale computation." />
        <CTA />
        <Footer hideConnectCta />
      </main>
    </LenisProvider>
  );
}
