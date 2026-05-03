'use client'

interface SearchInputProps {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  width?: string
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'Buscar...',
  width = 'w-full lg:w-48',
}: SearchInputProps) {
  return (
    <div className={`relative shrink-0 ${width}`}>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full pl-9 pr-3 py-2 text-sm rounded-[4px] border border-gray-200
          focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100
          transition-colors
        "
      />
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  )
}
