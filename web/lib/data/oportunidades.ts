import { filterCollection } from '@/lib/utils/filter'

export type Categoria =
  | 'empleo'
  | 'pasantia'
  | 'beca'
  | 'concurso'
  | 'cfp'
  | 'voluntariado'
  | 'convocatoria'

export type Ubicacion = 'lima' | 'peru' | 'remoto' | 'internacional'
export type Nivel = 'pregrado' | 'posgrado' | 'abierto'

export interface Oportunidad {
  id: string
  titulo: string
  organizacion: string
  categoria: Categoria
  descripcion_corta: string
  descripcion_larga?: string
  fecha_publicacion: string
  fecha_limite: string
  url_aplicacion: string
  ubicacion: Ubicacion
  nivel: Nivel
  tags: string[]
  featured?: boolean
  imagen?: string
}

// Mocks. "Hoy" de referencia: 2026-05-02.
export const oportunidades: Oportunidad[] = [
  {
    id: 'opp-001',
    titulo: 'ISCAS 2026 — Call for Papers',
    organizacion: 'IEEE Circuits and Systems Society',
    categoria: 'cfp',
    descripcion_corta:
      'Submit your paper to the flagship CAS conference in Bangkok. Tracks: analog, digital, biomedical, neuromorphic.',
    descripcion_larga:
      'The IEEE International Symposium on Circuits and Systems (ISCAS) 2026 will be held in Bangkok, Thailand. Submissions are open across 14 technical tracks including analog signal processing, biomedical circuits, neural networks and learning systems, and emerging technologies. Accepted papers are indexed in IEEE Xplore.',
    fecha_publicacion: '2026-01-15',
    fecha_limite: '2026-05-05',
    url_aplicacion: 'https://2026.ieee-iscas.org/',
    ubicacion: 'internacional',
    nivel: 'abierto',
    tags: ['paper', 'conferencia', 'bangkok', 'analog', 'digital'],
    featured: true,
  },
  {
    id: 'opp-002',
    titulo: 'APCCAS 2026 — Call for Papers',
    organizacion: 'IEEE Asia Pacific Conference on Circuits and Systems',
    categoria: 'cfp',
    descripcion_corta:
      'Regional CAS conference in the Asia-Pacific. Submit your latest work on circuits, signal processing, and emerging hardware.',
    fecha_publicacion: '2026-02-20',
    fecha_limite: '2026-07-15',
    url_aplicacion: 'https://ieee-cas.org/conferences/apccas',
    ubicacion: 'internacional',
    nivel: 'abierto',
    tags: ['paper', 'conferencia', 'asia-pacific'],
  },
  {
    id: 'opp-003',
    titulo: 'IEEE CAS Pre-Doctoral Grant',
    organizacion: 'IEEE Circuits and Systems Society',
    categoria: 'beca',
    descripcion_corta:
      'Grant for senior undergraduate or master students planning to pursue a PhD in circuits and systems.',
    fecha_publicacion: '2026-03-01',
    fecha_limite: '2026-06-30',
    url_aplicacion: 'https://ieee-cas.org/awards/cas-pre-doctoral-grant',
    ubicacion: 'internacional',
    nivel: 'pregrado',
    tags: ['phd', 'beca', 'investigacion'],
  },
  {
    id: 'opp-004',
    titulo: 'IEEE Student Travel Grant — ISCAS 2026',
    organizacion: 'IEEE CAS Society',
    categoria: 'beca',
    descripcion_corta:
      'Cobertura parcial de viaje y registro para estudiantes con paper aceptado en ISCAS 2026.',
    fecha_publicacion: '2026-04-10',
    fecha_limite: '2026-05-09',
    url_aplicacion: 'https://ieee-cas.org/student-travel-grants',
    ubicacion: 'internacional',
    nivel: 'pregrado',
    tags: ['travel', 'iscas', 'grant'],
  },
  {
    id: 'opp-005',
    titulo: 'FPGA Design Contest 2026',
    organizacion: 'AMD Xilinx Open Hardware',
    categoria: 'concurso',
    descripcion_corta:
      'Diseña una aplicación innovadora en FPGA. Categorías: AI, comunicaciones y sistemas embebidos.',
    fecha_publicacion: '2026-03-15',
    fecha_limite: '2026-09-01',
    url_aplicacion: 'https://www.openhw.eu/',
    ubicacion: 'remoto',
    nivel: 'pregrado',
    tags: ['fpga', 'xilinx', 'hardware'],
  },
  {
    id: 'opp-006',
    titulo: 'Pasantía Microchip Perú — Verano 2026',
    organizacion: 'Microchip Technology',
    categoria: 'pasantia',
    descripcion_corta:
      'Pasantía técnica en aplicaciones de microcontroladores de 8/32 bits para alumnos de Electrónica 8vo+.',
    fecha_publicacion: '2026-04-01',
    fecha_limite: '2026-05-15',
    url_aplicacion: 'https://www.microchip.com/careers',
    ubicacion: 'lima',
    nivel: 'pregrado',
    tags: ['embebidos', 'mcu', 'practicante'],
  },
  {
    id: 'opp-007',
    titulo: 'IEEE Foundation — Beca de innovación 2026',
    organizacion: 'IEEE Foundation',
    categoria: 'beca',
    descripcion_corta:
      'Financiamiento para proyectos estudiantiles con impacto en comunidades latinoamericanas.',
    fecha_publicacion: '2026-04-20',
    fecha_limite: '2026-08-15',
    url_aplicacion: 'https://www.ieeefoundation.org/grants',
    ubicacion: 'internacional',
    nivel: 'abierto',
    tags: ['innovacion', 'social', 'beca'],
  },
  {
    id: 'opp-008',
    titulo: 'CAS Outreach — Voluntariado regional',
    organizacion: 'IEEE CAS Outreach Initiative',
    categoria: 'voluntariado',
    descripcion_corta:
      'Únete como mentor en talleres CAS en colegios de Lima. 4 horas/semana durante el ciclo.',
    fecha_publicacion: '2026-04-25',
    fecha_limite: '2026-05-08',
    url_aplicacion: 'https://ieee-cas.org/outreach',
    ubicacion: 'lima',
    nivel: 'pregrado',
    tags: ['mentoria', 'outreach', 'voluntariado'],
  },
  {
    id: 'opp-009',
    titulo: 'MWSCAS 2026 — Call for Papers',
    organizacion: 'IEEE Midwest Symposium on Circuits and Systems',
    categoria: 'cfp',
    descripcion_corta:
      'Conferencia técnica con tracks de RFIC, power management y machine learning hardware.',
    fecha_publicacion: '2026-03-05',
    fecha_limite: '2026-07-30',
    url_aplicacion: 'https://mwscas2026.org',
    ubicacion: 'internacional',
    nivel: 'abierto',
    tags: ['mwscas', 'rfic', 'paper'],
  },
  {
    id: 'opp-010',
    titulo: 'BioCAS 2026 — Call for Papers',
    organizacion: 'IEEE Biomedical Circuits and Systems Conference',
    categoria: 'cfp',
    descripcion_corta:
      'Submisiones abiertas en circuitos biomédicos, sensores implantables y neurotecnología.',
    fecha_publicacion: '2026-02-10',
    fecha_limite: '2026-06-20',
    url_aplicacion: 'https://biocas2026.org',
    ubicacion: 'internacional',
    nivel: 'posgrado',
    tags: ['biomedico', 'sensores', 'paper'],
  },
  {
    id: 'opp-011',
    titulo: 'JETCAS — Special Issue on Edge AI Hardware',
    organizacion: 'IEEE Journal on Emerging Topics in CAS',
    categoria: 'cfp',
    descripcion_corta:
      'Special issue para arquitecturas eficientes de IA en el borde. Submission abierta.',
    fecha_publicacion: '2026-01-30',
    fecha_limite: '2026-10-01',
    url_aplicacion: 'https://ieee-cas.org/publications/jetcas',
    ubicacion: 'remoto',
    nivel: 'posgrado',
    tags: ['edge-ai', 'journal', 'paper'],
  },
  {
    id: 'opp-012',
    titulo: 'Convocatoria de proyectos CAS UNI 2026-II',
    organizacion: 'IEEE CAS UNI Student Branch',
    categoria: 'convocatoria',
    descripcion_corta:
      'Postula tu propuesta de proyecto al fondo interno del capítulo. 3 categorías, hasta S/ 3000 cada una.',
    fecha_publicacion: '2026-04-15',
    fecha_limite: '2026-05-30',
    url_aplicacion: 'https://ieeecasuni.pe/convocatoria-2026-2',
    ubicacion: 'lima',
    nivel: 'pregrado',
    tags: ['interno', 'proyecto', 'fondo'],
  },
  {
    id: 'opp-013',
    titulo: 'Pasantía Schmitt-Trigger Labs — Diseño Analógico',
    organizacion: 'Schmitt-Trigger Labs',
    categoria: 'pasantia',
    descripcion_corta:
      'Practicantes para diseño de bloques analógicos en CMOS 65nm. Trabajo remoto con sesiones presenciales.',
    fecha_publicacion: '2026-04-22',
    fecha_limite: '2026-04-30',
    url_aplicacion: 'https://schmitt-trigger.example/careers',
    ubicacion: 'remoto',
    nivel: 'pregrado',
    tags: ['analog', 'cmos', 'practicante'],
  },
  {
    id: 'opp-015',
    titulo: 'Hardware Engineer I — Microchip Lima',
    organizacion: 'Microchip Technology',
    categoria: 'empleo',
    descripcion_corta:
      'Posición full-time para egresados de Electrónica/Telecom. Diseño de firmware y bring-up de tarjetas con MCUs PIC32.',
    fecha_publicacion: '2026-04-18',
    fecha_limite: '2026-06-15',
    url_aplicacion: 'https://www.microchip.com/careers',
    ubicacion: 'lima',
    nivel: 'pregrado',
    tags: ['firmware', 'mcu', 'full-time'],
  },
  {
    id: 'opp-016',
    titulo: 'FPGA Engineer — Synopsys (Remote LATAM)',
    organizacion: 'Synopsys',
    categoria: 'empleo',
    descripcion_corta:
      'Diseño RTL en SystemVerilog para IP de procesadores. Remoto desde LATAM. Inglés técnico requerido.',
    fecha_publicacion: '2026-04-25',
    fecha_limite: '2026-07-10',
    url_aplicacion: 'https://www.synopsys.com/careers',
    ubicacion: 'remoto',
    nivel: 'abierto',
    tags: ['fpga', 'rtl', 'systemverilog', 'full-time'],
  },
  {
    id: 'opp-014',
    titulo: 'DAC Young Fellows Program 2026',
    organizacion: 'Design Automation Conference',
    categoria: 'concurso',
    descripcion_corta:
      'Programa para jóvenes investigadores en EDA y diseño de chips. Cubre registro y mentoría.',
    fecha_publicacion: '2026-03-01',
    fecha_limite: '2026-04-15',
    url_aplicacion: 'https://www.dac.com/young-fellows',
    ubicacion: 'internacional',
    nivel: 'posgrado',
    tags: ['eda', 'mentoria', 'dac'],
  },
]

