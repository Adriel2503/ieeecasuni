export type RecursoCategoria =
  | 'ieee_access'
  | 'software'
  | 'tutoriales'
  | 'materiales'
  | 'plantillas'

export type RecursoTipo = 'link' | 'pdf' | 'video' | 'repo' | 'template'
export type RecursoTier = 'esencial' | 'recomendado' | 'avanzado'

export interface Recurso {
  id: string
  titulo: string
  descripcion: string
  tipo: RecursoTipo
  tier: RecursoTier
  categoria: RecursoCategoria
  url: string
  proveedor?: string
  idioma?: 'es' | 'en'
  gratuito?: boolean
}

export const recursos: Recurso[] = [
  // ── IEEE Access ────────────────────────────────────────
  {
    id: 'rec-001',
    titulo: 'IEEE Xplore Digital Library',
    descripcion:
      'Acceso a millones de papers, conferencias y estándares IEEE. Indispensable para tesis y proyectos.',
    tipo: 'link', tier: 'esencial', categoria: 'ieee_access',
    url: 'https://ieeexplore.ieee.org',
    proveedor: 'IEEE', idioma: 'en', gratuito: false,
  },
  {
    id: 'rec-002',
    titulo: 'IEEE Spectrum',
    descripcion:
      'Revista de divulgación tecnológica de IEEE. Tendencias, entrevistas y análisis técnico de calidad.',
    tipo: 'link', tier: 'recomendado', categoria: 'ieee_access',
    url: 'https://spectrum.ieee.org',
    proveedor: 'IEEE', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-003',
    titulo: 'IEEE CASS — Sociedad madre',
    descripcion:
      'Sitio oficial de la IEEE Circuits and Systems Society. Conferencias emblema, llamadas a papers y publicaciones.',
    tipo: 'link', tier: 'esencial', categoria: 'ieee_access',
    url: 'https://ieee-cas.org',
    proveedor: 'IEEE CASS', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-004',
    titulo: 'Membresía estudiantil IEEE',
    descripcion:
      'Cómo registrarte como estudiante IEEE — beneficios, costo (~USD 32/año) y proceso de afiliación.',
    tipo: 'link', tier: 'esencial', categoria: 'ieee_access',
    url: 'https://www.ieee.org/membership/students/index.html',
    proveedor: 'IEEE', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-005',
    titulo: 'IEEE Author Center',
    descripcion:
      'Guía oficial para preparar y publicar papers en IEEE — formato, ética y proceso de submission.',
    tipo: 'link', tier: 'avanzado', categoria: 'ieee_access',
    url: 'https://ieeeauthorcenter.ieee.org',
    proveedor: 'IEEE', idioma: 'en', gratuito: true,
  },

  // ── Software ───────────────────────────────────────────
  {
    id: 'rec-006',
    titulo: 'KiCad EDA',
    descripcion:
      'Suite open-source completa para diseño de PCBs. Es lo que usamos en los workshops del capítulo.',
    tipo: 'link', tier: 'esencial', categoria: 'software',
    url: 'https://www.kicad.org/',
    proveedor: 'KiCad', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-007',
    titulo: 'AMD Vivado / ML Edition',
    descripcion:
      'Entorno oficial para diseño FPGA en familias 7-Series, UltraScale y Versal. Edición ML gratuita.',
    tipo: 'link', tier: 'recomendado', categoria: 'software',
    url: 'https://www.xilinx.com/products/design-tools/vivado.html',
    proveedor: 'AMD/Xilinx', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-008',
    titulo: 'Intel Quartus Prime Lite',
    descripcion:
      'Alternativa de Intel para FPGAs Cyclone y MAX. Versión Lite gratuita y suficiente para uso académico.',
    tipo: 'link', tier: 'recomendado', categoria: 'software',
    url: 'https://www.intel.com/content/www/us/en/products/details/fpga/development-tools/quartus-prime.html',
    proveedor: 'Intel', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-009',
    titulo: 'MATLAB Student License',
    descripcion:
      'Licencia académica de MATLAB para estudiantes universitarios. Pregunta en la oficina del capítulo cómo gestionarla.',
    tipo: 'link', tier: 'recomendado', categoria: 'software',
    url: 'https://www.mathworks.com/academia/students.html',
    proveedor: 'MathWorks', idioma: 'en', gratuito: false,
  },
  {
    id: 'rec-010',
    titulo: 'LTspice',
    descripcion:
      'Simulador SPICE gratuito de Analog Devices. Estándar para análisis de circuitos analógicos.',
    tipo: 'link', tier: 'esencial', categoria: 'software',
    url: 'https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html',
    proveedor: 'Analog Devices', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-011',
    titulo: 'GNU Octave',
    descripcion:
      'Alternativa libre a MATLAB con sintaxis 95% compatible. Útil cuando no tienes acceso a la licencia.',
    tipo: 'link', tier: 'recomendado', categoria: 'software',
    url: 'https://octave.org/',
    proveedor: 'GNU', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-012',
    titulo: 'STM32CubeIDE',
    descripcion:
      'IDE oficial para programación de microcontroladores STM32 — usado en nuestros talleres de embebido.',
    tipo: 'link', tier: 'recomendado', categoria: 'software',
    url: 'https://www.st.com/en/development-tools/stm32cubeide.html',
    proveedor: 'STMicroelectronics', idioma: 'en', gratuito: true,
  },

  // ── Tutoriales ─────────────────────────────────────────
  {
    id: 'rec-013',
    titulo: 'MIT OCW — Circuits and Electronics',
    descripcion:
      'Curso completo del MIT (6.002) en abierto. Fundamentos de circuitos con problemas resueltos.',
    tipo: 'link', tier: 'esencial', categoria: 'tutoriales',
    url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/',
    proveedor: 'MIT OCW', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-014',
    titulo: 'NPTEL — Digital Signal Processing',
    descripcion:
      'Curso indio de DSP de alta calidad académica. Particularmente fuerte en aspectos matemáticos.',
    tipo: 'video', tier: 'recomendado', categoria: 'tutoriales',
    url: 'https://nptel.ac.in/courses/108/104/108104100/',
    proveedor: 'NPTEL', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-015',
    titulo: 'Ben Eater — Build a CPU from scratch',
    descripcion:
      'Serie en YouTube construyendo un procesador 8 bits con TTL. Indispensable para entender arquitectura.',
    tipo: 'video', tier: 'esencial', categoria: 'tutoriales',
    url: 'https://www.youtube.com/c/BenEater',
    proveedor: 'YouTube', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-016',
    titulo: 'Phil\'s Lab — PCB Design',
    descripcion:
      'Canal de YouTube con tutoriales avanzados de diseño PCB en KiCad y Altium. Mucho contenido sobre integridad de señal.',
    tipo: 'video', tier: 'recomendado', categoria: 'tutoriales',
    url: 'https://www.youtube.com/c/PhilsLab',
    proveedor: 'YouTube', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-017',
    titulo: 'Sedra-Smith — Microelectronic Circuits',
    descripcion:
      'El libro de cabecera para circuitos electrónicos analógicos. Edición 8va. La Biblioteca FIEE tiene copias.',
    tipo: 'pdf', tier: 'esencial', categoria: 'tutoriales',
    url: 'https://global.oup.com/academic/product/microelectronic-circuits-9780190853464',
    proveedor: 'Oxford', idioma: 'en', gratuito: false,
  },
  {
    id: 'rec-018',
    titulo: 'Razavi — Design of Analog CMOS Integrated Circuits',
    descripcion:
      'Texto avanzado de circuitos CMOS analógicos. Referencia obligada para diseño de IC.',
    tipo: 'pdf', tier: 'avanzado', categoria: 'tutoriales',
    url: 'https://www.mheducation.com/highered/product/design-analog-cmos-integrated-circuits-razavi/M9780072524932.html',
    proveedor: 'McGraw Hill', idioma: 'en', gratuito: false,
  },
  {
    id: 'rec-019',
    titulo: 'edX — VLSI CAD Logic to Layout',
    descripcion:
      'Curso de UIUC sobre flujo de diseño VLSI completo. Excelente para entender el ecosistema EDA.',
    tipo: 'link', tier: 'avanzado', categoria: 'tutoriales',
    url: 'https://www.edx.org/learn/computer-programming/the-university-of-illinois-at-urbana-champaign-vlsi-cad-part-i-logic',
    proveedor: 'edX · UIUC', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-020',
    titulo: 'Coursera — DSP Specialization (EPFL)',
    descripcion:
      'Especialización de 4 cursos en DSP por EPFL. Bien estructurado, enfoque práctico con Python.',
    tipo: 'link', tier: 'recomendado', categoria: 'tutoriales',
    url: 'https://www.coursera.org/specializations/digital-signal-processing',
    proveedor: 'Coursera · EPFL', idioma: 'en', gratuito: true,
  },

  // ── Materiales del capítulo ───────────────────────────
  {
    id: 'rec-021',
    titulo: 'Workshop FPGA 2025 — Slides',
    descripcion:
      'Slides del workshop de introducción a FPGA con Spartan-7 dictado en abril 2025.',
    tipo: 'pdf', tier: 'recomendado', categoria: 'materiales',
    url: '#',
    proveedor: 'IEEE CAS UNI', idioma: 'es', gratuito: true,
  },
  {
    id: 'rec-022',
    titulo: 'Workshop STM32 2025 — Material práctico',
    descripcion:
      'PDF con ejercicios y código de ejemplo del workshop de microcontroladores ARM dictado en septiembre 2025.',
    tipo: 'pdf', tier: 'recomendado', categoria: 'materiales',
    url: '#',
    proveedor: 'IEEE CAS UNI', idioma: 'es', gratuito: true,
  },
  {
    id: 'rec-023',
    titulo: 'Workshop PCB Design — Repositorio',
    descripcion:
      'Proyectos KiCad y guía paso a paso del workshop de diseño PCB de abril 2026.',
    tipo: 'repo', tier: 'recomendado', categoria: 'materiales',
    url: 'https://github.com',
    proveedor: 'IEEE CAS UNI', idioma: 'es', gratuito: true,
  },
  {
    id: 'rec-024',
    titulo: 'Guía: Cómo registrarse como miembro IEEE',
    descripcion:
      'Tutorial paso a paso (en español) para crear tu cuenta IEEE y acceder a Xplore desde la UNI.',
    tipo: 'pdf', tier: 'esencial', categoria: 'materiales',
    url: '#',
    proveedor: 'IEEE CAS UNI', idioma: 'es', gratuito: true,
  },
  {
    id: 'rec-025',
    titulo: 'Charla: Mujeres en Ingeniería Electrónica',
    descripcion:
      'Grabación del webinar de marzo 2026 con ingenieras peruanas trabajando en empresas internacionales.',
    tipo: 'video', tier: 'recomendado', categoria: 'materiales',
    url: '#',
    proveedor: 'IEEE CAS UNI', idioma: 'es', gratuito: true,
  },

  // ── Plantillas ─────────────────────────────────────────
  {
    id: 'rec-026',
    titulo: 'Plantilla LaTeX — IEEE Conference',
    descripcion:
      'Template oficial IEEE para papers de conferencia. Compila en Overleaf sin configuración.',
    tipo: 'template', tier: 'esencial', categoria: 'plantillas',
    url: 'https://www.ieee.org/conferences/publishing/templates.html',
    proveedor: 'IEEE', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-027',
    titulo: 'Plantilla LaTeX — IEEE Transactions',
    descripcion:
      'Template para journals de IEEE Transactions. Más estricta que la de conferencia, ideal para tesis.',
    tipo: 'template', tier: 'recomendado', categoria: 'plantillas',
    url: 'https://www.ieee.org/conferences/publishing/templates.html',
    proveedor: 'IEEE', idioma: 'en', gratuito: true,
  },
  {
    id: 'rec-028',
    titulo: 'Slides Beamer — Estilo IEEE CAS UNI',
    descripcion:
      'Plantilla de presentación en Beamer con identidad visual del capítulo. Para charlas técnicas.',
    tipo: 'template', tier: 'recomendado', categoria: 'plantillas',
    url: '#',
    proveedor: 'IEEE CAS UNI', idioma: 'es', gratuito: true,
  },
]

