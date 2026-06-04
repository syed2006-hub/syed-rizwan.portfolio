import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { Project } from "../../data/projects"

interface Props {
  projects: Project[]
}

export function ProjectShowcaseSplit({ projects }: Props) {
  const [active, setActive] = useState(0)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])

  const project = projects[active]
  const summary = project.description || project.desc
  const cta = project.type === "web" ? "View Live" : "Download Project"

  const goTo = (index: number) => setActive(index)

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault()
        setActive((p) => Math.min(p + 1, projects.length - 1))
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault()
        setActive((p) => Math.max(p - 1, 0))
      }
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [projects.length])

  useEffect(() => {
    itemRefs.current[active]?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    })
  }, [active])

  const slideVariants = {
    enter: { opacity: 0, y: 20, scale: 0.98 },
    center: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.98 },
  }

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[#111]/[0.06] bg-[#FDFCFA] shadow-[0_24px_80px_rgba(17,17,17,0.06)]">
      
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full blur-[120px]"
        style={{ backgroundColor: `${project.accent}22` }}
      />

      <div className="grid min-h-[720px] lg:grid-cols-[280px_1fr]">

        {/* ================= LEFT RAIL ================= */}
        <aside className="flex flex-col border-r border-[#111]/[0.06]">
          
          <div className="border-b border-[#111]/[0.06] px-6 py-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#888]">
              03 — Work
            </p>
            <p className="mt-1 text-lg font-medium text-[#111]">
              Projects
            </p>
          </div>

          {/* Scrollable list */}
          <ul className="flex flex-col gap-2 overflow-y-auto p-4 pr-2 max-h-[520px] scrollbar-hide">
            {projects.map((p, i) => {
              const isActive = i === active

              return (
                <li key={p.id}>
                  <button
                
                    ref={(el) => {
  itemRefs.current[i] = el
}}
                    onClick={() => goTo(i)}
                    className={`w-full rounded-2xl px-4 py-3 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-[#111] text-white"
                        : "hover:bg-black/5 text-[#111]"
                    }`}
                  >
                    <p className="text-[10px] uppercase tracking-wider opacity-60">
                      {String(i + 1).padStart(2, "0")} · {p.type}
                    </p>
                    <p className="mt-1 font-medium leading-snug">
                      {p.title}
                    </p>

                    {/* Accent line */}
                    <span
                      className="mt-2 block h-[2px] w-10 rounded-full"
                      style={{
                        backgroundColor: isActive ? project.accent : `${p.accent}55`,
                      }}
                    />
                  </button>
                </li>
              )
            })}
          </ul>

          {/* hint */}
          <div className="border-t border-[#111]/[0.06] px-6 py-3 text-xs text-[#888]">
            Scroll to view more projects
          </div>
        </aside>

        {/* ================= RIGHT STAGE ================= */}
        <div className="relative flex flex-col">

          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45 }}
              className="flex h-full flex-col"
            >

              {/* HERO IMAGE (FULL WIDTH) */}
              <div className="relative h-[420px] w-full overflow-hidden">

                {project.isVideo ? (
                  <video
                    src={project.img}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                )}

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCFA] via-transparent to-transparent" />
              </div>

              {/* STACKED DETAIL CARD */}
              <div className="relative -mt-16 mx-6 mb-6 rounded-2xl border border-[#111]/[0.08] bg-white/85 p-6 shadow-xl backdrop-blur-xl">

                <h3 className="text-2xl font-semibold text-[#111]">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-[#555] line-clamp-2">
                  {summary}
                </p>

                {/* stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-black/5 px-3 py-1 text-xs text-[#333]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* stats */}
                <div className="mt-5 flex gap-6">
                  {project.stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-lg font-semibold text-[#111]">
                        {s.value}
                      </p>
                      <p className="text-[10px] uppercase text-[#888]">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                  style={{ backgroundColor: project.accent }}
                >
                  {cta} →
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}