import type { Categoria } from '@/lib/data/oportunidades'

const CATEGORY_LABEL: Record<Categoria, string> = {
  empleo: 'EMPLEO',
  pasantia: 'PASANTIA',
  beca: 'BECA',
  concurso: 'CONCURSO',
  cfp: 'CALL_FOR_PAPERS',
  voluntariado: 'VOLUNTARIADO',
  convocatoria: 'CONVOCATORIA',
}

// purple-500 is a brand-extended token (defined in @theme)
const CATEGORY_COLOR: Record<Categoria, string> = {
  empleo: 'text-primary-500',
  pasantia: 'text-primary-400',
  beca: 'text-quaternary-400',
  concurso: 'text-tertiary-700',
  cfp: 'text-secondary-400',
  voluntariado: 'text-purple-500',
  convocatoria: 'text-gray-700',
}

interface Props {
  categoria: Categoria
}

export function CategoryBadge({ categoria }: Props) {
  return (
    <span
      className={`font-mono text-[10px] tracking-widest ${CATEGORY_COLOR[categoria]}`}
    >
      // {CATEGORY_LABEL[categoria]}
    </span>
  )
}
