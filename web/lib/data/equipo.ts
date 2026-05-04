export type Especialidad = 'hardware' | 'software' | 'ml' | 'embedded' | 'rf'
export type Comite = 'directiva' | 'tecnico' | 'eventos' | 'comunicaciones' | 'academico'
export type Cargo =
  | 'Presidenta' | 'Presidente'
  | 'Vicepresidente' | 'Vicepresidenta'
  | 'Secretaria' | 'Secretario'
  | 'Tesorera' | 'Tesorero'
  | 'Coordinador' | 'Coordinadora'
  | 'Miembro'

export interface Miembro {
  id: string
  nombre: string
  cargo: Cargo
  comite: Comite
  especialidad: Especialidad
  carrera: string
  anio_ingreso: number
  iniciales: string
  quote?: string
  email?: string
  linkedin?: string
  github?: string
}

export interface PresidenteAlumni {
  anio: string
  nombre: string
  proyecto_destacado?: string
}

// ── Junta Directiva 2026 ───────────────────────────────────

export const directiva: Miembro[] = [
  {
    id: 'mem-001',
    nombre: 'Ana García',
    cargo: 'Presidenta',
    comite: 'directiva',
    especialidad: 'hardware',
    carrera: 'Ing. Electrónica · 5to año',
    anio_ingreso: 2023,
    iniciales: 'AG',
    quote: 'Construir hardware que importe — desde Lima al mundo.',
    email: 'ana.garcia@uni.edu.pe',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 'mem-002',
    nombre: 'Carlos Ríos',
    cargo: 'Vicepresidente',
    comite: 'directiva',
    especialidad: 'hardware',
    carrera: 'Ing. Eléctrica · 4to año',
    anio_ingreso: 2024,
    iniciales: 'CR',
    quote: 'VHDL y café son lo único que necesito.',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 'mem-003',
    nombre: 'María López',
    cargo: 'Secretaria',
    comite: 'directiva',
    especialidad: 'software',
    carrera: 'Ing. de Sistemas · 4to año',
    anio_ingreso: 2024,
    iniciales: 'ML',
    quote: 'Documentación es amor. Cambia mi opinión.',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'mem-004',
    nombre: 'José Paredes',
    cargo: 'Tesorero',
    comite: 'directiva',
    especialidad: 'embedded',
    carrera: 'Ing. Electrónica · 5to año',
    anio_ingreso: 2023,
    iniciales: 'JP',
    quote: 'STM32 + un Excel bien hecho mueven el mundo.',
    email: 'jose.paredes@uni.edu.pe',
  },
]

// ── Comités ───────────────────────────────────────────────

