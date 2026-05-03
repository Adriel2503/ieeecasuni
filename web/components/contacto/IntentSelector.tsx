'use client'
import { intenciones, type Intencion } from '@/lib/data/contacto'

interface IntentSelectorProps {
  value: Intencion
  onChange: (i: Intencion) => void
}

export function IntentSelector({ value, onChange }: IntentSelectorProps) {
  return (
    <div>
      <label className="block text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-3">
        ¿Qué tipo de mensaje?
      </label>
      <div className="flex flex-wrap gap-2">
        {intenciones.map((i) => {
          const active = value === i.value
          return (
            <button
              key={i.value}
              type="button"
              onClick={() => onChange(i.value)}
              className={`
                px-3.5 py-1.5 text-xs font-semibold rounded-[4px] border transition-colors
                ${active
                  ? 'bg-primary-400 text-white border-primary-400'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-primary-100 hover:border-primary-400 hover:text-primary-600'}
              `}
            >
              {i.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
