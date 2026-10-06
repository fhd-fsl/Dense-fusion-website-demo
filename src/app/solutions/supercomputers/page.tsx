import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import Hero from "@/components/solutions/supercomputers/Hero";
import Overview from "@/components/solutions/supercomputers/Overview";
import WhatItEnables from "@/components/solutions/supercomputers/WhatItEnables";
import KeyCapabilities from "@/components/solutions/supercomputers/KeyCapabilities";
import HowItWorks from "@/components/solutions/supercomputers/HowItWorks";
import UseCases from "@/components/solutions/supercomputers/UseCases";
import KeyOutcomes from "@/components/solutions/supercomputers/KeyOutcomes";
import Technology from "@/components/solutions/supercomputers/Technology";
import WhySupercomputers from "@/components/solutions/supercomputers/WhySupercomputers";
import CTA from "@/components/solutions/supercomputers/CTA";

export const metadata = {
  title: 'Supercomputers Solution | Dense Fusion',
  description: 'Intelligent Infrastructure for High-Performance Computing.',
};

export default function SupercomputersPage() {
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
          <WhySupercomputers />
          <Technology />
          <CTA />
        </div>
        <Footer hideConnectCta={true} />
      </main>
    </LenisProvider>
  );
}
