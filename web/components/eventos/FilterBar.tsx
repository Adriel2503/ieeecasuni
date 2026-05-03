'use client'
import type { EventoTipo } from '@/lib/data/eventos'
import { FilterShell } from '@/components/ui/FilterShell'
import { FilterChip } from '@/components/ui/FilterChip'
import { SearchInput } from '@/components/ui/SearchInput'

export type FilterTipo = EventoTipo | 'todos'
export type FilterTab = 'proximos' | 'pasados'

interface FilterBarProps {
  tipo: FilterTipo
  query: string
  tab: FilterTab
  onTipoChange: (t: FilterTipo) => void
  onQueryChange: (q: string) => void
  onTabChange: (t: FilterTab) => void
}

const tipos: { value: FilterTipo; label: string }[] = [
  { value: 'todos',       label: 'Todos' },
  { value: 'workshop',    label: 'Workshops' },
  { value: 'webinar',     label: 'Webinars' },
  { value: 'competencia', label: 'Competencias' },
  { value: 'conferencia', label: 'Conferencias' },
]

export function FilterBar({
  tipo, query, tab,
  onTipoChange, onQueryChange, onTabChange,
}: FilterBarProps) {
  return (
    <FilterShell>
      {/* Segmented: Próximos | Pasados */}
      <div className="inline-flex shrink-0 p-1 bg-gray-100 rounded-md self-start">
        {(['proximos', 'pasados'] as FilterTab[]).map((t) => (
          <button
            key={t}
            onClick={() => onTabChange(t)}
            className={`
              px-4 py-1.5 text-xs font-semibold rounded transition-all
              ${tab === t
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'}
            `}
          >
            {t === 'proximos' ? 'Próximos' : 'Pasados'}
          </button>
        ))}
      </div>

      {/* Type chips */}
      <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0 lg:flex-1 scrollbar-thin">
        {tipos.map((t) => (
          <FilterChip
            key={t.value}
            active={tipo === t.value}
            onClick={() => onTipoChange(t.value)}
          >
            {t.label}
          </FilterChip>
        ))}
      </div>

      <SearchInput
        value={query}
        onChange={onQueryChange}
        placeholder="Buscar eventos..."
        width="w-full lg:w-64"
      />
    </FilterShell>
  )
}
