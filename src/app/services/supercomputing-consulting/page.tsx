import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import Hero from "@/components/services/supercomputing/Hero";
import ValueProp from "@/components/services/supercomputing/ValueProp";
import ConsultingServices from "@/components/services/supercomputing/ConsultingServices";
import ConsultingProcess from "@/components/services/supercomputing/ConsultingProcess";
import WhyChoose from "@/components/services/supercomputing/WhyChoose";
import Technologies from "@/components/services/supercomputing/Technologies";
import SupercomputingCTA from "@/components/services/supercomputing/SupercomputingCTA";

export default function SupercomputingConsultingPage() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-white font-sans">
        <Navbar />
        <Hero />
        <ValueProp />
        <ConsultingServices />
        <ConsultingProcess />
        <WhyChoose />
        <Technologies />
        <SupercomputingCTA />
        <Footer hideConnectCta />
      </main>
    </LenisProvider>
  );
}
