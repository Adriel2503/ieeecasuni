import type { Proyecto, ProyectoSize } from '@/lib/data/proyectos'
import { ProceduralBg } from './ProceduralBg'
import { TechChip } from './TechChip'

const sizeClasses: Record<ProyectoSize, string> = {
  'sm':   'md:col-span-1 md:row-span-1',
  'md-h': 'md:col-span-2 md:row-span-1',
  'md-v': 'md:col-span-1 md:row-span-2',
  'lg':   'md:col-span-2 md:row-span-2',
}

const estadoBadge = {
  publicado:  { label: 'Publicado',  bg: '#CCE7DC', text: '#005131' },
  en_curso:   { label: 'En curso',   bg: '#FDE6D3', text: '#7F3C05' },
  completado: { label: 'Completado', bg: '#F3F4F6', text: '#374151' },
}

export function ProjectCard({ proyecto }: { proyecto: Proyecto }) {
  const size = proyecto.size ?? 'sm'
  const isLarge = size === 'lg'
  const badge = estadoBadge[proyecto.estado]

  return (
    <article
      className={`
        group relative col-span-1 row-span-1 ${sizeClasses[size]}
        overflow-hidden rounded-lg border border-gray-200 bg-white
        shadow-[0_1px_3px_rgba(0,0,0,0.06)]
        hover:shadow-[0_8px_24px_rgba(0,135,82,0.15)]
        transition-shadow duration-300
        min-h-[220px]
        cursor-pointer
      `}
    >
      {/* Procedural background visual */}
      <ProceduralBg variant={proyecto.bgVariant} color={proyecto.bgColor} uid={proyecto.id} />

      {/* Foreground content */}
      <div className="relative h-full flex flex-col justify-between p-5 z-10">
        {/* Top: estado + año */}
        <div className="flex items-start justify-between gap-2">
          <span
            className="text-[10px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-sm"
            style={{ backgroundColor: badge.bg, color: badge.text }}
          >
            {badge.label}
          </span>
          <span className="text-[10px] font-mono text-gray-500">
            {proyecto.anio}
          </span>
        </div>

        {/* Bottom: título + tags */}
        <div>
          <h3 className={`font-bold text-gray-900 leading-tight mb-2 ${isLarge ? 'text-2xl' : 'text-base'}`}>
            {proyecto.titulo}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {proyecto.tags.slice(0, isLarge ? 4 : 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold text-gray-600 bg-white/80 backdrop-blur-sm px-1.5 py-0.5 rounded-sm border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover overlay — green */}
      <div
        className="
          absolute inset-0 z-20 flex flex-col justify-between p-5
          bg-primary-400/95 backdrop-blur-sm text-white
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        <div>
          <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">
            {proyecto.anio} · {proyecto.autores.length} {proyecto.autores.length === 1 ? 'autor' : 'autores'}
          </span>
          <h3 className={`font-bold leading-tight mt-2 mb-3 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
            {proyecto.titulo}
          </h3>
          <p className={`leading-relaxed text-primary-100 ${isLarge ? 'text-sm' : 'text-xs'} line-clamp-${isLarge ? '6' : '4'}`}>
            {isLarge ? proyecto.descripcion_larga : proyecto.descripcion_corta}
          </p>
        </div>

        <div>
          {/* Tech chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {proyecto.tech_stack.slice(0, isLarge ? 5 : 3).map((tech) => (
              <TechChip key={tech.nombre} nombre={tech.nombre} categoria={tech.categoria} variant="on-dark" />
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            {proyecto.github_url && (
              <a
                href={proyecto.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold px-2.5 py-1 rounded-sm bg-white text-primary-400 hover:bg-primary-50 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Ver repo →
              </a>
            )}
            {proyecto.paper_url && (
              <a
                href={proyecto.paper_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold px-2.5 py-1 rounded-sm border border-white/40 text-white hover:bg-white/10 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                IEEE Xplore →
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
