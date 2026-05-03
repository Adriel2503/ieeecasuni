import Link from 'next/link'
import type { ReactNode } from 'react'

interface SocialLink {
  name: string
  url: string
  icon: ReactNode
}

const socials: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ieee.cas.uni/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
           strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://pe.linkedin.com/company/ieeecasuni',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/ieeecasuni/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@IEEECASUNI/videos',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">
        {title}
      </p>
      <ul className="flex flex-col gap-2 text-sm">{children}</ul>
    </div>
  )
}

function InternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  )
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        {children}
      </a>
    </li>
  )
}

function SocialIconRow() {
  return (
    <div className="flex gap-2 pt-2">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className="
            inline-flex items-center justify-center w-9 h-9 rounded-full
            border border-gray-700 text-gray-400
            hover:border-primary-400 hover:bg-primary-400 hover:text-white
            transition-colors
          "
        >
          {s.icon}
        </a>
      ))}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Identity */}
        <div className="md:col-span-2 lg:col-span-1">
          <img
            src="/brand/logo-horizontal-white.png"
            alt="IEEE CAS UNI — Universidad Nacional de Ingeniería Student Branch"
            className="h-12 w-auto mb-4"
          />
          <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
            A Student Chapter of the IEEE Circuits and Systems Society.
          </p>
        </div>

        {/* Sitemap interno */}
        <FooterColumn title="Explorar">
          <InternalLink href="/eventos">Eventos</InternalLink>
          <InternalLink href="/proyectos">Proyectos</InternalLink>
          <InternalLink href="/equipo">Equipo</InternalLink>
          <InternalLink href="/recursos">Recursos</InternalLink>
          <InternalLink href="/oportunidades">Oportunidades</InternalLink>
          <InternalLink href="/contacto">Contacto</InternalLink>
        </FooterColumn>

        {/* Red IEEE externa */}
        <FooterColumn title="Recursos">
          <ExternalLink href="https://ieee-cas.org">IEEE CAS Global</ExternalLink>
          <ExternalLink href="https://ieeexplore.ieee.org">IEEE Xplore</ExternalLink>
          <ExternalLink href="https://standards.ieee.org">IEEE Standards</ExternalLink>
          <ExternalLink href="https://ieee.org">IEEE.org</ExternalLink>
        </FooterColumn>

        {/* Contacto */}
        <div>
          <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">
            Contacto
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href="mailto:ieee.cas@uni.edu.pe"
                className="text-gray-400 hover:text-white transition-colors break-all"
              >
                ieee.cas@uni.edu.pe
              </a>
            </li>
            <li className="text-gray-500">Lima, Perú</li>
          </ul>
          <SocialIconRow />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs text-gray-600">
            © 2026 IEEE CAS UNI Student Branch Chapter
          </p>
          <p className="text-[11px] font-mono text-gray-700">
            // built in Lima
          </p>
        </div>
      </div>
    </footer>
  )
}
