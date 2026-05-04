import { getHitosOrdenados } from '@/lib/data/equipo'

export function TimelineHitos() {
  const hitos = getHitosOrdenados()

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12">
        <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
          // HITOS
        </span>
        <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
          Cronología del capítulo
        </h2>
      </div>

      <ol className="relative border-l-2 border-gray-200 ml-3 space-y-12">
        {hitos.map((h) => {
          const dotSize = h.destacado ? 'w-4 h-4' : 'w-3 h-3'
          const dotColor = h.destacado ? 'bg-primary-400' : 'bg-gray-300'
          const yearColor = h.destacado ? 'text-primary-500' : 'text-gray-900'
          return (
            <li key={h.anio} className="relative pl-8">
              <span
                className={`absolute -left-[9px] top-2 ${dotSize} ${dotColor} rounded-full ring-4 ring-white`}
                aria-hidden="true"
              />
              <p className={`font-mono text-3xl font-bold tabular-nums ${yearColor}`}>
                {h.anio}
              </p>
              <h3 className="mt-2 text-base font-semibold text-gray-900">{h.titulo}</h3>
              {h.descripcion && (
                <p
                  className="mt-2 text-sm text-gray-600 leading-relaxed max-w-2xl"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  {h.descripcion}
                </p>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
