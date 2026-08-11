"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "#" },
  { label: "MarketPlace", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-borderGray bg-white font-sans">
      <nav className="mx-auto flex max-w-[1300px] flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/">
          <Image
            src="/dense-fusion-logo.svg"
            alt="Dense Fusion logo"
            width={118}
            height={54}
            className="h-auto w-24 object-contain"
          />
        </Link>
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

        <Link
          href="#"
          className="group ml-8 inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-secondaryBlack px-5 text-md font-bold text-white shadow-sm transition-colors duration-300 hover:bg-lightGreen"
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
      </nav>
    </header>
  );
}
