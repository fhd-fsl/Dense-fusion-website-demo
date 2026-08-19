import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import Hero from "@/components/solutions/plantx/Hero";
import Overview from "@/components/solutions/plantx/Overview";
import WhatItEnables from "@/components/solutions/plantx/WhatItEnables";
import KeyCapabilities from "@/components/solutions/plantx/KeyCapabilities";
import HowItWorks from "@/components/solutions/plantx/HowItWorks";
import UseCases from "@/components/solutions/plantx/UseCases";
import KeyOutcomes from "@/components/solutions/plantx/KeyOutcomes";
import Technology from "@/components/solutions/plantx/Technology";
import WhyPlantX from "@/components/solutions/plantx/WhyPlantX";
import CTA from "@/components/solutions/plantx/CTA";

export default function PlantXSolutionPage() {
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
          <WhyPlantX />
          <CTA />
        </div>
        <Footer hideConnectCta={true} />
      </main>
    </LenisProvider>
  );
}
