import { ArrowUp } from 'lucide-react'
import { SocialIcon } from '../ui/SocialIcon'
import { socialLinks } from '../../data/social'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative w-full py-10 px-6 bg-transparent overflow-hidden">

      {/* TOP FADE LINE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[92%] h-[1px] 
        bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent" />

      {/* LIGHT GLOW (soft, not neon) */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] 
          bg-cyan-200 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* BRAND */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-black tracking-tight text-zinc-900 uppercase">
            Syed <span className="text-cyan-600">Rizwan</span>
          </h3>
          <p className="text-[10px] tracking-[0.35em] text-zinc-500 mt-2 uppercase">
            MERN & Flutter Developer
          </p>
        </div>

        {/* CENTER TEXT */}
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-[10px] uppercase tracking-widest text-zinc-500">
            Built with React • Tailwind • GSAP
          </p>
          <p className="text-[9px] text-zinc-400 uppercase tracking-widest">
            © {currentYear} All Rights Reserved
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="group p-2 rounded-xl bg-white border border-zinc-200
                         hover:bg-zinc-50 hover:border-cyan-300
                         hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <span className="text-zinc-500 group-hover:text-cyan-600 transition-colors">
                <SocialIcon icon={link.icon} />
              </span>
            </a>
          ))}
        </div>

        {/* BACK TO TOP */}
        <button
          onClick={scrollTop}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition"
        >
          Back to top
          <span className="flex h-8 w-8 items-center justify-center rounded-full 
            border border-zinc-200 text-zinc-500 hover:text-cyan-600 
            hover:border-cyan-300 hover:bg-cyan-50 transition">
            <ArrowUp size={14} />
          </span>
        </button>
      </div>

      {/* BOTTOM FADE LINE */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] 
        bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent" />
    </footer>
  )
}