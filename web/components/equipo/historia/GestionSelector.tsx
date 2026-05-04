'use client'

import { listAniosGestiones } from '@/lib/data/equipo'

const ANIO_ACTUAL = 2026

interface GestionSelectorProps {
  anioSeleccionado: number
  onChange: (anio: number) => void
}

export function GestionSelector({ anioSeleccionado, onChange }: GestionSelectorProps) {
  const anios = listAniosGestiones()

  return (
    <div className="border-y border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
            // GESTIONES
          </span>
          <span className="text-[10px] font-mono text-gray-400 tabular-nums">
            {anios.length} registradas
          </span>
        </div>

        <div
          className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1"
          role="tablist"
          aria-label="Selector de año de gestión"
        >
          {anios.map((anio) => {
            const isActive = anio === anioSeleccionado
            const isCurrent = anio === ANIO_ACTUAL
            const base =
              'snap-center shrink-0 px-4 py-2 rounded-full text-sm font-mono tabular-nums transition-colors flex items-center gap-2'
            const styles = isActive
              ? 'bg-primary-50 text-primary-500 ring-2 ring-primary-400'
              : 'bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-primary-50/60'
            return (
              <button
                key={anio}
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(anio)}
                className={`${base} ${styles}`}
              >
                {isCurrent && (
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-primary-400"
                    aria-hidden="true"
                  />
                )}
                <span>{anio}</span>
                {isCurrent && (
                  <span className="text-[10px] tracking-widest uppercase font-bold">
                    actual
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
