'use client'

import { useEffect, useState } from 'react'

interface Props {
  codigo: string
}

export function CertificadoQR({ codigo }: Props) {
  const [dataUrl, setDataUrl] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const url =
      typeof window !== 'undefined'
        ? `${window.location.origin}/certificados/${codigo}`
        : `/certificados/${codigo}`

    import('qrcode')
      .then((mod) =>
        mod.toDataURL(url, {
          width: 240,
          margin: 1,
          color: { dark: '#006C42', light: '#FFFFFF' },
        })
      )
      .then((d) => {
        if (!cancelled) setDataUrl(d)
      })
      .catch(() => {
        if (!cancelled) setDataUrl(null)
      })

    return () => {
      cancelled = true
    }
  }, [codigo])

  return (
    <div className="w-[120px] h-[120px] border border-primary-100 bg-white flex items-center justify-center">
      {dataUrl ? (
        <img src={dataUrl} alt={`QR de ${codigo}`} className="w-full h-full" />
      ) : (
        <div className="w-full h-full animate-shimmer" aria-hidden="true" />
      )}
    </div>
  )
}
