import { PageHeader } from '@/components/ui/PageHeader'
import { CertificadoSearch } from '@/components/certificados/CertificadoSearch'

export const metadata = {
  title: 'Validación de certificados · IEEE CAS UNI',
  description:
    'Verifica la autenticidad de un certificado emitido por IEEE CAS UNI Student Branch ingresando su código.',
}

function StepIcon({ n }: { n: number }) {
  return (
    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-primary-400 text-primary-500 font-bold text-sm tabular-nums">
      {n}
    </div>
  )
}

export default function CertificadosPage() {
  return (
    <>
      <PageHeader
        eyebrow="// VERIFICACIÓN"
        title="Validación de certificados"
        description="Verifica la autenticidad de un certificado emitido por IEEE CAS UNI Student Branch ingresando su código."
        pattern="grid"
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <CertificadoSearch />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-6">
          // CÓMO FUNCIONA
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-[6px] p-6">
            <StepIcon n={1} />
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              El asistente recibe el certificado por email tras participar en un evento del capítulo.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-[6px] p-6">
            <StepIcon n={2} />
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              Cualquier persona puede verificarlo aquí ingresando el código o escaneando el QR.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-[6px] p-6">
            <StepIcon n={3} />
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              La URL del certificado es pública, permanente y compartible con reclutadores o IEEE Region 9.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
