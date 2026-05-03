import type { Comite } from '@/lib/data/equipo'
import { getMiembrosPorComite } from '@/lib/data/equipo'
import { ComiteSection } from './ComiteSection'

const order: Comite[] = ['tecnico', 'eventos', 'comunicaciones', 'academico']

export function ComitesGrid() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-primary-400 uppercase tracking-widest block mb-3">
            Comités
          </span>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Áreas de trabajo
          </h2>
          <p className="mt-3 text-base text-gray-500 max-w-md mx-auto">
            Cada comité coordina un aspecto distinto del capítulo
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 px-6 lg:px-10">
          {order.map((comite) => (
            <ComiteSection
              key={comite}
              comite={comite}
              miembros={getMiembrosPorComite(comite)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
