import type { Metadata } from 'next'
import { CertificadoView } from '@/components/certificados/CertificadoView'
import { CertificadoNotFound } from '@/components/certificados/CertificadoNotFound'
import { certificados, findCertificado } from '@/lib/data/certificados'

interface PageProps {
  params: Promise<{ codigo: string }>
}

export function generateStaticParams(): { codigo: string }[] {
  return certificados.map((c) => ({ codigo: c.codigo }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { codigo } = await params
  const cert = findCertificado(codigo)
  if (!cert) {
    return {
      title: `Certificado ${codigo} no encontrado · IEEE CAS UNI`,
      description: `El código ${codigo} no corresponde a ningún certificado emitido.`,
    }
  }
  return {
    title: `Certificado ${cert.codigo} · ${cert.nombre} · IEEE CAS UNI`,
    description: `Verificación pública del certificado ${cert.codigo} otorgado a ${cert.nombre} por su participación en ${cert.evento}.`,
  }
}

export default async function CertificadoDetailPage({ params }: PageProps) {
  const { codigo } = await params
  const cert = findCertificado(codigo)

  if (!cert) {
    return <CertificadoNotFound codigo={codigo.toUpperCase()} />
  }

  return <CertificadoView certificado={cert} />
}
