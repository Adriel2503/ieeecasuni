import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-400 text-white hover:bg-primary-500 border border-transparent',
  secondary:
    'bg-white text-primary-400 border border-primary-400 hover:bg-primary-100',
  danger:
    'bg-secondary-400 text-white hover:bg-secondary-600 border border-transparent',
  ghost:
    'bg-transparent text-gray-700 hover:text-primary-400 border border-transparent',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-[13px]',
  md: 'px-5 py-2.5 text-[15px]',
  lg: 'px-7 py-3.5 text-base',
}

export function buttonStyles({
  variant = 'primary',
  size = 'md',
}: { variant?: ButtonVariant; size?: ButtonSize } = {}): string {
  return `inline-flex items-center justify-center font-semibold rounded-[4px] transition-colors ${variantClasses[variant]} ${sizeClasses[size]}`
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({
  variant,
  size,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonStyles({ variant, size })} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
