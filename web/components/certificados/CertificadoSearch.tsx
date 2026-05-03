'use client'

import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import { buttonStyles } from '@/components/ui/Button'
import { findCertificado, listEjemplos } from '@/lib/data/certificados'

const CODE_REGEX = /^CAS-\d{4}-[A-Z0-9]{6}$/

function formatCode(raw: string): string {
  // strip everything except alphanumerics, uppercase
  const clean = raw.toUpperCase().replace(/[^A-Z0-9]/g, '')
  // CAS YYYY XXXXXX → max 3+4+6 = 13 chars
  const a = clean.slice(0, 3)
  const b = clean.slice(3, 7)
  const c = clean.slice(7, 13)
  let out = a
  if (clean.length > 3) out += '-' + b
  if (clean.length > 7) out += '-' + c
  return out
}

export function CertificadoSearch() {
  const router = useRouter()
  const [value, setValue] = useState('CAS-')
  const [error, setError] = useState<string | null>(null)
  const [shake, setShake] = useState(false)
  const [loading, setLoading] = useState(false)

  const isValid = CODE_REGEX.test(value)
  const ejemplos = listEjemplos(3)

  function handleChange(raw: string) {
    setError(null)
    if (raw.length === 0) {
      setValue('')
      return
    }
    setValue(formatCode(raw))
  }

  function attempt(codigo: string) {
    setLoading(true)
    setError(null)
    const found = findCertificado(codigo)
    if (found) {
      router.push(`/certificados/${codigo}`)
    } else {
      setLoading(false)
      setError(`Código ${codigo} no encontrado.`)
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isValid) return
    attempt(value)
  }

  function pickExample(codigo: string) {
    setValue(codigo)
    setError(null)
    attempt(codigo)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-[6px] p-8 shadow-sm">
        <label
          htmlFor="cert-code"
          className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-3"
        >
          // INGRESA EL CÓDIGO
        </label>

        <div className={`flex flex-col sm:flex-row gap-3 ${shake ? 'animate-shake' : ''}`}>
          <input
            id="cert-code"
            type="text"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="CAS-2026-XXXXXX"
            spellCheck={false}
            autoComplete="off"
            inputMode="text"
            maxLength={15}
            className={`flex-1 font-mono text-lg tracking-wider px-4 py-3 border rounded-[4px] focus:outline-none focus:ring-2 transition-colors ${
              error
                ? 'border-secondary-400 focus:ring-secondary-400/30'
                : 'border-gray-300 focus:border-primary-400 focus:ring-primary-400/30'
            }`}
          />
          <button
            type="submit"
            disabled={!isValid || loading}
            className={`${buttonStyles({ variant: 'primary', size: 'lg' })} disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            {loading ? 'verificando...' : 'Verificar'}
          </button>
        </div>

        {error ? (
          <p className="mt-3 text-sm text-secondary-400 font-mono">// {error}</p>
        ) : (
          <p className="mt-3 text-xs text-gray-500">
            Encuéntralo en tu PDF o escanea el QR del mismo certificado.
          </p>
        )}
      </form>

      <div className="mt-8">
        <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-3">
          // EJEMPLOS
        </p>
        <div className="flex flex-wrap gap-2">
          {ejemplos.map((c) => (
            <button
              key={c.codigo}
              onClick={() => pickExample(c.codigo)}
              className="font-mono text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-[4px] text-gray-700 hover:border-primary-400 hover:text-primary-400 transition-colors"
            >
              {c.codigo}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
