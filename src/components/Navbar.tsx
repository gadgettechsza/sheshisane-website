import { useEffect, useState } from "react";
import { site } from "../data/site";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-lg shadow-navy-900/5 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="SHESHISANE (PTY) LTD logo"
            className="h-11 w-11 object-contain md:h-12 md:w-12"
          />
          <div className="leading-tight">
            <p
              className={`font-display text-lg font-bold tracking-wide md:text-xl ${
                scrolled ? "text-navy-900" : "text-white"
              }`}
            >
              SHESHISANE
            </p>
            <p
              className={`text-[10px] font-medium uppercase tracking-[0.18em] md:text-xs ${
                scrolled ? "text-orange-500" : "text-orange-300"
              }`}
            >
              {site.slogan}
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-semibold tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? "text-navy-800 hover:text-orange-500" : "text-white/90 hover:text-orange-300"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${site.phoneIntl}`}
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/50"
          >
            Call Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
            scrolled ? "text-navy-900" : "text-white"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-white shadow-xl transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 pb-5 pt-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-navy-800 hover:bg-navy-50 hover:text-orange-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${site.phoneIntl}`}
            className="mt-2 rounded-full bg-orange-500 px-5 py-3 text-center text-sm font-bold text-white shadow-md"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
