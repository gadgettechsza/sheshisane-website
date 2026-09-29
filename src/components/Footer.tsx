import { site, whatsappLink } from "../data/site";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 pt-16 text-navy-200">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="SHESHISANE logo" className="h-11 w-11 rounded-lg bg-white/95 object-contain p-1" />
              <div>
                <p className="font-display text-lg font-bold text-white">SHESHISANE</p>
                <p className="text-[11px] uppercase tracking-widest text-orange-400">{site.slogan}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-navy-300">
              {site.name} · Reg No. {site.registration}. Empowering minds and building with steel —
              trusted tutoring, welding, and tool hire services in Bloemfontein.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-navy-300 transition-colors hover:text-orange-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Our Services</h4>
            <ul className="mt-5 space-y-2.5 text-sm text-navy-300">
              <li>Mathematics Tutoring</li>
              <li>Welding Services</li>
              <li>Tool Hire</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-navy-300">
              <li>{site.address}</li>
              <li>
                <a href={`tel:${site.phoneIntl}`} className="transition-colors hover:text-orange-400">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-orange-400">
                  {site.email}
                </a>
              </li>
              <li>{site.hours}</li>
            </ul>
            <a
              href={whatsappLink("Hello SHESHISANE! I'd like to make an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-400 sm:flex-row">
          <p>© {new Date().getFullYear()} SHESHISANE (PTY) LTD. All rights reserved.</p>
          <p>Reg. {site.registration} · Bloemfontein, Free State</p>
        </div>
      </div>
    </footer>
  );
}
