import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import Hero from "@/components/solutions/agrovia/Hero";
import Overview from "@/components/solutions/agrovia/Overview";
import WhatItEnables from "@/components/solutions/agrovia/WhatItEnables";
import KeyCapabilities from "@/components/solutions/agrovia/KeyCapabilities";
import HowItWorks from "@/components/solutions/agrovia/HowItWorks";
import UseCases from "@/components/solutions/agrovia/UseCases";
import KeyOutcomes from "@/components/solutions/agrovia/KeyOutcomes";
import Technology from "@/components/solutions/agrovia/Technology";
import WhyAgrovia from "@/components/solutions/agrovia/WhyAgrovia";
import CTA from "@/components/solutions/agrovia/CTA";

export const metadata = {
  title: 'Agrovia Solution | Dense Fusion',
  description: 'Connected Intelligence for Modern Agriculture.',
};

export default function AgroviaPage() {
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
          <WhyAgrovia />
          <Technology />
          <CTA />
        </div>
        <Footer hideConnectCta={true} />
      </main>
    </LenisProvider>
  );
}
