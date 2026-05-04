import { PageHeader } from '@/components/ui/PageHeader'
import { colors } from '@/lib/tokens'
import { juntasPasadas } from '@/lib/data/equipo'

export function AnniversaryHero() {
  const totalJuntas = juntasPasadas.length
  // ~150 miembros históricos: aproximación honesta (4 cargos × 18 gestiones + comités no registrados)
  const totalMiembrosAprox = '~150'

  return (
    <div className="relative">
      <PageHeader
        eyebrow="// ARCHIVO"
        title="18 años de IEEE CAS UNI"
        description="Desde 2008, generaciones de estudiantes UNI han construido este capítulo. Aquí están sus rostros, sus gestiones y los hitos que dejaron registrados."
        statsLayout="cards"
        stats={[
          { value: 18, label: 'Años', accentColor: colors.primary[400] },
          { value: totalJuntas, label: 'Juntas' },
          { value: totalMiembrosAprox, label: 'Miembros históricos' },
        ]}
      />
      {/* Super-display 18 — decorativo, detrás del contenido */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-4 top-2 lg:right-12 lg:top-4 text-[120px] lg:text-[180px] font-black tracking-tighter leading-none text-primary-50 z-0"
      >
        18
      </span>
    </div>
  )
}
