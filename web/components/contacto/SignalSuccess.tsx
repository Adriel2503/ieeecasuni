import { colors } from '@/lib/tokens'

interface SignalSuccessProps {
  onReset: () => void
}

export function SignalSuccess({ onReset }: SignalSuccessProps) {
  return (
    <div className="relative bg-white border border-primary-100 rounded-lg p-10 text-center overflow-hidden">
      {/* Background subtle wave */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.08 }}
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 0 100 Q 50 40, 100 100 T 200 100 T 300 100 T 400 100"
          stroke={colors.primary[400]} strokeWidth="2" fill="none"
        />
      </svg>

      <div className="relative">
        {/* Checkmark inside circle */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-5">
          <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Mensaje recibido
        </h3>
        <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed mb-6">
          Si tu cliente de correo se abrió, completa el envío desde ahí.
          Te respondemos en 1-2 días hábiles.
        </p>

        <button
          type="button"
          onClick={onReset}
          className="text-sm font-semibold text-primary-400 hover:underline"
        >
          ← Enviar otro mensaje
        </button>
      </div>
    </div>
  )
}
