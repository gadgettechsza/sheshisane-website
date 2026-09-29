import { site, whatsappLink } from "../data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 pt-24"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/sheshisane-website/images/hero-image.jpg"
          alt="Welding sparks illuminating a workshop"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/90 to-navy-900/80" />
        <div className="absolute inset-0 bg-diagonal-lines" />
      </div>

      {/* Glow blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 animate-float rounded-full bg-orange-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-96 w-96 animate-float rounded-full bg-navy-500/30 blur-3xl [animation-delay:2s]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
            <span className="h-1.5 w-1.5 animate-spark rounded-full bg-orange-400" />
            Registration No. {site.registration}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Inspired to <span className="text-gradient-orange">Empower</span> Brilliance
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/90 sm:text-lg">
            SHESHISANE (PTY) LTD brings together academic excellence and skilled craftsmanship —
            Mathematics tutoring, professional welding services, and reliable tool hire, all under one trusted brand in Bloemfontein.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink("Hello SHESHISANE! I'd like to make an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Get In Touch
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="h-4 w-4 transition-transform group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 sm:max-w-lg">
            <div>
              <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">R400</p>
              <p className="mt-1 text-xs text-navy-200/80 sm:text-sm">Tutoring from p/m</p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">07:00</p>
              <p className="mt-1 text-xs text-navy-200/80 sm:text-sm">Open daily till 21:00</p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">3-in-1</p>
              <p className="mt-1 text-xs text-navy-200/80 sm:text-sm">Trusted service lines</p>
            </div>
          </div>
        </div>

        {/* Right side visual card */}
        <div className="relative hidden animate-fade-in lg:block [animation-delay:0.3s]">
          <div className="relative mx-auto max-w-sm rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
            <img
              src="/sheshisane-website/images/logo.png"
              alt="SHESHISANE logo"
              className="mx-auto h-48 w-48 rounded-2xl bg-white/95 object-contain p-4 shadow-lg"
            />
            <div className="mt-6 space-y-3">
              {[
                { label: "Mathematics Tutoring", color: "bg-navy-400" },
                { label: "Welding Services", color: "bg-orange-400" },
                { label: "Tool Hire", color: "bg-navy-300" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white"
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-2xl bg-orange-500/90 shadow-xl" />
          <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full border-4 border-navy-400/40" />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 sm:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-white/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-orange-400" />
        </span>
      </a>
    </section>
  );
}
