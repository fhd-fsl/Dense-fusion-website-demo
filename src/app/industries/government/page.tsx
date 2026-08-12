import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import GovernmentHero from "@/components/industries/government/GovernmentHero";
import GovernmentChallenges from "@/components/industries/government/GovernmentChallenges";
import GovernmentHowItHelps from "@/components/industries/government/GovernmentHowItHelps";
import GovernmentUseCases from "@/components/industries/government/GovernmentUseCases";
import GovernmentApproach from "@/components/industries/government/GovernmentApproach";
import GovernmentOutcomes from "@/components/industries/government/GovernmentOutcomes";
import GovernmentFAQ from "@/components/industries/government/GovernmentFAQ";
import GovernmentCTA from "@/components/industries/government/GovernmentCTA";

export const metadata = {
  title: "Government Industry | DenseFusion",
  description: "DenseFusion combines AI and high-performance computing to help government organizations process complex data and accelerate intelligence.",
};

export default function GovernmentIndustryPage() {
  return (
    <>
      <Navbar />
      <LenisProvider>
        <main className="min-h-screen">
          <GovernmentHero />
          <GovernmentChallenges />
          <GovernmentHowItHelps />
          <GovernmentUseCases />
          <GovernmentOutcomes />
          <GovernmentApproach />
          <GovernmentFAQ />
          <GovernmentCTA />
        </main>
      </LenisProvider>
      <Footer hideConnectCta />
    </>
  );
}
