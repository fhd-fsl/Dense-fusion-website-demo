import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import Hero from "@/components/solutions/serenagreen/Hero";
import Overview from "@/components/solutions/serenagreen/Overview";
import WhatItEnables from "@/components/solutions/serenagreen/WhatItEnables";
import KeyCapabilities from "@/components/solutions/serenagreen/KeyCapabilities";
import HowItWorks from "@/components/solutions/serenagreen/HowItWorks";
import UseCases from "@/components/solutions/serenagreen/UseCases";
import KeyOutcomes from "@/components/solutions/serenagreen/KeyOutcomes";
import Technology from "@/components/solutions/serenagreen/Technology";
import WhySerena from "@/components/solutions/serenagreen/WhySerena";
import CTA from "@/components/solutions/serenagreen/CTA";

export default function SerenaGreenPage() {
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
          <WhySerena />
          <CTA />
        </div>
        <Footer hideConnectCta={true} />
      </main>
    </LenisProvider>
  );
}
