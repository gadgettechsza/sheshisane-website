import { useMemo, useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { gallery } from "../data/site";

const categories = ["All", "Tutoring", "Welding", "Tool Hire"] as const;

export default function Gallery() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items = useMemo(
    () => (active === "All" ? gallery : gallery.filter((g) => g.category === active)),
    [active]
  );

  return (
    <section id="gallery" className="relative bg-navy-50 py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-navy-900/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-navy-700">
            Our Work
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            A Glimpse Into <span className="text-orange-500">Our Craft</span>
          </h2>
          <p className="mt-4 text-navy-600">
            From the classroom to the workshop, see the standard of work we bring to every project.
          </p>
        </div>

        <div className="reveal reveal-delay-1 mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-white text-navy-700 shadow-sm hover:bg-navy-900 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setLightbox(item.src)}
              className={`reveal group relative aspect-square overflow-hidden rounded-2xl shadow-md ${
                i % 5 === 0 ? "sm:row-span-2 sm:aspect-auto" : ""
              }`}
              style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-bold uppercase tracking-wide text-orange-300">{item.category}</span>
                <span className="mt-1 text-xs text-white/90 line-clamp-2">{item.alt}</span>
              </div>
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy-900 opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-6 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Enlarged gallery view"
            className="max-h-[85vh] max-w-4xl rounded-2xl shadow-2xl"
          />
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close preview"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
