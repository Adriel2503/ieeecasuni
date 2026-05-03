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
