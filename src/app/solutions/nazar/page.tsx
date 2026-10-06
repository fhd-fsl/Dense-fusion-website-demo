import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import Hero from "@/components/solutions/nazar/Hero";
import Overview from "@/components/solutions/nazar/Overview";
import WhatItEnables from "@/components/solutions/nazar/WhatItEnables";
import KeyCapabilities from "@/components/solutions/nazar/KeyCapabilities";
import HowItWorks from "@/components/solutions/nazar/HowItWorks";
import UseCases from "@/components/solutions/nazar/UseCases";
import KeyOutcomes from "@/components/solutions/nazar/KeyOutcomes";
import Technology from "@/components/solutions/nazar/Technology";
import WhyNazar from "@/components/solutions/nazar/WhyNazar";
import CTA from "@/components/solutions/nazar/CTA";

export const metadata = {
  title: 'Nazar Solution | Dense Fusion',
  description: 'Real-Time Intelligence for Autonomous Aerial Operations.',
};

export default function NazarPage() {
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
          <WhyNazar />
          <Technology />
          <CTA />
        </div>
        <Footer hideConnectCta={true} />
      </main>
    </LenisProvider>
  );
}
