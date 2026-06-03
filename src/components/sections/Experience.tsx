import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EXPERIENCE } from "../../portfolio-data"; 
export function Experience() { 
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  return (
    <section id="experience" className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-smoke">02 — Experience</p>
            <h2 className="mt-3 font-display text-5xl leading-[1] tracking-tight text-ink sm:text-6xl">Places I've shipped at.</h2>
          </div>
           
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {EXPERIENCE.map((e, i) => (
            <motion.article
              key={e.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-hairline bg-white p-7 shadow-[0_1px_0_rgba(17,17,17,0.04),0_30px_60px_-40px_rgba(17,17,17,0.25)] transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-smoke">{e.period}</span>
                <button
                  onClick={() => setSelectedCertificate(e.certificate)}
                  className="
                    rounded-xl
                    px-4 py-2
                    text-xs font-medium
                    text-ink
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    shadow-[8px_8px_20px_rgba(0,0,0,0.25),-4px_-4px_12px_rgba(255,255,255,0.03)]
                    transition-all duration-300
                    hover:scale-105
                    hover:bg-white/10
                    hover:text-red-300
                  "
                >
                  View
                </button>
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-tight text-ink">{e.company}</h3>
              <p className="mt-1 text-sm text-charcoal">{e.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-smoke">{e.summary}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <span key={t} className="rounded-full bg-mist px-2.5 py-1 text-[11px] text-charcoal">{t}</span>
                ))}
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -right-16 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(closest-side, rgba(17,17,17,0.12), transparent)" }}
              />
            </motion.article>
          ))}
        </div>
      </div>

 
      <AnimatePresence>
  {selectedCertificate && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={() => setSelectedCertificate(null)}
    >
      {/* Blur Background */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

      {/* Certificate */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedCertificate(null)}
          className="absolute right-2 top-2 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/70 text-xl text-white backdrop-blur-md transition hover:bg-black"
        >
          ✕
        </button>

        <img
          src={selectedCertificate}
          alt="Certificate"
          className="max-h-[90vh] w-auto rounded-2xl object-contain shadow-2xl"
        />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}
