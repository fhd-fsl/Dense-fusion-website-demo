import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import ClimateHero from "@/components/industries/climate/ClimateHero";
import ClimateChallenges from "@/components/industries/climate/ClimateChallenges";
import ClimateHowItHelps from "@/components/industries/climate/ClimateHowItHelps";
import ClimateUseCases from "@/components/industries/climate/ClimateUseCases";
import ClimateApproach from "@/components/industries/climate/ClimateApproach";
import ClimateOutcomes from "@/components/industries/climate/ClimateOutcomes";
import ClimateFAQ from "@/components/industries/climate/ClimateFAQ";
import ClimateCTA from "@/components/industries/climate/ClimateCTA";

export const metadata = {
  title: "Climate Industry | DenseFusion",
  description: "DenseFusion combines AI and high-performance computing to help climate organizations process complex data and accelerate intelligence.",
};

export default function ClimateIndustryPage() {
  return (
    <>
      <Navbar />
      <LenisProvider>
        <main className="min-h-screen">
          <ClimateHero />
          <ClimateChallenges />
          <ClimateHowItHelps />
          <ClimateUseCases />
          <ClimateOutcomes />
          <ClimateApproach />
          <ClimateFAQ />
          <ClimateCTA />
        </main>
      </LenisProvider>
      <Footer hideConnectCta />
    </>
  );
}
