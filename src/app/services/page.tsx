import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import HorizontalServices from "@/components/services/HorizontalServices";
import OurApproach from "@/components/services/OurApproach";
import Advantage from "@/components/services/Advantage";
import FAQ from "@/components/services/FAQ";
import CTA from "@/components/services/CTA";
import LenisProvider from "@/components/LenisProvider";

export default function ServicesPage() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-white font-sans">
        <Navbar />
        <ServicesHero />
        <HorizontalServices />
        <OurApproach />
        <Advantage />
        <FAQ />
        <CTA />
        <Footer hideConnectCta />
      </main>
    </LenisProvider>
  );
}
