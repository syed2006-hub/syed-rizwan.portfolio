import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [8, -8]),
    { stiffness: 300, damping: 30 }
  )

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-8, 8]),
    { stiffness: 300, damping: 30 }
  )

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()

    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  const isVideo = project.isVideo

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group relative"
    >
      <div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} p-1 shadow-md transition-all duration-500 ${
          hovered ? 'shadow-2xl' : 'shadow-ink/5'
        }`}
      >
        <div className="rounded-[1.35rem] bg-white/90 backdrop-blur-xl p-6 md:p-8">

          {/* MEDIA (IMAGE / VIDEO) */}
          <div
            className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-black/10"
            style={{ transform: 'translateZ(40px)' }}
          >
            {isVideo ? (
              <video
                src={project.img}
                autoPlay
                muted
                loop
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={project.img}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          {/* TEXT CONTENT */}
          <div style={{ transform: 'translateZ(20px)' }}>
            <h3 className="font-display text-2xl font-bold text-[#111]">
              {project.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#555] line-clamp-3">
              {project.desc}
            </p>

            {/* STACK */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-xs font-medium text-[#333]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* STATS */}
            <div className="mt-6 flex gap-6 border-t border-black/10 pt-4">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg font-bold text-[#111]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#666]">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="mt-6">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r ${project.gradient}`}
              >
                {project.type === 'web' ? 'Experiance App' : 'Download App'}
                <span className="text-lg">↗</span>
              </a>
            </div>
          </div>

          {/* FLOATING MINI CARD (BOTTOM RIGHT) */}
          <motion.div
            className="absolute -bottom-4 -right-4 h-20 w-14 rounded-xl border border-black/10 bg-white/70 shadow-lg backdrop-blur-md"
            animate={hovered ? { rotate: -8, y: -10 } : { rotate: 0, y: 0 }}
          />
        </div>
      </div>
    </motion.article>
  )
}