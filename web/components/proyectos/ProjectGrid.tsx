import type { Proyecto } from '@/lib/data/proyectos'
import { ProjectCard } from './ProjectCard'

interface ProjectGridProps {
  proyectos: Proyecto[]
}

export function ProjectGrid({ proyectos }: ProjectGridProps) {
  if (proyectos.length === 0) {
    return (
      <div className="text-center py-20 px-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
          <span className="text-2xl">🔍</span>
        </div>
        <p className="text-base font-semibold text-gray-700 mb-1">
          Ningún proyecto coincide con esos tags
        </p>
        <p className="text-sm text-gray-500">
          Intenta quitar algunos filtros para ver más proyectos
        </p>
      </div>
    )
  }

  return (
    <div
      className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
      style={{
        gridAutoFlow: 'dense',
        gridAutoRows: 'minmax(220px, auto)',
      }}
    >
      {proyectos.map((proyecto) => (
        <ProjectCard key={proyecto.id} proyecto={proyecto} />
      ))}
    </div>
  )
}
