import { eventos, getProximos, getPasados, getFeatured } from '@/lib/data/eventos'
import { PageHeader } from '@/components/ui/PageHeader'
import { EventosClient } from '@/components/eventos/EventosClient'
import { colors } from '@/lib/tokens'

export const metadata = {
  title: 'Eventos · IEEE CAS UNI',
  description: 'Workshops, webinars y competencias del capítulo IEEE CAS UNI.',
}

export default function EventosPage() {
  const proximos = getProximos()
  const pasados = getPasados()
  const featured = getFeatured()

  return (
    <>
      <PageHeader
        eyebrow="Calendario"
        title="Eventos"
        description="Workshops, webinars y competencias del capítulo IEEE CAS UNI. Aprende, conecta y construye con la comunidad técnica de la UNI."
        stats={[
          { value: proximos.length, label: 'Próximos', accentColor: colors.primary[400] },
          { value: eventos.length, label: 'Total registrados' },
        ]}
      />
      <EventosClient
        proximos={proximos}
        pasados={pasados}
        featured={featured}
      />
    </>
  )
}
