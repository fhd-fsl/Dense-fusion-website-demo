import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import Hero from "@/components/solutions/carboneye/Hero";
import Overview from "@/components/solutions/carboneye/Overview";
import WhatItEnables from "@/components/solutions/carboneye/WhatItEnables";
import KeyCapabilities from "@/components/solutions/carboneye/KeyCapabilities";
import HowItWorks from "@/components/solutions/carboneye/HowItWorks";
import UseCases from "@/components/solutions/carboneye/UseCases";
import KeyOutcomes from "@/components/solutions/carboneye/KeyOutcomes";
import Technology from "@/components/solutions/carboneye/Technology";
import WhyCarbonEye from "@/components/solutions/carboneye/WhyCarbonEye";
import CTA from "@/components/solutions/carboneye/CTA";

export default function CarbonEyePage() {
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
          <Technology />
          <WhyCarbonEye />
          <CTA />
        </div>
        <Footer hideConnectCta={true} />
      </main>
    </LenisProvider>
  );
}
