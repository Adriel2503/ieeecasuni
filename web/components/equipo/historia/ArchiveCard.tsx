import type { MiembroHistorico } from '@/lib/data/equipo'

const MAILTO =
  'mailto:ieee.cas@uni.edu.pe?subject=Aporte%20al%20archivo%20de%20gestiones%20IEEE%20CAS%20UNI'

export function ArchiveCard({ miembro }: { miembro: MiembroHistorico }) {
  const isPlaceholder = miembro.iniciales === '--'

  if (isPlaceholder) {
    return (
      <article className="flex flex-col items-center text-center bg-white border border-dashed border-gray-300 rounded-lg p-6">
        <div className="w-14 h-14 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 text-xl font-bold">
          ?
        </div>
        <p className="mt-3 text-[10px] font-bold tracking-widest uppercase text-gray-400">
          {miembro.cargo}
        </p>
        <p
          className="mt-2 text-xs text-gray-500 leading-relaxed"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Información no registrada
        </p>
        <a
          href={MAILTO}
          className="mt-3 text-[11px] text-primary-500 hover:text-primary-400 underline-offset-2 hover:underline"
        >
          ¿Eres tú? Escríbenos →
        </a>
      </article>
    )
  }

  return (
    <article className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg p-6">
      <div className="w-14 h-14 rounded-full bg-[#EFEAE2] text-gray-700 flex items-center justify-center text-base font-bold tracking-wide">
        {miembro.iniciales}
      </div>
      <h3 className="mt-3 text-sm font-bold text-gray-900 leading-tight">
        {miembro.nombre}
      </h3>
      <p className="mt-1 text-[10px] font-bold tracking-widest uppercase text-gray-500">
        {miembro.cargo}
      </p>
    </article>
  )
}
