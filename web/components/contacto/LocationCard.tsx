import { contacto } from '@/lib/data/contacto'
import { colors } from '@/lib/tokens'

function CampusMap() {
  return (
    <svg
      viewBox="0 0 300 180"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background */}
      <rect width="300" height="180" fill={colors.gray[50]} />

      {/* Streets */}
      <line x1="0" y1="60" x2="300" y2="60" stroke={colors.gray[300]} strokeWidth="6" />
      <line x1="0" y1="60" x2="300" y2="60" stroke="white" strokeWidth="0.6" strokeDasharray="6 4" />
      <line x1="180" y1="0" x2="180" y2="180" stroke={colors.gray[300]} strokeWidth="4" />

      {/* Campus blocks */}
      <rect x="20"  y="80"  width="50" height="35" rx="2" fill={colors.gray[200]} stroke={colors.gray[300]} strokeWidth="1" />
      <rect x="80"  y="80"  width="40" height="35" rx="2" fill={colors.gray[200]} stroke={colors.gray[300]} strokeWidth="1" />
      <rect x="20"  y="125" width="100" height="40" rx="2" fill={colors.gray[200]} stroke={colors.gray[300]} strokeWidth="1" />
      <rect x="200" y="80"  width="80" height="50" rx="2" fill={colors.gray[200]} stroke={colors.gray[300]} strokeWidth="1" />
      <rect x="200" y="140" width="40" height="30" rx="2" fill={colors.gray[200]} stroke={colors.gray[300]} strokeWidth="1" />

      {/* Highlighted: Pabellón E (FIEE) */}
      <rect x="130" y="80" width="40" height="35" rx="2" fill={colors.primary[100]} stroke={colors.primary[400]} strokeWidth="1.5" />
      <text x="150" y="103" textAnchor="middle" fill={colors.primary[600]} fontSize="10" fontWeight="700" fontFamily="monospace">
        FIEE
      </text>

      {/* Pin marker */}
      <circle cx="150" cy="97" r="20" fill={colors.primary[400]} opacity="0.15">
        <animate attributeName="r" values="14;22;14" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="97" r="6" fill={colors.primary[400]} />
      <circle cx="150" cy="97" r="2.5" fill="white" />

      {/* Compass */}
      <g transform="translate(270, 25)">
        <circle r="10" fill="white" stroke={colors.gray[300]} strokeWidth="1" />
        <text textAnchor="middle" y="-2" fontSize="6" fill={colors.gray[500]} fontWeight="700">N</text>
        <line x1="0" y1="-6" x2="0" y2="6" stroke={colors.primary[400]} strokeWidth="0.8" />
      </g>

      {/* Av. Túpac Amaru label */}
      <text x="120" y="55" textAnchor="middle" fontSize="7" fill={colors.gray[500]} fontWeight="600" fontFamily="monospace">
        AV. TÚPAC AMARU
      </text>
    </svg>
  )
}

export function LocationCard() {
  const u = contacto.ubicacion

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="aspect-[5/3] border-b border-gray-100">
        <CampusMap />
      </div>

      <div className="p-5">
        <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">
          Ubicación
        </p>
        <p className="text-sm font-bold text-gray-900 leading-tight">
          {u.institucion}
        </p>
        <p className="text-xs text-gray-600 leading-relaxed mt-1">
          {u.facultad}
        </p>
        <p className="text-xs text-gray-500 mt-2 font-mono">{u.direccion}</p>
        <p className="text-xs text-primary-400 font-semibold mt-2">
          📍 {u.referencia}
        </p>

        <a
          href={u.maps_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-xs font-semibold text-primary-400 hover:underline"
        >
          Abrir en Google Maps →
        </a>
      </div>
    </div>
  )
}
