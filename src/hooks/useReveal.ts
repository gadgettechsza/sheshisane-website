import { useEffect, useRef } from "react";

/**
 * Adds `.in-view` to any descendant with the `.reveal` class once it enters
 * the viewport, powering the site-wide scroll reveal animations.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.classList.contains("reveal")
      ? [root, ...Array.from(root.querySelectorAll(".reveal"))]
      : Array.from(root.querySelectorAll(".reveal"));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
