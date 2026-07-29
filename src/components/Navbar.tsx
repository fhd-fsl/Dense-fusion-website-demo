import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "MarketPlace", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b border-borderGray bg-white font-sans">
      <nav className="mx-auto flex max-w-[1300px] flex-wrap items-center justify-between gap-4 px-6 py-4">
         
            <Image
              src="/dense-fusion-logo.svg"
              alt="Dense Fusion logo"
              width={118}
              height={54}
              className="h-auto w-24 object-contain"
            />

        <div className="hidden items-center gap-7 text-md font-medium text-secondaryBlack md:flex md:ml-auto ">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} className="transition hover:text-darkGreen">
              {label}
            </Link>
          ))}
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
