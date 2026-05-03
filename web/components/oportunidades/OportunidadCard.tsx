import type { Oportunidad } from '@/lib/data/oportunidades'
import { getDiasRestantes, UBICACION_LABEL } from '@/lib/data/oportunidades'
import { isSafeHttpUrl } from '@/lib/utils/url'
import { DeadlineChip } from './DeadlineChip'
import { CategoryBadge } from './CategoryBadge'

function PinIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

interface Props {
  oportunidad: Oportunidad
}

export function OportunidadCard({ oportunidad }: Props) {
  const expired = getDiasRestantes(oportunidad.fecha_limite) < 0
  return (
    <article
      className={`group relative flex flex-col h-full bg-white border border-gray-200 rounded-[6px] p-5 transition-shadow hover:shadow-md ${expired ? 'opacity-70' : ''}`}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <DeadlineChip fechaLimite={oportunidad.fecha_limite} />
        <CategoryBadge categoria={oportunidad.categoria} />
      </div>

      <h3 className="text-base font-bold text-gray-900 leading-snug mb-1">
        {oportunidad.titulo}
      </h3>
      <p className="text-xs text-gray-500 mb-3">{oportunidad.organizacion}</p>
      <p className="text-sm text-gray-700 leading-relaxed flex-1">
        {oportunidad.descripcion_corta}
      </p>

      <div className="mt-4 flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
        <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
          <PinIcon />
          {UBICACION_LABEL[oportunidad.ubicacion]}
        </span>
        {isSafeHttpUrl(oportunidad.url_aplicacion) ? (
          <a
            href={oportunidad.url_aplicacion}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary-400 hover:text-primary-500"
          >
            Apply →
          </a>
        ) : (
          <span
            className="text-sm font-semibold text-gray-400 cursor-not-allowed"
            title="Link no disponible"
          >
            Sin link
          </span>
        )}
      </div>
    </article>
  )
}
