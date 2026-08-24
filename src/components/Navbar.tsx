"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "/solutions" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="w-full border-b border-borderGray bg-white font-sans relative z-50">
        <nav className="mx-auto flex max-w-[1300px] items-center justify-between px-6 py-4">
          <Link href="/" className="relative z-50">
            <Image
              src="/dense-fusion-logo.svg"
              alt="Dense Fusion logo"
              width={118}
              height={54}
              className="h-auto w-24 object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-7 text-md font-medium text-secondaryBlack md:flex md:ml-auto ">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname !== "/" && href !== "#" && pathname.startsWith(href);
              return (
                <Link 
                  key={label} 
                  href={href} 
                  className={`relative group transition-colors duration-300 hover:text-darkGreen ${isActive ? "text-darkGreen font-bold" : "text-secondaryBlack"}`}
                >
                  {label}
                  {/* Active indicator */}
                  <span 
                    className={`absolute -bottom-2 left-0 h-[2px] bg-darkGreen rounded-full transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} 
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="group ml-8 hidden md:inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-secondaryBlack px-5 text-md font-bold text-white shadow-sm transition-colors duration-300 hover:bg-lightGreen"
          >
            <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
              <span className="flex h-11 shrink-0 items-center justify-center text-white">
                Get Started
              </span>
              <span className="flex h-11 shrink-0 items-center justify-center text-white">
                Get Started
              </span>
            </span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative z-50 flex md:hidden flex-col items-center justify-center w-10 h-10 gap-[5px] focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-[2px] w-6 bg-secondaryBlack rounded-full transition-all duration-300 ease-out ${
                mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-secondaryBlack rounded-full transition-all duration-300 ease-out ${
                mobileMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-secondaryBlack rounded-full transition-all duration-300 ease-out ${
                mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col md:hidden"
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-2 px-8">
              {navLinks.map(({ label, href }, index) => {
                const isActive = pathname !== "/" && href !== "#" && pathname.startsWith(href);
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.35, delay: 0.08 + index * 0.06, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-center text-3xl font-bold py-3 transition-colors duration-200 ${
                        isActive
                          ? "text-darkGreen"
                          : "text-secondaryBlack hover:text-darkGreen"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: 0.08 + navLinks.length * 0.06, ease: [0.25, 1, 0.5, 1] }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group inline-flex h-12 items-start justify-center overflow-hidden rounded-[4px] bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 px-8 text-lg font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90"
                >
                  <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                    <span className="flex h-12 shrink-0 items-center justify-center text-white">
                      Get Started
                    </span>
                    <span className="flex h-12 shrink-0 items-center justify-center text-white">
                      Get Started
                    </span>
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
