import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface AnimatedTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  stagger?: number
}

export function AnimatedText({
  text,
  className = '',
  as: Tag = 'span',
  stagger = 0.03,
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const chars = text.split('')
    el.innerHTML = chars
      .map((c) => `<span class="char inline-block">${c === ' ' ? '&nbsp;' : c}</span>`)
      .join('')

    gsap.fromTo(
      el.querySelectorAll('.char'),
      { y: 80, opacity: 0, rotateX: -40 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.9,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      },
    )
  }, [text, stagger])

  return <Tag ref={ref as never} className={className} aria-label={text} />
}
