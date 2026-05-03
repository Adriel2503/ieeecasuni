import type { Evento } from '@/lib/data/eventos'
import { EventCard } from './EventCard'

interface EventGridProps {
  eventos: Evento[]
  emptyMessage?: string
}

export function EventGrid({ eventos, emptyMessage }: EventGridProps) {
  if (eventos.length === 0) {
    return (
      <div className="text-center py-16 px-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
          <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <p className="text-base font-semibold text-gray-700 mb-1">
          {emptyMessage ?? 'No hay eventos que coincidan'}
        </p>
        <p className="text-sm text-gray-500">
          Prueba con otro filtro o limpia la búsqueda
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {eventos.map((evento) => (
        <EventCard key={evento.id} evento={evento} />
      ))}
    </div>
  )
}
