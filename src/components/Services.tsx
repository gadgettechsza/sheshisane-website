import { useReveal } from "../hooks/useReveal";
import { services, whatsappLink } from "../data/site";

function ServiceIcon({ icon }: { icon: string }) {
  const common = "h-7 w-7";
  switch (icon) {
    case "graduation":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 2 8l10 5 10-5-10-5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 10.5V16c0 1.657 2.686 3 6 3s6-1.343 6-3v-5.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 8v6" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    case "tool":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2-2 2.4-2.4Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative bg-navy-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-diagonal-lines opacity-30" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
            What We Offer
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Services Built Around <span className="text-orange-400">Your Needs</span>
          </h2>
          <p className="mt-4 text-navy-200/90">
            Three specialised divisions, one unwavering standard of quality and care.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`reveal reveal-delay-${i + 1} group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-2xl hover:shadow-orange-500/10`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                <div
                  className={`absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg ${
                    service.color === "orange" ? "bg-orange-500" : "bg-navy-500"
                  }`}
                >
                  <ServiceIcon icon={service.icon} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-1 text-sm font-semibold text-orange-400">{service.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-navy-200/90">{service.description}</p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-navy-100">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 flex-shrink-0 text-orange-400">
                        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(`Hello SHESHISANE! I'm interested in your ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/15 py-3 text-sm font-bold text-white transition-all hover:border-orange-400 hover:bg-orange-500 hover:text-white"
                >
                  Enquire Now
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
