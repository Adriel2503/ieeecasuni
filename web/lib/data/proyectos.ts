export type TechCategoria = 'hardware' | 'software' | 'ml' | 'embedded' | 'rf'
export type ProyectoEstado = 'completado' | 'en_curso' | 'publicado'
export type ProyectoSize = 'sm' | 'md-h' | 'md-v' | 'lg'

export interface TechStack {
  nombre: string
  categoria: TechCategoria
}

export interface Proyecto {
  id: string
  titulo: string
  descripcion_corta: string
  descripcion_larga: string
  tags: string[]
  tech_stack: TechStack[]
  github_url?: string
  paper_url?: string
  estado: ProyectoEstado
  anio: number
  autores: string[]
  featured?: boolean
  size?: ProyectoSize
  // Hint para fondo procedural
  bgVariant?: 0 | 1 | 2 | 3
  bgColor?: string
}

export const proyectos: Proyecto[] = [
  {
    id: 'prj-001',
    titulo: 'Sistema de monitoreo cardíaco con FPGA',
    descripcion_corta:
      'Procesamiento en tiempo real de señales ECG con detección de arritmias en una FPGA Xilinx Spartan-7.',
    descripcion_larga:
      'Implementación de un sistema embebido para monitoreo cardíaco continuo. Procesa señales ECG en tiempo real con un filtro adaptativo en VHDL y detecta arritmias mediante un clasificador ligero. Publicado en IEEE Xplore como parte del IEEE LATS 2025.',
    tags: ['Embedded', 'FPGA', 'Biomédica', 'DSP'],
    tech_stack: [
      { nombre: 'VHDL', categoria: 'hardware' },
      { nombre: 'Spartan-7', categoria: 'hardware' },
      { nombre: 'MATLAB', categoria: 'software' },
      { nombre: 'Python', categoria: 'software' },
    ],
    github_url: 'https://github.com',
    paper_url: 'https://ieeexplore.ieee.org',
    estado: 'publicado',
    anio: 2025,
    autores: ['Ana García', 'Carlos Ríos', 'Diego Salinas'],
    featured: true,
    bgVariant: 1,
    bgColor: '#008752',
  },
  {
    id: 'prj-002',
    titulo: 'Brazo robótico controlado por gestos',
    descripcion_corta:
      'Brazo de 5 GDL controlado por reconocimiento de gestos con MediaPipe y un modelo de clasificación.',
    descripcion_larga:
      'Brazo robótico de 5 grados de libertad controlado en tiempo real mediante gestos de mano. Combina visión computacional (MediaPipe) con un clasificador ligero entrenado en PyTorch corriendo en una Raspberry Pi 5.',
    tags: ['ML', 'Robótica', 'Embedded'],
    tech_stack: [
      { nombre: 'PyTorch', categoria: 'ml' },
      { nombre: 'Raspberry Pi', categoria: 'embedded' },
      { nombre: 'OpenCV', categoria: 'ml' },
      { nombre: 'C++', categoria: 'software' },
    ],
    github_url: 'https://github.com',
    estado: 'en_curso',
    anio: 2026,
    autores: ['María López', 'José Paredes'],
    size: 'lg',
    bgVariant: 2,
    bgColor: '#E26909',
  },
  {
    id: 'prj-003',
    titulo: 'Generador de señales de RF educativo',
    descripcion_corta:
      'Generador DDS de bajo costo para laboratorios de RF, controlado por Arduino y display OLED.',
    descripcion_larga:
      'Diseño de PCB de un generador de señales por síntesis directa digital (DDS) usando AD9833. Incluye amplificador clase AB y atenuador escalonado. Pensado para reemplazar generadores comerciales en laboratorios universitarios.',
    tags: ['Hardware', 'RF', 'PCB'],
    tech_stack: [
      { nombre: 'KiCad', categoria: 'hardware' },
      { nombre: 'AD9833', categoria: 'rf' },
      { nombre: 'Arduino', categoria: 'embedded' },
    ],
    github_url: 'https://github.com',
    estado: 'completado',
    anio: 2025,
    autores: ['Carlos Ríos', 'Lucía Vega'],
    size: 'md-h',
    bgVariant: 3,
    bgColor: '#008752',
  },
  {
    id: 'prj-004',
    titulo: 'Detección de fallas en PCB con visión computacional',
    descripcion_corta:
      'Modelo YOLOv8 fine-tuned para detectar fallas comunes (cold joints, missing components, shorts) en imágenes de PCBs.',
    descripcion_larga:
      'Pipeline de inspección automática de PCBs ensambladas. Modelo YOLOv8 fine-tuned con un dataset propio de 4,200 imágenes. Demuestra un 94% de precisión en detección de cold joints, componentes faltantes y cortocircuitos visibles.',
    tags: ['ML', 'Visión computacional'],
    tech_stack: [
      { nombre: 'YOLOv8', categoria: 'ml' },
      { nombre: 'PyTorch', categoria: 'ml' },
      { nombre: 'Python', categoria: 'software' },
    ],
    github_url: 'https://github.com',
    estado: 'completado',
    anio: 2025,
    autores: ['Ana García', 'Diego Salinas'],
    size: 'md-h',
    bgVariant: 0,
    bgColor: '#E26909',
  },
  {
    id: 'prj-005',
    titulo: 'Estación meteorológica IoT UNI',
    descripcion_corta:
      'Estaciones distribuidas en el campus UNI midiendo temperatura, humedad, presión y calidad del aire.',
    descripcion_larga:
      'Red de 6 estaciones meteorológicas autoalimentadas con paneles solares, distribuidas por el campus UNI. Datos enviados via LoRa a un gateway central y visualizados en un dashboard público.',
    tags: ['IoT', 'Embedded', 'LoRa'],
    tech_stack: [
      { nombre: 'STM32', categoria: 'embedded' },
      { nombre: 'LoRa', categoria: 'rf' },
      { nombre: 'Next.js', categoria: 'software' },
    ],
    github_url: 'https://github.com',
    estado: 'en_curso',
    anio: 2026,
    autores: ['José Paredes', 'María López'],
    size: 'sm',
    bgVariant: 0,
    bgColor: '#1BC7F6',
  },
  {
    id: 'prj-006',
    titulo: 'Procesador RISC-V didáctico en VHDL',
    descripcion_corta:
      'Implementación pedagógica de un procesador RISC-V de 32 bits en VHDL, con pipeline de 5 etapas.',
    descripcion_larga:
      'Procesador RISC-V RV32I implementado en VHDL para fines didácticos. Pipeline de 5 etapas con forwarding y branch prediction simple. Sintetizable en FPGA Cyclone-IV.',
    tags: ['Hardware', 'FPGA', 'CPU'],
    tech_stack: [
      { nombre: 'VHDL', categoria: 'hardware' },
      { nombre: 'Cyclone-IV', categoria: 'hardware' },
    ],
    github_url: 'https://github.com',
    estado: 'completado',
    anio: 2024,
    autores: ['Carlos Ríos'],
    size: 'sm',
    bgVariant: 3,
    bgColor: '#008752',
  },
  {
    id: 'prj-007',
    titulo: 'Auriculares con cancelación activa de ruido',
    descripcion_corta:
      'Prototipo de ANC analógico-digital híbrido con DSP TI C6748.',
    descripcion_larga:
      'Sistema de cancelación activa de ruido (ANC) implementado con un DSP TI C6748. Combina un lazo analógico de bajo retardo con compensación digital adaptativa.',
    tags: ['DSP', 'Audio', 'Embedded'],
    tech_stack: [
      { nombre: 'C6748 DSP', categoria: 'embedded' },
      { nombre: 'C', categoria: 'software' },
    ],
    estado: 'completado',
    anio: 2025,
    autores: ['Lucía Vega', 'Diego Salinas'],
    size: 'sm',
    bgVariant: 1,
    bgColor: '#FFCA54',
  },
  {
    id: 'prj-008',
    titulo: 'Dashboard de consumo eléctrico del campus',
    descripcion_corta:
      'Visualización en tiempo real del consumo eléctrico de los pabellones de la UNI.',
    descripcion_larga:
      'Dashboard web que consume datos de medidores inteligentes instalados en los pabellones de Eléctrica y Mecánica. Permite identificar picos de consumo y áreas de oportunidad para eficiencia energética.',
    tags: ['Software', 'IoT', 'Dashboard'],
    tech_stack: [
      { nombre: 'Next.js', categoria: 'software' },
      { nombre: 'TimescaleDB', categoria: 'software' },
      { nombre: 'Modbus', categoria: 'embedded' },
    ],
    github_url: 'https://github.com',
    estado: 'en_curso',
    anio: 2026,
    autores: ['Ana García', 'José Paredes'],
    size: 'md-v',
    bgVariant: 2,
    bgColor: '#1BC7F6',
  },
  {
    id: 'prj-009',
    titulo: 'UNI Lab Bot — Robot seguidor de líneas',
    descripcion_corta:
      'Robot autónomo seguidor de líneas con control PID, ganador del IEEE LATAM Bot 2025.',
    descripcion_larga:
      'Robot seguidor de líneas con array de 8 sensores IR y control PID auto-ajustable. Ganador de la categoría junior del IEEE LATAM Bot 2025.',
    tags: ['Robótica', 'Embedded', 'Control'],
    tech_stack: [
      { nombre: 'STM32', categoria: 'embedded' },
      { nombre: 'C', categoria: 'software' },
    ],
    github_url: 'https://github.com',
    estado: 'completado',
    anio: 2025,
    autores: ['Carlos Ríos', 'María López', 'José Paredes'],
    size: 'sm',
    bgVariant: 3,
    bgColor: '#FFCA54',
  },
]

// ── Helpers ────────────────────────────────────────────────

export function getFeaturedProyecto(): Proyecto | undefined {
  return proyectos.find((p) => p.featured)
}

export function getNonFeaturedProyectos(): Proyecto[] {
  return proyectos.filter((p) => !p.featured)
}

export function getAllTags(): string[] {
  const set = new Set<string>()
  proyectos.forEach((p) => p.tags.forEach((t) => set.add(t)))
  return Array.from(set).sort()
}

import { filterCollection } from '@/lib/utils/filter'

export function filterByTags(list: Proyecto[], activeTags: string[]): Proyecto[] {
  return filterCollection(list, {
    predicates:
      activeTags.length === 0
        ? []
        : [(p) => activeTags.every((t) => p.tags.includes(t))],
  })
}
