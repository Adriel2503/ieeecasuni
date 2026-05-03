import Link from 'next/link'
import { colors } from '@/lib/tokens'

interface Miembro {
  nombre: string
  cargo: string
  iniciales: string
  color: string
}

const equipo: Miembro[] = [
  { nombre: 'Ana García',    cargo: 'Presidenta',    iniciales: 'AG', color: colors.primary[400] },
  { nombre: 'Carlos Ríos',   cargo: 'Vicepresidente', iniciales: 'CR', color: colors.primary[500] },
  { nombre: 'María López',   cargo: 'Secretaria',    iniciales: 'ML', color: colors.primary[300] },
  { nombre: 'José Paredes',  cargo: 'Tesorero',      iniciales: 'JP', color: colors.primary[600] },
]

export function EquipoSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-primary-400 uppercase tracking-widest block mb-2">
          Gestión 2026
        </span>
        <h2 className="text-4xl font-bold text-gray-900">Equipo directivo</h2>
        <p className="mt-3 text-gray-500 text-base">
          Los estudiantes que hacen posible IEEE CAS UNI
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto md:max-w-none">
        {equipo.map((miembro) => (
          <div key={miembro.nombre} className="text-center group cursor-default">
            {/* Avatar */}
            <div
              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-lg font-bold text-white mb-4 ring-4 ring-offset-2 ring-primary-100 group-hover:ring-primary-400 transition-all duration-300 group-hover:scale-105"
              style={{ backgroundColor: miembro.color }}
            >
              {miembro.iniciales}
            </div>
            <p className="font-bold text-gray-900 text-sm">{miembro.nombre}</p>
            <p className="text-xs text-gray-500 mt-0.5">{miembro.cargo}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/equipo" className="text-primary-400 font-semibold text-sm hover:underline">
          Conoce a todo el equipo →
        </Link>
      </div>
    </section>
  )
}
