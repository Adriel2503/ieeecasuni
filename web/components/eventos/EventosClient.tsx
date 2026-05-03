'use client'
import { useMemo, useState } from 'react'
import { filterEventos, type Evento } from '@/lib/data/eventos'
import { FilterBar, type FilterTab, type FilterTipo } from './FilterBar'
import { EventGrid } from './EventGrid'
import { FeaturedEvent } from './FeaturedEvent'

interface EventosClientProps {
  proximos: Evento[]
  pasados: Evento[]
  featured?: Evento
}

export function EventosClient({ proximos, pasados, featured }: EventosClientProps) {
  const [tipo, setTipo] = useState<FilterTipo>('todos')
  const [query, setQuery] = useState('')
  const [tab, setTab] = useState<FilterTab>('proximos')

  const sourceList = tab === 'proximos' ? proximos : pasados
  const filtersActive = tipo !== 'todos' || query.trim() !== ''

  const filtered = useMemo(
    () => filterEventos(sourceList, tipo, query),
    [sourceList, tipo, query]
  )

  // Hide featured when filters narrow the set
  const showFeatured =
    tab === 'proximos' &&
    !filtersActive &&
    featured !== undefined

  // Exclude featured from grid when shown on top
  const gridList = showFeatured && featured
    ? filtered.filter((e) => e.id !== featured.id)
    : filtered

  return (
    <>
      <FilterBar
        tipo={tipo} query={query} tab={tab}
        onTipoChange={setTipo}
        onQueryChange={setQuery}
        onTabChange={(t) => {
          setTab(t)
          // reset filters when switching tabs to avoid empty state confusion
          setTipo('todos')
          setQuery('')
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {showFeatured && featured && <FeaturedEvent evento={featured} />}

        <EventGrid
          eventos={gridList}
          emptyMessage={
            tab === 'pasados'
              ? 'No hay eventos pasados que coincidan'
              : 'No hay próximos eventos que coincidan'
          }
        />
      </div>
    </>
  )
}
