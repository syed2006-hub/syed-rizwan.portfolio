import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SectionHeading } from '../ui/SectionHeading'
import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return
    gsap.to(gridRef.current, {
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      y: -30,
      ease: 'none',
    })
  }, [])

  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="03 — Work"
          title="Selected projects"
          description="Eight products spanning mobile, web, and design — each with depth and craft."
        />
        <h2 id="projects-heading" className="sr-only">
          Project portfolio
        </h2>

        <div
          ref={gridRef}
          className="grid gap-8 sm:grid-cols-3 lg:gap-10"
          style={{ perspective: 1200 }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
