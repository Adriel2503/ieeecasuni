interface DateBlockProps {
  date: string // ISO string
  past?: boolean
}

const meses = [
  'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN',
  'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC',
]

export function DateBlock({ date, past = false }: DateBlockProps) {
  const d = new Date(date)
  const dia = d.getDate()
  const mes = meses[d.getMonth()]
  const anio = d.getFullYear()

  return (
    <div
      className={`
        relative shrink-0 w-16 h-20 rounded-md border bg-white
        flex flex-col items-center justify-center
        ${past ? 'border-gray-200 opacity-60' : 'border-gray-200'}
      `}
    >
      {/* Notch verde superior */}
      <div
        className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-md ${
          past ? 'bg-gray-300' : 'bg-primary-400'
        }`}
      />
      {/* Día */}
      <span
        className={`text-2xl font-bold leading-none mt-1 ${
          past ? 'text-gray-500' : 'text-gray-900'
        }`}
      >
        {dia}
      </span>
      {/* Mes */}
      <span
        className={`text-[10px] font-bold tracking-widest mt-1 ${
          past ? 'text-gray-400' : 'text-primary-400'
        }`}
      >
        {mes}
      </span>
      {/* Año */}
      <span className="text-[9px] text-gray-400 mt-0.5">{anio}</span>
    </div>
  )
}
