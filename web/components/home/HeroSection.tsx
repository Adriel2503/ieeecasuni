import { buttonStyles } from '@/components/ui/Button'
import { colors } from '@/lib/tokens'

function CircuitBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.055 }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="circuit-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke={colors.primary[400]} strokeWidth="0.6" />
          <circle cx="0" cy="0" r="2" fill={colors.primary[400]} />
          <circle cx="60" cy="0" r="2" fill={colors.primary[400]} />
          <circle cx="0" cy="60" r="2" fill={colors.primary[400]} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-grid)" />
    </svg>
  )
}

function ChipIllustration() {
  const leftPins  = [155, 175, 195, 215, 235]
  const rightPins = [155, 175, 195, 215, 235]
  const topPins   = [155, 175, 195, 215, 235]
  const botPins   = [155, 175, 195, 215, 235]
  const green = colors.primary[400]
  const greenDark = colors.primary[600]
  const greenMid = colors.primary[300]
  const greenLight = colors.primary[100]
  const orange = colors.secondary[400]

  return (
    <svg
      viewBox="0 0 380 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md drop-shadow-sm"
      aria-hidden="true"
    >
      {/* IC body */}
      <rect x="120" y="120" width="140" height="140" rx="4" fill={colors.primaryTint} stroke={green} strokeWidth="2" />
      <rect x="134" y="134" width="112" height="112" rx="2" fill={greenLight} />
      {/* Pin 1 marker */}
      <rect x="120" y="120" width="10" height="10" fill={green} rx="1" />
      {/* Chip label */}
      <text x="190" y="186" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill={greenDark}>IEEE CAS</text>
      <text x="190" y="202" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={greenMid}>UNI-2026</text>

      {/* Left pins */}
      {leftPins.map((y, i) => (
        <g key={`l${i}`}>
          <line x1="52" y1={y} x2="120" y2={y} stroke={green} strokeWidth="1.5" />
          <circle cx="52" cy={y} r={i % 2 === 0 ? 4 : 3} fill={i % 2 === 0 ? green : greenLight} stroke={green} strokeWidth="1" />
        </g>
      ))}
      {/* Right pins */}
      {rightPins.map((y, i) => (
        <g key={`r${i}`}>
          <line x1="260" y1={y} x2="328" y2={y} stroke={green} strokeWidth="1.5" />
          <circle cx="328" cy={y} r={i % 2 !== 0 ? 4 : 3} fill={i % 2 !== 0 ? green : greenLight} stroke={green} strokeWidth="1" />
        </g>
      ))}
      {/* Top pins */}
      {topPins.map((x, i) => (
        <g key={`t${i}`}>
          <line x1={x} y1="52" x2={x} y2="120" stroke={green} strokeWidth="1.5" />
          <circle cx={x} cy="52" r={i === 2 ? 4 : 3} fill={i === 2 ? greenMid : greenLight} stroke={green} strokeWidth="1" />
        </g>
      ))}
      {/* Bottom pins */}
      {botPins.map((x, i) => (
        <g key={`b${i}`}>
          <line x1={x} y1="260" x2={x} y2="328" stroke={green} strokeWidth="1.5" />
          <circle cx={x} cy="328" r={i % 2 === 0 ? 4 : 3} fill={i % 2 === 0 ? green : greenLight} stroke={green} strokeWidth="1" />
        </g>
      ))}

      {/* Passive components on traces */}
      <rect x="74"  y="150" width="18" height="10" rx="2" fill={colors.gray[100]} stroke={colors.gray[300]} strokeWidth="1" />
      <rect x="74"  y="210" width="18" height="10" rx="2" fill={colors.secondary[100]} stroke={orange} strokeWidth="1" />
      <rect x="288" y="170" width="18" height="10" rx="2" fill={colors.gray[100]} stroke={colors.gray[300]} strokeWidth="1" />
      <rect x="188" y="270" width="10" height="18" rx="2" fill={greenLight} stroke={green} strokeWidth="1" />
      <rect x="208" y="62"  width="10" height="18" rx="2" fill={greenLight} stroke={greenMid} strokeWidth="1" />

      {/* Orange signal trace (dashed) */}
      <path
        d="M 52 215 Q 30 215 30 280 T 52 320"
        stroke={orange} strokeWidth="1.5" strokeDasharray="4 3"
      />

      {/* Subtle outer grid lines */}
      <line x1="20" y1="20" x2="360" y2="20" stroke={greenLight} strokeWidth="0.5" />
      <line x1="20" y1="360" x2="360" y2="360" stroke={greenLight} strokeWidth="0.5" />
      <line x1="20" y1="20" x2="20" y2="360" stroke={greenLight} strokeWidth="0.5" />
      <line x1="360" y1="20" x2="360" y2="360" stroke={greenLight} strokeWidth="0.5" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 min-h-[88vh] flex items-center">
      <CircuitBg />

      {/* Green left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-400" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ── Left: Copy ── */}
        <div>
          {/* IEEE badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1.5 bg-primary-100 rounded-sm mb-8">
            <span
              className="w-2 h-2 rounded-full bg-primary-400"
              style={{ animation: 'pulseGreen 2s ease-in-out infinite' }}
            />
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-widest">
              IEEE · Circuits and Systems Society
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 text-[3.5rem] lg:text-[4.25rem] font-bold leading-[1.05] tracking-tight text-gray-900 mb-6">
            Circuitos.<br />
            <span className="text-primary-400">Sistemas.</span><br />
            Futuro.
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in-up delay-200 text-lg text-gray-600 max-w-md leading-relaxed mb-8">
            Sección Estudiantil de la{' '}
            <strong className="text-gray-900">IEEE Circuits and Systems Society</strong>{' '}
            en la Universidad Nacional de Ingeniería. Lima, Perú.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4 mb-8">
            <a href="/contacto" className={buttonStyles({ variant: 'primary', size: 'lg' })}>
              Únete al capítulo →
            </a>
            <a href="/eventos" className={buttonStyles({ variant: 'secondary', size: 'lg' })}>
              Ver eventos
            </a>
          </div>

          {/* Credibility */}
          <p className="animate-fade-in delay-500 text-sm text-gray-400">
            Afiliado a{' '}
            <span className="font-semibold text-gray-600">IEEE Region 9</span>
            {' '}·{' '}
            Universidad Nacional de Ingeniería, Lima
          </p>
        </div>

        {/* ── Right: Chip illustration ── */}
        <div className="animate-fade-in delay-400 hidden lg:flex justify-end items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
          <ChipIllustration />
        </div>
      </div>

      {/* Diagonal separator into dark stats bar */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-14 pointer-events-none">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full" aria-hidden="true">
          <path d="M0,56 L1440,8 L1440,56 Z" fill={colors.gray[900]} />
        </svg>
      </div>
    </section>
  )
}
