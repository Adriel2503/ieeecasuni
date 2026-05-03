'use client'
import { useMemo, useState } from 'react'
import { filterByTags, type Proyecto } from '@/lib/data/proyectos'
import { TagCloud } from './TagCloud'
import { ProjectGrid } from './ProjectGrid'
import { HeroProject } from './HeroProject'

interface ProyectosClientProps {
  featured?: Proyecto
  rest: Proyecto[]
  allTags: string[]
}

export function ProyectosClient({ featured, rest, allTags }: ProyectosClientProps) {
  const [active, setActive] = useState<string[]>([])

  const filtered = useMemo(
    () => filterByTags(rest, active),
    [rest, active]
  )

  const toggle = (tag: string) => {
    setActive((curr) =>
      curr.includes(tag) ? curr.filter((t) => t !== tag) : [...curr, tag]
    )
  }

  // Show featured only when no filters
  const showFeatured = active.length === 0 && featured

  return (
    <>
      <TagCloud
        tags={allTags}
        active={active}
        onToggle={toggle}
        onClear={() => setActive([])}
        total={rest.length + (featured ? 1 : 0)}
        showing={filtered.length + (showFeatured ? 1 : 0)}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        {showFeatured && featured && <HeroProject proyecto={featured} />}
        <ProjectGrid proyectos={filtered} />
      </div>
    </>
  )
}
