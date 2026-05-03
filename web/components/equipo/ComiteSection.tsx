import type { Miembro, Comite } from '@/lib/data/equipo'
import { comiteInfo } from '@/lib/data/equipo'
import { MemberCard } from './MemberCard'

interface ComiteSectionProps {
  comite: Comite
  miembros: Miembro[]
}

export function ComiteSection({ comite, miembros }: ComiteSectionProps) {
  if (miembros.length === 0) return null

  const info = comiteInfo[comite]

  return (
    <section className="py-10 border-t border-gray-200">
      <header className="flex items-end justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <span
            className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-primary-100 text-xl"
            aria-hidden="true"
          >
            {info.icono}
          </span>
          <div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">
              {info.titulo}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">{info.descripcion}</p>
          </div>
        </div>
        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase tabular-nums">
          {miembros.length} {miembros.length === 1 ? 'miembro' : 'miembros'}
        </span>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {miembros.map((m) => (
          <MemberCard key={m.id} miembro={m} variant="comite" />
        ))}
      </div>
    </section>
  )
}
