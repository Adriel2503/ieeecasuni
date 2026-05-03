import Link from 'next/link'
import type { Certificado } from '@/lib/data/certificados'
import { CertificadoStamp } from './CertificadoStamp'
import { CertificadoQR } from './CertificadoQR'
import { MetadataGrid } from './MetadataGrid'
import { ShareButton } from './ShareButton'
import { buttonStyles } from '@/components/ui/Button'

interface Props {
  certificado: Certificado
}

const ROL_LABEL: Record<Certificado['rol'], string> = {
  asistente: 'Asistente',
  ponente: 'Ponente',
  organizador: 'Organizador(a)',
  voluntario: 'Voluntario(a)',
}

function formatFechas(inicio: string, fin: string) {
  if (inicio === fin) return inicio
  return `${inicio} — ${fin}`
}

export function CertificadoView({ certificado }: Props) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {/* Top: stamp + valid badge */}
      <div className="flex items-start gap-6 mb-8">
        <CertificadoStamp />
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-2">
            <span className="text-primary-500 font-bold">✓</span>
            <span className="text-sm font-semibold text-primary-600">
              Certificado válido
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Emitido por IEEE CAS UNI Student Branch
          </p>
        </div>
      </div>

      {/* Document */}
      <div className="border-2 border-primary-400 bg-white p-2">
        <div
          className="border border-primary-100 px-6 py-12 sm:px-12 sm:py-16 text-center"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          <img
            src="/brand/logo-horizontal.svg"
            alt="IEEE CAS UNI"
            className="h-12 w-auto mx-auto mb-10"
          />

          <p className="text-xs sm:text-sm font-sans font-bold tracking-[0.3em] text-primary-500 uppercase">
            Certificado de Participación
          </p>
          <div className="w-24 h-px bg-primary-400 mx-auto mt-3 mb-10" />

          <p className="text-sm text-gray-500 italic">Otorgado a</p>
          <p className="mt-3 text-2xl sm:text-3xl font-serif tracking-wider text-gray-900">
            {certificado.nombre}
          </p>

          <p className="mt-8 text-sm text-gray-500 italic">
            por su participación en
          </p>
          <p className="mt-2 text-lg sm:text-xl text-gray-900">
            {certificado.evento}
          </p>

          <div className="mt-8 space-y-1 text-sm text-gray-700">
            <p>
              {certificado.horas_academicas} horas académicas — Rol:{' '}
              {ROL_LABEL[certificado.rol]}
            </p>
            <p className="tabular-nums">
              {formatFechas(
                certificado.fecha_evento_inicio,
                certificado.fecha_evento_fin
              )}
            </p>
            <p>{certificado.ubicacion}</p>
          </div>

          {/* QR + ID block */}
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 text-left">
            <CertificadoQR codigo={certificado.codigo} />
            <div className="font-sans text-xs text-gray-600 sm:text-right">
              <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1">
                // ID
              </p>
              <p className="font-mono text-sm text-gray-900 mb-3">
                {certificado.codigo}
              </p>
              <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1">
                // VERIFICA EN
              </p>
              <p className="font-mono">
                ieeecasuni.org/certificados/{certificado.codigo}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            disabled
            title="Disponible próximamente"
            className={`${buttonStyles({ variant: 'primary', size: 'md' })} disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            Descargar PDF
          </button>
          <ShareButton />
        </div>
        <Link
          href="/certificados"
          className="text-sm font-semibold text-primary-400 hover:text-primary-500"
        >
          Cómo verificar otros →
        </Link>
      </div>

      <div className="mt-12">
        <MetadataGrid certificado={certificado} />
      </div>
    </section>
  )
}
