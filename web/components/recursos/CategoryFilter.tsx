'use client'
import type { RecursoCategoria } from '@/lib/data/recursos'
import { categoriaInfo } from '@/lib/data/recursos'
import { FilterShell } from '@/components/ui/FilterShell'
import { FilterChip } from '@/components/ui/FilterChip'
import { SearchInput } from '@/components/ui/SearchInput'

export type FilterCategoria = RecursoCategoria | 'todos'

interface CategoryFilterProps {
  categoria: FilterCategoria
  query: string
  soloGratuitos: boolean
  total: number
  showing: number
  onCategoriaChange: (c: FilterCategoria) => void
  onQueryChange: (q: string) => void
  onGratuitosToggle: () => void
}

const categorias: { value: FilterCategoria; label: string }[] = [
  { value: 'todos',        label: 'Todos' },
  { value: 'ieee_access',  label: categoriaInfo.ieee_access.titulo },
  { value: 'software',     label: categoriaInfo.software.titulo },
  { value: 'tutoriales',   label: categoriaInfo.tutoriales.titulo },
  { value: 'materiales',   label: categoriaInfo.materiales.titulo },
  { value: 'plantillas',   label: categoriaInfo.plantillas.titulo },
]

export function CategoryFilter({
  categoria, query, soloGratuitos, total, showing,
  onCategoriaChange, onQueryChange, onGratuitosToggle,
}: CategoryFilterProps) {
  return (
    <FilterShell>
      <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0 lg:flex-1">
        {categorias.map((c) => (
          <FilterChip
            key={c.value}
            active={categoria === c.value}
            onClick={() => onCategoriaChange(c.value)}
          >
            {c.label}
          </FilterChip>
        ))}
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-semibold text-gray-600 select-none">
          <input
            type="checkbox"
            checked={soloGratuitos}
            onChange={onGratuitosToggle}
            className="w-3.5 h-3.5 accent-primary-400 cursor-pointer"
          />
          Solo gratuitos
        </label>

        <SearchInput
          value={query}
          onChange={onQueryChange}
          placeholder="Buscar..."
          width="w-48"
        />

        <span className="hidden sm:inline text-xs text-gray-500 tabular-nums">
          {showing}/{total}
        </span>
      </div>
    </FilterShell>
  )
}
