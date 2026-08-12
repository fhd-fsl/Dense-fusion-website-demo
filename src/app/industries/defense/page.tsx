import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import DefenseHero from "@/components/industries/defense/DefenseHero";
import DefenseChallenges from "@/components/industries/defense/DefenseChallenges";
import DefenseHowItHelps from "@/components/industries/defense/DefenseHowItHelps";
import DefenseUseCases from "@/components/industries/defense/DefenseUseCases";
import DefenseApproach from "@/components/industries/defense/DefenseApproach";
import DefenseOutcomes from "@/components/industries/defense/DefenseOutcomes";
import DefenseFAQ from "@/components/industries/defense/DefenseFAQ";
import DefenseCTA from "@/components/industries/defense/DefenseCTA";

export const metadata = {
  title: "Defense Industry | DenseFusion",
  description: "DenseFusion combines AI and high-performance computing to help defense organizations process complex data and accelerate intelligence.",
};

export default function DefenseIndustryPage() {
  return (
    <>
      <Navbar />
      <LenisProvider>
        <main className="min-h-screen">
          <DefenseHero />
          <DefenseChallenges />
          <DefenseHowItHelps />
          <DefenseUseCases />
          <DefenseOutcomes />
          <DefenseApproach />
          <DefenseFAQ />
          <DefenseCTA />
        </main>
      </LenisProvider>
      <Footer hideConnectCta />
    </>
  );
}
