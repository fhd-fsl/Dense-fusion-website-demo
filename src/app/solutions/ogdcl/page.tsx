import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import Hero from "@/components/solutions/ogdcl/Hero";
import Overview from "@/components/solutions/ogdcl/Overview";
import WhatItEnables from "@/components/solutions/ogdcl/WhatItEnables";
import KeyCapabilities from "@/components/solutions/ogdcl/KeyCapabilities";
import HowItWorks from "@/components/solutions/ogdcl/HowItWorks";
import UseCases from "@/components/solutions/ogdcl/UseCases";
import KeyOutcomes from "@/components/solutions/ogdcl/KeyOutcomes";
import Technology from "@/components/solutions/ogdcl/Technology";
import WhyOGDCL from "@/components/solutions/ogdcl/WhyOGDCL";
import CTA from "@/components/solutions/ogdcl/CTA";

export const metadata = {
  title: 'OGDCL Solution | Dense Fusion',
  description: 'Sustainability & Plantation Monitoring.',
};

export default function OGDCLPage() {
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
          <WhyOGDCL />
          <Technology />
          <CTA />
        </div>
        <Footer hideConnectCta={true} />
      </main>
    </LenisProvider>
  );
}
