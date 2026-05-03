'use client'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/contacto', label: 'Contacto' },
]

export function MainNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-gray-900">
          IEEE CAS <span className="text-primary-400">UNI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-gray-900 hover:text-gray-500 transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
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
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-gray-900 text-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto?intent=postular"
            className="px-5 py-2 text-sm font-semibold text-white rounded-[4px] text-center bg-primary-400"
            onClick={() => setOpen(false)}
          >
            Únete
          </Link>
        </div>
      )}
    </nav>
  )
}
