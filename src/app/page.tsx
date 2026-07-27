import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Mission from "../components/Mission";
import OurServices from "../components/OurServices";
import Industries from "../components/Industries";
import Solutions from "../components/Solutions";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import LenisProvider from "../components/LenisProvider";

export default function Home() {
  return (
    <LenisProvider>
      <div className="min-h-screen bg-white font-sans text-secondaryBlack">
        <Navbar />
        <Hero />
        <AboutUs />
        <Mission />
        <OurServices />
        <Industries />
        <Solutions />
        <Partners />
        <Footer />
      </div>
    </LenisProvider>
  );
}
