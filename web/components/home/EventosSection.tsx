import Link from 'next/link'
import { EventoBadge } from '@/components/eventos/EventoBadge'
import { Card } from '@/components/ui/Card'

type EventoTipo = 'workshop' | 'webinar' | 'competencia' | 'conferencia'

interface Evento {
  id: number
  tipo: EventoTipo
  titulo: string
  fecha: string
  lugar: string
  descripcion: string
  featured?: boolean
}

const eventos: Evento[] = [
  {
    id: 1,
    tipo: 'workshop',
    titulo: 'Introducción al Diseño Digital con FPGA',
    fecha: '15 de mayo, 2026',
    lugar: 'Lab. E-205, UNI · Lima',
    descripcion: 'Aprende los fundamentos del diseño lógico programable con herramientas Xilinx y VHDL básico.',
    featured: true,
  },
  {
    id: 2,
    tipo: 'webinar',
    titulo: 'Procesamiento de Señales Biomédicas',
    fecha: '22 de mayo, 2026',
    lugar: 'Online · Zoom',
    descripcion: 'Conferencia técnica sobre aplicaciones de DSP en dispositivos médicos modernos.',
  },
  {
    id: 3,
    tipo: 'competencia',
    titulo: 'Hackathon de Circuitos UNI 2026',
    fecha: '7 de junio, 2026',
    lugar: 'Auditorio FIE, UNI · Lima',
    descripcion: 'Diseña y construye un circuito funcional en 24 horas. Premios para los 3 mejores equipos.',
  },
]

const badgeLabels: Record<EventoTipo, string> = {
  workshop:    'Workshop',
  webinar:     'Webinar',
  competencia: 'Competencia',
  conferencia: 'Conferencia',
}

export function EventosSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold text-primary-400 uppercase tracking-widest block mb-2">
              Próximamente
            </span>
            <h2 className="text-4xl font-bold text-gray-900">Próximos eventos</h2>
          </div>
          <Link
            href="/eventos"
            className="hidden md:block text-primary-400 font-semibold text-sm hover:underline"
          >
            Ver todos →
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventos.map((evento) => (
            <Card key={evento.id} featured={evento.featured} className="p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <EventoBadge variant={evento.tipo} label={badgeLabels[evento.tipo]} />
                {evento.featured && (
                  <span className="text-[10px] font-bold text-primary-400 uppercase tracking-wider">
                    Destacado
                  </span>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {evento.titulo}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{evento.descripcion}</p>
              </div>

              <div className="pt-3 border-t border-gray-100 space-y-1">
                <p className="text-xs font-semibold" style={{ color: 'var(--color-accent)' }}>
                  📅 {evento.fecha}
                </p>
                <p className="text-xs text-gray-500">📍 {evento.lugar}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile ver todos */}
        <div className="text-center mt-8 md:hidden">
          <Link href="/eventos" className="text-primary-400 font-semibold text-sm hover:underline">
            Ver todos los eventos →
          </Link>
        </div>
      </div>
    </section>
  )
}
