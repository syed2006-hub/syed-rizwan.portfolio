import { useEffect, useRef } from "react";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
};

export function TextReveal({ text, as: As = "span", className, delay = 0, stagger = 22 }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const chars = Array.from(el.querySelectorAll<HTMLElement>("[data-char]"));
    if (reduce) {
      chars.forEach((c) => {
        c.style.opacity = "1";
        c.style.transform = "none";
      });
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          chars.forEach((c, i) => {
            c.animate(
              [
                { opacity: 0, transform: "translateY(110%) rotate(8deg)" },
                { opacity: 1, transform: "translateY(0) rotate(0)" },
              ],
              {
                duration: 900,
                delay: delay + i * stagger,
                easing: "cubic-bezier(.2,.7,.2,1)",
                fill: "forwards",
              }
            );
          });
          io.disconnect();
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, stagger]);

  const words = text.split(" ");

  return (
    <As ref={ref as never} className={className} aria-label={text}>
      {words.map((w, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {Array.from(w).map((ch, ci) => (
            <span key={ci} className="inline-block overflow-hidden align-bottom">
              <span
                data-char
                className="inline-block will-change-transform"
                style={{ opacity: 0, transform: "translateY(110%)" }}
              >
                {ch}
              </span>
            </span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </As>
  );
}
