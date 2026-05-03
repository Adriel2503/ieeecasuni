'use client'
import type { ReactNode } from 'react'

interface BaseProps {
  label: ReactNode
  name: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  error?: string
  required?: boolean
  type?: string
  placeholder?: string
  multiline?: boolean
  rows?: number
  hint?: ReactNode
}

function FieldLabel({ children, required }: { children: ReactNode; required?: boolean }) {
  return (
    <label className="block text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">
      {children}
      {required && <span className="text-secondary-400 ml-1">*</span>}
    </label>
  )
}

export function TextField({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  required,
  type = 'text',
  placeholder,
  multiline,
  rows = 6,
  hint,
}: BaseProps) {
  const showError = !!error
  const inputClass = `
    w-full px-3 py-2.5 text-sm rounded-[4px] border bg-white
    focus:outline-none focus:ring-2 focus:ring-primary-100 transition-colors
    ${showError
      ? 'border-secondary-400 focus:border-secondary-400'
      : 'border-gray-200 focus:border-primary-400'}
  `
  const textareaClass = `
    w-full px-3 py-2.5 text-sm rounded-[4px] border bg-white resize-none
    focus:outline-none focus:ring-2 focus:ring-primary-100 transition-colors
    ${showError
      ? 'border-secondary-400 focus:border-secondary-400'
      : 'border-gray-200 focus:border-primary-400'}
  `

  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={rows}
          className={textareaClass}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
      {(showError || hint) && (
        <div className="flex items-center justify-between mt-1">
          {showError ? (
            <p className="text-xs text-secondary-400">{error}</p>
          ) : (
            <span />
          )}
          {hint}
        </div>
      )}
    </div>
  )
}
