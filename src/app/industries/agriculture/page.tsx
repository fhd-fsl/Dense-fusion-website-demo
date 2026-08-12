import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import AgricultureHero from "@/components/industries/agriculture/AgricultureHero";
import AgricultureChallenges from "@/components/industries/agriculture/AgricultureChallenges";
import AgricultureHowItHelps from "@/components/industries/agriculture/AgricultureHowItHelps";
import AgricultureUseCases from "@/components/industries/agriculture/AgricultureUseCases";
import AgricultureApproach from "@/components/industries/agriculture/AgricultureApproach";
import AgricultureOutcomes from "@/components/industries/agriculture/AgricultureOutcomes";
import AgricultureFAQ from "@/components/industries/agriculture/AgricultureFAQ";
import AgricultureCTA from "@/components/industries/agriculture/AgricultureCTA";

export const metadata = {
  title: "Agriculture Industry | DenseFusion",
  description: "DenseFusion combines AI and high-performance computing to help agriculture organizations process complex data and accelerate intelligence.",
};

export default function AgricultureIndustryPage() {
  return (
    <>
      <Navbar />
      <LenisProvider>
        <main className="min-h-screen">
          <AgricultureHero />
          <AgricultureChallenges />
          <AgricultureHowItHelps />
          <AgricultureUseCases />
          <AgricultureOutcomes />
          <AgricultureApproach />
          <AgricultureFAQ />
          <AgricultureCTA />
        </main>
      </LenisProvider>
      <Footer hideConnectCta />
    </>
  );
}
