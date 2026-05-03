import { Badge } from '@/components/ui/Badge'
import { buttonStyles } from '@/components/ui/Button'
import type { Evento, EventoTipo } from '@/lib/data/eventos'
import { colors } from '@/lib/tokens'

const badgeLabels: Record<EventoTipo, string> = {
  workshop:    'Workshop',
  webinar:     'Webinar',
  competencia: 'Competencia',
  conferencia: 'Conferencia',
}

const meses = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]

export function FeaturedEvent({ evento }: { evento: Evento }) {
  const d = new Date(evento.fecha)
  const fechaStr = `${d.getDate()} de ${meses[d.getMonth()]}, ${d.getFullYear()}`
  const horaStr = d.toLocaleTimeString('es-PE', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return (
    <article
      className="relative overflow-hidden rounded-lg border-t-[3px] border-t-primary-400 border border-gray-200 bg-white p-8 lg:p-10"
      style={{
        boxShadow: '0 4px 16px rgba(0, 135, 82, 0.08), 0 1px 3px rgba(0,0,0,0.05)',
      }}
    >
      {/* Decorative grid in background */}
      <svg
        className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
        style={{ opacity: 0.06 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="featured-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={colors.primary[400]} strokeWidth="0.6" />
            <circle cx="0" cy="0" r="1.5" fill={colors.primary[400]} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#featured-grid)" />
      </svg>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-widest text-primary-400 uppercase">
              ★ Evento destacado
            </span>
            <span className="text-gray-300">·</span>
            <Badge variant={evento.tipo} label={badgeLabels[evento.tipo]} />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 max-w-2xl">
            {evento.titulo}
          </h2>

          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mb-6">
            {evento.descripcion}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl text-sm">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                Fecha
              </p>
              <p className="font-semibold text-gray-900">{fechaStr}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                Hora
              </p>
              <p className="font-semibold text-gray-900 font-mono">{horaStr} h</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                Lugar
              </p>
              <p className="font-semibold text-gray-900 truncate">{evento.lugar}</p>
            </div>
          </div>
        </div>

        {/* CTA panel */}
        <div className="lg:border-l lg:border-gray-100 lg:pl-8">
          {evento.cupos !== undefined && evento.cupos_disponibles !== undefined && (
            <div className="mb-5">
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                Cupos
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-primary-400">
                  {evento.cupos_disponibles}
                </span>
                <span className="text-sm text-gray-500">/ {evento.cupos} disponibles</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-400 transition-all duration-500"
                  style={{
                    width: `${(evento.cupos_disponibles / evento.cupos) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}

          <a
            href={evento.link_registro || '#'}
            className={`${buttonStyles({ size: 'lg' })} w-full`}
          >
            Registrarme al evento →
          </a>
          <p className="text-xs text-gray-400 text-center mt-3">
            Registro gratuito · IEEE CAS UNI
          </p>
        </div>
      </div>
    </article>
  )
}
