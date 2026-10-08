import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import Hero from "@/components/services/training-and-enablement/Hero";
import ValueProp from "@/components/services/training-and-enablement/ValueProp";
import TrainingServices from "@/components/services/training-and-enablement/TrainingServices";
import TrainingProcess from "@/components/services/training-and-enablement/TrainingProcess";
import WhyChoose from "@/components/services/training-and-enablement/WhyChoose";
import Technologies from "@/components/services/training-and-enablement/Technologies";
import CTA from "@/components/services/training-and-enablement/CTA";

export const metadata = {
  title: 'Training and Enablement Service | Dense Fusion',
};


export default function TrainingAndEnablementPage() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-white font-sans">
        <Navbar />
        <Hero />
        <ValueProp />
        <TrainingServices />
        <TrainingProcess />
        <WhyChoose />
        <Technologies subtitle="Gain practical experience with the tools, platforms, and computing environments used to build and run AI workloads at scale." />
        <CTA />
        <Footer hideConnectCta />
      </main>
    </LenisProvider>
  );
}
