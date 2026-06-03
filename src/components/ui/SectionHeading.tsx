import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  index: string
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function SectionHeading({
  index,
  title,
  description,
  action,
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-14 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="section-index"
        >
          {index}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.06 }}
          className="font-serif mt-4 text-4xl leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-[3.25rem]"
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-4 max-w-lg text-base leading-relaxed text-muted"
          >
            {description}
          </motion.p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
