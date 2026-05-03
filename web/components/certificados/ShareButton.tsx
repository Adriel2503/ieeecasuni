'use client'

import { useState } from 'react'
import { buttonStyles } from '@/components/ui/Button'

export function ShareButton() {
  const [copied, setCopied] = useState(false)

  async function handleClick() {
    if (typeof window === 'undefined') return
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={buttonStyles({ variant: 'secondary', size: 'md' })}
    >
      {copied ? 'URL copiada' : 'Compartir →'}
    </button>
  )
}
