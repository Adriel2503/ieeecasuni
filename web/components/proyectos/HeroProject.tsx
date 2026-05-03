import type { Proyecto } from '@/lib/data/proyectos'
import { ProceduralBg } from './ProceduralBg'
import { TechChip } from './TechChip'
import { buttonStyles } from '@/components/ui/Button'

const estadoBadge = {
  publicado:  { label: 'Publicado en IEEE Xplore',  color: '#008752' },
  en_curso:   { label: 'En curso',                  color: '#E26909' },
  completado: { label: 'Completado',                color: '#374151' },
}

export function HeroProject({ proyecto }: { proyecto: Proyecto }) {
  const badge = estadoBadge[proyecto.estado]

  return (
    <article className="relative bg-white border-t-[3px] border-t-primary-400 border border-gray-200 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Visual — 2/5 cols */}
        <div className="relative lg:col-span-2 min-h-[280px] lg:min-h-[420px] overflow-hidden border-r border-gray-100">
          <ProceduralBg variant={proyecto.bgVariant} color={proyecto.bgColor} uid={proyecto.id} />
          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <span
                className="inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm bg-white/90 backdrop-blur-sm"
                style={{ color: badge.color }}
              >
                ★ {badge.label}
              </span>
            </div>
          </div>
        </div>

        {/* Content — 3/5 cols */}
        <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col gap-5">
          {/* Year + featured tag */}
          <div className="flex items-center gap-3">
            <span className="text-5xl font-bold text-gray-900 leading-none tabular-nums">
              {proyecto.anio}
            </span>
            <div className="h-8 w-px bg-gray-200" />
            <span className="text-[10px] font-bold tracking-widest text-primary-400 uppercase">
              Proyecto destacado
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {proyecto.titulo}
          </h2>

          <p className="text-base text-gray-600 leading-relaxed">
            {proyecto.descripcion_larga}
          </p>

          {/* Authors */}
          <div>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
              Autores
            </p>
            <p className="text-sm text-gray-700 font-medium">
              {proyecto.autores.join(' · ')}
            </p>
          </div>

          {/* Tech stack */}
          <div>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
              Stack técnico
            </p>
            <div className="flex flex-wrap gap-1.5">
              {proyecto.tech_stack.map((tech) => (
                <TechChip key={tech.nombre} nombre={tech.nombre} categoria={tech.categoria} />
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-2">
            {proyecto.github_url && (
              <a
                href={proyecto.github_url}
                target="_blank" rel="noopener noreferrer"
                className={buttonStyles({ variant: 'primary', size: 'md' })}
              >
                Ver en GitHub →
              </a>
            )}
            {proyecto.paper_url && (
              <a
                href={proyecto.paper_url}
                target="_blank" rel="noopener noreferrer"
                className={buttonStyles({ variant: 'secondary', size: 'md' })}
              >
                Leer paper en IEEE Xplore →
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
