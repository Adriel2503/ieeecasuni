import { getTotalMiembros } from '@/lib/data/equipo'
import { PageHeader }      from '@/components/ui/PageHeader'
import { JuntaDirectiva }  from '@/components/equipo/JuntaDirectiva'
import { ComitesGrid }     from '@/components/equipo/ComitesGrid'
import { AlumniList }      from '@/components/equipo/AlumniList'
import { EquipoCTA }       from '@/components/equipo/EquipoCTA'
import { colors } from '@/lib/tokens'

export const metadata = {
  title: 'Equipo · IEEE CAS UNI',
  description:
    'Junta directiva y comités de IEEE CAS UNI. Los estudiantes que coordinan el capítulo durante 2026.',
}

export default function EquipoPage() {
  const totalMiembros = getTotalMiembros()
  const totalComites = 4 // tecnico, eventos, comunicaciones, academico

  return (
    <>
      <PageHeader
        eyebrow="Gestión 2026"
        title="Equipo"
        description={`Somos ${totalMiembros} estudiantes de ingeniería organizados en ${totalComites + 1} comités. Construimos workshops, proyectos y comunidad técnica desde la UNI.`}
        statsLayout="cards"
        stats={[
          { value: totalMiembros, label: 'Miembros', accentColor: colors.primary[400] },
          { value: totalComites + 1, label: 'Comités', accentColor: colors.secondary[400] },
          { value: 2026, label: 'Año' },
        ]}
      >
        <blockquote className="mt-6 pl-5 border-l-4 border-primary-400 text-gray-700 italic leading-relaxed max-w-lg">
          &ldquo;Que cada egresado de la UNI haya pasado al menos una vez por
          IEEE CAS — aprendiendo, enseñando o construyendo.&rdquo;
        </blockquote>
      </PageHeader>
      <div className="max-w-7xl mx-auto px-6">
        <JuntaDirectiva />
      </div>
      <ComitesGrid />
      <AlumniList />
      <EquipoCTA />
    </>
  )
}
