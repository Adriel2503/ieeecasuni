'use client'
import type { ReactNode } from 'react'

interface FilterChipProps {
  active: boolean
  onClick: () => void
  children: ReactNode
  removable?: boolean
}

export function FilterChip({ active, onClick, children, removable }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`
        shrink-0 px-3 py-1.5 text-xs font-semibold rounded-[4px] border transition-colors
        ${active
          ? 'bg-primary-400 text-white border-primary-400'
          : 'bg-white text-gray-600 border-gray-200 hover:bg-primary-100 hover:border-primary-400 hover:text-primary-600'}
      `}
    >
      {children}
      {active && removable && <span className="ml-1.5 opacity-70">×</span>}
    </button>
  )
}
