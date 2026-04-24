import type { MouseEvent, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps {
  variant?: ButtonVariant
  disabled?: boolean
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit'
  className?: string
  theme: { blue: string; linkHover: string; bg: string; border: string; hoverBg: string; fg: string }
}

export const Button = ({
  variant = 'primary',
  children,
  onClick,
  type = 'button',
  disabled,
  className = '',
  theme,
}: ButtonProps) => {
  const base =
    'px-8 py-3 text-base font-medium rounded-md shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  if (variant === 'primary') {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${base} border border-transparent ${className}`}
        style={{ backgroundColor: theme.blue, color: '#ffffff' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = theme.linkHover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = theme.blue
        }}
      >
        {children}
      </button>
    )
  }

  if (variant === 'secondary') {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${base} border ${className}`}
        style={{
          borderColor: theme.blue,
          color: theme.blue,
          backgroundColor: theme.bg,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = theme.hoverBg
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = theme.bg
        }}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} border border-transparent ${className}`}
      style={{ backgroundColor: theme.blue, color: '#ffffff' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = theme.linkHover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = theme.blue
      }}
    >
      {children}
    </button>
  )
}

export default Button