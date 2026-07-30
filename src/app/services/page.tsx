import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import HorizontalServices from "@/components/services/HorizontalServices";
import OurApproach from "@/components/services/OurApproach";
import Advantage from "@/components/services/Advantage";
import FAQ from "@/components/services/FAQ";
import CTA from "@/components/services/CTA";

export default function ServicesPage() {
  return (
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
  );
}
