import type { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
  className?: string
  style?: Record<string, string>
}

export const Card = ({ children, className = '', style }: CardProps) => (
  <div
    className={`rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border ${className}`}
    style={style}
  >
    {children}
  </div>
)

export default Card