import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { SKILLS, type Skill } from "../../portfolio-data";

const SkillSphere = lazy(() =>
  import("../three/SkillsSphere").then((m) => ({ default: m.SkillSphere }))
);

const CATEGORIES: Skill["category"][] = ["Mobile", "Web", "Tooling", "Design"];

export function Skills() {
  const [cat, setCat] = useState<Skill["category"]>("Web");
  const list = SKILLS.filter((s) => s.category === cat);

  return (
    <section id="skills" className="relative px-6 py-32 sm:py-40 bg-transparent">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            04 — Skills
          </p>
          <h2 className="mt-3 font-display text-5xl leading-[1] tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
            A toolkit, in orbit.
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">

          {/* 3D SPHERE PANEL */}
          <div className="relative h-[480px] overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 
                          bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-900 dark:to-black shadow-sm">

            <Suspense
              fallback={
                <div className="grid h-full place-items-center text-zinc-500">
                  loading…
                </div>
              }
            >
              <SkillSphere />
            </Suspense>

            {/* bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 
              bg-gradient-to-t from-white dark:from-black to-transparent" />

            {/* badge */}
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 
              rounded-full border border-zinc-200 dark:border-zinc-700 
              bg-white/70 dark:bg-black/40 px-3 py-1 text-[11px] 
              text-zinc-700 dark:text-zinc-300 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              Drag to interact
            </div>
          </div>

          {/* SKILLS LIST */}
          <div>

            {/* CATEGORY FILTER */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-4 py-2 text-sm transition-all border
                    ${
                      cat === c
                        ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
                        : "border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* SKILL LIST */}
            <ul className="mt-8 space-y-5">
              {list.map((s, i) => (
                <motion.li
                  key={s.name}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-medium text-zinc-900 dark:text-white">
                      {s.name}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      {s.level}%
                    </span>
                  </div>

                  <div className="mt-2 h-[4px] w-full overflow-hidden rounded-full 
                    bg-zinc-200 dark:bg-zinc-800">
                    <motion.span
                      className="block h-full rounded-full bg-gradient-to-r from-gold to-black"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        ease: [0.2, 0.7, 0.2, 1],
                        delay: 0.1 + i * 0.04,
                      }}
                    />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}