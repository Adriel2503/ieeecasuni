import type { Especialidad } from '@/lib/data/equipo'
import { colors } from '@/lib/tokens'

const especialidadColor: Record<Especialidad, string> = {
  hardware: colors.primary[400],
  software: colors.quaternary[300],
  ml:       colors.secondary[400],
  embedded: colors.tertiary[300],
  rf:       colors.purple[500],
}

const especialidadLabel: Record<Especialidad, string> = {
  hardware: 'HW',
  software: 'SW',
  ml:       'ML',
  embedded: 'EMB',
  rf:       'RF',
}

type AvatarSize = 'sm' | 'md' | 'lg'

const sizeMap: Record<AvatarSize, { wrapper: string; avatar: string; text: string; badge: string }> = {
  sm: { wrapper: 'w-14 h-14', avatar: 'w-12 h-12', text: 'text-sm',     badge: 'text-[8px] px-1 py-0' },
  md: { wrapper: 'w-20 h-20', avatar: 'w-[72px] h-[72px]', text: 'text-base',   badge: 'text-[9px] px-1 py-0.5' },
  lg: { wrapper: 'w-28 h-28', avatar: 'w-24 h-24', text: 'text-2xl', badge: 'text-[10px] px-1.5 py-0.5' },
}

interface AvatarRingProps {
  iniciales: string
  especialidad: Especialidad
  size?: AvatarSize
}

export function AvatarRing({ iniciales, especialidad, size = 'md' }: AvatarRingProps) {
  const color = especialidadColor[especialidad]
  const sz = sizeMap[size]

  return (
    <div className={`relative inline-flex items-center justify-center ${sz.wrapper}`}>
      {/* Outer specialty ring */}
      <div
        className="absolute inset-0 rounded-full transition-all duration-300 group-hover:scale-110"
        style={{
          background: `conic-gradient(from 0deg, ${color}, ${color}40, ${color})`,
        }}
      />
      {/* Inner padding */}
      <div className="absolute inset-[3px] rounded-full bg-white" />

      {/* Avatar core */}
      <div
        className={`
          relative ${sz.avatar} rounded-full flex items-center justify-center
          font-bold text-white tracking-wide ${sz.text}
          transition-transform duration-300 group-hover:scale-105
        `}
        style={{ backgroundColor: colors.primary[400] }}
      >
        {iniciales}
      </div>

      {/* Specialty badge */}
      <span
        className={`
          absolute -bottom-1 -right-1 rounded-sm font-bold tracking-widest
          text-white shadow-sm ${sz.badge}
        `}
        style={{ backgroundColor: color }}
      >
        {especialidadLabel[especialidad]}
      </span>
    </div>
  )
}
