import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function PageProgress() {
  const [progress, setProgress] = useState(0)
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const p = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(p)
      scaleX.set(p)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [scaleX])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left bg-ink"
        style={{ scaleX }}
        aria-hidden
      />
      <span className="sr-only">Page scroll progress: {Math.round(progress * 100)}%</span>
    </>
  )
}
