import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/about/Hero";
import WhoWeAre from "@/components/about/WhoWeAre";
import StrategicExpertise from "@/components/about/StrategicExpertise";
import IndustriesWeServe from "@/components/about/IndustriesWeServe";
import Impact from "@/components/about/Impact";
import OurValues from "@/components/about/OurValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import AboutCta from "@/components/about/AboutCta";
import AboutUs from "@/components/AboutUs";
import LenisProvider from "@/components/LenisProvider";

export default function AboutPage() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-white font-sans text-secondaryBlack">
        <Navbar />
        <Hero />
        <WhoWeAre />
        <StrategicExpertise />
        <IndustriesWeServe />
        <Impact />
        <OurValues />
        <WhyChooseUs />
        <AboutCta />
        <Footer hideConnectCta />
      </main>
    </LenisProvider>
  );
}
