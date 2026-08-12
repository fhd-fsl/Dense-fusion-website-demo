import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import FinanceHero from "@/components/industries/finance/FinanceHero";
import FinanceChallenges from "@/components/industries/finance/FinanceChallenges";
import FinanceHowItHelps from "@/components/industries/finance/FinanceHowItHelps";
import FinanceUseCases from "@/components/industries/finance/FinanceUseCases";
import FinanceApproach from "@/components/industries/finance/FinanceApproach";
import FinanceOutcomes from "@/components/industries/finance/FinanceOutcomes";
import FinanceFAQ from "@/components/industries/finance/FinanceFAQ";
import FinanceCTA from "@/components/industries/finance/FinanceCTA";

export const metadata = {
  title: "Finance Industry | DenseFusion",
  description: "DenseFusion combines AI and high-performance computing to help finance organizations process complex data and accelerate intelligence.",
};

export default function FinanceIndustryPage() {
  return (
    <>
      <Navbar />
      <LenisProvider>
        <main className="min-h-screen">
          <FinanceHero />
          <FinanceChallenges />
          <FinanceHowItHelps />
          <FinanceUseCases />
          <FinanceOutcomes />
          <FinanceApproach />
          <FinanceFAQ />
          <FinanceCTA />
        </main>
      </LenisProvider>
      <Footer hideConnectCta />
    </>
  );
}
