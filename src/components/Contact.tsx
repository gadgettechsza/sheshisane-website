import { FormEvent, useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { site, whatsappLink } from "../data/site";

const infoCards = [
  {
    label: "Call Us",
    value: site.phone,
    href: `tel:${site.phoneIntl}`,
    icon: "phone",
  },
  {
    label: "Email Us",
    value: site.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=Website%20Enquiry`,
    icon: "mail",
  },
  {
    label: "Visit Us",
    value: site.address,
    href: "https://www.google.com/maps?q=" + encodeURIComponent(site.address),
    icon: "pin",
  },
  {
    label: "Business Hours",
    value: site.hours,
    href: undefined,
    icon: "clock",
  },
];

function InfoIcon({ icon }: { icon: string }) {
  const cls = "h-6 w-6";
  switch (icon) {
    case "phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={cls}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={cls}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m4 6 8 7 8-7" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={cls}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={cls}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", phone: "", service: "Mathematics Tutoring", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hello SHESHISANE! My name is ${form.name || "—"}.%0APhone: ${form.phone || "—"}%0AService of interest: ${form.service}%0AMessage: ${form.message || "—"}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24">
      <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-navy-900/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-navy-700">
            Get In Touch
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Let's Start a <span className="text-orange-500">Conversation</span>
          </h2>
          <p className="mt-4 text-navy-600">
            Have a question about tutoring, a welding project, or need to hire a tool? Reach out — we respond fast.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <div className="reveal reveal-delay-1 lg:col-span-2">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {infoCards.map((card) => {
                const content = (
                  <div className="group flex items-start gap-4 rounded-2xl border border-navy-100 bg-navy-50/40 p-5 transition-all hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-lg">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-900 text-orange-400 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                      <InfoIcon icon={card.icon} />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-navy-400">{card.label}</p>
                      <p className="mt-1 text-sm font-semibold text-navy-900">{card.value}</p>
                    </div>
                  </div>
                );
                return card.href ? (
                  <a key={card.label} href={card.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={card.label}>{content}</div>
                );
              })}
            </div>

            <a
              href={whatsappLink("Hello SHESHISANE! I'd like to make an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-4 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5 fill-white">
                <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.393.7 4.62 1.912 6.49L4 29l7.7-1.87A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Z" />
              </svg>
              Chat with us on WhatsApp
            </a>
          </div>

          <div className="reveal reveal-delay-2 lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-navy-100 bg-white p-7 shadow-xl sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-500">
                    Full Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-500">
                    Phone Number
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="e.g. 069 818 7323"
                    className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-500">
                    Service of Interest
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  >
                    <option>Mathematics Tutoring</option>
                    <option>Welding Services</option>
                    <option>Tool Hire</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-500">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us a bit about what you need..."
                    className="w-full resize-none rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Send via WhatsApp
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="reveal reveal-delay-3 mt-10 overflow-hidden rounded-3xl border border-navy-100 shadow-lg">
          <iframe
            title="SHESHISANE location map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
            className="h-80 w-full grayscale-[15%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