export const comites: Miembro[] = [
  // Comité Técnico
  {
    id: 'mem-005',
    nombre: 'Lucía Vega',
    cargo: 'Coordinadora',
    comite: 'tecnico',
    especialidad: 'rf',
    carrera: 'Ing. Electrónica · 5to año',
    anio_ingreso: 2023,
    iniciales: 'LV',
    github: 'https://github.com',
  },
  {
    id: 'mem-006',
    nombre: 'Diego Salinas',
    cargo: 'Miembro',
    comite: 'tecnico',
    especialidad: 'ml',
    carrera: 'Ing. de Sistemas · 4to año',
    anio_ingreso: 2024,
    iniciales: 'DS',
    github: 'https://github.com',
  },
  {
    id: 'mem-007',
    nombre: 'Renato Ávila',
    cargo: 'Miembro',
    comite: 'tecnico',
    especialidad: 'embedded',
    carrera: 'Ing. Electrónica · 3er año',
    anio_ingreso: 2025,
    iniciales: 'RA',
  },
  {
    id: 'mem-008',
    nombre: 'Sofía Quiroz',
    cargo: 'Miembro',
    comite: 'tecnico',
    especialidad: 'hardware',
    carrera: 'Ing. Eléctrica · 3er año',
    anio_ingreso: 2025,
    iniciales: 'SQ',
  },

  // Comité Eventos
  {
    id: 'mem-009',
    nombre: 'Marcos Tello',
    cargo: 'Coordinador',
    comite: 'eventos',
    especialidad: 'software',
    carrera: 'Ing. de Sistemas · 4to año',
    anio_ingreso: 2024,
    iniciales: 'MT',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'mem-010',
    nombre: 'Patricia Huamán',
    cargo: 'Miembro',
    comite: 'eventos',
    especialidad: 'software',
    carrera: 'Ing. Industrial · 3er año',
    anio_ingreso: 2025,
    iniciales: 'PH',
  },
  {
    id: 'mem-011',
    nombre: 'Andrés Vargas',
    cargo: 'Miembro',
    comite: 'eventos',
    especialidad: 'embedded',
    carrera: 'Ing. Electrónica · 2do año',
    anio_ingreso: 2026,
    iniciales: 'AV',
  },

  // Comité Comunicaciones
  {
    id: 'mem-012',
    nombre: 'Camila Rojas',
    cargo: 'Coordinadora',
    comite: 'comunicaciones',
    especialidad: 'software',
    carrera: 'Ing. de Sistemas · 3er año',
    anio_ingreso: 2025,
    iniciales: 'CR',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 'mem-013',
    nombre: 'Juan Castillo',
    cargo: 'Miembro',
    comite: 'comunicaciones',
    especialidad: 'software',
    carrera: 'Ing. Mecatrónica · 3er año',
    anio_ingreso: 2025,
    iniciales: 'JC',
  },

  // Comité Académico
  {
    id: 'mem-014',
    nombre: 'Elena Fernández',
    cargo: 'Coordinadora',
    comite: 'academico',
    especialidad: 'ml',
    carrera: 'Ing. de Sistemas · 5to año',
    anio_ingreso: 2023,
    iniciales: 'EF',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'mem-015',
    nombre: 'Tomás Bernal',
    cargo: 'Miembro',
    comite: 'academico',
    especialidad: 'rf',
    carrera: 'Ing. Electrónica · 4to año',
    anio_ingreso: 2024,
    iniciales: 'TB',
  },
]

// ── Alumni: Presidentes anteriores ────────────────────────

export const alumni: PresidenteAlumni[] = [
  { anio: '2024-2025', nombre: 'Lucía Vega',     proyecto_destacado: 'Generador RF educativo' },
  { anio: '2023-2024', nombre: 'Roberto Mendoza', proyecto_destacado: 'IEEE Day 2023 UNI' },
  { anio: '2022-2023', nombre: 'Karina Soto',    proyecto_destacado: 'Reactivación post-COVID' },
]

// ── Helpers ────────────────────────────────────────────────

export function getDirectiva(): Miembro[] {
  return directiva
}

export function getMiembrosPorComite(comite: Comite): Miembro[] {
  return comites.filter((m) => m.comite === comite)
}

export function getTotalMiembros(): number {
  return directiva.length + comites.length
}

// ── Hitos del capítulo ────────────────────────────────────

export interface Hito {
  anio: number
  titulo: string
  descripcion?: string
  destacado?: boolean
}

