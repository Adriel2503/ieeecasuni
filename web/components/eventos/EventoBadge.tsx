import type { EventoTipo } from '@/lib/data/eventos'

const variants: Record<EventoTipo, string> = {
  workshop:    'bg-primary-100 text-primary-600',
  conferencia: 'bg-secondary-100 text-secondary-700',
  competencia: 'bg-tertiary-100 text-tertiary-700',
  webinar:     'bg-quaternary-100 text-quaternary-700',
}

export function EventoBadge({
  variant,
  label,
}: {
  variant: EventoTipo
  label: string
}) {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold rounded-sm ${variants[variant]}`}
    >
      {label}
    </span>
  )
}
