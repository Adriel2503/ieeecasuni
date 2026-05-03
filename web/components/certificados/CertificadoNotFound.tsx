import Link from 'next/link'
import { buttonStyles } from '@/components/ui/Button'

interface Props {
  codigo: string
}

export function CertificadoNotFound({ codigo }: Props) {
  const mailSubject = encodeURIComponent(`Reporte: certificado ${codigo} no encontrado`)
  const mailBody = encodeURIComponent(
    `Hola IEEE CAS UNI,\n\nIntenté verificar el certificado con código ${codigo} pero el sistema indica que no existe. Adjunto detalles:\n\n— Código: ${codigo}\n— Contexto:\n\nGracias.`
  )

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-100 border border-secondary-300 mb-6">
        <span className="text-secondary-600 font-bold">✗</span>
        <span className="text-sm font-semibold text-secondary-700">
          Certificado no encontrado
        </span>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        El código no corresponde a ningún certificado emitido
      </h1>

      <p className="text-gray-600 mb-2">
        El código{' '}
        <span className="font-mono text-gray-900 bg-gray-100 px-2 py-0.5 rounded">
          {codigo}
        </span>{' '}
        no aparece en el registro público de IEEE CAS UNI.
      </p>
      <p className="text-gray-600 mb-8">
        Si crees que esto es un error, escríbenos y revisaremos manualmente.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/certificados"
          className={buttonStyles({ variant: 'primary', size: 'md' })}
        >
          ← Volver a buscar
        </Link>
        <a
          href={`mailto:ieee.cas@uni.edu.pe?subject=${mailSubject}&body=${mailBody}`}
          className={buttonStyles({ variant: 'secondary', size: 'md' })}
        >
          Reportar problema
        </a>
      </div>
    </section>
  )
}
