import type { JuntaHistorica } from '@/lib/data/equipo'
import { ArchiveCard } from './ArchiveCard'

export function JuntaHistoricaView({ junta }: { junta: JuntaHistorica }) {
  return (
    <section
      key={junta.anio}
      className="max-w-7xl mx-auto px-6 py-16 animate-[fade-in_600ms_ease-out]"
      style={{ animationName: 'fadeIn', animationDuration: '600ms' }}
    >
      <header className="mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
          Junta Directiva {junta.anio}
        </h2>
        <p className="mt-2 font-mono text-sm text-gray-500 tabular-nums">
          Período: {junta.periodo}
        </p>
        <div className="mt-4 h-px w-16 bg-primary-400" />
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {junta.miembros.map((m, i) => (
          <ArchiveCard key={`${junta.anio}-${m.cargo}-${i}`} miembro={m} />
        ))}
      </div>

      {junta.hitos_anio && junta.hitos_anio.length > 0 && (
        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-3">
            Hitos del año
          </p>
          <ul
            className="space-y-2 text-sm text-gray-700 leading-relaxed"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {junta.hitos_anio.map((h, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-primary-400 select-none">—</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
