import type { Recurso, RecursoCategoria } from '@/lib/data/recursos'
import { categoriaInfo } from '@/lib/data/recursos'
import { ResourceCard } from './ResourceCard'

interface CategorySectionProps {
  categoria: RecursoCategoria
  recursos: Recurso[]
}

export function CategorySection({ categoria, recursos }: CategorySectionProps) {
  if (recursos.length === 0) return null

  const info = categoriaInfo[categoria]

  return (
    <section className="py-10 border-t border-gray-200 first:border-t-0 first:pt-0">
      <header className="flex items-end justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-primary-100 text-primary-600 text-lg font-bold"
            aria-hidden="true"
          >
            {info.icono}
          </span>
          <div>
            <h2 className="text-xl font-bold text-gray-900 leading-tight">
              {info.titulo}
            </h2>
            <p className="text-xs text-gray-500 mt-0.5 max-w-md">
              {info.descripcion}
            </p>
          </div>
        </div>
        <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase tabular-nums">
          {recursos.length} {recursos.length === 1 ? 'recurso' : 'recursos'}
        </span>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {recursos.map((r) => (
          <ResourceCard key={r.id} recurso={r} />
        ))}
      </div>
    </section>
  )
}
