import type { ReactNode } from 'react'
import { colors } from '@/lib/tokens'

export interface StatItem {
  value: string | number
  label: string
  accentColor?: string
}

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
  variant?: 'light' | 'dark'
  pattern?: 'grid' | 'pcb' | 'none'
  accentBar?: boolean
  stats?: StatItem[]
  statsLayout?: 'inline' | 'cards'
  children?: ReactNode
}

function GridPattern({ id }: { id: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.05 }}
      aria-hidden="true"
    >
      <defs>
        <pattern id={id} width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke={colors.primary[400]} strokeWidth="0.5" />
          <circle cx="0" cy="0" r="1.5" fill={colors.primary[400]} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

function PcbPattern({ id }: { id: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.08 }}
      aria-hidden="true"
    >
      <defs>
        <pattern id={id} width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke={colors.primary[400]} strokeWidth="0.5" />
          <circle cx="0" cy="0" r="2" fill={colors.primary[400]} />
          <path d="M 0 40 L 30 40 Q 40 40 40 30 L 40 0" fill="none" stroke={colors.primary[400]} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

function StatItemView({ stat, isDark }: { stat: StatItem; isDark: boolean }) {
  const defaultColor = isDark ? 'text-white' : 'text-gray-700'
  return (
    <>
      <p
        className={`text-3xl font-bold tabular-nums ${stat.accentColor ? '' : defaultColor}`}
        style={stat.accentColor ? { color: stat.accentColor } : undefined}
      >
        {stat.value}
      </p>
      <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mt-1">
        {stat.label}
      </p>
    </>
  )
}

function StatsInline({ stats, isDark }: { stats: StatItem[]; isDark: boolean }) {
  const dividerClass = isDark
    ? 'border-l border-gray-700 pl-6'
    : 'border-l border-gray-300 pl-6 lg:pl-8'
  return (
    <div className="flex gap-6 lg:gap-8">
      {stats.map((s, i) => (
        <div key={i} className={i > 0 ? dividerClass : ''}>
          <StatItemView stat={s} isDark={isDark} />
        </div>
      ))}
    </div>
  )
}

function StatsCards({ stats, isDark }: { stats: StatItem[]; isDark: boolean }) {
  return (
    <div className="grid grid-cols-3 gap-4 lg:w-[40%]">
      {stats.map((s, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-md p-4 text-center">
          <StatItemView stat={s} isDark={isDark} />
        </div>
      ))}
    </div>
  )
}

export function PageHeader({
  eyebrow,
  title,
  description,
  variant = 'light',
  pattern = 'grid',
  accentBar,
  stats,
  statsLayout = 'inline',
  children,
}: PageHeaderProps) {
  const isDark = variant === 'dark'
  const showAccentBar = accentBar !== false && !isDark

  const sectionClass = isDark
    ? 'relative overflow-hidden bg-gray-900 text-white border-b-2 border-primary-400'
    : 'relative overflow-hidden bg-gray-50 border-b border-gray-200'

  const eyebrowClass = isDark
    ? 'text-xs font-semibold text-quaternary-300 uppercase tracking-widest block mb-3'
    : 'text-xs font-semibold text-primary-400 uppercase tracking-widest block mb-3'

  const titleClass = isDark
    ? 'text-5xl lg:text-6xl font-bold leading-none tracking-tight'
    : 'text-5xl lg:text-6xl font-bold text-gray-900 leading-none tracking-tight'

  const descClass = isDark
    ? 'mt-5 text-base text-gray-400 max-w-xl leading-relaxed'
    : 'mt-5 text-base text-gray-600 max-w-xl leading-relaxed'

  const patternId = `ph-${eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <section className={sectionClass}>
      {pattern === 'grid' && <GridPattern id={patternId} />}
      {pattern === 'pcb' && <PcbPattern id={patternId} />}

      {showAccentBar && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-400" />
      )}

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className={`flex ${statsLayout === 'cards' ? 'flex-col lg:flex-row' : 'flex-wrap'} items-end justify-between gap-8`}>
          <div className={statsLayout === 'cards' ? 'lg:flex-1' : ''}>
            <span className={eyebrowClass}>{eyebrow}</span>
            <h1 className={titleClass}>{title}</h1>
            {description && <p className={descClass}>{description}</p>}
            {children}
          </div>

          {stats && stats.length > 0 && (statsLayout === 'inline'
            ? <StatsInline stats={stats} isDark={isDark} />
            : <StatsCards stats={stats} isDark={isDark} />
          )}
        </div>
      </div>
    </section>
  )
}
