import type { TechCategoria } from '@/lib/data/proyectos'
import { colors } from '@/lib/tokens'

const categoriaColor: Record<TechCategoria, string> = {
  hardware: colors.primary[400],
  software: colors.quaternary[300],
  ml:       colors.secondary[400],
  embedded: colors.tertiary[300],
  rf:       colors.purple[500],
}

interface TechChipProps {
  nombre: string
  categoria: TechCategoria
  variant?: 'default' | 'on-dark'
}

export function TechChip({ nombre, categoria, variant = 'default' }: TechChipProps) {
  const onDark = variant === 'on-dark'

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2 py-1 text-[11px] font-semibold rounded-sm
        ${onDark
          ? 'bg-white/10 text-white border border-white/20'
          : 'bg-gray-50 text-gray-700 border border-gray-200'}
      `}
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: categoriaColor[categoria] }}
      />
      {nombre}
    </span>
  )
}
