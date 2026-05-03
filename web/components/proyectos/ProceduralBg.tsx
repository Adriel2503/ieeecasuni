import { colors } from '@/lib/tokens'

interface ProceduralBgProps {
  variant?: 0 | 1 | 2 | 3
  color?: string
  // Required: stable unique id for SVG pattern defs (avoid collisions when
  // two cards share the same color).
  uid: string
}

/** Variant 0 — Circuit grid with nodes */
function GridPattern({ color, uid }: { color: string; uid: string }) {
  const id = `grid-${uid}`
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id={id} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke={color} strokeWidth="0.6" />
          <circle cx="0" cy="0" r="1.4" fill={color} />
          <circle cx="32" cy="0" r="1.4" fill={color} />
          <circle cx="0" cy="32" r="1.4" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      {/* Highlighted traces */}
      <path d="M 30 30 L 90 30 L 90 90 L 150 90" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M 200 50 L 200 120 L 270 120" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
      <circle cx="90"  cy="30" r="3.5" fill={color} />
      <circle cx="150" cy="90" r="3.5" fill={color} />
      <circle cx="200" cy="120" r="3.5" fill={color} />
    </svg>
  )
}

/** Variant 1 — Signal waves */
function WavePattern({ color }: { color: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
      <path d="M 0 150 Q 50 80, 100 150 T 200 150 T 300 150 T 400 150"
            stroke={color} strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M 0 180 Q 60 120, 120 180 T 240 180 T 360 180 T 480 180"
            stroke={color} strokeWidth="1" fill="none" opacity="0.35" />
      <path d="M 0 120 Q 40 60, 80 120 T 160 120 T 240 120 T 320 120 T 400 120"
            stroke={color} strokeWidth="1" fill="none" opacity="0.3" />
      {/* Sample points */}
      {[50, 100, 150, 200, 250, 300, 350].map((x) => (
        <circle key={x} cx={x} cy={150} r="2" fill={color} opacity="0.7" />
      ))}
    </svg>
  )
}

/** Variant 2 — Hexagonal pattern */
function HexPattern({ color, uid }: { color: string; uid: string }) {
  const id = `hex-${uid}`
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id={id} width="48" height="42" patternUnits="userSpaceOnUse">
          <path
            d="M 24 0 L 48 12 L 48 30 L 24 42 L 0 30 L 0 12 Z"
            fill="none" stroke={color} strokeWidth="0.8"
          />
          <circle cx="24" cy="21" r="1.5" fill={color} opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      {/* Some filled hexes */}
      <path d="M 96 42 L 120 54 L 120 72 L 96 84 L 72 72 L 72 54 Z" fill={color} opacity="0.15" />
      <path d="M 168 84 L 192 96 L 192 114 L 168 126 L 144 114 L 144 96 Z" fill={color} opacity="0.2" />
    </svg>
  )
}

/** Variant 3 — PCB traces with pads */
function PcbPattern({ color }: { color: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {/* Curved traces */}
      <path d="M 40 60 Q 100 60 100 120 T 200 180 L 300 180" stroke={color} strokeWidth="2.5" fill="none" opacity="0.55" />
      <path d="M 50 100 L 150 100 Q 180 100 180 130 L 180 220" stroke={color} strokeWidth="2.5" fill="none" opacity="0.55" />
      <path d="M 250 40 L 250 80 Q 250 100 270 100 L 360 100" stroke={color} strokeWidth="2.5" fill="none" opacity="0.55" />
      <path d="M 80 240 L 200 240 Q 220 240 220 260 L 220 290" stroke={color} strokeWidth="2.5" fill="none" opacity="0.55" />

      {/* Vias / pads */}
      {[
        [40, 60], [100, 120], [200, 180], [300, 180],
        [50, 100], [180, 130], [180, 220],
        [250, 40], [270, 100], [360, 100],
        [80, 240], [220, 260],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4.5" fill={color} opacity="0.85" />
          <circle cx={x} cy={y} r="2"  fill="white" opacity="0.7" />
        </g>
      ))}
    </svg>
  )
}

export function ProceduralBg({ variant = 0, color = colors.primary[400], uid }: ProceduralBgProps) {
  // Light tint background
  const tintBg = `${color}10` // hex + alpha (10/255 ~ 6%)

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: tintBg }}>
      {/* Gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}15 0%, transparent 60%)`,
        }}
      />
      <div style={{ opacity: 0.4 }}>
        {variant === 0 && <GridPattern color={color} uid={uid} />}
        {variant === 1 && <WavePattern color={color} />}
        {variant === 2 && <HexPattern  color={color} uid={uid} />}
        {variant === 3 && <PcbPattern  color={color} />}
      </div>
    </div>
  )
}
