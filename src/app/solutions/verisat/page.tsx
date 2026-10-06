import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import Hero from "@/components/solutions/verisat/Hero";
import Overview from "@/components/solutions/verisat/Overview";
import WhatItEnables from "@/components/solutions/verisat/WhatItEnables";
import KeyCapabilities from "@/components/solutions/verisat/KeyCapabilities";
import HowItWorks from "@/components/solutions/verisat/HowItWorks";
import UseCases from "@/components/solutions/verisat/UseCases";
import KeyOutcomes from "@/components/solutions/verisat/KeyOutcomes";
import Technology from "@/components/solutions/verisat/Technology";
import WhyVerisat from "@/components/solutions/verisat/WhyVerisat";
import CTA from "@/components/solutions/verisat/CTA";

export const metadata = {
  title: 'VERISAT Solution | Dense Fusion',
  description: 'Sustainability & Plantation Monitoring.',
};

export default function VerisatPage() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-white flex flex-col font-sans">
        <Navbar />
        <div className="flex-grow">
          <Hero />
          <Overview />
          <WhatItEnables />
          <KeyCapabilities />
          <HowItWorks />
          <UseCases />
          <KeyOutcomes />
          <WhyVerisat />
          <Technology />
          <CTA />
        </div>
        <Footer hideConnectCta={true} />
      </main>
    </LenisProvider>
  );
}
