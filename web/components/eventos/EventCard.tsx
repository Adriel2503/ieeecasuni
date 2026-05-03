import { EventoBadge } from './EventoBadge'
import { buttonStyles } from '@/components/ui/Button'
import { DateBlock } from './DateBlock'
import type { Evento, EventoTipo } from '@/lib/data/eventos'

const badgeLabels: Record<EventoTipo, string> = {
  workshop:    'Workshop',
  webinar:     'Webinar',
  competencia: 'Competencia',
  conferencia: 'Conferencia',
}

const modalidadIcon = {
  presencial: '📍',
  online:     '💻',
  hibrido:    '🔀',
}

export function EventCard({ evento }: { evento: Evento }) {
  const past = evento.estado === 'pasado'
  const cupoLleno = evento.estado === 'cupo_lleno' || evento.cupos_disponibles === 0

  const horaStr = new Date(evento.fecha).toLocaleTimeString('es-PE', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return (
    <article
      className={`
        relative bg-white border border-gray-200 rounded-lg p-5
        shadow-[0_1px_3px_rgba(0,0,0,0.06)]
        transition-all duration-200
        ${past
          ? 'opacity-60 hover:opacity-80'
          : 'hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:border-primary-100'}
      `}
    >
      {/* Past ribbon */}
      {past && (
        <span className="absolute top-3 right-3 text-[9px] font-bold tracking-widest text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-sm">
          PASADO
        </span>
      )}

      <div className="flex gap-4">
        <DateBlock date={evento.fecha} past={past} />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <EventoBadge variant={evento.tipo} label={badgeLabels[evento.tipo]} />
            {!past && cupoLleno && (
              <span className="text-[9px] font-bold tracking-widest text-secondary-400 bg-secondary-100 px-1.5 py-0.5 rounded-sm">
                CUPO LLENO
              </span>
            )}
          </div>

          <h3 className="text-base font-bold text-gray-900 leading-snug mb-1.5 line-clamp-2">
            {evento.titulo}
          </h3>

          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">
            {evento.descripcion}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
            <span className="flex items-center gap-1">
              <span aria-hidden>{modalidadIcon[evento.modalidad]}</span>
              <span className="truncate max-w-[140px]">{evento.lugar}</span>
            </span>
            {!past && (
              <span className="font-mono text-[10px] text-gray-400">{horaStr} h</span>
            )}
          </div>

          {!past && (
            <div className="mt-3">
              {cupoLleno ? (
                <button
                  disabled
                  className="w-full py-2 text-xs font-semibold text-gray-400 bg-gray-50 border border-gray-200 rounded-[4px] cursor-not-allowed"
                >
                  Lista de espera
                </button>
              ) : (
                <a
                  href={evento.link_registro || '#'}
                  className={`${buttonStyles({ size: 'sm' })} w-full`}
                >
                  Registrarme →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
