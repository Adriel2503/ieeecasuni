import { recursos } from '@/lib/data/recursos'
import { PageHeader }      from '@/components/ui/PageHeader'
import { RecursosClient }  from '@/components/recursos/RecursosClient'
import { colors } from '@/lib/tokens'

export const metadata = {
  title: 'Recursos · IEEE CAS UNI',
  description:
    'Biblioteca curada de software, cursos, plantillas y materiales del capítulo IEEE CAS UNI.',
}

export default function RecursosPage() {
  const total = recursos.length
  const esenciales = recursos.filter((r) => r.tier === 'esencial').length
  const gratuitos = recursos.filter((r) => r.gratuito).length

  return (
    <>
      <PageHeader
        eyebrow="Biblioteca curada"
        title="Recursos"
        description="Software, cursos, plantillas y materiales del capítulo. Curado para estudiantes de circuitos y sistemas en la UNI."
        stats={[
          { value: total, label: 'Recursos', accentColor: colors.gray[900] },
          { value: esenciales, label: 'Esenciales', accentColor: colors.primary[400] },
          { value: gratuitos, label: 'Gratuitos', accentColor: colors.secondary[400] },
        ]}
      />
      <RecursosClient recursos={recursos} />
    </>
  )
}
