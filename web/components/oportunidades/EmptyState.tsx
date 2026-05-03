import Link from 'next/link'

function AntennaIcon() {
  return (
    <svg
      className="w-16 h-16 text-gray-300"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="3" fill="currentColor" />
      <circle cx="32" cy="32" r="10" />
      <circle cx="32" cy="32" r="18" opacity="0.6" />
      <circle cx="32" cy="32" r="26" opacity="0.3" />
      <line x1="32" y1="32" x2="32" y2="6" />
    </svg>
  )
}

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6 border border-dashed border-gray-200 rounded-[6px] bg-white">
      <AntennaIcon />
      <p className="mt-6 font-mono text-sm tracking-widest text-gray-500">
        // no signal
      </p>
      <p className="mt-2 text-sm text-gray-500 max-w-sm">
        No hay oportunidades que coincidan con los filtros seleccionados.
      </p>
      <Link
        href="/contacto?intent=consulta"
        className="mt-6 text-sm font-semibold text-primary-400 hover:text-primary-500"
      >
        Suscríbete a alertas →
      </Link>
    </div>
  )
}
