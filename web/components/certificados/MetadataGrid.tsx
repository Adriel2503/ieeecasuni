import type { Certificado } from '@/lib/data/certificados'

const HASH_PREVIEW_LEN = 8

interface Props {
  certificado: Certificado
}

function Cell({
  label,
  children,
  title,
}: {
  label: string
  children: React.ReactNode
  title?: string
}) {
  return (
    <div>
      <p className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase mb-1">
        // {label}
      </p>
      <p className="text-sm text-gray-900 tabular-nums" title={title}>
        {children}
      </p>
    </div>
  )
}

export function MetadataGrid({ certificado }: Props) {
  const hash = certificado.hash ?? '—'
  const hashShort = hash.length > HASH_PREVIEW_LEN ? `${hash.slice(0, HASH_PREVIEW_LEN)}…` : hash

  return (
    <div className="border-t border-gray-200 pt-8">
      <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-5">
        // METADATA
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <Cell label="EMITIDO">{certificado.fecha_emision}</Cell>
        <Cell label="ROL">{certificado.rol}</Cell>
        <Cell label="VIGENCIA">Permanente</Cell>
        <Cell label="HORAS ACAD.">{certificado.horas_academicas}</Cell>
        <Cell label="UBICACIÓN">{certificado.ubicacion}</Cell>
        <Cell label="EVENTO INICIO">{certificado.fecha_evento_inicio}</Cell>
        <Cell label="EVENTO FIN">{certificado.fecha_evento_fin}</Cell>
        <Cell label="HASH" title={hash}>
          <span className="font-mono">{hashShort}</span>
        </Cell>
      </div>
    </div>
  )
}
