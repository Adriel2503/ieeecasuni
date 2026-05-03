'use client'

import { useState } from 'react'
import { buttonStyles } from '@/components/ui/Button'

export function ShareButton() {
  const [state, setState] = useState<'idle' | 'copied' | 'error'>('idle')

  async function handleClick() {
    if (typeof window === 'undefined') return
    try {
      await navigator.clipboard.writeText(window.location.href)
      setState('copied')
      setTimeout(() => setState('idle'), 2000)
    } catch {
      setState('error')
      setTimeout(() => setState('idle'), 3000)
    }
  }

  const label =
    state === 'copied' ? 'URL copiada' :
    state === 'error'  ? 'No se pudo copiar' :
    'Compartir →'

  return (
    <button
      type="button"
      onClick={handleClick}
      className={buttonStyles({ variant: 'secondary', size: 'md' })}
    >
      {label}
    </button>
  )
}
