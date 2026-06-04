import { useState ,useEffect } from 'react' 
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { socialLinks } from '../../data/social'
import { SocialIcon } from '../ui/SocialIcon'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle') 

 useEffect(() => {
  emailjs.init("dU6mTsrEG6FJTDp7S")
}, [])

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setStatus("sending")

  try {
    const result = await emailjs.sendForm(
      "service_6mafrpl",
      "template_ndn82vi",
      e.currentTarget,
      "dU6mTsrEG6FJTDp7S"
    )

    console.log("SUCCESS:", result.text)
    setStatus("success")
    e.currentTarget.reset()
  } catch (err) {
    console.error("EMAIL ERROR:", err)
    setStatus("error")
  }
}

  const fields = [
    { id: 'name', label: 'Name', type: 'text' as const },
    { id: 'email', label: 'Email', type: 'email' as const },
    { id: 'message', label: 'Message', type: 'textarea' as const },
  ]

  return (
    <section id="contact" className="section-padding border-t border-border" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl">
        <p className="section-index">05 — Contact</p>
        <div className="mt-4 grid gap-16 lg:grid-cols-2">
          <div>
           <h2
              id="contact-heading"
              className="font-display text-5xl md:text-6xl lg:text-[70px] font-black tracking-tighter leading-[0.85] text-ink"
            >
              READY TO
              <br />
              <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(0,0,0,0.25)]">
                BUILD?
              </span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Open to freelance , internships, and full-time roles. I usually reply
              within a day.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 text-sm text-charcoal">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for select work
            </div>

            <div className="mt-10 flex gap-4">
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
          </div>
 
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="relative group"
>
  {/* Glow */}
  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-stone-300/40 via-zinc-200/40 to-stone-300/40 blur-xl opacity-60 transition duration-1000 group-hover:opacity-90" />

  {/* Card */}
  <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/80 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl">
    
    {/* Terminal Header */}
    <div className="flex items-center justify-between border-b border-black/5 bg-black/[0.02] px-6 py-4">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
      </div>

      <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
        contact.tsx
      </span>
    </div>

    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 md:p-10"
    >
      {fields.map((field) => (
        <div key={field.id} className="space-y-2">
          <label
            htmlFor={field.id}
            className="ml-1 text-[10px] font-bold uppercase tracking-[0.25em] text-muted"
          >
            {field.label}
          </label>

          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              name={field.id}
              required
              rows={5}
              className="w-full resize-none rounded-2xl border border-black/10 bg-black/[0.02] px-5 py-4 text-sm text-ink outline-none transition-all focus:border-black/20 focus:bg-white"
            />
          ) : (
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              required
              className="w-full rounded-2xl border border-black/10 bg-black/[0.02] px-5 py-4 text-sm text-ink outline-none transition-all focus:border-black/20 focus:bg-white"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group relative w-full overflow-hidden rounded-2xl bg-ink py-5 text-[11px] font-black uppercase tracking-[0.25em] text-cream transition-all hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <div className="relative z-10 flex items-center justify-center gap-2">
          {status === 'sending'
            ? 'Sending...'
            : 'Send Message'}

          <span aria-hidden>→</span>
        </div>

        <div className="absolute inset-0 translate-y-full bg-stone-700 transition-transform duration-300 group-hover:translate-y-0" />
      </button>

      {status === 'success' && (
        <p
          className="text-sm text-emerald-600"
          role="status"
        >
          Message sent successfully.
        </p>
      )}

      {status === 'error' && (
        <p
          className="text-sm text-red-600"
          role="alert"
        >
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  </div>
</motion.div> 

        </div>
      </div>
    </section>
  )
}
