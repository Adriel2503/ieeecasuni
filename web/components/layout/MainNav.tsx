'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/oportunidades', label: 'Oportunidades' },
  { href: '/certificados', label: 'Certificados' },
  { href: '/contacto', label: 'Contacto' },
]

export function MainNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" aria-label="IEEE CAS UNI — Inicio" className="flex items-center">
          <img
            src="/brand/logo-horizontal.svg"
            alt="IEEE CAS UNI"
            className="hidden md:block h-12 w-auto"
          />
          <img
            src="/brand/mark.svg"
            alt="IEEE CAS UNI"
            className="md:hidden h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map(link => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`
                  px-4 py-2 rounded-[6px] text-sm transition-colors
                  ${active
                    ? 'font-semibold text-primary-500 bg-primary-50'
                    : 'font-medium text-gray-600 hover:text-primary-500 hover:bg-primary-50'}
                `}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="hidden md:flex items-center">
          <Link
            href="/contacto?intent=postular"
            className="px-5 py-2 text-sm font-semibold text-white rounded-[4px] transition-colors bg-primary-400 hover:bg-primary-500"
          >
            Únete
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className="block w-6 h-0.5 bg-gray-900 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-900 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-900" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-2">
          {navLinks.map(link => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className={`
                  px-3 py-2 rounded-[6px] text-sm font-semibold transition-colors
                  ${active
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-gray-900 hover:bg-primary-50/60'}
                `}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contacto?intent=postular"
            className="px-5 py-2 text-sm font-semibold text-white rounded-[4px] text-center bg-primary-400"
            onClick={() => setOpen(false)}
          >
            Únete
          </Link>
        </div>
      )}
    </header>
  )
}
