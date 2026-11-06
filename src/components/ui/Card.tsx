import type { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
  className?: string
  style?: Record<string, string>
}

export const Card = ({ children, className = '', style }: CardProps) => (
  <div
    className={`rounded-xl overflow-hidden border ${className}`}
    style={{ ...style, boxShadow: '0 4px 16px rgba(0,0,0,0.25)' }}
  >
    {children}
  </div>
)

export default Card