import { PageHeader } from '@/components/ui/PageHeader'
import { OportunidadesClient } from '@/components/oportunidades/OportunidadesClient'
import {
  getDiasRestantes,
  getFeaturedOportunidad,
  getOportunidadesAbiertas,
  getOportunidadesCerradas,
} from '@/lib/data/oportunidades'
import { colors } from '@/lib/tokens'

export const metadata = {
  title: 'Oportunidades · IEEE CAS UNI',
  description:
    'Convocatorias técnico-académicas para estudiantes UNI: pasantías, becas, concursos, call for papers y voluntariado IEEE CAS.',
}

export default function OportunidadesPage() {
  const abiertas = getOportunidadesAbiertas()
  const cerradas = getOportunidadesCerradas()
  const featured = getFeaturedOportunidad()

  const cierranEstaSemana = abiertas.filter((o) => {
    const d = getDiasRestantes(o.fecha_limite)
    return d >= 0 && d <= 7
  }).length

  return (
    <>
      <PageHeader
        eyebrow="// OPORTUNIDADES"
        title="Convocatorias abiertas"
        description="Pasantías, becas, concursos y call for papers para la comunidad CAS UNI. Deadlines en tiempo real."
        pattern="grid"
        stats={[
          {
            value: abiertas.length,
            label: 'Abiertas',
            accentColor: colors.primary[400],
          },
          {
            value: cierranEstaSemana,
            label: 'Cierran esta semana',
            accentColor: colors.secondary[400],
          },
        ]}
      />
      <OportunidadesClient
        abiertas={abiertas}
        cerradas={cerradas}
        featured={featured}
      />
    </>
  )
}
