import { useReveal } from "../hooks/useReveal";
import { site } from "../data/site";

const pillars = [
  {
    title: "Education First",
    desc: "Empowering learners with the mathematical confidence to excel academically and beyond.",
    icon: "🎓",
  },
  {
    title: "Skilled Craftsmanship",
    desc: "Precision welding and fabrication built on years of hands-on trade expertise.",
    icon: "🔧",
  },
  {
    title: "Community Access",
    desc: "Affordable tool hire that puts professional-grade equipment within everyone's reach.",
    icon: "🤝",
  },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-navy-50 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-50 blur-3xl" />

      <div ref={ref} className="relative mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <div className="relative">
            <img
              src="/sheshisane-website/images/hero-image.jpg"
              alt="Tutor guiding a student through classwork"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
            />
            <img
              src="/sheshisane-website/images/welding-action.jpg"
              alt="Welder working with sparks in a workshop"
              className="absolute -bottom-10 -right-6 hidden aspect-[4/3] w-56 rounded-2xl border-4 border-white object-cover shadow-2xl sm:block md:w-64"
            />
            <div className="absolute -left-6 -top-6 hidden rounded-2xl bg-navy-900 px-5 py-4 text-white shadow-xl sm:block">
              <p className="font-display text-2xl font-extrabold text-orange-400">100%</p>
              <p className="text-xs text-navy-100">Client Dedicated</p>
            </div>
          </div>
        </div>

        <div>
          <span className="reveal inline-block rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
            About Us
          </span>
          <h2 className="reveal reveal-delay-1 mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            One Brand, Three Ways to <span className="text-orange-500">Empower</span> You
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-base leading-relaxed text-navy-700">
            {site.name} (Reg. {site.registration}) was built on a simple belief: brilliance is
            inspired, not accidental. Whether we're helping a Grade 12 learner conquer Mathematics,
            fabricating a custom security gate, or equipping a tradesperson with the right tool for
            the job — our mission stays the same: deliver excellence with integrity, every single time.
          </p>
          <p className="reveal reveal-delay-2 mt-4 text-base leading-relaxed text-navy-700">
            Based in Bloemfontein, Free State, we proudly serve students, homeowners and businesses
            with tailored, affordable and reliable solutions — open seven days a week from{" "}
            <span className="font-semibold text-navy-900">{site.hours}</span>.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`reveal reveal-delay-${Math.min(i + 2, 4)} group rounded-2xl border border-navy-100 bg-navy-50/50 p-5 transition-all hover:-translate-y-1.5 hover:border-orange-200 hover:bg-white hover:shadow-xl`}
              >
                <span className="text-3xl">{p.icon}</span>
                <h3 className="mt-3 font-display text-sm font-bold text-navy-900">{p.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-navy-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
