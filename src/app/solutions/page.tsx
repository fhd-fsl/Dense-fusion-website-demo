import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsWorkedOn from "@/components/solutions/SolutionsWorkedOn";
import SolutionsTechnology from "@/components/solutions/SolutionsTechnology";
import SolutionsApproach from "@/components/solutions/SolutionsApproach";
import SolutionsDeliverables from "@/components/solutions/SolutionsDeliverables";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

export const metadata = {
  title: "Solutions | DenseFusion",
  description: "DenseFusion develops intelligent solutions that combine GIS, satellite imagery, AI, and advanced analytics to help organizations understand complex environments.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <LenisProvider>
        <main className="min-h-screen">
          <SolutionsHero />
          <SolutionsWorkedOn />
          <SolutionsTechnology />
          <SolutionsApproach />
          <SolutionsDeliverables />
          <SolutionsCTA />
        </main>
      </LenisProvider>
      <Footer hideConnectCta />
    </>
  );
}
