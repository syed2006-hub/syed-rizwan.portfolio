import { useMagnetic } from '../../hooks/useMagnetic'

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  as?: 'button' | 'a'
  href?: string
  children: React.ReactNode
}

export function MagneticButton({
  variant = 'primary',
  as = 'button',
  href,
  children,
  className = '',
  ...props
}: MagneticButtonProps) {
  const { ref, onMove, onLeave } = useMagnetic(0.3)

  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-[box-shadow,background] duration-300 will-change-transform'
  const variants = {
    primary: 'bg-ink text-cream shadow-lg shadow-ink/10 hover:shadow-xl hover:shadow-ink/15',
    outline: 'border border-ink/15 bg-transparent text-ink hover:bg-ink/5',
    ghost: 'bg-transparent text-ink hover:bg-ink/5',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (as === 'a' && href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={classes}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      className={classes}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    >
      {children}
    </button>
  )
}
