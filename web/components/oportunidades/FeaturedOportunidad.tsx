import type { Oportunidad } from '@/lib/data/oportunidades'
import { UBICACION_LABEL } from '@/lib/data/oportunidades'
import { isSafeHttpUrl } from '@/lib/utils/url'
import { DeadlineChip } from './DeadlineChip'
import { CategoryBadge } from './CategoryBadge'
import { colors } from '@/lib/tokens'
import { buttonStyles } from '@/components/ui/Button'

function DiagonalLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.07 }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="featured-diag"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="14"
            stroke={colors.primary[400]}
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#featured-diag)" />
    </svg>
  )
}

interface Props {
  oportunidad: Oportunidad
}

export function FeaturedOportunidad({ oportunidad }: Props) {
  return (
    <article className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-white border border-gray-200 border-l-4 border-l-primary-400 rounded-[6px]">
      <DiagonalLines />
      <div className="relative p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:items-center">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-4">
            <DeadlineChip fechaLimite={oportunidad.fecha_limite} />
            <CategoryBadge categoria={oportunidad.categoria} />
            <span className="font-mono text-[10px] tracking-widest text-primary-500">
              // FEATURED
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-2">
            {oportunidad.titulo}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {oportunidad.organizacion} · {UBICACION_LABEL[oportunidad.ubicacion]}
          </p>
          <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
            {oportunidad.descripcion_larga ?? oportunidad.descripcion_corta}
          </p>
        </div>
        <div className="shrink-0 flex flex-col gap-3">
          {isSafeHttpUrl(oportunidad.url_aplicacion) ? (
            <a
              href={oportunidad.url_aplicacion}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles({ variant: 'primary', size: 'lg' })}
            >
              Apply →
            </a>
          ) : (
            <span
              className={`${buttonStyles({ variant: 'primary', size: 'lg' })} bg-gray-200 text-gray-500 cursor-not-allowed hover:bg-gray-200`}
              title="Link no disponible"
            >
              Sin link
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
