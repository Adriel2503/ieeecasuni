import { alumni } from '@/lib/data/equipo'

export function AlumniList() {
  if (alumni.length === 0) return null

  return (
    <section className="bg-gray-100 border-y border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <span className="shrink-0 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
            Gestiones anteriores
          </span>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {alumni.map((a) => (
              <li key={a.anio} className="flex flex-col">
                <span className="text-[10px] font-mono text-gray-500 tabular-nums">
                  {a.anio}
                </span>
                <span className="text-sm font-semibold text-gray-800">{a.nombre}</span>
                {a.proyecto_destacado && (
                  <span className="text-[11px] text-gray-500 italic mt-0.5">
                    {a.proyecto_destacado}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
