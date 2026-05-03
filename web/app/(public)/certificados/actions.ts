'use server'

import { redirect } from 'next/navigation'
import { findCertificado } from '@/lib/data/certificados'

export async function verifyCertificado(
  codigo: string
): Promise<{ ok: false; error: string } | never> {
  const cert = findCertificado(codigo)
  if (!cert) {
    return { ok: false, error: `Código ${codigo} no encontrado.` }
  }
  redirect(`/certificados/${cert.codigo}`)
}
