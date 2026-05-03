'use client'
import { useEffect } from 'react'

export function DevtoolsCredit() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const greeting = `
   ██╗███████╗███████╗███████╗     ██████╗ █████╗ ███████╗
   ██║██╔════╝██╔════╝██╔════╝    ██╔════╝██╔══██╗██╔════╝
   ██║█████╗  █████╗  █████╗      ██║     ███████║███████╗
   ██║██╔══╝  ██╔══╝  ██╔══╝      ██║     ██╔══██║╚════██║
   ██║███████╗███████╗███████╗    ╚██████╗██║  ██║███████║
   ╚═╝╚══════╝╚══════╝╚══════╝     ╚═════╝╚═╝  ╚═╝╚══════╝
                Universidad Nacional de Ingeniería
`

    console.log(
      `%c${greeting}`,
      'color: #008752; font-family: monospace; font-size: 11px; line-height: 1.2;',
    )

    console.log(
      '%c Built by Ariel Amado Frias Rojas ',
      'background: #008752; color: white; padding: 4px 10px; font-weight: bold; font-size: 13px; border-radius: 2px;',
    )

    console.log(
      '%c Ex-Chair IEEE CAS UNI 2025  ·  ariel.frias.r@uni.pe ',
      'color: #006C42; font-weight: 600; font-size: 12px; padding: 4px 0;',
    )

    console.log(
      '%c // ¿curioseando el código? escríbenos: ieee.cas@uni.edu.pe',
      'color: #888; font-style: italic; font-size: 11px;',
    )
  }, [])

  return null
}
