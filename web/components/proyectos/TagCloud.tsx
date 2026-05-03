'use client'
import { FilterShell } from '@/components/ui/FilterShell'
import { FilterChip } from '@/components/ui/FilterChip'

interface TagCloudProps {
  tags: string[]
  active: string[]
  onToggle: (tag: string) => void
  onClear: () => void
  total: number
  showing: number
}

export function TagCloud({ tags, active, onToggle, onClear, total, showing }: TagCloudProps) {
  const hasActive = active.length > 0

  return (
    <FilterShell>
      <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase shrink-0">
        Filtrar por tag
      </span>

      <div className="flex flex-wrap gap-2 flex-1">
        {tags.map((tag) => (
          <FilterChip
            key={tag}
            active={active.includes(tag)}
            onClick={() => onToggle(tag)}
            removable
          >
            {tag}
          </FilterChip>
        ))}
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <span className="text-xs text-gray-500 tabular-nums">
          {showing} de {total}
        </span>
        {hasActive && (
          <button
            onClick={onClear}
            className="text-xs font-semibold text-secondary-400 hover:underline"
          >
            Limpiar
          </button>
        )}
      </div>
    </FilterShell>
  )
}
