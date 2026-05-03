'use client'
import { useState } from 'react'
import { faqs } from '@/lib/data/contacto'

export function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-primary-400 uppercase tracking-widest block mb-3">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Lo que más nos preguntan antes de escribirnos
          </p>
        </div>

        <ul className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <li
                key={i}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm font-semibold leading-tight transition-colors ${isOpen ? 'text-primary-400' : 'text-gray-900'}`}>
                    {faq.pregunta}
                  </span>
                  <span
                    className={`
                      shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-sm
                      text-base font-bold transition-all
                      ${isOpen
                        ? 'bg-primary-400 text-white rotate-45'
                        : 'bg-gray-100 text-gray-600'}
                    `}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`
                    grid transition-all duration-300 ease-out
                    ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.respuesta}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <p className="mt-8 text-sm text-center text-gray-500">
          ¿No encuentras lo que buscas?{' '}
          <a href="#contact-form" className="font-semibold text-primary-400 hover:underline">
            Escríbenos directamente →
          </a>
        </p>
      </div>
    </section>
  )
}
