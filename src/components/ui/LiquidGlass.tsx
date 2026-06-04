import {
  useId,
  useState,
  useEffect,
  type ReactNode,
  type AnchorHTMLAttributes,
} from 'react'
import { cn } from '../../lib/utils'

/** Multi-layer inset shadow — liquid depth (from LiquidButton) */
const LIQUID_SHADOW =
  'shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.12),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.08),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.85),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.06),inset_0_0_6px_6px_rgba(255,255,255,0.35),inset_0_0_2px_2px_rgba(0,0,0,0.04),0_0_12px_rgba(255,255,255,0.4)]'

function GlassFilter({ id }: { id: string }) {
  return (
    <svg className="pointer-events-none absolute h-0 w-0" aria-hidden>
      <defs>
        <filter
          id={id}
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04 0.04"
            numOctaves="1"
            seed="2"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="1.5" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="40"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="3" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  )
}

interface LiquidGlassPanelProps {
  children: ReactNode
  className?: string
  /** Project accent — hover aura */
  accent?: string
  rounded?: '2xl' | '3xl'
}

/**
 * Content container with liquid-glass layering:
 * 1) accent aura on hover
 * 2) inset shadow shell
 * 3) SVG displacement backdrop
 * 4) highlight sheen + content
 */
export function LiquidGlassPanel({
  children,
  className,
  accent = '#111111',
  rounded = '3xl',
}: LiquidGlassPanelProps) {
  const uid = useId().replace(/:/g, '')
  const filterId = `container-glass-${uid}`
  const radius = rounded === '3xl' ? 'rounded-3xl' : 'rounded-2xl'

  return (
    <div className={cn('group relative', className)}>
      {/* Accent aura (liquid glow) */}
      <div
        className={cn(
          'pointer-events-none absolute -inset-3 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70',
          radius,
        )}
        style={{
          background: `radial-gradient(circle at 30% 20%, ${accent}40, transparent 65%)`,
        }}
      />

      <div className={cn('relative overflow-hidden', radius)}>
        {/* Layer 1: depth shell */}
        <div
          className={cn(
            'pointer-events-none absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-[1.01]',
            radius,
            LIQUID_SHADOW,
          )}
        />

        {/* Layer 2: displacement + blur */}
        <div
          className={cn(
            'pointer-events-none absolute inset-0 z-[1] overflow-hidden bg-[#FDFCFA]/60',
            radius,
          )}
          style={{
            backdropFilter: `blur(20px) saturate(1.15)`,
            WebkitBackdropFilter: 'blur(20px) saturate(1.15)',
          }}
        />
        {/* SVG displacement — Chromium / Edge; degrades gracefully where unsupported */}
        <div
          className={cn('pointer-events-none absolute inset-0 z-[1] overflow-hidden', radius)}
          style={{ backdropFilter: `url("#${filterId}")` }}
        />

        {/* Layer 3: rim + sheen */}
        <div
          className={cn(
            'pointer-events-none absolute inset-0 z-[2] border border-white/60',
            radius,
          )}
          style={{
            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.04)`,
          }}
        />
        <div
          className={cn(
            'pointer-events-none absolute inset-0 z-[2] bg-gradient-to-br from-white/50 via-white/10 to-transparent opacity-80',
            radius,
          )}
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>

        <GlassFilter id={filterId} />
      </div>
    </div>
  )
}

interface LiquidGlassButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  accent: string
  gradient?: string
  variant?: 'web' | 'download'
  children: ReactNode
}

/** CTA with liquid shell + metal-style press */
export function LiquidGlassButton({
  accent,
  gradient,
  variant = 'web',
  children,
  className,
  ...props
}: LiquidGlassButtonProps) {
  const [pressed, setPressed] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [touch, setTouch] = useState(false)

  useEffect(() => {
    setTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  const uid = useId().replace(/:/g, '')
  const filterId = `btn-glass-${uid}`

  const bg =
    variant === 'download'
      ? `linear-gradient(135deg, ${accent}, ${accent}cc)`
      : `linear-gradient(135deg, #111827, #374151)`

  return (
    <a
      className={cn(
        'group/btn relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-medium text-white outline-none transition-[transform,filter] duration-250',
        className,
      )}
      style={{
        transform: pressed ? 'translateY(2px) scale(0.98)' : hovered && !touch ? 'translateY(0) scale(1.02)' : undefined,
        boxShadow: pressed
          ? `0 2px 8px ${accent}33`
          : hovered && !touch
            ? `0 12px 32px ${accent}44, 0 4px 12px rgba(0,0,0,0.1)`
            : `0 6px 20px ${accent}33`,
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => {
        setPressed(false)
        setHovered(false)
      }}
      onMouseEnter={() => !touch && setHovered(true)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      {...props}
    >
      {/* Liquid inset shell */}
      <span
        className={cn(
          'pointer-events-none absolute inset-0 rounded-full',
          LIQUID_SHADOW,
        )}
      />

      {/* Displacement layer */}
      <span
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        style={{
          backdropFilter: `url("#${filterId}")`,
          WebkitBackdropFilter: 'blur(8px)',
        }}
      />

      {/* Color fill */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full opacity-95"
        style={{ background: bg }}
      />

      {gradient && (
        <span
          className={cn(
            `pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r ${gradient} opacity-0 transition-opacity duration-300 group-hover/btn:opacity-25`,
          )}
        />
      )}

      {/* Top sheen */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20" />

      {pressed && (
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-40" />
      )}

      <span className="relative z-10 flex items-center gap-2">{children}</span>

      <GlassFilter id={filterId} />
    </a>
  )
}