// ── Helpers ────────────────────────────────────────────────

export const categoriaInfo: Record<RecursoCategoria, { titulo: string; descripcion: string; icono: string }> = {
  ieee_access: {
    titulo: 'Acceso IEEE',
    descripcion: 'Recursos oficiales de la red IEEE: Xplore, Spectrum, membresía y más.',
    icono: '◆',
  },
  software: {
    titulo: 'Software y herramientas',
    descripcion: 'Suites de diseño, simuladores y entornos de desarrollo recomendados.',
    icono: '⚙',
  },
  tutoriales: {
    titulo: 'Cursos y tutoriales',
    descripcion: 'Material online curado para aprender circuitos, sistemas y DSP.',
    icono: '▣',
  },
  materiales: {
    titulo: 'Materiales del capítulo',
    descripcion: 'Slides, código y grabaciones de los workshops y eventos pasados de IEEE CAS UNI.',
    icono: '★',
  },
  plantillas: {
    titulo: 'Plantillas',
    descripcion: 'Templates LaTeX y Beamer para papers, tesis y presentaciones técnicas.',
    icono: '⊟',
  },
}

export function getCategorias(): RecursoCategoria[] {
  return ['ieee_access', 'software', 'tutoriales', 'materiales', 'plantillas']
}

import { filterCollection } from '@/lib/utils/filter'

export function filterRecursos(
  list: Recurso[],
  categoria: RecursoCategoria | 'todos',
  query: string,
  soloGratuitos: boolean
): Recurso[] {
  const predicates: ((r: Recurso) => boolean)[] = []
  if (categoria !== 'todos') predicates.push((r) => r.categoria === categoria)
  if (soloGratuitos) predicates.push((r) => !!r.gratuito)
  return filterCollection(list, {
    searchFields: ['titulo', 'descripcion', 'proveedor'],
    query,
    predicates,
  })
}