// ── Helpers ────────────────────────────────────────────────

const MS_PER_DAY = 1000 * 60 * 60 * 24

export function getDiasRestantes(fechaLimite: string): number {
  const limite = new Date(fechaLimite + 'T23:59:59').getTime()
  if (Number.isNaN(limite)) return -Infinity
  const hoy = Date.now()
  return Math.ceil((limite - hoy) / MS_PER_DAY)
}

export const CATEGORIAS_ALL: (Categoria | 'todas')[] = [
  'todas',
  'empleo',
  'pasantia',
  'beca',
  'concurso',
  'cfp',
  'voluntariado',
  'convocatoria',
]

export const UBICACIONES_ALL: Ubicacion[] = ['lima', 'peru', 'remoto', 'internacional']
export const NIVELES_ALL: Nivel[] = ['pregrado', 'posgrado', 'abierto']

// Record<Ubicacion, string> forces TS to break the build if a new Ubicacion
// is added to the type without a label, mirroring CATEGORY_LABELS.
export const UBICACION_LABEL: Record<Ubicacion, string> = {
  lima: 'Lima',
  peru: 'Perú',
  remoto: 'Remoto',
  internacional: 'Internacional',
}

export type Urgencia = 'safe' | 'warning' | 'urgent' | 'expired'

