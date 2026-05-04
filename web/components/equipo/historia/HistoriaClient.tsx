'use client'

import { useEffect, useState } from 'react'
import {
  getJuntaPorAnio,
  listAniosGestiones,
} from '@/lib/data/equipo'
import { AnniversaryHero } from './AnniversaryHero'
import { TimelineHitos } from './TimelineHitos'
import { GestionSelector } from './GestionSelector'
import { JuntaHistoricaView } from './JuntaHistoricaView'
import { ContributeBlock } from './ContributeBlock'

const DEFAULT_ANIO = 2025

function parseHashAnio(): number | null {
  if (typeof window === 'undefined') return null
  const raw = window.location.hash.replace('#', '').trim()
  const n = Number(raw)
  if (!Number.isFinite(n)) return null
  return listAniosGestiones().includes(n) ? n : null
}

export function HistoriaClient() {
  const [anioSeleccionado, setAnioSeleccionado] = useState<number>(DEFAULT_ANIO)

  // Sync inicial desde URL hash
  useEffect(() => {
    const fromHash = parseHashAnio()
    if (fromHash !== null) setAnioSeleccionado(fromHash)

    const onHashChange = () => {
      const next = parseHashAnio()
      if (next !== null) setAnioSeleccionado(next)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleChange = (anio: number) => {
    setAnioSeleccionado(anio)
    if (typeof window !== 'undefined') {
      // Replace para no llenar history con cada click
      const url = `${window.location.pathname}#${anio}`
      window.history.replaceState(null, '', url)
    }
  }

  const junta = getJuntaPorAnio(anioSeleccionado)

  return (
    <>
      <AnniversaryHero />
      <TimelineHitos />
      <GestionSelector
        anioSeleccionado={anioSeleccionado}
        onChange={handleChange}
      />
      {junta ? (
        <JuntaHistoricaView junta={junta} />
      ) : (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-sm text-gray-500">No hay datos para este año.</p>
        </section>
      )}
      <ContributeBlock />
    </>
  )
}
