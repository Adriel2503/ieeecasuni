export type Rol = 'asistente' | 'ponente' | 'organizador' | 'voluntario'

export interface Certificado {
  codigo: string
  nombre: string
  evento: string
  fecha_emision: string
  fecha_evento_inicio: string
  fecha_evento_fin: string
  horas_academicas: number
  rol: Rol
  ubicacion: string
  hash?: string
}

export const certificados: Certificado[] = [
  {
    codigo: 'CAS-2026-A8F3K2',
    nombre: 'ARIEL FRIAS ROJAS',
    evento: 'Workshop de Diseño Analógico CMOS',
    fecha_emision: '2026-03-15',
    fecha_evento_inicio: '2026-03-12',
    fecha_evento_fin: '2026-03-14',
    horas_academicas: 15,
    rol: 'asistente',
    ubicacion: 'Lima, Perú',
    hash: 'a8f3k2c1d9e4b7a2f1c8d3e6',
  },
  {
    codigo: 'CAS-2026-B2K9P1',
    nombre: 'MARIA FERNANDA QUISPE TORRES',
    evento: 'FPGA Bootcamp: De RTL a Síntesis',
    fecha_emision: '2026-04-22',
    fecha_evento_inicio: '2026-04-15',
    fecha_evento_fin: '2026-04-21',
    horas_academicas: 24,
    rol: 'ponente',
    ubicacion: 'Lima, Perú',
    hash: 'b2k9p1f4d7e8a3c6b9d2e5f8',
  },
  {
    codigo: 'CAS-2026-C7M4X8',
    nombre: 'DIEGO ALONSO RAMIREZ VARGAS',
    evento: 'Charla IEEE: Tendencias en Computación Neuromórfica',
    fecha_emision: '2026-05-08',
    fecha_evento_inicio: '2026-05-07',
    fecha_evento_fin: '2026-05-07',
    horas_academicas: 4,
    rol: 'asistente',
    ubicacion: 'Remoto',
    hash: 'c7m4x8e2a9b3d6f1c4e7a8b5',
  },
  {
    codigo: 'CAS-2026-D5N1Q9',
    nombre: 'LUCIA ANDREA HUAMAN MENDOZA',
    evento: 'CASathon 2026: Hackathon de Sistemas Embebidos',
    fecha_emision: '2026-06-12',
    fecha_evento_inicio: '2026-06-10',
    fecha_evento_fin: '2026-06-12',
    horas_academicas: 30,
    rol: 'organizador',
    ubicacion: 'Lima, Perú',
    hash: 'd5n1q9b6c4e8a2f7d3e1c9b4',
  },
  {
    codigo: 'CAS-2026-E3R7Z6',
    nombre: 'JOAQUIN SEBASTIAN PAREDES LEON',
    evento: 'Programa de Outreach: STEM en Colegios de Lima',
    fecha_emision: '2026-07-30',
    fecha_evento_inicio: '2026-07-01',
    fecha_evento_fin: '2026-07-28',
    horas_academicas: 20,
    rol: 'voluntario',
    ubicacion: 'Lima, Perú',
    hash: 'e3r7z6a1f5b8c2d4e9a6b3c7',
  },
]

export function findCertificado(codigo: string): Certificado | undefined {
  if (!codigo?.trim()) return undefined
  const norm = codigo.trim().toUpperCase()
  return certificados.find((c) => c.codigo === norm)
}

export function listEjemplos(n: number = 3): Certificado[] {
  return certificados.slice(0, n)
}