export function getUrgencia(dias: number): Urgencia {
  if (dias < 0) return 'expired'
  if (dias < 3) return 'urgent'
  if (dias <= 14) return 'warning'
  return 'safe'
}

export function getOportunidadesAbiertas(): Oportunidad[] {
  return oportunidades
    .filter((o) => getDiasRestantes(o.fecha_limite) >= 0)
    .sort(
      (a, b) =>
        +new Date(a.fecha_limite) - +new Date(b.fecha_limite)
    )
}

export function getOportunidadesCerradas(): Oportunidad[] {
  return oportunidades
    .filter((o) => getDiasRestantes(o.fecha_limite) < 0)
    .sort(
      (a, b) =>
        +new Date(b.fecha_limite) - +new Date(a.fecha_limite)
    )
}

export function getFeaturedOportunidad(): Oportunidad | undefined {
  const abiertas = getOportunidadesAbiertas()
  const manual = abiertas.find((o) => o.featured)
  return manual ?? abiertas[0]
}

export interface OportunidadFilters {
  categoria?: Categoria | 'todas'
  ubicaciones?: Ubicacion[]
  niveles?: Nivel[]
}

export function filterOportunidades(
  list: Oportunidad[],
  filters: OportunidadFilters
): Oportunidad[] {
  const predicates: ((o: Oportunidad) => boolean)[] = []
  if (filters.categoria && filters.categoria !== 'todas') {
    const c = filters.categoria
    predicates.push((o) => o.categoria === c)
  }
  if (filters.ubicaciones && filters.ubicaciones.length > 0) {
    const ubs = filters.ubicaciones
    predicates.push((o) => ubs.includes(o.ubicacion))
  }
  if (filters.niveles && filters.niveles.length > 0) {
    const nvs = filters.niveles
    predicates.push((o) => nvs.includes(o.nivel))
  }
  return filterCollection(list, { predicates })
}

export interface FacetCounts {
  categoria: Record<Categoria | 'todas', number>
  ubicacion: Record<Ubicacion, number>
  nivel: Record<Nivel, number>
}

// Categoria counts respect ubicacion+nivel cross-filters; ubicacion/nivel are
// raw source counts so toggling one facet does not zero out its own siblings.
export function computeFacetCounts(
  source: Oportunidad[],
  active: { ubicaciones: Ubicacion[]; niveles: Nivel[] }
): FacetCounts {
  const categoria = {} as Record<Categoria | 'todas', number>
  for (const c of CATEGORIAS_ALL) {
    categoria[c] = filterOportunidades(source, {
      categoria: c,
      ubicaciones: active.ubicaciones,
      niveles: active.niveles,
    }).length
  }
  const ubicacion = {} as Record<Ubicacion, number>
  for (const u of UBICACIONES_ALL) {
    ubicacion[u] = source.filter((o) => o.ubicacion === u).length
  }
  const nivel = {} as Record<Nivel, number>
  for (const n of NIVELES_ALL) {
    nivel[n] = source.filter((o) => o.nivel === n).length
  }
  return { categoria, ubicacion, nivel }
}
