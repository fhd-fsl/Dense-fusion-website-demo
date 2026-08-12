import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import EducationHero from "@/components/industries/education/EducationHero";
import EducationChallenges from "@/components/industries/education/EducationChallenges";
import EducationHowItHelps from "@/components/industries/education/EducationHowItHelps";
import EducationUseCases from "@/components/industries/education/EducationUseCases";
import EducationApproach from "@/components/industries/education/EducationApproach";
import EducationOutcomes from "@/components/industries/education/EducationOutcomes";
import EducationFAQ from "@/components/industries/education/EducationFAQ";
import EducationCTA from "@/components/industries/education/EducationCTA";

export const metadata = {
  title: "Education Industry | DenseFusion",
  description: "DenseFusion combines AI and high-performance computing to help education organizations process complex data and accelerate intelligence.",
};

export default function EducationIndustryPage() {
  return (
    <>
      <Navbar />
      <LenisProvider>
        <main className="min-h-screen">
          <EducationHero />
          <EducationChallenges />
          <EducationHowItHelps />
          <EducationUseCases />
          <EducationOutcomes />
          <EducationApproach />
          <EducationFAQ />
          <EducationCTA />
        </main>
      </LenisProvider>
      <Footer hideConnectCta />
    </>
  );
}
