"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { projects } from "../../data/projects"
import type { JSX } from "react/jsx-runtime"

gsap.registerPlugin(ScrollTrigger)

interface Project {

  title: string
  desc: string
  img: string
  url: string
  type: "web" | "download"
  isVideo?: boolean
  gradient: string
  stack?: string[] // Kept flexible in case your data includes them
  stats: { label: string; value: string }[]
}

export default function Projects(): JSX.Element {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          xPercent: i % 2 === 0 ? -8 : 8,
          opacity: 0,
          y: 40,
        },
        {
          xPercent: 0,
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power4.out",
          force3D: true,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        }
      )
    })

    gsap.from(".travel-line", {
      scaleY: 0,
      transformOrigin: "top",
      scrollTrigger: {
        trigger: "#projects",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    })
  }, [])

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-transparent text-[#1c1c1e] py-32 px-6 md:px-10 overflow-hidden"
    >
      {/* Global SVG Liquid Glass Filter Definition */}
      <CardGlassFilter />

      {/* Heading */}
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-smoke">03 — Selected work</p>
                  <h2 className="mt-3 font-display text-5xl leading-[1] tracking-tight text-ink sm:text-6xl">
                    Eight products. <span className="italic text-smoke">One obsession.</span>
                  </h2>
                </div>
                <p className="max-w-sm text-pretty text-smoke">
                  From mindful mobile to enterprise SaaS — a sample of the work I'm proud to put my name on.
                </p>
              </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Timeline Travel Line */}
        <div className="travel-line absolute left-1/2 top-0 hidden h-full w-[1.5px] bg-neutral-900/10 md:block" />

        <div className="space-y-40">
          {projects.map((p: Project, i: number) => (
            <div
              key={p.title}
              className={`project-card flex flex-col md:flex-row ${
                i % 2 ? "md:flex-row-reverse" : ""
              } items-center gap-12 md:gap-16 relative`}
            >
              {/* LEFT/RIGHT BLOCK: VISUAL MEDIA */}
              <div className="w-full md:w-1/2 group">
                <div className="relative overflow-hidden rounded-[2rem] border border-black/[0.04] bg-white shadow-[0_30px_70px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_40px_90px_rgba(0,0,0,0.08)] group-hover:scale-[1.01]">
                  <div className="aspect-[16/10] w-full transition-transform duration-700 ease-out group-hover:scale-105">
                    {p.isVideo ? (
                      <video
                        src={p.img}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <img
                        src={p.img}
                        alt={p.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* LEFT/RIGHT BLOCK: EXTRA-PREMIUM LIQUID GLASS CARD */}
              <div className="w-full md:w-1/2 relative min-h-[380px] flex">
                <div className="relative isolate flex flex-col justify-between w-full rounded-[2.5rem] p-8 md:p-10 overflow-hidden transition-all duration-500 hover:-translate-y-1">
                  
                  {/* LAYER 1: Liquid Displacement Backdrop Filter Layer */}
                  <div
                    className="absolute inset-0 -z-20 h-full w-full rounded-[2.5rem] bg-white/40"
                    style={{ backdropFilter: 'url("#card-liquid-glass")' }}
                  />

                  {/* LAYER 2: 3D Molded Organic Specular Shadow Ring */}
                  <div className="absolute inset-0 -z-10 h-full w-full rounded-[2.5rem] pointer-events-none border border-black/[0.03] shadow-[0_0_8px_rgba(0,0,0,0.01),0_4px_12px_rgba(0,0,0,0.03),inset_4px_4px_1px_-3px_rgba(0,0,0,0.15),inset_-4px_-4px_1px_-3px_rgba(0,0,0,0.1),inset_1px_1px_2px_-0.5px_rgba(0,0,0,0.2),inset_-1px_-1px_2px_-0.5px_rgba(0,0,0,0.2),inset_0_0_12px_4px_rgba(0,0,0,0.02)] transition-shadow duration-500 group-hover:shadow-[0_0_12px_rgba(0,0,0,0.02)]" />

                  {/* CONTENT LAYER */}
                  <div className="z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Project Type Minimal Indicator */}
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-3">
                        // {p.type === "web" ? "Web Application" : "Native System"}
                      </span>

                      {/* Title */}
                      <h3 className="mb-4 text-3xl font-semibold tracking-tight text-[#1c1c1e]">
                        {p.title}
                      </h3>

                      {/* Description */}
                      <p className="mb-6 text-[15px] leading-relaxed text-neutral-500/90 whitespace-pre-line">
                        {p.desc}
                      </p>

                      {/* Dynamic Tech Stack Badges (If available in data payload) */}
                      {p.stack && (
                        <div className="flex flex-wrap gap-1.5 mb-8">
                          {p.stack.map((tech) => (
                            <span key={tech} className="text-xs bg-black/[0.03] border border-black/[0.02] text-neutral-600 px-2.5 py-1 rounded-md">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  {/* bottom row: stats + CTA */}
<div className="flex items-end justify-between gap-6 mb-6">
  
  {/* stats */}
  <div className="flex gap-6">
    {p.stats.map((s) => (
      <div key={s.label}>
        <p className="font-semibold text-sm">{s.value}</p>
        <p className="text-[10px] uppercase text-neutral-400">
          {s.label}
        </p>
      </div>
    ))}
  </div>

  {/* CTA Button */}
  <div>
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/btn relative inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 shadow-md shadow-neutral-900/10 overflow-hidden"
    >
      {/* Action Background Gradient Contextualized by Type */}
      <span
        className={`absolute inset-0 rounded-full bg-gradient-to-r transition-all duration-300 group-hover/btn:scale-105 ${p.gradient}`}
      />

      {/* Dynamic Glass Layer */}
      <span className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm opacity-100" />

      {/* Text */}
      <span className="relative flex items-center gap-2 tracking-wide">
        {p.type === "web" ? "ViewApp" : "GetApp"}

        <svg
          className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
    </a>
  </div>

</div>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Optimized SVG filter for large content blocks.
 * Base frequency handles larger dimensions safely without tearing layout resolution.
 */
function CardGlassFilter() {
  return (
    <svg className="hidden pointer-events-none absolute">
      <defs>
        <filter
          id="card-liquid-glass"
          x="-10%"
          y="-10%"
          width="120%"
          height="120%"
          colorInterpolationFilters="sRGB"
        >
          {/* Generate smoother noise profile suited for large components */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.015"
            numOctaves="2"
            seed="3"
            result="noise"
          />

          {/* Moderate Gaussian blur ensures displacement is fluid, not noisy */}
          <feGaussianBlur in="noise" stdDeviation="5" result="softNoise" />

          {/* Coordinate displacement engine */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="35"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />

          {/* Surface reflection blending layer */}
          <feComposite in="displaced" in2="SourceGraphic" operator="over" />
        </filter>
      </defs>
    </svg>
  )
}