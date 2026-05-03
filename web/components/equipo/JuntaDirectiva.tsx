import { directiva } from '@/lib/data/equipo'
import { MemberCard } from './MemberCard'
import { colors } from '@/lib/tokens'

export function JuntaDirectiva() {
  const [pres, vp, secr, tes] = directiva

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-primary-400 uppercase tracking-widest block mb-3">
          ★ Junta Directiva
        </span>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Liderazgo del capítulo
        </h2>
        <p className="mt-3 text-base text-gray-500 max-w-md mx-auto">
          Los cuatro estudiantes que coordinan IEEE CAS UNI durante 2026
        </p>
      </div>

      {/* Desktop: diamond layout with SVG connectors */}
      <div className="relative hidden md:block max-w-4xl mx-auto">
        {/* SVG connector overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* PRES → VP */}
          <line x1="50" y1="22" x2="22" y2="48"
                stroke={colors.primary[400]} strokeWidth="0.35" strokeDasharray="1.5,1" opacity="0.6" />
          {/* PRES → SECR */}
          <line x1="50" y1="22" x2="78" y2="48"
                stroke={colors.primary[400]} strokeWidth="0.35" strokeDasharray="1.5,1" opacity="0.6" />
          {/* VP → TES */}
          <line x1="22" y1="60" x2="50" y2="86"
                stroke={colors.primary[400]} strokeWidth="0.35" strokeDasharray="1.5,1" opacity="0.6" />
          {/* SECR → TES */}
          <line x1="78" y1="60" x2="50" y2="86"
                stroke={colors.primary[400]} strokeWidth="0.35" strokeDasharray="1.5,1" opacity="0.6" />

          {/* Connection nodes */}
          <circle cx="50" cy="22" r="0.7" fill={colors.primary[400]} />
          <circle cx="22" cy="54" r="0.7" fill={colors.primary[400]} />
          <circle cx="78" cy="54" r="0.7" fill={colors.primary[400]} />
          <circle cx="50" cy="86" r="0.7" fill={colors.primary[400]} />
        </svg>

        {/* Card grid in diamond */}
        <div
          className="relative grid grid-cols-3 gap-6 lg:gap-10"
          style={{ gridTemplateRows: 'auto auto auto' }}
        >
          <div className="col-start-2 row-start-1 flex justify-center">
            <MemberCard miembro={pres} variant="directiva" />
          </div>
          <div className="col-start-1 row-start-2 flex justify-center">
            <MemberCard miembro={vp} variant="directiva" />
          </div>
          <div className="col-start-3 row-start-2 flex justify-center">
            <MemberCard miembro={secr} variant="directiva" />
          </div>
          <div className="col-start-2 row-start-3 flex justify-center">
            <MemberCard miembro={tes} variant="directiva" />
          </div>
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden flex flex-col gap-6 items-center px-4">
        {directiva.map((m) => (
          <MemberCard key={m.id} miembro={m} variant="directiva" />
        ))}
      </div>
    </section>
  )
}
