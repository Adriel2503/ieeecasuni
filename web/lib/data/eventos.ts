export type EventoTipo = 'workshop' | 'webinar' | 'competencia' | 'conferencia'
export type EventoEstado = 'proximo' | 'cupo_lleno' | 'pasado'
export type EventoModalidad = 'presencial' | 'online' | 'hibrido'

export interface Evento {
  id: string
  tipo: EventoTipo
  titulo: string
  descripcion: string
  fecha: string // ISO date string
  lugar: string
  modalidad: EventoModalidad
  estado: EventoEstado
  featured?: boolean
  link_registro?: string
  cupos?: number
  cupos_disponibles?: number
}

export const eventos: Evento[] = [
  {
    id: 'evt-001',
    tipo: 'workshop',
    titulo: 'Introducción al Diseño Digital con FPGA',
    descripcion:
      'Aprende los fundamentos del diseño lógico programable con herramientas Xilinx Vivado y VHDL básico. Incluye laboratorio práctico con tarjetas Basys 3.',
    fecha: '2026-05-15T18:00:00-05:00',
    lugar: 'Lab. E-205, Pabellón Eléctrica · UNI',
    modalidad: 'presencial',
    estado: 'proximo',
    featured: true,
    link_registro: '#',
    cupos: 30,
    cupos_disponibles: 18,
  },
  {
    id: 'evt-002',
    tipo: 'webinar',
    titulo: 'Procesamiento de Señales Biomédicas',
    descripcion:
      'Conferencia técnica sobre aplicaciones de DSP en dispositivos médicos modernos. Speaker: Dr. Roberto Mendoza, IEEE Senior Member.',
    fecha: '2026-05-22T19:00:00-05:00',
    lugar: 'Online · Zoom',
    modalidad: 'online',
    estado: 'proximo',
    link_registro: '#',
    cupos: 200,
    cupos_disponibles: 142,
  },
  {
    id: 'evt-003',
    tipo: 'competencia',
    titulo: 'Hackathon de Circuitos UNI 2026',
    descripcion:
      'Diseña y construye un circuito funcional en 24 horas. Premios para los 3 mejores equipos. Categorías: analógico, digital y mixed-signal.',
    fecha: '2026-06-07T08:00:00-05:00',
    lugar: 'Auditorio Facultad de Ingeniería Eléctrica · UNI',
    modalidad: 'presencial',
    estado: 'proximo',
    link_registro: '#',
    cupos: 60,
    cupos_disponibles: 0,
  },
  {
    id: 'evt-004',
    tipo: 'workshop',
    titulo: 'Programación de Microcontroladores STM32',
    descripcion:
      'Workshop de 4 sesiones sobre desarrollo embebido con la familia STM32. Desde GPIO hasta interrupciones y comunicación serial.',
    fecha: '2026-06-20T15:00:00-05:00',
    lugar: 'Lab. E-208 · UNI',
    modalidad: 'presencial',
    estado: 'proximo',
    link_registro: '#',
    cupos: 25,
    cupos_disponibles: 12,
  },
  {
    id: 'evt-005',
    tipo: 'conferencia',
    titulo: 'IEEE CASS Outreach Latam 2026',
    descripcion:
      'Conferencia regional de la IEEE Circuits and Systems Society para Latinoamérica. Charlas magistrales y networking técnico.',
    fecha: '2026-07-10T09:00:00-05:00',
    lugar: 'Centro de Convenciones UNI · Lima',
    modalidad: 'hibrido',
    estado: 'proximo',
    link_registro: '#',
    cupos: 300,
    cupos_disponibles: 247,
  },
  {
    id: 'evt-006',
    tipo: 'workshop',
    titulo: 'Introducción a PCB Design con KiCad',
    descripcion:
      'Aprende a diseñar tu primer PCB desde cero usando KiCad open-source. Incluye fabricación y montaje del circuito final.',
    fecha: '2026-04-18T16:00:00-05:00',
    lugar: 'Lab. E-205 · UNI',
    modalidad: 'presencial',
    estado: 'pasado',
  },
  {
    id: 'evt-007',
    tipo: 'webinar',
    titulo: 'Mujeres en Ingeniería Electrónica',
    descripcion:
      'Charla con ingenieras peruanas trabajando en empresas tecnológicas internacionales. Inspiración y networking.',
    fecha: '2026-03-08T19:00:00-05:00',
    lugar: 'Online · YouTube Live',
    modalidad: 'online',
    estado: 'pasado',
  },
  {
    id: 'evt-008',
    tipo: 'competencia',
    titulo: 'Reto de Diseño Analógico 2026 — Ronda 1',
    descripcion:
      'Primera fase de la competencia anual de diseño de amplificadores operacionales. 14 equipos compitieron.',
    fecha: '2026-02-22T10:00:00-05:00',
    lugar: 'Auditorio FIE · UNI',
    modalidad: 'presencial',
    estado: 'pasado',
  },
  {
    id: 'evt-009',
    tipo: 'conferencia',
    titulo: 'IEEE Day 2025 — UNI',
    descripcion:
      'Celebración del IEEE Day 2025 con la sección estudiantil. Charlas, demos de proyectos y reconocimientos a miembros destacados.',
    fecha: '2025-10-07T14:00:00-05:00',
    lugar: 'Auditorio FIE · UNI',
    modalidad: 'presencial',
    estado: 'pasado',
  },
]

// ── Helpers ────────────────────────────────────────────────

export function getProximos(): Evento[] {
  return eventos
    .filter((e) => e.estado !== 'pasado')
    .sort((a, b) => +new Date(a.fecha) - +new Date(b.fecha))
}

export function getPasados(): Evento[] {
  return eventos
    .filter((e) => e.estado === 'pasado')
    .sort((a, b) => +new Date(b.fecha) - +new Date(a.fecha))
}

export function getFeatured(): Evento | undefined {
  return getProximos().find((e) => e.featured)
}

import { filterCollection } from '@/lib/utils/filter'

export function filterEventos(
  list: Evento[],
  tipo: EventoTipo | 'todos',
  query: string
): Evento[] {
  return filterCollection(list, {
    searchFields: ['titulo', 'descripcion', 'lugar'],
    query,
    predicates: tipo !== 'todos' ? [(e) => e.tipo === tipo] : [],
  })
}
