import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAbout from "@/components/HeroAbout";
import WhoWeAre from "@/components/WhoWeAre";
import StrategicExpertise from "@/components/StrategicExpertise";
import AboutUs from "@/components/AboutUs";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroAbout />
        <WhoWeAre />
        <StrategicExpertise />
      </main>
      <Footer hideConnectCta />
    </>
  );
}
