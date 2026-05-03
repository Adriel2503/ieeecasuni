import type { ReactNode } from 'react'

export function FilterShell({ children }: { children: ReactNode }) {
  return (
    <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row lg:items-center gap-4">
        {children}
      </div>
    </div>
  )
}
