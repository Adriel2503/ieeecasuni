import { getDiasRestantes, getUrgencia } from '@/lib/data/oportunidades'

interface Props {
  fechaLimite: string
}

const URGENCY_STYLES = {
  safe: 'bg-primary-50 text-primary-600 border-primary-100',
  warning: 'bg-secondary-100 text-secondary-700 border-secondary-200 animate-pulseAmber',
  urgent: 'bg-secondary-100 text-secondary-700 border-secondary-300 animate-pulseRed',
  expired: 'bg-gray-100 text-gray-500 border-gray-200',
} as const

function ClockIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export function DeadlineChip({ fechaLimite }: Props) {
  const dias = getDiasRestantes(fechaLimite)
  const urgencia = getUrgencia(dias)

  let label: string
  if (urgencia === 'expired') {
    label = 'vencida'
  } else if (dias === 0) {
    label = 'HOY'
  } else if (dias === 1) {
    label = '1 día'
  } else {
    label = `${dias} días`
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-[4px] border font-mono text-xs font-semibold ${URGENCY_STYLES[urgencia]}`}
    >
      <ClockIcon />
      {label}
    </span>
  )
}
