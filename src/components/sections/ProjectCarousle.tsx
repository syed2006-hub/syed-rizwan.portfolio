import { useEffect, useRef, useState } from "react"
import { ProjectCard } from "./ProjectCard"
import type { Project } from "../../data/projects"

interface Props {
  projects: Project[]
}

export function ProjectCarousel({ projects }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  // AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      const el = containerRef.current
      if (!el) return

      const next = (active + 1) % projects.length
      const cardWidth = el.offsetWidth

      el.scrollTo({
        left: next * cardWidth,
        behavior: "smooth",
      })

      setActive(next)
    }, 4000)

    return () => clearInterval(interval)
  }, [active, projects.length])

  // TRACK SCROLL POSITION
  const handleScroll = () => {
    const el = containerRef.current
    if (!el) return

    const index = Math.round(el.scrollLeft / el.offsetWidth)
    setActive(index)
  }

  return (
    <div className="relative w-full md:hidden">
      {/* SCROLL AREA */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="
          flex overflow-x-auto scroll-smooth snap-x snap-mandatory
          gap-4 px-4 py-6
          scrollbar-hide
        "
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="min-w-full snap-center"
          >
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>

      {/* DOT INDICATORS */}
      <div className="flex justify-center gap-2 pb-4">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = containerRef.current
              if (!el) return

              el.scrollTo({
                left: i * el.offsetWidth,
                behavior: "smooth",
              })
              setActive(i)
            }}
            className={`
              h-2 w-2 rounded-full transition-all duration-300
              ${active === i ? "w-6 bg-black" : "bg-black/30"}
            `}
          />
        ))}
      </div>
    </div>
  )
}