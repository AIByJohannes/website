import type { CSSProperties, MouseEvent, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps {
  variant?: ButtonVariant
  disabled?: boolean
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit'
  className?: string
  theme: { blue: string; linkHover: string; bg: string; bg2: string; border: string; hoverBg: string; fg: string; heading: string }
}

export const Button = ({
  variant = 'primary',
  children,
  onClick,
  type = 'button',
  disabled,
  className = '',
  theme,
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`blog-button px-8 py-3 text-base rounded-md transition-colors ${variant === 'primary' ? 'font-semibold' : 'font-medium'} ${className}`}
    style={{
      '--button-bg': theme.bg2,
      '--button-fg': theme.heading,
      '--button-border': theme.border,
      '--button-hover-bg': theme.bg,
      '--button-hover-fg': theme.linkHover,
    } as CSSProperties}
  >
    {children}
  </button>
)

export default Button