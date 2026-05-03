'use client'
import { useMemo, useState } from 'react'
import {
  filterOportunidades,
  type Categoria,
  type Nivel,
  type Oportunidad,
  type Ubicacion,
} from '@/lib/data/oportunidades'
import { FilterRail } from './FilterRail'
import { OportunidadCard } from './OportunidadCard'
import { FeaturedOportunidad } from './FeaturedOportunidad'
import { EmptyState } from './EmptyState'

interface Props {
  abiertas: Oportunidad[]
  cerradas: Oportunidad[]
  featured?: Oportunidad
}

const CATEGORIAS_ALL: (Categoria | 'todas')[] = [
  'todas',
  'pasantia',
  'beca',
  'concurso',
  'cfp',
  'voluntariado',
  'convocatoria',
]
const UBICACIONES_ALL: Ubicacion[] = ['lima', 'peru', 'remoto', 'internacional']
const NIVELES_ALL: Nivel[] = ['pregrado', 'posgrado', 'abierto']

export function OportunidadesClient({ abiertas, cerradas, featured }: Props) {
  const [categoria, setCategoria] = useState<Categoria | 'todas'>('todas')
  const [ubicaciones, setUbicaciones] = useState<Ubicacion[]>([])
  const [niveles, setNiveles] = useState<Nivel[]>([])
  const [showClosed, setShowClosed] = useState(false)

  const sourceList = useMemo(
    () => (showClosed ? [...abiertas, ...cerradas] : abiertas),
    [abiertas, cerradas, showClosed]
  )

  const filtered = useMemo(
    () =>
      filterOportunidades(sourceList, {
        categoria,
        ubicaciones,
        niveles,
      }),
    [sourceList, categoria, ubicaciones, niveles]
  )

  const filtersActive =
    categoria !== 'todas' || ubicaciones.length > 0 || niveles.length > 0 || showClosed

  const showFeatured = !filtersActive && featured !== undefined
  const gridList = showFeatured && featured
    ? filtered.filter((o) => o.id !== featured.id)
    : filtered

  // Counts respect ubicacion+nivel filters but not categoria (so radio shows
  // counts under current cross-filters).
  const categoryCounts = useMemo(() => {
    const out = {} as Record<Categoria | 'todas', number>
    for (const c of CATEGORIAS_ALL) {
      out[c] = filterOportunidades(sourceList, {
        categoria: c,
        ubicaciones,
        niveles,
      }).length
    }
    return out
  }, [sourceList, ubicaciones, niveles])

  const ubicacionCounts = useMemo(() => {
    const out = {} as Record<Ubicacion, number>
    for (const u of UBICACIONES_ALL) {
      out[u] = sourceList.filter((o) => o.ubicacion === u).length
    }
    return out
  }, [sourceList])

  const nivelCounts = useMemo(() => {
    const out = {} as Record<Nivel, number>
    for (const n of NIVELES_ALL) {
      out[n] = sourceList.filter((o) => o.nivel === n).length
    }
    return out
  }, [sourceList])

  const toggleUbicacion = (u: Ubicacion) =>
    setUbicaciones((curr) =>
      curr.includes(u) ? curr.filter((x) => x !== u) : [...curr, u]
    )
  const toggleNivel = (n: Nivel) =>
    setNiveles((curr) =>
      curr.includes(n) ? curr.filter((x) => x !== n) : [...curr, n]
    )

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
        <FilterRail
          categoria={categoria}
          ubicaciones={ubicaciones}
          niveles={niveles}
          showClosed={showClosed}
          categoryCounts={categoryCounts}
          ubicacionCounts={ubicacionCounts}
          nivelCounts={nivelCounts}
          onCategoriaChange={setCategoria}
          onToggleUbicacion={toggleUbicacion}
          onToggleNivel={toggleNivel}
          onShowClosedChange={setShowClosed}
        />

        <div className="space-y-10 min-w-0">
          {showFeatured && featured && (
            <FeaturedOportunidad oportunidad={featured} />
          )}

          {gridList.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {gridList.map((o) => (
                <OportunidadCard key={o.id} oportunidad={o} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
