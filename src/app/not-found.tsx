import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

export default function NotFound() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-white font-sans text-secondaryBlack flex flex-col">
        <Navbar />
        <section className="flex-1 flex flex-col items-center justify-center py-20 px-6 text-center">
          <h1 className="text-9xl font-bold bg-gradient-to-br from-lightGreen to-gradientGreen1 bg-clip-text text-transparent mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Page Not Found</h2>
          <p className="text-lg text-textGray mb-10 max-w-md mx-auto leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link
            href="/"
            className="group inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 px-8 text-md font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90"
          >
            <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
              <span className="flex h-11 shrink-0 items-center justify-center text-white">
                Back to Home
              </span>
              <span className="flex h-11 shrink-0 items-center justify-center text-white">
                Back to Home
              </span>
            </span>
          </Link>
        </section>
        <Footer hideConnectCta />
      </main>
    </LenisProvider>
  );
}