export const hitos: Hito[] = [
  {
    anio: 2008,
    titulo: 'Fundación del capítulo',
    descripcion:
      '7 estudiantes de la FIEE — Universidad Nacional de Ingeniería — firman la carta de afiliación a IEEE Circuits and Systems Society.',
    destacado: true,
  },
  {
    anio: 2010,
    titulo: 'Primera asistencia internacional a ISCAS',
    descripcion:
      '4 estudiantes viajan a la International Symposium on Circuits and Systems. Primera proyección global del capítulo.',
  },
  {
    anio: 2014,
    titulo: 'Primer paper publicado en IEEE Xplore',
    descripcion:
      'Trabajo en filtros analógicos co-autorado por miembros del capítulo y un asesor de la FIEE.',
  },
  {
    anio: 2018,
    titulo: '10 años del capítulo',
    descripcion:
      'Una década formando ingenieros en circuitos y sistemas. Celebración con ex-presidentes y asesores fundadores.',
    destacado: true,
  },
  {
    anio: 2020,
    titulo: 'Pandemia: capítulo virtualizado',
    descripcion:
      'Workshops 100% online. Mayor alcance regional al abrirse a estudiantes fuera de Lima.',
  },
  {
    anio: 2023,
    titulo: 'Reactivación presencial',
    descripcion: 'Vuelta a laboratorios y meetups en campus. 50+ miembros activos.',
  },
  {
    anio: 2026,
    titulo: '18 años de IEEE CAS UNI',
    descripcion: 'Año actual. Mayoría de edad del capítulo.',
    destacado: true,
  },
]

// ── Junta Directiva HISTÓRICA ─────────────────────────────

export interface MiembroHistorico {
  nombre: string
  cargo: Cargo
  iniciales: string
}

export interface JuntaHistorica {
  anio: number
  periodo: string
  miembros: MiembroHistorico[]
  hitos_anio?: string[]
}

const PLACEHOLDER: MiembroHistorico[] = [
  { nombre: 'Información no registrada', cargo: 'Presidente', iniciales: '--' },
  { nombre: 'Información no registrada', cargo: 'Vicepresidente', iniciales: '--' },
  { nombre: 'Información no registrada', cargo: 'Secretario', iniciales: '--' },
  { nombre: 'Información no registrada', cargo: 'Tesorero', iniciales: '--' },
]

