'use client'
import type { Categoria, Nivel, Ubicacion } from '@/lib/data/oportunidades'

const CATEGORIAS: { value: Categoria | 'todas'; label: string }[] = [
  { value: 'todas', label: 'Todas' },
  { value: 'empleo', label: 'Empleo' },
  { value: 'pasantia', label: 'Pasantías' },
  { value: 'beca', label: 'Becas' },
  { value: 'concurso', label: 'Concursos' },
  { value: 'cfp', label: 'Call for Papers' },
  { value: 'voluntariado', label: 'Voluntariado' },
  { value: 'convocatoria', label: 'Convocatorias' },
]

const UBICACIONES: { value: Ubicacion; label: string }[] = [
  { value: 'lima', label: 'Lima' },
  { value: 'peru', label: 'Perú' },
  { value: 'remoto', label: 'Remoto' },
  { value: 'internacional', label: 'Internacional' },
]

const NIVELES: { value: Nivel; label: string }[] = [
  { value: 'pregrado', label: 'Pregrado' },
  { value: 'posgrado', label: 'Posgrado' },
  { value: 'abierto', label: 'Abierto' },
]

interface Props {
  categoria: Categoria | 'todas'
  ubicaciones: Ubicacion[]
  niveles: Nivel[]
  showClosed: boolean
  categoryCounts: Record<Categoria | 'todas', number>
  ubicacionCounts: Record<Ubicacion, number>
  nivelCounts: Record<Nivel, number>
  onCategoriaChange: (c: Categoria | 'todas') => void
  onToggleUbicacion: (u: Ubicacion) => void
  onToggleNivel: (n: Nivel) => void
  onShowClosedChange: (v: boolean) => void
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-3">
      {children}
    </p>
  )
}

export function FilterRail({
  categoria,
  ubicaciones,
  niveles,
  showClosed,
  categoryCounts,
  ubicacionCounts,
  nivelCounts,
  onCategoriaChange,
  onToggleUbicacion,
  onToggleNivel,
  onShowClosedChange,
}: Props) {
  return (
    <aside className="lg:sticky lg:top-20 lg:self-start space-y-8">
      <div>
        <SectionLabel>// Categoría</SectionLabel>
        <ul className="space-y-2">
          {CATEGORIAS.map((c) => {
            const checked = categoria === c.value
            return (
              <li key={c.value}>
                <label className="flex items-center justify-between gap-2 text-sm cursor-pointer group">
                  <span className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="categoria"
                      checked={checked}
                      onChange={() => onCategoriaChange(c.value)}
                      className="accent-primary-400"
                    />
                    <span
                      className={
                        checked
                          ? 'font-semibold text-gray-900'
                          : 'text-gray-700 group-hover:text-gray-900'
                      }
                    >
                      {c.label}
                    </span>
                  </span>
                  <span className="font-mono text-xs text-gray-400 tabular-nums">
                    ({categoryCounts[c.value] ?? 0})
                  </span>
                </label>
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <SectionLabel>// Ubicación</SectionLabel>
        <ul className="space-y-2">
          {UBICACIONES.map((u) => (
            <li key={u.value}>
              <label className="flex items-center justify-between gap-2 text-sm cursor-pointer">
                <span className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={ubicaciones.includes(u.value)}
                    onChange={() => onToggleUbicacion(u.value)}
                    className="accent-primary-400"
                  />
                  <span className="text-gray-700">{u.label}</span>
                </span>
                <span className="font-mono text-xs text-gray-400 tabular-nums">
                  ({ubicacionCounts[u.value] ?? 0})
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SectionLabel>// Nivel</SectionLabel>
        <ul className="space-y-2">
          {NIVELES.map((n) => (
            <li key={n.value}>
              <label className="flex items-center justify-between gap-2 text-sm cursor-pointer">
                <span className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={niveles.includes(n.value)}
                    onChange={() => onToggleNivel(n.value)}
                    className="accent-primary-400"
                  />
                  <span className="text-gray-700">{n.label}</span>
                </span>
                <span className="font-mono text-xs text-gray-400 tabular-nums">
                  ({nivelCounts[n.value] ?? 0})
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={showClosed}
            onChange={(e) => onShowClosedChange(e.target.checked)}
            className="accent-primary-400"
          />
          <span className="text-gray-700">Ver cerradas</span>
        </label>
      </div>
    </aside>
  )
}
