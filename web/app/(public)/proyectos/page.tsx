import {
  proyectos,
  getFeaturedProyecto,
  getNonFeaturedProyectos,
  getAllTags,
} from '@/lib/data/proyectos'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProyectosClient } from '@/components/proyectos/ProyectosClient'
import { colors } from '@/lib/tokens'

export const metadata = {
  title: 'Proyectos · IEEE CAS UNI',
  description:
    'Hardware, software, ML aplicado. Lo que construimos en IEEE CAS UNI: portafolio técnico del capítulo.',
}

export default function ProyectosPage() {
  const featured = getFeaturedProyecto()
  const rest = getNonFeaturedProyectos()
  const allTags = getAllTags()

  const publicados = proyectos.filter((p) => p.estado === 'publicado').length
  const enCurso = proyectos.filter((p) => p.estado === 'en_curso').length

  return (
    <>
      <PageHeader
        pattern="pcb"
        eyebrow="Portafolio"
        title="Proyectos"
        description="Lo que construimos en el laboratorio, en aulas, en hackathons. Hardware, software, ML aplicado y todo lo que está en medio."
        stats={[
          { value: proyectos.length, label: 'Proyectos' },
          { value: publicados, label: 'En IEEE Xplore', accentColor: colors.primary[400] },
          { value: enCurso, label: 'En curso', accentColor: colors.secondary[400] },
        ]}
      />
      <ProyectosClient
        featured={featured}
        rest={rest}
        allTags={allTags}
      />
    </>
  )
}
