import type { Miembro } from '@/lib/data/equipo'
import { AvatarRing } from './AvatarRing'

type CardVariant = 'directiva' | 'comite'

const socialIcons = {
  email:    '✉',
  linkedin: 'in',
  github:   'gh',
}

function SocialLink({ type, href }: { type: keyof typeof socialIcons; href: string }) {
  return (
    <a
      href={type === 'email' ? `mailto:${href}` : href}
      target={type === 'email' ? undefined : '_blank'}
      rel={type === 'email' ? undefined : 'noopener noreferrer'}
      className="inline-flex items-center justify-center w-7 h-7 rounded-sm border border-gray-200 text-gray-500 hover:border-primary-400 hover:text-primary-400 hover:bg-primary-50 transition-colors text-[10px] font-bold"
      aria-label={type}
    >
      {socialIcons[type]}
    </a>
  )
}

export function MemberCard({
  miembro,
  variant = 'comite',
}: {
  miembro: Miembro
  variant?: CardVariant
}) {
  const isDirectiva = variant === 'directiva'

  if (isDirectiva) {
    return (
      <article className="group relative bg-white border border-gray-200 rounded-lg p-6 w-full max-w-[260px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,135,82,0.12)] hover:border-primary-100 transition-all duration-300">
        {/* Top accent */}
        <div className="absolute top-0 left-6 right-6 h-0.5 bg-primary-400 rounded-b" />

        <div className="flex flex-col items-center text-center">
          <AvatarRing iniciales={miembro.iniciales} especialidad={miembro.especialidad} size="lg" />

          <h3 className="mt-4 text-lg font-bold text-gray-900 leading-tight">{miembro.nombre}</h3>

          <p className="mt-1 text-xs font-bold tracking-widest uppercase text-primary-400">
            {miembro.cargo}
          </p>

          <p className="mt-2 text-xs text-gray-500 leading-relaxed">{miembro.carrera}</p>

          {miembro.quote && (
            <blockquote className="mt-4 pt-4 border-t border-gray-100 text-xs italic text-gray-600 leading-relaxed">
              &ldquo;{miembro.quote}&rdquo;
            </blockquote>
          )}

          {(miembro.email || miembro.linkedin || miembro.github) && (
            <div className="mt-4 flex gap-1.5">
              {miembro.email    && <SocialLink type="email"    href={miembro.email} />}
              {miembro.linkedin && <SocialLink type="linkedin" href={miembro.linkedin} />}
              {miembro.github   && <SocialLink type="github"   href={miembro.github} />}
            </div>
          )}
        </div>
      </article>
    )
  }

  // comité variant
  return (
    <article className="group flex items-center gap-4 p-4 rounded-lg bg-white border border-gray-200 hover:border-primary-100 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-200">
      <AvatarRing iniciales={miembro.iniciales} especialidad={miembro.especialidad} size="sm" />

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-gray-900 truncate">{miembro.nombre}</h4>
        <p className="text-[10px] font-bold tracking-widest uppercase text-primary-400 mt-0.5">
          {miembro.cargo}
        </p>
        <p className="text-[11px] text-gray-500 truncate mt-0.5">{miembro.carrera}</p>
      </div>

      {(miembro.linkedin || miembro.github) && (
        <div className="flex flex-col gap-1 shrink-0">
          {miembro.linkedin && <SocialLink type="linkedin" href={miembro.linkedin} />}
          {miembro.github   && <SocialLink type="github"   href={miembro.github} />}
        </div>
      )}
    </article>
  )
}