export const juntasPasadas: JuntaHistorica[] = [
  {
    anio: 2025,
    periodo: 'mar 2025 – mar 2026',
    miembros: [
      { nombre: 'Lucía Vega', cargo: 'Presidenta', iniciales: 'LV' },
      { nombre: 'Diego Salinas', cargo: 'Vicepresidente', iniciales: 'DS' },
      { nombre: 'Camila Rojas', cargo: 'Secretaria', iniciales: 'CR' },
      { nombre: 'Tomás Bernal', cargo: 'Tesorero', iniciales: 'TB' },
    ],
    hitos_anio: ['Generador RF educativo', '12 workshops realizados'],
  },
  {
    anio: 2024,
    periodo: 'mar 2024 – mar 2025',
    miembros: [
      { nombre: 'Lucía Vega', cargo: 'Presidenta', iniciales: 'LV' },
      { nombre: 'Marcos Tello', cargo: 'Vicepresidente', iniciales: 'MT' },
      { nombre: 'Elena Fernández', cargo: 'Secretaria', iniciales: 'EF' },
      { nombre: 'Renato Ávila', cargo: 'Tesorero', iniciales: 'RA' },
    ],
    hitos_anio: ['Hackathon CAS UNI', 'Convenio con FIEE para uso de laboratorios'],
  },
  {
    anio: 2023,
    periodo: 'mar 2023 – mar 2024',
    miembros: [
      { nombre: 'Roberto Mendoza', cargo: 'Presidente', iniciales: 'RM' },
      { nombre: 'Patricia Huamán', cargo: 'Vicepresidenta', iniciales: 'PH' },
      { nombre: 'Juan Castillo', cargo: 'Secretario', iniciales: 'JC' },
      { nombre: 'Andrés Vargas', cargo: 'Tesorero', iniciales: 'AV' },
    ],
    hitos_anio: ['IEEE Day 2023 UNI', 'Reactivación de membresías'],
  },
  {
    anio: 2022,
    periodo: 'mar 2022 – mar 2023',
    miembros: [
      { nombre: 'Karina Soto', cargo: 'Presidenta', iniciales: 'KS' },
      { nombre: 'Información no registrada', cargo: 'Vicepresidente', iniciales: '--' },
      { nombre: 'Información no registrada', cargo: 'Secretario', iniciales: '--' },
      { nombre: 'Información no registrada', cargo: 'Tesorero', iniciales: '--' },
    ],
    hitos_anio: ['Reactivación post-COVID'],
  },
  {
    anio: 2021,
    periodo: 'mar 2021 – mar 2022',
    miembros: [
      { nombre: 'Información no registrada', cargo: 'Presidente', iniciales: '--' },
      { nombre: 'Información no registrada', cargo: 'Vicepresidente', iniciales: '--' },
      { nombre: 'Información no registrada', cargo: 'Secretario', iniciales: '--' },
      { nombre: 'Información no registrada', cargo: 'Tesorero', iniciales: '--' },
    ],
    hitos_anio: ['Operación 100% remota durante pandemia'],
  },
  {
    anio: 2020,
    periodo: 'mar 2020 – mar 2021',
    miembros: PLACEHOLDER,
    hitos_anio: ['Virtualización del capítulo'],
  },
  { anio: 2019, periodo: 'mar 2019 – mar 2020', miembros: PLACEHOLDER },
  {
    anio: 2018,
    periodo: 'mar 2018 – mar 2019',
    miembros: PLACEHOLDER,
    hitos_anio: ['Celebración de 10 años del capítulo'],
  },
  { anio: 2017, periodo: 'mar 2017 – mar 2018', miembros: PLACEHOLDER },
  { anio: 2016, periodo: 'mar 2016 – mar 2017', miembros: PLACEHOLDER },
  { anio: 2015, periodo: 'mar 2015 – mar 2016', miembros: PLACEHOLDER },
  {
    anio: 2014,
    periodo: 'mar 2014 – mar 2015',
    miembros: PLACEHOLDER,
    hitos_anio: ['Primer paper en IEEE Xplore'],
  },
  { anio: 2013, periodo: 'mar 2013 – mar 2014', miembros: PLACEHOLDER },
  { anio: 2012, periodo: 'mar 2012 – mar 2013', miembros: PLACEHOLDER },
  { anio: 2011, periodo: 'mar 2011 – mar 2012', miembros: PLACEHOLDER },
  {
    anio: 2010,
    periodo: 'mar 2010 – mar 2011',
    miembros: PLACEHOLDER,
    hitos_anio: ['Primera asistencia a ISCAS'],
  },
  { anio: 2009, periodo: 'mar 2009 – mar 2010', miembros: PLACEHOLDER },
  {
    anio: 2008,
    periodo: 'mar 2008 – mar 2009',
    miembros: PLACEHOLDER,
    hitos_anio: ['Fundación del capítulo IEEE CAS UNI'],
  },
]

export function getJuntaPorAnio(anio: number): JuntaHistorica | undefined {
  return juntasPasadas.find((j) => j.anio === anio)
}

export function listAniosGestiones(): number[] {
  return juntasPasadas.map((j) => j.anio).sort((a, b) => b - a)
}

export function getHitosOrdenados(): Hito[] {
  return [...hitos].sort((a, b) => a.anio - b.anio)
}

export const comiteInfo: Record<Comite, { titulo: string; descripcion: string; icono: string }> = {
  directiva: {
    titulo: 'Junta Directiva',
    descripcion: 'Liderazgo del capítulo',
    icono: '★',
  },
  tecnico: {
    titulo: 'Comité Técnico',
    descripcion: 'Workshops, laboratorios y proyectos hardware/software',
    icono: '⚡',
  },
  eventos: {
    titulo: 'Comité de Eventos',
    descripcion: 'Organización de hackathones, conferencias y meetups',
    icono: '🎯',
  },
  comunicaciones: {
    titulo: 'Comité de Comunicaciones',
    descripcion: 'Redes sociales, web y diseño del capítulo',
    icono: '📡',
  },
  academico: {
    titulo: 'Comité Académico',
    descripcion: 'Investigación y publicaciones IEEE',
    icono: '📚',
  },
}
