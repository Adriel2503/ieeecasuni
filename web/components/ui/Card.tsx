import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  featured?: boolean
}

export function Card({
  featured = false,
  className = '',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`
        bg-white border border-gray-200 rounded-lg
        shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]
        hover:shadow-[0_4px_12px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.06)]
        hover:-translate-y-0.5 transition-all duration-200
        ${featured ? 'border-t-[3px] border-t-primary-400' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
