'use client'
import { useMemo, useState } from 'react'
import {
  filterRecursos,
  getCategorias,
  type Recurso,
  type RecursoCategoria,
} from '@/lib/data/recursos'
import { CategoryFilter, type FilterCategoria } from './CategoryFilter'
import { CategorySection } from './CategorySection'

interface RecursosClientProps {
  recursos: Recurso[]
}

export function RecursosClient({ recursos }: RecursosClientProps) {
  const [categoria, setCategoria] = useState<FilterCategoria>('todos')
  const [query, setQuery] = useState('')
  const [soloGratuitos, setSoloGratuitos] = useState(false)

  const filtered = useMemo(
    () => filterRecursos(recursos, categoria, query, soloGratuitos),
    [recursos, categoria, query, soloGratuitos]
  )

  // Group by categoria for rendering
  const grouped = useMemo(() => {
    const map = new Map<RecursoCategoria, Recurso[]>()
    filtered.forEach((r) => {
      if (!map.has(r.categoria)) map.set(r.categoria, [])
      map.get(r.categoria)!.push(r)
    })
    return map
  }, [filtered])

  const categoriasOrdenadas = getCategorias()
  const hasResults = filtered.length > 0

  return (
    <>
      <CategoryFilter
        categoria={categoria}
        query={query}
        soloGratuitos={soloGratuitos}
        total={recursos.length}
        showing={filtered.length}
        onCategoriaChange={setCategoria}
        onQueryChange={setQuery}
        onGratuitosToggle={() => setSoloGratuitos((v) => !v)}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {hasResults ? (
          categoriasOrdenadas.map((cat) => {
            const items = grouped.get(cat) ?? []
            return (
              <CategorySection key={cat} categoria={cat} recursos={items} />
            )
          })
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <p className="text-base font-semibold text-gray-700 mb-1">
              Ningún recurso coincide
            </p>
            <p className="text-sm text-gray-500">
              Ajusta los filtros o limpia la búsqueda
            </p>
          </div>
        )}
      </div>
    </>
  )
}
