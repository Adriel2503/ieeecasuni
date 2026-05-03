import type { Recurso, RecursoTipo, RecursoTier } from '@/lib/data/recursos'

const tipoLabel: Record<RecursoTipo, string> = {
  link:     'L',
  pdf:      'P',
  video:    'V',
  repo:     'R',
  template: 'T',
}

const tipoFullLabel: Record<RecursoTipo, string> = {
  link:     'Link',
  pdf:      'PDF',
  video:    'Video',
  repo:     'Repo',
  template: 'Template',
}

const tierStyles: Record<RecursoTier, string> = {
  esencial:    'bg-primary-400 text-white',
  recomendado: 'bg-white text-primary-400 border border-primary-400',
  avanzado:    'bg-white text-gray-500 border border-gray-300',
}

const tierLabel: Record<RecursoTier, string> = {
  esencial:    '★ Esencial',
  recomendado: 'Recomendado',
  avanzado:    'Avanzado',
}

export function ResourceCard({ recurso }: { recurso: Recurso }) {
  return (
    <a
      href={recurso.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group flex gap-4 p-4 bg-white border border-gray-200 rounded-md
        hover:border-primary-400 hover:shadow-[0_2px_12px_rgba(0,135,82,0.08)]
        transition-all duration-200
      "
    >
      {/* Type icon block */}
      <div
        className="
          shrink-0 w-10 h-10 rounded-sm bg-primary-100 text-primary-600
          flex items-center justify-center font-mono font-bold text-sm
          group-hover:bg-primary-400 group-hover:text-white transition-colors
        "
        aria-label={tipoFullLabel[recurso.tipo]}
      >
        [{tipoLabel[recurso.tipo]}]
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-primary-400 transition-colors">
            {recurso.titulo}
          </h3>
          <span className={`shrink-0 text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-sm ${tierStyles[recurso.tier]}`}>
            {tierLabel[recurso.tier]}
          </span>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed mb-2">
          {recurso.descripcion}
        </p>

        <div className="flex items-center justify-between gap-3 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2 text-[10px] text-gray-500">
            {recurso.proveedor && (
              <span className="font-semibold text-gray-700">{recurso.proveedor}</span>
            )}
            {recurso.idioma && (
              <>
                <span className="text-gray-300">·</span>
                <span className="font-mono uppercase">{recurso.idioma}</span>
              </>
            )}
            <span className="text-gray-300">·</span>
            <span className={recurso.gratuito ? 'text-primary-400' : 'text-secondary-400'}>
              {recurso.gratuito ? 'Gratuito' : 'De pago'}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-primary-400 group-hover:translate-x-1 transition-transform">
            Abrir →
          </span>
        </div>
      </div>
    </a>
  )
}
