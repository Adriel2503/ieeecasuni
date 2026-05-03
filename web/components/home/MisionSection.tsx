import { colors } from '@/lib/tokens'

const features = [
  { icon: '⚡', title: 'Talleres técnicos',  desc: 'Diseño digital, FPGA, señales' },
  { icon: '🌐', title: 'Red global IEEE',    desc: 'Acceso a Xplore y comunidad' },
  { icon: '🏆', title: 'Competencias',       desc: 'Retos de circuitos y sistemas' },
  { icon: '📡', title: 'Investigación',      desc: 'Apoyo en publicaciones IEEE' },
]

function CircuitVisual() {
  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-xs" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="150" cy="150" r="128" stroke={colors.primary[100]} strokeWidth="1" />
      <circle cx="150" cy="150" r="96"  stroke={colors.primaryTintAlt} strokeWidth="1" />
      <circle cx="150" cy="150" r="64"  stroke={colors.primary[300]} strokeWidth="1.5" />
      <circle cx="150" cy="150" r="38"  fill={colors.primary[400]} />

      <text x="150" y="145" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="white" letterSpacing="2">IEEE</text>
      <text x="150" y="159" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="white" letterSpacing="2">CAS</text>
      <text x="150" y="172" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8"  fontWeight="600" fill={colors.primary[100]} letterSpacing="3">UNI</text>

      {/* 8 spokes from middle ring to outer */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = ((deg - 90) * Math.PI) / 180
        const x1 = 150 + 96  * Math.cos(rad)
        const y1 = 150 + 96  * Math.sin(rad)
        const x2 = 150 + 128 * Math.cos(rad)
        const y2 = 150 + 128 * Math.sin(rad)
        return (
          <g key={deg}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={colors.primary[100]} strokeWidth="1.5" />
            <circle cx={x1} cy={y1} r="5" fill={colors.primary[400]} />
            <circle cx={x2} cy={y2} r="3" fill={colors.primary[100]} stroke={colors.primary[400]} strokeWidth="1" />
          </g>
        )
      })}

      {/* 4 radial lines from inner to middle ring */}
      {[0, 90, 180, 270].map((deg) => {
        const rad = ((deg - 90) * Math.PI) / 180
        const x1 = 150 + 38 * Math.cos(rad)
        const y1 = 150 + 38 * Math.sin(rad)
        const x2 = 150 + 64 * Math.cos(rad)
        const y2 = 150 + 64 * Math.sin(rad)
        return (
          <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={colors.primary[300]} strokeWidth="2" />
        )
      })}
    </svg>
  )
}

export function MisionSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        {/* Text — 3/5 cols */}
        <div className="lg:col-span-3 space-y-6">
          <span className="text-xs font-semibold text-primary-400 uppercase tracking-widest">
            Nuestra misión
          </span>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Conectando ingenieros con la frontera del conocimiento en circuitos y sistemas
          </h2>
          <blockquote className="pl-5 border-l-4 border-primary-400 text-gray-600 leading-relaxed italic">
            Impulsamos el desarrollo técnico y profesional de los estudiantes de ingeniería
            de la UNI, conectándolos con la red global de la IEEE Circuits and Systems Society.
          </blockquote>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-3 p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors border border-transparent hover:border-primary-100"
              >
                <span className="text-xl mt-0.5">{f.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{f.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual — 2/5 cols */}
        <div className="lg:col-span-2 flex justify-center opacity-90">
          <CircuitVisual />
        </div>
      </div>
    </section>
  )
}
