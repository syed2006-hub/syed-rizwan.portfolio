import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

import { roles, socialLinks } from '../../data/social'
import { SocialIcon } from '../ui/SocialIcon'
import { MagneticButton } from '../ui/MagneticButton'
import { TextReveal } from '../ui/TextReveal'

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 2400)

    return () => clearInterval(interval)
  }, [])

useEffect(() => {
  gsap.fromTo(
    '.hero-el',
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      clearProps: 'all',
    }
  )
}, [])

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden pt-28"
      aria-labelledby="hero-heading"
    >
 
      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        {/* Availability Badge */}
        <motion.div
          className="hero-el mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-xs font-medium text-charcoal backdrop-blur-xl shadow-[0_8px_30px_rgba(17,17,17,0.08)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70"
              style={{
                animation: 'pulse-dot 1.8s ease-in-out infinite',
              }}
            />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>

          Available for FREELANCING
        </motion.div>

        {/* Name */}
        <h1
          id="hero-heading"
          className="hero-el font-display text-balance text-[clamp(3rem,11vw,10rem)] leading-[0.92] tracking-[-0.04em] text-[#111111]"
        >
          <TextReveal text="Syed Rizwan A" as="span" />
        </h1>

        {/* Role Animation */}
        <div className="hero-el mt-6 flex h-9 items-center justify-center overflow-hidden text-lg text-[#444] sm:text-xl">
          <span className="mr-2 font-medium text-[#666]">
            I build as a
          </span>

          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial={{
                y: 28,
                opacity: 0,
                filter: 'blur(6px)',
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
              }}
              exit={{
                y: -28,
                opacity: 0,
                filter: 'blur(6px)',
              }}
              transition={{
                duration: 0.55,
                ease: [0.2, 0.7, 0.2, 1],
              }}
              className="font-semibold text-[#111111]"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Description */}
        <p className="hero-el mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-[#5f5f5f] sm:text-lg">
          I design and engineer immersive products — across mobile, web and the
          in-between. Clean, considered, quietly cinematic.
        </p>

        {/* CTA Buttons */}
        <div className="hero-el mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            variant="primary"
          >
            View selected work

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </MagneticButton>

          <MagneticButton
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            variant="outline"
          >
            Get in touch
          </MagneticButton>
        </div>

        {/* Desktop Socials */}
        <ul className="absolute bottom-6 left-6 hidden flex-col gap-3 sm:flex">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.name}
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/90 text-[#111111] backdrop-blur-xl shadow-[0_4px_20px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#111111] hover:text-white"
              >
                <SocialIcon icon={link.icon} />
              </a>
            </li>
          ))}
        </ul>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 right-6 hidden items-center gap-3 text-xs font-medium text-[#777] sm:flex">
          <span className="font-mono tracking-wider">
            SCROLL
          </span>

          <span className="relative block h-10 w-[1px] overflow-hidden bg-black/10">
            <span
              className="absolute inset-x-0 top-0 h-3 bg-[#111111]"
              style={{
                animation: 'float-y 2s ease-in-out infinite',
              }}
            />
          </span>
        </div>
      </div>

      {/* Mobile Socials */}
      <div className="hero-el relative z-10 mt-14 flex justify-center gap-3 sm:hidden">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[#111111] shadow-[0_4px_20px_rgba(17,17,17,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <SocialIcon icon={link.icon} />
          </a>
        ))}
      </div>
    </section>
  )
}