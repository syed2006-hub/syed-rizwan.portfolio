import { useReveal } from "../../hooks/useReveal";
import { STATS, TIMELINE } from "../../portfolio-data";
import { StatCounter } from "../ui/StatCounter";

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative px-6 py-32 sm:py-40">
      <div ref={ref} className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-smoke">01 — About</p>
          <h2 className="mt-4 font-display text-balance text-5xl leading-[1] tracking-tight text-ink sm:text-6xl">
            A developer who treats every pixel like product.
          </h2>
          <p className="mt-6 max-w-prose text-pretty text-lg text-charcoal">
            I'm Syed — a Flutter and MERN engineer with a designer's eye. I obsess over micro‑motion,
            negative space, and the moments between interactions. My favourite work sits where craft,
            performance and quiet delight meet.
          </p>
          <p className="mt-4 max-w-prose text-pretty text-base text-smoke">
            Currently exploring spatial UI, declarative animation systems, and shipping
            production‑grade apps with small teams.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-4xl text-ink">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-smoke">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ol className="relative border-l border-hairline pl-8">
          <span className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-ink/20 via-ink/5 to-transparent" />
          {TIMELINE.map((t, i) => (
            <li key={t.year} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[37px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-background ring-1 ring-ink/15">
                <span className="h-1.5 w-1.5 rounded-full bg-ink" />
              </span>
              <p className="font-mono text-xs tracking-wider text-smoke">{t.year}</p>
              <h3 className="mt-1 font-display text-2xl tracking-tight text-ink">{t.title}</h3>
              <p className="mt-1.5 max-w-md text-charcoal">{t.body}</p>
              {i === TIMELINE.length - 1 && (
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-2.5 py-1 text-[11px] text-ink">
                  <span className="h-1 w-1 rounded-full bg-ink" /> Now
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
